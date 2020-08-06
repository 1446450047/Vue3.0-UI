<template>
    <router-view/>
</template>

<script>
    import {ref} from "vue";
    import {provide} from "vue";

    export default {
        name: "App",
        setup() {
            const screenWidth = document.documentElement.clientWidth;
            const asideVisible = ref(screenWidth > 500);
            provide("asideVisible", asideVisible);
        }
    };
</script>
