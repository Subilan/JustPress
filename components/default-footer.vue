<template>
  <footer>
    <span>&copy; 2019-{{ new Date().getFullYear() }} Subilan's Blog<br/><small>Built with Nuxt 3 and 🤔</small></span>
    <div class="spacer"/>
    <WrittenByHuman/>
    <img alt="creative-commons" src="https://mirrors.creativecommons.org/presskit/logos/cc.logo.svg"/>
  </footer>
</template>
<script setup>
import WrittenByHuman from "assets/svg/written-by-human.svg";
</script>

<style lang="scss">
footer {
  margin-top: 32px;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-top: 1px solid rgba(0, 0, 0, .1);

  span {
    font-size: 20px;

    small {
      font-size: 14px;
    }
  }

  img, svg {
    height: 30px;
  }
}
</style>