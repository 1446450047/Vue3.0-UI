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

    <p>示例三:支持level</p>
    <br>
    <br>

    <Button>default</Button>&nbsp;&nbsp;
    <Button level="main">main button</Button>&nbsp;&nbsp;
    <Button level="danger">danger button</Button>

    <br>
    <br>
    <Button theme="link">default link</Button>&nbsp;&nbsp;
    <Button theme="link" level="main">main link</Button>&nbsp;&nbsp;
    <Button theme="link" level="danger">danger link</Button>

    <br>
    <br>
    <Button theme="text">default link</Button>&nbsp;&nbsp;
    <Button theme="text" level="main">main link</Button>&nbsp;&nbsp;
    <Button theme="text" level="danger">danger link</Button>
    <br><br>

    <p>示例四:支持disable</p>
    <br><br>
    <Button disable>disable</Button>
    <Button disable theme="link">disable link</Button>
    <Button disable theme="text">disable text</Button>
    <br>
    <br>
    <br>
    <p>示例五: 支持loading</p>
    <br>
    <br>
    <Button loading>loading</Button>
    <br><br>
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