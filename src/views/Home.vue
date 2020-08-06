<template>
    <div>
        <TopNav/>
        <div class="banner">
            <h1>Vue3.0-UI</h1>
            <h2>Vue3.0的造轮子</h2>
            <p class="actions">
                <router-link to="/document">开始</router-link>
                <a href="https://github.com/1446450047/Vue3.0-UI">Github</a>

            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import TopNav from "../components/TopNav.vue";

    export default {
        name: "Home",
        components: {TopNav}
    };
</script>

<style scoped lang="scss">
    .banner {
        display: flex;
        flex-direction: column;
        padding: 100px 0;
        justify-content: center;
        align-items: center;

        > h1 {
            margin-bottom: 2em;
        }
        > h2 {
            margin-bottom: 2em;
        }
        > .actions {
            > a {
                display: inline-block;
                padding: 8px 24px;
                &:nth-child(1){
                    line-height: 32px;
                    border: 1px solid #4FC08D;
                    border-radius: 24px;
                    color: #4FC08D;
                    margin-right: 4em;
                }
                &:nth-child(2){
                    background: #F6F6F6;
                    line-height: 32px;
                    border-radius: 24px;
                    font-weight: bolder;
                    color: #745959;
                }
            }
        }
    }
</style>