<template>
    <Button
            @click="onclick"
            @mouseover="onmouseover"
            size="small"
    >default
    </Button>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
</template>

<script lang="ts">
    import Button from "../lib/Button.vue";

    export default {
        name: "ButtonDoc",
        components: {Button},
        setup() {
            const onclick = () => {
            };
            const onmouseover = () => {
            };
            return {onclick, onmouseover};
        }
    };
</script>

<style scoped lang="scss">

</style>