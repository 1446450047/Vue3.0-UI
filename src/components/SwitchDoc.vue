<template>
    <Switch v-model:checked="checked" />
</template>

<script lang="ts">
    import Switch from "../lib/Switch.vue";
    import {ref} from "vue"
    export default {
        name: "SwitchDoc",
        components: {Switch},
        setup(){
            const checked = ref(false)
            return {checked}
        }
    };
</script>

<style scoped lang="scss">

</style>