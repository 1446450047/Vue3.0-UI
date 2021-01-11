<template>
  <div>
    <h1>示例一</h1>
    <div class="demo">
      <h2>常规用发</h2>
      <div class="demo-component">
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visible="visible"
                :clickOverlayToClose="true"
                :ok="ok"
                :cancel="cancel"
        >
          <template v-slot:content>
            <div>内容11111</div>
            <div>内容22222</div>
          </template>
          <template v-slot:title>
            <strong>标题</strong>
          </template>
        </Dialog>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Button @click="toggle"&gt;toggle&lt;/Button&gt;
    &lt;Dialog v-model:visible="visible"
            :clickOverlayToClose="true"
            :ok="ok"
            :cancel="cancel"
    &gt;
        &lt;template v-slot:content&gt;
        &lt;div>内容11111&lt;/div&gt;
          &lt;div>内容22222&lt;/div&gt;
        &lt;/template&gt;
        &lt;template v-slot:title&gt;
        &lt;strong>标题&lt;/strong&gt;
        &lt;/template&gt;
    &lt;/Dialog&gt;
       </pre>
        <pre class="language-html" v-html='Prism.highlight(`
  &lt;template&gt;
    &lt;Button @click="toggle"&gt;toggle&lt;/Button&gt;
    &lt;Dialog v-model:visible="visible"
            :clickOverlayToClose="true"
            :ok="ok"
            :cancel="cancel"
    &gt;
      &lt;template v-slot:content&gt;
        &lt;div>内容11111</div&gt;
        &lt;div>内容22222</div&gt;
      &lt;/template&gt;
      &lt;template v-slot:title&gt;
        &lt;strong>标题&lt;/strong&gt;
      &lt;/template&gt;
    &lt;/Dialog&gt;
  &lt;/template&gt;
  &lt;script lang="ts"&gt;
  import Button from "../../lib/Button.vue";  //这里需要时你自己的进入的Button的路径
  import Dialog from "../lib/Dialog.vue";
  export default {
        name:"MyComponentName"
        components: {Button, Dialog},
        setup() {
             const visible = ref(false);
             const toggle = () => {
                 visible.value = !visible.value;
             };
             const ok = () => {
              };
             const cancel = () => {
              };
         return {visible, toggle, ok, cancel};
  }
    };
  &lt;/script&gt;`,Prism.languages.html,"html")'></pre>
      </div>
    </div>

    <!--    <p>示例二</p>-->
<!--    <br>-->
<!--    <Button @click="showDialog">showDialog</Button>-->
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {ref} from "vue";
import {showOpenDialog} from "../lib/openDialog";
import 'prismjs';
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
export default {
  name: "DialogDoc",
  components: {Button, Dialog},
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {
    }; 
    const cancel = () => {
    };
    const showDialog = () => {
      showOpenDialog({title:"标题",content:"内容",ok:()=>{/*OK*/},cancel:()=>{},clickOverlayToClose:true})
    };
    return {visible, toggle, ok, cancel, showDialog,Prism};

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