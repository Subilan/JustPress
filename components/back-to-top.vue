<template>
  <transition name="flowup">
    <div @click="scrollToTop" class="back-to-top" v-if="showBackToTop">
      返回顶部
      <icon :path="mdiArrowUp"/>
    </div>
  </transition>
</template>

<script setup>
import {mdiArrowUp} from "@mdi/js";

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