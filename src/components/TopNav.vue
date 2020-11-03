<template>
  <div class="topNav">
    <div class="asideToggle" v-if="toggleMean"  @click="asideToggle">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-UI"></use>
      </svg>
      Vue3.0-UI
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/document/switch">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";

export default {
  name: "TopNav",
  props:{
    toggleMean:{
      type:Boolean,
      default:false
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const asideToggle: Function = () => {
      asideVisible ? asideVisible.value = !asideVisible.value : console.error("aside出现了问题");
    };
    return {asideToggle};
  },

};
</script>

<style scoped lang="scss">
.topNav {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  padding: 16px;
  display: flex;
  color: #fff;
  background: linear-gradient(90deg, rgb(54 153 137) 0%, rgb(23 95 83) 100%);

  justify-content: space-between;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.25);

  > .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 6em;
    color: inherit;
    svg {
      width: 32px;
      height: 32px;
    }
  }

  > ul {
    margin-right: 3em;
    display: flex;

    a {
      color: #fff;
    }

    > li:nth-child(1) {
      margin-right: 2em;
    }
  }

  .asideToggle {
    position: absolute;
    left: 1.5em;
    top: 30%;
    display: none;

    > div {
      width: 24px;
      border: 1px solid black;
      margin-bottom: 6px;
    }
  }

  @media (max-width: 500px) {
    .asideToggle {
      display: block;
    }
    justify-content: center;
    align-items: center;
    > ul {
      display: none;
    }
  }
}
</style>