<template>
    <button class="Vue3-button"
            :class="{[`Vue3-button-${theme}`]:theme}"
    >
        <slot/>
    </button>
</template>

<script lang="ts">
    export default {
        name: "Button",
        props: {
            theme: {
                type: String,
                default: "button"
            }
        },

    };
</script>

<style lang="scss">
    $height: 32px;
    $width: 64px;
    $radius: 4px;
    $padding: 0px 8px;
    $blue: #40A9FF;
    $shadow: rgba(64, 169, 255, 0.25);
    $active-border: #2C73FF;
    .Vue3-button {
        width: $width;
        min-height: $height;
        border-radius: $radius;
        padding: $padding;
        border: 1px solid grey;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #ffffff;
        box-shadow: 0 0 2px $shadow;
        white-space: nowrap;
        transition: all 250ms;

        & + & {
            margin-left: 8px;
        }

        &:focus {
            outline: none;
        }

        &:hover {
            color: $blue;
            border-color: $blue;
        }

        &:active {
            box-shadow: 0 0 16px $shadow;
            border: 1px solid $active-border;
        }

        &.Vue3-button-link {
            border: none;
            box-shadow: none;
            color: $blue;

            &:hover, &:active {
                color: lighten($blue, 15%);
            }
        }

        &.Vue3-button-text {
            border: none;
            box-shadow: none;
            color: $blue;

            &:hover, &:active {
                background: #FAFAFA;
            }
        }
    }
</style>