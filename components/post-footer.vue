<template>
  <div class="create-commons-license">
    <div class="title">
      本博客的原创内容采用 CC BY-SA 4.0 协议授权
      <img alt="cc" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1">
      <img alt="by" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1">
      <img alt="sa" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1">
    </div>
    <p><strong>欢迎评论、指正或者转载。</strong>转载需遵守 CC BY-SA 4.0（署名—相同方式共享）协议。可前往 GitHub 仓库发布 Issue 进行评论（可带上 comment 的 tag 以区分）。</p>
    <div class="links">
      <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">在 CreativeCommons 上查看协议 <icon :path="mdiArrowTopRight"/></a>
      <a href="https://github.com/Subilan/Blog/issues" target="_blank">打开 Issue 页面 <icon :path="mdiArrowTopRight"/></a>
    </div>
  </div>
  <footer>
    <span>&copy; 2019-{{ new Date().getFullYear()}} Subilan's Blog<br/><small>Built with Nuxt 3 and 🤔</small></span>
    <div class="spacer"/>
    <WrittenByHuman/>
    <img alt="creative-commons" src="https://mirrors.creativecommons.org/presskit/logos/cc.logo.svg"/>
  </footer>
</template>

<script setup>
import WrittenByHuman from '~/assets/svg/written-by-human.svg'
import {mdiArrowTopRight} from "@mdi/js";
</script>

<style lang="scss">
.create-commons-license {
  border: 1px solid rgba(0, 0, 0, .1);
  padding: 16px;
  border-radius: 10px;
  transition: all .2s ease;
  background: white;
  color: black;

  &:hover {
    border: 1px solid rgba(#004d40, .8);
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }

  a {
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 10px;
    transition: all .2s ease;
    padding: 10px;
    background: white;
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    line-height: 1;

    svg {
      height: 16px;
    }

    &:hover {
      box-shadow: 0 6px 0 rgba(0, 0, 0, .1);
      border: 1px solid rgba(#004d40, .8);
      transform: translateY(-4px);
      color: #004d40;
    }
  }

  .title {
    img {
      height: 22px;
    }

    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    line-height: 1.8;
  }
}

footer {
  margin: 32px 0;
  padding-top: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-top: 1px solid rgba(0, 0, 0, .1);

  img, svg {
    height: 30px;
  }
}
</style>