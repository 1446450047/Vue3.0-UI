<template>
  <p>Tabs组件示例</p>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">内容一</Tab>
    <Tab title="导航2">内容二</Tab>
    <Tab title="导航3">内容三</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";

export default {
  name: "TabsDoc",
  components: {
    Tabs, Tab
  },
  setup(){
    const selected = ref("导航1")
    return {selected}
  }
};
</script>

<style scoped lang="scss">

</style>