<template>
    <Button
            @click="onclick"
            @mouseover="onmouseover"
            size="small"
    >点我
    </Button>
</template>

<script lang="ts">
    import Button from "../lib/Button.vue";

    export default {
        name: "ButtonDoc",
        components: {Button},
        setup() {
            const onclick = () => {
                console.log("hi");
            };
            const onmouseover = () => {
                console.log("over");
            };
            return {onclick, onmouseover};
        }
    };
</script>

<style scoped lang="scss">

</style>