<template>
  <nav class="nav">
    <img src="~/assets/avatar.jpg" alt="avatar"/>
    <span class="site-title">
      <router-link to="/">Subilan's Blog</router-link>
    </span>
    <div class="search-btn" @click="searchModal = true">
      <icon :path="mdiMagnify"/>
      搜索
      <client-only><span class="hotkey">{{ isMacOS() ? '⌘' : 'Ctrl' }}+K</span></client-only>
    </div>
    <div class="spacer"/>
    <div class="nav-links">
      <div class="nav-link" v-for="x in pages">
        <router-link :to="x.to" class="nav-link-inner">{{ x.name }}</router-link>
      </div>
    </div>
  </nav>
  <div class="default-layout">
    <slot/>
  </div>
  <search v-model="searchModal"/>
  <transition name="flowup">
    <div @click="scrollToTop" class="back-to-top" v-if="showBackToTop">
      返回顶部
      <icon :path="mdiArrowUp"/>
    </div>
  </transition>
</template>

<script setup>
import {pages} from "~/data/config.js";
import {mdiArrowUp, mdiMagnify} from "@mdi/js";
import isMacOS from "~/utils/isMacOS.js";

const searchModal = ref(false);
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

$navbarHeight: 55px;
$navbarBottomOffset: 32px;

.flowup-enter-active,
.flowup-leave-active {
  transition: all .2s ease;
}

.flowup-enter-from,
.flowup-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.default-layout {
  margin-top: $navbarHeight + $navbarBottomOffset;
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

.nav {
  display: flex;
  align-items: center;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  padding: 12px 16px;
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 100;
  height: $navbarHeight;

  @media print {
    display: none;
  }

  > img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    margin-right: 12px;
  }

  .site-title {
    font-size: 20px;
    font-weight: 600;

    a {
      text-decoration: none;
      color: black;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .nav-link-inner {
    text-decoration: none;
    color: black;
    padding-bottom: 1px;
    font-size: 14px;
    transition: all .2s ease;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid #b2dfdb;
    }
  }

  .nav-link-inner.router-link-exact-active {
    border-bottom: 2px solid #009688;
  }
}

.search-btn {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 4px 6px;
  border: 1px solid rgba(0, 0, 0, .1);
  transition: all .2s ease;
  line-height: 1;
  cursor: pointer;
  border-radius: 5px;
  gap: 4px;
  margin-left: 16px;

  svg {
    height: 16px;
    width: 16px;
  }

  .hotkey {
    font-size: 10px;
    color: #aaa;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 0 rgba(0, 0, 0, .1);
    border: 1px solid rgba(#004d40, .8);
  }
}
</style>