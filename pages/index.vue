<template>
  <div class="index">
    <div class="left">
      <div class="avatar">
        <img src="~/assets/avatar.jpg" alt="avatar"/>
        <span class="name">Subilan</span>
      </div>
      <div class="social">
        <a href="https://x.com/subilan1234" target="_blank">
          <X/>
        </a>
        <a href="https://github.com/Subilan" target="_blank">
          <GitHub/>
        </a>
        <a href="mailto:christophersubilan@gmail.com">
          <icon :path="mdiEmailOutline"/>
        </a>
        <a href="https://space.bilibili.com/35413001" target="_blank">
          <Bilibili class="bilibili"/>
        </a>
      </div>
      <div class="navigations">
        <router-link :to="x.to" v-for="x in pages">
          <icon :path="x.icon" class="inactive-icon"/>
          <icon :path="x.iconActive" class="active-icon"/>
          {{ x.name }}
        </router-link>
      </div>
    </div>
    <div class="right">
      <div class="article" v-for="x in getPostDigests()">
        <span class="view-right-now-message">打开 <icon :path="mdiArrowTopRight"/></span>
        <h2>{{ x.title }}</h2>
        <div class="meta">
          <span>{{ x.date }}</span>
          <span v-if="x.cate">{{ x.cate }}</span>
        </div>
        <p v-if="x.desc">{{ x.desc }}</p>
        <icon size="120" class="bg-icon" v-if="x.cate" :path="getIconForCategory(x.cate)"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import X from '~/assets/svg/x.svg';
import GitHub from '~/assets/svg/github.svg';
import Bilibili from '~/assets/svg/bilibili.svg'
import {mdiArrowTopRight, mdiArrowUpLeft, mdiCodeTags, mdiEmailOutline, mdiFormatQuoteOpen, mdiPencil} from "@mdi/js";
import {pages} from "~/data/config.js";
import getPostDigests from "~/utils/getPostDigests.js";

function getIconForCategory(category) {
  switch (category) {
    case '思想': return mdiFormatQuoteOpen;
    case '代码': return mdiCodeTags;
    case '记录': return mdiPencil;
    case '路径': return mdiArrowUpLeft;
  }
}
</script>

<style lang="scss" scoped>
.index {
  max-width: 1200px;
  margin: 32px auto;
  display: flex;
  align-items: flex-start;
  gap: 28px;
}

.left {
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 10px;
  padding: 32px 16px;

  .avatar {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;

    img {
      height: 100px;
      width: 100px;
      object-fit: cover;
      border-radius: 100%;
    }

    .name {
      font-weight: 500;
      font-size: 24px;
    }
  }

  .social {
    margin-top: 16px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    width: 60%;

    a {
      flex: 1;
      display: flex;
      justify-content: center;
      color: #000;

      &:hover {
        svg {
          opacity: 1;
        }

        svg.bilibili {
          fill: #479fd1;
        }
      }
    }

    svg {
      height: 20px;
      fill: #000;
      opacity: .5;
    }
  }

  .navigations {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: stretch;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      color: black;
      text-decoration: none;
      transition: all .2s ease;
      padding: 10px 0;
      border-radius: 20px;

      &:not(.router-link-exact-active):hover {
        background: #e0f2f1;
        padding: 16px 0;

        svg {
          color: #009688;
        }
      }

      svg {
        transition: all .2s ease;
      }
    }

    &:hover .router-link-exact-active {
      background: transparent;
    }

    .router-link-exact-active {
      padding: 16px 0;
      border-radius: 20px;
      background: #e0f2f1;

      .active-icon {
        display: block;
        color: #009688;
      }

      .inactive-icon {
        display: none;
      }
    }

    :not(.router-link-exact-active) {
      .active-icon {
        display: none;
      }

      .inactive-icon {
        display: block;
      }
    }
  }
}

.right {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 28px;

  .article {
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    transition: all .2s ease;

    .view-right-now-message {
      opacity: 0;
      color: #004d40;
      transition: all .2s ease;
      position: absolute;
      right: 20px;
      top: 20px;
      transform: translate(-4px, 4px);
      font-size: 14px;
      display: flex;
      align-items: center;

      svg {
        height: 14px;
      }
    }

    &:hover {
      box-shadow: 0 4px 0 rgba(0, 0, 0, .1);
      transform: translateY(-2px);
    }

    &:hover {
      .view-right-now-message {
        opacity: 1;
        transform: translate(0);
      }
    }

    h2 {
      margin-top: 0;
      margin-bottom: 4px;
      color: #004d40;
      font-size: 28px;
    }

    .meta {
      display: flex;
      align-items: center;
      color: #aaa;
      font-size: 14px;

      span:not(:last-child)::after {
        content: '·';
        margin: 0 8px;
      }
    }

    p {
      line-height: 1.8;
      margin-top: 16px;
      margin-bottom: 0;
    }
  }
}

.bg-icon {
  color: #009688;
  opacity: 0;
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  transition: all .2s ease;
}

.article:hover {
  .bg-icon {
    right: 20px;
    opacity: .1;
  }
}
</style>