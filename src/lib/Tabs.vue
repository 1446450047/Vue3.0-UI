<template>
  <div class=" Vue3-Tabs">
    <div class="Vue3-Tabs-nav">
      <div class="Vue3-Tabs-items" v-for="(t, index) in titles " :key="index">{{ t }}</div>
    </div>
    <div class="Vue3-Tabs-content">
      <component v-for="(c ,index) in defaults" :is="c" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";

export default {
  name: "Tabs",
  components: {Tab},
  setup(props: any, context: any) {
    const defaults = context.slots.default();
    defaults.forEach((tag: any) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 的 子组件必须为Tab组件");
      }
    });
    const titles = defaults.map((tag: any) => {
      return tag.props.title;
    });

    return {defaults, titles};
  }
};
</script>

<style scoped lang="scss">
$border-color : #d9d9d9;
$blue: #40a9ff;
  .Vue3-Tabs{
    &-nav{
      display: flex;
      border-bottom: 1px solid $border-color  ;
    }
    &-items{
      padding: 8px 16px;
      &:first-child{
        padding-left: 0;
      }

      &.selected{
        color: $blue;
      }
    }
    &-content{
      padding-top: 8px;
    }

  }
</style>