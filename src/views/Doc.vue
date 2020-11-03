<template>
    <div>
        <TopNav :toggleMean="true"  />
        <div class="content">
            <aside v-if="asideVisible">
              <h2>文档</h2>
              <ol>
                <li><router-link to="/document/introduce">介绍</router-link></li>
                <li><router-link to="/document/install">安装</router-link></li>
                <li><router-link to="/document/start">开始使用</router-link></li>

              </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/document/switch">Switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/document/button">Button组件</router-link>
                    </li>
                    <li>
                        <router-link to="/document/dialog">Dialog组件</router-link>
                    </li>
                    <li>
                        <router-link to="/document/tabs">Tabs组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view/>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
    import TopNav from "../components/TopNav.vue";
    import { inject, Ref } from "vue";

    export default {
        name: "Doc",
        components: {TopNav},
        setup() {
            const asideVisible = inject<Ref<boolean>>("asideVisible")
            return {asideVisible}
        }
    };
</script>

<style scoped lang="scss">
.router-link-exact-active{
  color: #EDC4CF;
  text-decoration: underline;
  font-size: 20px;
}
    aside {
        width: 250px;
        padding-left:1em;
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        height: 100vh;
        overflow: auto;
        padding-top: 65px;;
        background: #F9F9F9;
        box-shadow: 0 0 5px rgb(0,0,0,0.25);
        > h2 {
            margin-bottom: 1em;
        }

        li {
            margin-bottom: 1em;

            > a {
                color: #304455;
            }
        }
    }
    main{
        padding-top: 80px;
        padding-left: 270px;
        @media (max-width: 500px) {
            padding-left: 16px;
            padding-top: 70px;
        }
    }

</style>