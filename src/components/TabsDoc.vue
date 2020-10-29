<template>
  <Tabs>
    <Tab title="导航1"></Tab>
    <Tab title="导航2"></Tab>
    <Tab title="导航3"></Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";

export default {
  name: "TabsDoc",
  components: {
    Tabs, Tab
  }
};
</script>

<style scoped lang="scss">

</style>