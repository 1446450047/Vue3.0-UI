<template>
    <button class="Vue3-switch" :class="{'Vue3-checked':checked}" @click="toggleChecked">
        <span></span>
    </button>
</template>

<script lang="ts">
    export default {
        name: "Switch",
        props: {
            checked: Boolean
        },
        setup(props:any,context:any) {
            const toggleChecked = () => {
                context.emit('update:checked',!props.checked)
            };
            return {toggleChecked};
        }
    };
</script>
<style  lang="scss">
    .Vue3-switch {
        border: 1px solid #747474;
        height: 32px;
        width: 64px;
        background: #747474;
        border-radius: 16px;
        position: relative;
        > span {
            display: inline-block;
            height: 32px;
            width: 32px;
            border-radius: 50%;
            background: #ffffff;
            position: absolute;
            left: 1px;
            top: 0;
            transition: 250ms;

        }

        &:focus {
            outline: none;
        }

        &.Vue3-checked {
            > span {
                left: 31px;
            }
            background: #1890FF;
            border: 1px solid #1890FF;
        }
    }
</style>