<template>
    <div class="topNav">
        <div class="logo">Vue3.0-UI</div>
        <ul class="menu">
            <li>菜单一</li>
            <li>菜单二</li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name: "TopNav"
    };
</script>

<style scoped lang="scss">
    .topNav {
        background: #ffffff;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 0 3px rgb(0,0,0,0.25);
        >.logo{
            max-width: 6em;
        }
        >ul{
            margin-right: 3em;
            display: flex;
            >li{

            }
            >li:nth-child(1){
                margin-right: 2em;
            }
        }
    }
</style>