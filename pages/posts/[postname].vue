<template>
  <div class="container">
    <article>
      <h1>{{ post.title }}</h1>
      <div class="extra">
        <span><icon :path="mdiClockOutline"/> {{ post.date }}</span>
        <span><icon :path="mdiFormatTextVariant"/> 约 {{ post.wordCount }} 字</span>
        <span><icon :path="mdiShapeOutline"/> {{ post.cate }}</span>
      </div>
      <div class="content" v-html="post.content"/>
    </article>
  </div>
</template>

<script setup>
import getPostContent from "~/utils/getPostContent.js";
import mediumZoom from "medium-zoom";
import {mdiClockOutline, mdiFormatTextVariant, mdiShapeOutline} from "@mdi/js";

const slug = useRoute().params.postname;
const post = getPostContent(slug.toLowerCase());

onMounted(() => {
  mediumZoom('article .content img')
})
</script>

<style lang="scss">
@use "@/assets/languagenames";

.container {
  max-width: 800px;
  margin: 0 auto;
}

.extra {
  display: flex;
  align-items: center;
  font-size: 14px;

  span:not(:last-child)::after {
    content: '·';
    margin: 0 4px;
  }

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    line-height: 1;

    svg {
      width: 16px;
      color: #009688;
    }
  }
}

article {
  font-size: 16px;
  line-height: 1.8;
  margin: 32px 0;

  ul, ol {
    padding-left: 1.2rem;
  }

  h1, h2, h3 {
    line-height: 1.4;
  }

  h1 a, h2 a, h3 a {
    color: #004d40;
    font-weight: 600;
  }

  a {
    overflow-wrap: break-word;
    color: #009688;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }

    .external-link-icon {
      color: #aaa;

      &::before {
        font-size: .9rem;
      }
    }
  }

  code {
    color: #476582;
    padding: 0.25rem 0.5rem;
    vertical-align: middle;
    margin: 0;
    font-size: .85em;
    background-color: rgba(27, 31, 35, .05);
    border-radius: 3px;
  }

  pre {
    background-color: #282c34;
    border-radius: 6px;
    position: relative;
    padding: 1.25rem 1.5rem;
    margin: .85rem 0;
    overflow: auto;

    code {
      padding: 0;
      background: transparent;
      border-radius: 0;
      color: #fff;
    }
  }

  h1, h2 {
    position: relative;
    border-bottom: 1px solid #eaecef;
    cursor: pointer;

    &:hover {
      .header-anchor {
        opacity: 1;
      }
    }
  }

  .header-anchor {
    content: "#";
    position: absolute;
    color: #000;
    right: calc(100% + .2rem);
    opacity: 0;

    @media (min-width: 700px) {
      &:hover {
        opacity: 1;
      }
    }
  }

  blockquote {
    font-size: 1rem;
    color: #999;
    border-left: 0.2rem solid #dfe2e5;
    margin: 1rem 0;
    padding: 0.25rem 0 0.25rem 1rem;

    > p {
      margin: 0;
    }
  }

  h1 {
    font-size: 220%;
  }

  h2 {
    font-size: 190%;
  }

  h3 {
    font-size: 170%;
  }

  h4 {
    font-size: 140%;
  }

  h5 {
    font-size: 120%;
  }

  h6 {
    font-size: 100%;
  }

  hr {
    border: none;
    display: block;
    width: 100%;
    background: #eaecef;
    height: 1px;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }

  table {
    border-collapse: collapse;
    margin: 1rem 0;
    overflow-x: auto;
    width: 100%;
  }

  td, th {
    border: 1px solid #dfe2e5;
    padding: 0.6em 1em;
  }

  tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  tr {
    border-top: 1px solid #dfe2e5;
  }

  kbd {
    box-shadow: 0 1px 0 2px rgba(#009688, .2);
    padding: .05rem .3rem;
    font-size: 95%;
    margin: 0 4px;
    display: inline-block;
    transform: translateY(-2px);
    vertical-align: middle;
    border-radius: 5px;
    background: white;
    line-height: 1.2;
  }

  img ~ em {
    text-align: center;
    display: block;
    font-size: .9rem;
    font-style: normal;
    color: #aaa;
  }

  a.external-link {
    &::after {
      content: '↗';
      color: #aaa;
      padding-left: 2px;
      font-size: 85%;
    }
  }
}

.notice {
  padding: 2px 16px;
  &.tip {
    background: #e0f2f1;
    border-left: 5px solid #009688;
  }
}
</style>