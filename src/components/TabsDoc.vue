<template>
  <h1>Tabs组件示例</h1>
  <div class="demo">
    <h2>常规用发</h2>
    <div class="demo-component">
      <Tabs v-model:selected="selected">
        <Tab title="导航1">内容一</Tab>
        <Tab title="导航2">内容二</Tab>
        <Tab title="导航3">内容三</Tab>
      </Tabs>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>
        &lt;Tabs v-model:selected="selected"&gt;
          &lt;Tab title="导航1"&gt;内容一&lt;/Tab&gt;
          &lt;Tab title="导航2"&gt;内容二&lt;/Tab&gt;
          &lt;Tab title="导航3"&gt;内容三&lt;/Tab&gt;
        &lt;/Tabs&gt;
      </pre>
      <pre class="language-html" v-html='Prism.highlight(`
  &lt;template&gt;
        &lt;Tabs v-model:selected="selected"&gt;
          &lt;Tab title="导航1"&gt;内容一&lt;/Tab&gt;
          &lt;Tab title="导航2"&gt;内容二&lt;/Tab&gt;
          &lt;Tab title="导航3"&gt;内容三&lt;/Tab&gt;
        &lt;/Tabs&gt;
  &lt;/template>
  &lt;script lang="ts">
  import Tabs from "../lib/Tabs.vue";
  import Tab from "../lib/Tab.vue";
  export default {
        name:"MyComponentName"
        components: { Tabs, Tab},
       setup(){
          const selected = ref("导航1")
          return {selected}
       }
    };
  &lt;/script&gt;`,Prism.languages.html,"html")'></pre>
    </div>
  </div>

</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
import 'prismjs';
import 'prismjs/themes/prism.css'
import Button from "../lib/Button.vue";
const Prism = (window as any).Prism
export default {
  name: "TabsDoc",
  components: {
    Button,
    Tabs, Tab
  },
  setup(){
    const selected = ref("导航1")
    return {selected,Prism}
  }
};
</script>

<style scoped lang="scss">
$border-color:#d9d9d9;
.demo{
  border: 1px solid $border-color;
  border-radius: 4px;
  margin: 16px 32px 32px 0;
  >h2{
    padding: 8px;
    border-bottom:1px solid $border-color;
  }
  >.demo-component , .demo-actions{
    padding: 16px;
    border-bottom:1px solid $border-color;
  }
  >.demo-code{
    padding: 16px;
    >pre{
      padding: 16px;
      font-family: Consolas, 'Courier New', Courier, monospace;
      border:1px solid $border-color;
    }
  }
}
</style>