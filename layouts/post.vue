<template>
  <navbar/>
  <div class="layout-post">
    <slot/>
  </div>
  <transition name="flowup">
    <div @click="scrollToTop" class="back-to-top" v-if="showBackToTop">
      返回顶部
      <icon :path="mdiArrowUp"/>
    </div>
  </transition>
</template>

<script setup>
import {mdiArrowUp} from "@mdi/js";
import Navbar from "~/components/navbar.vue";


const showBackToTop = ref(false);

function scrollToTop() {
  window.scrollTo({top: 0})
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    showBackToTop.value = window.scrollY >= window.innerHeight * 0.8;
  })
})
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