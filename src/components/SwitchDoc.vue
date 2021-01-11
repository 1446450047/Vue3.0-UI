<template>
  <div>
    <h1>Switch组件展示</h1>
    <div class="demo">
      <h2>常规用发</h2>
      <div class="demo-component">
        <Switch1Demo/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value:"bool"/&gt;</pre>
       <pre>
&lt;template>
  &lt;Switch v-model:checked="checked1" /&gt;
&lt;/template>
&lt;script lang="ts">
  import Switch from "../../lib/Switch.vue";
  import {ref} from "vue";
  export default {
  name: "Switch1Demo",
  components: {Switch},
  setup(){
     const checked1 = ref(false)
     return {checked1}
  }
}
&lt;/script&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持disabled</h2>
      <div class="demo-component">
      <Switch2Demo/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch disabled v-model:value:"bool"/&gt;</pre>
        <pre>
&lt;template>
  &lt;Switch disabled v-model:checked="checked1" /&gt;
&lt;/template>
&lt;script lang="ts">
  import Switch from "../../lib/Switch.vue";
  import {ref} from "vue";
  export default {
  name: "Switch1Demo",
  components: {Switch},
  setup(){
     const checked1 = ref(false)
     return {checked1}
  }
}
&lt;/script&gt;</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import Switch from "../lib/Switch.vue";
    import Button from "../lib/Button.vue";
    import Switch2Demo from "./demo/Switch2.demo.vue";
    import Switch1Demo from "./demo/Switch1.demo.vue";

    export default {
        name: "SwitchDoc",
        components: {Switch1Demo,Switch2Demo, Button, Switch},
      setup(){


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