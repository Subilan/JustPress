<template>
  <nav class="nav">
    <img src="~/assets/avatar.jpg" alt="avatar"/>
    <span class="site-title">
      <router-link to="/">Subilan's Blog</router-link>
    </span>
    <div class="search-btn">
      <icon :path="mdiMagnify"/>
      搜索<span class="hotkey">{{ isMacOS() ? '⌘' : 'Ctrl'}}+K</span>
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
</template>

<script setup>
import {pages} from "~/data/config.js";
import {mdiMagnify} from "@mdi/js";

function isMacOS() {
  return navigator.userAgent.includes('Macintosh');
}
</script>

<style lang="scss">
@use '@/assets/global.scss';
@use '@/assets/github-light.scss';

.nav {
  display: flex;
  align-items: center;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  padding: 12px 16px;

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
    font-size: 12px;
    color: #aaa;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 0 rgba(0, 0, 0, .1);
    border: 1px solid rgba(#004d40, .8);
  }
}
</style>