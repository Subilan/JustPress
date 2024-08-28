const markdownit = require("markdown-it");
const fs = require('fs/promises')
const fm = require('front-matter');
const getTitle = require('get-title-markdown');

function countWordsCJK(text) {
    return (text.match(/[\u00ff-\uffff]|\S+/g) || []).length;
}

function render(content) {
    const md = markdownit({
        html: true,
        linkify: true,
        breaks: true,
        langPrefix: 'language-'
    })
        .use(require('markdown-it-external-links'), {
            externalTarget: '_blank',
            externalRel: 'noopener noreferrer'
        })
        .use(require('markdown-it-highlight-lines'))
        .use(require('markdown-it-prism'), {
            defaultLanguage: 'plaintext'
        })
        .use(require('markdown-it-sup'))
        .use(require('markdown-it-sup'))
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-mathjax3'), {})
        .use(require('markdown-it-toc-done-right'), {
            slugify: s => encodeURI(s)
        });

    const match1 = Array.from(content.matchAll(/:::\s?tip([\S\s]*?):::/g));
    const match2 = Array.from(content.matchAll(/:::\s?warning([\S\s]*?):::/g));
    const match3 = Array.from(content.matchAll(/:::\s?danger([\S\s]*?):::/g));
    const targetMatch = ['tip', 'warning', 'danger'];

    [match1, match2, match3].forEach((x, i) => {
        x.forEach(y => {
            content = content.replace(y[0], `<div class="notice ${targetMatch[i]}">${md.render(y[1])}</div>`);
        });
    });

    return md.render(content);
}

(async () => {
    const start = new Date();

    // get script dir
    const dataDir = __dirname;

    const pageContents = [];
    const postContents = [];

    for (let type of ['pages', 'posts']) {
        const filenames = await fs.readdir(`${dataDir}/${type}`);
        for (let filename of filenames) {
            const targetPath = `${dataDir}/${type}/${filename}`;
            const fileStat = await fs.stat(targetPath);
            if (!fileStat.isFile()) continue;
            const fileContent = await fs.readFile(targetPath);

            const nameFull = filename;
            const name = nameFull.replace('.md', '');

            const content = fileContent.toString('utf-8');

            const frontMatterResult = fm(content);
            // Note: getTitle could only work without frontmatters.
            const title = getTitle(frontMatterResult.body);

            const contentWithoutTitle = frontMatterResult.body.replace('# ' + title, '').trim();

            const res = {
                nameFull,
                name,
                slug: name.toLowerCase(),
                content: render(contentWithoutTitle),
                date: frontMatterResult.attributes.date,
                desc: frontMatterResult.attributes.desc,
                cate: frontMatterResult.attributes.cate,
                title,
                wordCount: countWordsCJK(content)
            };

            switch (type) {
                case 'pages': {
                    pageContents.push(res);
                    break;
                }

                case 'posts': {
                    postContents.push(res);
                    break;
                }
            }
        }
    }

    await fs.writeFile(`${dataDir}/posts.json`, JSON.stringify(postContents));
    await fs.writeFile(`${dataDir}/pages.json`, JSON.stringify(pageContents));

    const end = new Date();

    console.log(`OK: built ${postContents.length} posts and ${pageContents.length} pages in ${end.getTime() - start.getTime()}ms.`)

    const postStat = await fs.stat(`${dataDir}/posts.json`);
    const pageStat = await fs.stat(`${dataDir}/pages.json`);

    console.log(`Size: posts.json=${postStat.size / 1000000} MB, pages.json=${pageStat.size / 1000000} MB`)
})();