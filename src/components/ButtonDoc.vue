<template>
    <p>示例一: 支持theme</p>
    <br>
    <Button
            @click="onclick"
            @mouseover="onmouseover"
            size="normal"
    >default
    </Button>
    <Button theme="button">button</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>

    <br>
    <br>

    <p>示例二: 支持size</p>
    <br>

    <Button size="big">big</Button>&nbsp;&nbsp;
    <Button size="normal">normal</Button>&nbsp;&nbsp;
    <Button size="small">small</Button>

    <br>
    <br>

    <Button theme="link" size="big">big link</Button>&nbsp;&nbsp;
    <Button theme="link" size='normal'>normal link</Button>&nbsp;&nbsp;
    <Button theme="link" size="small">small link</Button>

    <br>
    <br>

    <Button theme="text" size="big">big text</Button>&nbsp;&nbsp;
    <Button theme="text" size='normal'>normal text</Button>&nbsp;&nbsp;
    <Button theme="text" size="small">small text</Button>

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