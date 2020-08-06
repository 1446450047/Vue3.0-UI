<template>
    <router-view/>
</template>

<script>
    import {ref} from "vue";
    import {provide} from "vue";
    import {router} from "./router";

    export default {
        name: "App",
        setup() {
            const screenWidth = document.documentElement.clientWidth;
            const asideVisible = ref(screenWidth > 500);
            provide("asideVisible", asideVisible);
            router.afterEach(() => {
                asideVisible.value = screenWidth > 500;
            });
        }
    };
</script>
