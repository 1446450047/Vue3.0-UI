<template>
  <div>
    <div v-for="(t, index) in titles "  :key="index">{{t}}</div>
    <component v-for="(c ,index) in defaults" :is="c" :key="index"/>
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
      return tag.props.title
    });

    return {defaults, titles};
  }
};
</script>

<style scoped lang="scss">

</style>