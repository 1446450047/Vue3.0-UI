<template>
  <div class="topNavAndBanner">
    <TopNav/>
    <div class="banner">
      <h1>Vue3.0-UI</h1>
      <h2>Vue3.0的造轮子</h2>
      <p class="actions">
        <router-link to="/document">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-start"></use>
          </svg>
          开始
        </router-link>
        <a href="https://github.com/1446450047/Vue3.0-UI">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
          Github</a>

      </p>
    </div>
  </div>
  <div class="UI-information">
    <Infor title="基于Vue3" icon="vue">首次尝试使用composition API编写</Infor>
    <Infor title="基于TS" icon="typescript">Vue3 与 TypeScript完美结合，技术先进</Infor>
    <Infor title="亮点" icon="light">代码简单，清晰易读，适合新手 </Infor>

  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import Infor from "../components/Infor.vue";
export default {
  name: "Home",
  components: {TopNav,Infor}
};
</script>

<style scoped lang="scss">
.topNavAndBanner {
  background: linear-gradient(90deg, rgb(54 153 137) 0%, rgb(23 95 83) 100%);
  border-bottom-left-radius: 130% 70%;
  border-bottom-right-radius: 130% 70%;

}
.UI-information{
  margin: 50px auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.banner {
  color: #EDC4CF;
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  justify-content: center;
  align-items: center;

  > h1 {
    margin-bottom: 1em;
  }

  > h2 {
    margin-bottom: 2em;
  }

  > .actions {
    > a {
      display: inline-block;
      padding: 8px 24px;
      background: #2B5951;
      color: #F6E0E6;
      line-height: 32px;
      border-radius: 4px;
      &:nth-child(1) {
        margin-right: 4em;
      }
      &:nth-child(2) {
        font-weight: bolder;
      }
      &:hover{
        background: #F2D2DB;
        color:#14453D;
      }
    }
  }
}
</style>