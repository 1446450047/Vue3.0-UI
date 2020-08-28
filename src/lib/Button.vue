<template>
    <button class="Vue3-button"
            :class="classes"
            :disable="disable"
    >
        <span class="Vue3-loading" v-if="loading"></span>
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
            },
            level: {
                type: String,
                default: "normal"
            },
            disable: {
                type: Boolean,
                default: false
            },
            loading:{
                type:Boolean,
                default:false
            }
        },
        setup(props: any) {
            const classes = computed(() => {
                return {
                    [`Vue3-theme-${props.theme}`]: props.theme,
                    [`Vue3-size-${props.size}`]: props.size,
                    [`Vue3-level-${props.level}`]: props.level,

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
        min-width: $width;
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

        &.Vue3-theme-link {
            border: none;
            box-shadow: none;
            color: $blue;
            &[disable=true]{
                cursor: not-allowed;
                color: gray;
                border: none;
                &:hover, &:active{
                    color: gray;
                }
            }
            &:hover, &:active {
                color: lighten($blue, 15%);
            }

            &.Vue3-size-big {
                font-size: 24px;
                height: 44px;
                padding: 0 40px;
            }

            &.Vue3-size-small {
                font-size: 12px;
                height: 22px;
                padding: 4px 6px;
            }

            &.Vue3-level-main {
                color: $blue;
            }

            &.Vue3-level-danger {
                color: red;
            }
        }

        &.Vue3-theme-text {
            border: none;
            box-shadow: none;
            color: $blue;
            &[disable=true]{
                cursor: not-allowed;
                color: gray;
                border: none;
            }
            &:hover, &:active {
                background: #2d2646;
                padding: 0 8px;
            }

            &.Vue3-size-big {
                font-size: 24px;
                height: 44px;
                padding: 0 40px;

            }

            &.Vue3-size-small {
                font-size: 12px;
                height: 22px;
                padding: 4px 6px;
            }

            &.Vue3-level-main:hover, &.Vue3-level-main:active {
                background: $blue;
                color: #fff;
            }

            &.Vue3-level-danger:hover, &.Vue3-level-danger:active {
                background: red;
                color: #fff;
            }
        }

        &.Vue3-theme-button {
            &[disable=true]{
                cursor: not-allowed;
                background: #484d47;
                color: gray;
                border: none;
            }
            &.Vue3-size-big {
                font-size: 24px;
                height: 44px;
                padding: 0 40px;
            }

            &.Vue3-size-small {
                font-size: 12px;
                height: 22px;
                padding: 4px 6px;
            }

            &.Vue3-level-main {
                border: none;
                background: $blue;
                color: #fff;
            }

            &.Vue3-level-danger {
                border: none;
                background: red;
                color: #fff;
            }
        }
        @keyframes loading {
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }
        >.Vue3-loading{
            width: 14px;
            height: 14px;
            border: 2px solid $blue;
            margin-right: 4px;
            border-radius: 50%;
            border-color:  $blue $blue $blue transparent;
            animation: loading 1s  infinite linear;
        }

    }
</style>