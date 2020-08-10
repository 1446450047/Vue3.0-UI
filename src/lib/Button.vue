<template>
    <button class="Vue3-button"
            :class="classes"
    >
        <slot/>
    </button>
</template>

<script lang="ts">
    import {computed} from "vue";

    export default {
        name: "Button",
        props: {
            theme: {
                type: String,
                default: "button"
            },
            size: {
                type: String,
                default: "normal"
            }
        },
        setup(props: any) {
            const classes = computed(() => {
                return {
                    [`Vue3-theme-${props.theme}`]: props.theme,
                    [`Vue3-size-${props.size}`]: props.size,

                };
            });
            return {classes};
        }

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
        height: $height;
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

        &.Vue3-theme-link {
            border: none;
            box-shadow: none;
            color: $blue;

            &:hover, &:active {
                color: lighten($blue, 15%);
            }

        }

        &.Vue3-theme-text {
            border: none;
            box-shadow: none;
            color: $blue;

            &:hover, &:active {
                background: #FAFAFA;
            }
        }
        &.Vue3-theme-button{
            &.Vue3-size-big{
                font-size: 24px;
                height: 44px;
                padding: 0 40px;
            }
            &.Vue3-size-small{
                font-size: 12px;
                height: 22px;
                padding: 4px 6px;
            }
        }
    }
</style>