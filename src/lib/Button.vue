<template>
        <button>
            <slot/>
        </button>
</template>

<script lang="ts">
    export default {
        name: "Button",
    };
</script>

<style scoped lang="scss">
    div {
        padding: 16px;
        border: 1px solid red;
    }
</style>