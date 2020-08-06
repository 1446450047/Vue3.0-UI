<template>
    <div class="topNav">
        <div class="asideToggle" @click="asideToggle">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="logo" >Vue3.0-UI</div>
        <ul class="menu">
            <li>菜单一</li>
            <li>菜单二</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from "vue";

    export default {
        name: "TopNav",
        setup() {
            const asideVisible = inject<Ref<boolean>>("asideVisible");
            const asideToggle: Function = () => {
                asideVisible ? asideVisible.value = !asideVisible.value : console.error("aside出现了问题");
            };
            return {asideToggle};
        },

    };
</script>

<style scoped lang="scss">

    .topNav {
        position: relative;
        z-index: 10;
        background: #ffffff;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 0 3px rgb(0, 0, 0, 0.25);

        > .logo {
            max-width: 6em;
        }

        > ul {
            margin-right: 3em;
            display: flex;

            > li {

            }

            > li:nth-child(1) {
                margin-right: 2em;
            }
        }
        .asideToggle{
            position: absolute;
            left: 1.5em;
            top: 30%;
            display: none;
            >div{
                width: 24px;
                border: 1px solid black;
                margin-bottom: 6px;
            }
        }
        @media (max-width: 500px) {
            .asideToggle{
                display: block;
            }
            justify-content: center;
            align-items: center;
            > ul {
                display: none;
            }
        }
    }
</style>