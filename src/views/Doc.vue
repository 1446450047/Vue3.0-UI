<template>
    <div>
        <TopNav/>
        <div class="content">
            <aside>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/document/">Switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/document/">Button组件</router-link>
                    </li>
                    <li>
                        <router-link to="/document/">Dialog组件</router-link>
                    </li>
                    <li>
                        <router-link to="/document/">Tabs组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>主内容</main>
        </div>
    </div>
</template>

<script lang="ts">
    import TopNav from "../components/TopNav.vue";
    export default {
        name: "Doc",
        components: {TopNav}
    };
</script>

<style scoped lang="scss">

</style>