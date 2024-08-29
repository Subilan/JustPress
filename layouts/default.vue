<template>
  <nav class="nav">
    <img src="~/assets/avatar.jpg" alt="avatar"/>
    <span class="site-title">
      <router-link to="/">Subilan's Blog</router-link>
    </span>
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
</style>