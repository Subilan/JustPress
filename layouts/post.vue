<template>
  <navbar/>
  <div class="layout-post">
    <slot/>
  </div>
  <creative-commons-license/>
  <default-footer/>
  <back-to-top/>
</template>

<script setup>
import Navbar from "~/components/navbar.vue";
import CreativeCommonsLicense from "~/components/creative-commons-license.vue";
import DefaultFooter from "~/components/default-footer.vue";
import BackToTop from "~/components/back-to-top.vue";
</script>

<style lang="scss">
@use '@/assets/global.scss';
@use '@/assets/github-light.scss';

.flowup-enter-active,
.flowup-leave-active {
  transition: all .2s ease;
}

.flowup-enter-from,
.flowup-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.layout-post {
  margin-top: global.$navbarHeight + global.$navbarBottomOffset;
}

.back-to-top {
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 10px;
  transition: all .2s ease;
  padding: 12px 16px;
  cursor: pointer;
  background: white;
  position: fixed;
  bottom: 48px;
  right: 64px;
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;

  svg {
    height: 20px;
  }

  &:hover {
    box-shadow: 0 6px 0 rgba(0, 0, 0, .1);
    border: 1px solid rgba(#004d40, .8);
    transform: translateY(-4px);
  }
}
</style>