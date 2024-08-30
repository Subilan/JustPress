<template>
  <footer>
    <div class="inner">
      <span>&copy; 2019-{{ new Date().getFullYear() }} Subilan's Blog<br/><small>Built with Nuxt 3 and 🤔</small></span>
      <div class="spacer"/>
      <WrittenByHuman/>
      <img alt="creative-commons" src="https://mirrors.creativecommons.org/presskit/logos/cc.logo.svg"/>
    </div>
  </footer>
</template>
<script setup>
import WrittenByHuman from "assets/svg/written-by-human.svg";
</script>

<style lang="scss">
@use "@/assets/global.scss";

footer {
  margin-top: 32px;
  padding: 24px 32px;
  border-top: 1px solid rgba(0, 0, 0, .1);
  width: 100%;
  height: global.$footerHeight;
  box-sizing: border-box;
  bottom: 0;

  .inner {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &:not(.absolute) .inner {
    max-width: 800px;
    margin: 0 auto;
  }

  &.absolute {
    position: absolute;
  }

  span {
    font-size: 20px;
    font-weight: 500;

    small {
      font-size: 14px;
      font-weight: normal;
    }
  }

  img, svg {
    height: 30px;
  }
}
</style>