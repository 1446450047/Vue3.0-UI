<template>
    <div class="topNav">
        <div class="logo" @click="asideToggle">Vue3.0-UI</div>
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

        @media (max-width: 500px) {
            justify-content: center;
            align-items: center;
            >ul{
                display: none;
            }
        }
    }
</style>