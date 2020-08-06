<template>
    <div>
        <TopNav  />
        <div class="content">
            <aside v-if="asideVisible">
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
    aside {
        width: 250px;
        padding-left:1em;
        position: fixed;
        top: 0;
        left: 0;
        min-height: 100vh;
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
</style>