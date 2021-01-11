<template>
  <div>
    <h1>示例一: 支持theme</h1>
  <div class="demo">
    <h2>常规用发</h2>
    <div class="demo-component">
      <Button
          @click="onclick"
          @mouseover="onmouseover"
          size="normal"
      >default
      </Button>
      <Button theme="button">button</Button>
      <Button theme="link">link</Button>
      <Button theme="text">text</Button>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Button theme="button"/&gt;button&lt;Button&gt;</pre>
      <pre class="language-html" v-html='Prism.highlight(`
   &lt;template&gt;
   &lt;Button
          @click="onclick"
          @mouseover="onmouseover"
          size="normal"
    &gt;default
    &lt;/Button&gt;
    &lt;Button theme="button"&gt;button&lt;Button/&gt;
    &lt;Button theme="link"&gt;link&lt;Button/&gt;
    &lt;Button theme="text"&gt;text&lt;Button/&gt;
  &lt;/template>
  &lt;script lang="ts">
  import Button from "../../lib/Button.vue";  //这里需要时你自己的进入的Button的路径
  export default {
        name:"MyComponentName"
        components: {Button},
        setup() {
            const onclick = () => {
            };
            const onmouseover = () => {
            };
            return {onclick, onmouseover};
        }
    };
  &lt;/script&gt;`,Prism.languages.html,"html")'></pre>
    </div>
  </div>
    <h1>示例二: 支持size</h1>
  <div class="demo">
    <h2>常规用发</h2>
    <div class="demo-component">
      <Button size="big">big</Button>&nbsp;&nbsp;
      <Button size="normal">normal</Button>&nbsp;&nbsp;
      <Button size="small">small</Button>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Button size="big"/&gt;big&lt;Button&gt;</pre>
      <pre class="language-html" v-html='Prism.highlight(`
  &lt;template&gt;
      &lt;Button size="big"&gt;big&lt;/Button&gt;&nbsp;&nbsp;
      &lt;Button size="normal"&gt;normal&lt;/Button&gt;&nbsp;&nbsp;
      &lt;Button size="small"&gt;small&lt;/Button&gt;
  &lt;/template>
  &lt;script lang="ts">
  import Button from "../../lib/Button.vue";  //这里需要时你自己的进入的Button的路径
  export default {
        name:"MyComponentName"
        components: {Button},
        setup() {
          //可以自定义为按钮绑定事件
        }
    };
  &lt;/script&gt;`,Prism.languages.html,"html")'></pre>
    </div>
  </div>
    <h1>示例三:支持level</h1>
  <div class="demo">
    <h2>常规用发</h2>
    <div class="demo-component">
      <Button>default</Button>&nbsp;&nbsp;
      <Button level="main">main button</Button>&nbsp;&nbsp;
      <Button level="danger">danger button</Button>
      <br>
      <br>
      <Button theme="link">default link</Button>&nbsp;&nbsp;
      <Button theme="link" level="main">main link</Button>&nbsp;&nbsp;
      <Button theme="link" level="danger">danger link</Button>

      <br>
      <br>
      <Button theme="text">default link</Button>&nbsp;&nbsp;
      <Button theme="text" level="main">main link</Button>&nbsp;&nbsp;
      <Button theme="text" level="danger">danger link</Button>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Button level="main"/&gt;big&lt;Button&gt;</pre>
      <pre class="language-html" v-html='Prism.highlight(`
  &lt;template&gt;
      &lt;Button&gt;default&lt;/Button&gt&nbsp;&nbsp;
      &lt;Button level="main"&gt;main button&lt;/Button&gt&nbsp;&nbsp;
      &lt;Button level="danger"&gt;danger button&lt;/Button&gt
      &lt;br>
      &lt;br>
      &lt;Button theme="link"&gt;default link&lt;/Button&gt&nbsp;&nbsp;
      &lt;Button theme="link" level="main"&gt;main link&lt;/Button&gt&nbsp;&nbsp;
      &lt;Button theme="link" level="danger"&gt;danger link&lt;/Button&gt
      &lt;br>
      &lt;br>
      &lt;Button theme="text"&gt;default link&lt;/Button&gt&nbsp;&nbsp;
      &lt;Button theme="text" level="main"&gt;main link&lt;/Button&gt&nbsp;&nbsp;
      &lt;Button theme="text" level="danger"&gt;danger link&lt;/Button&gt
  &lt;/template>
  &lt;script lang="ts">
  import Button from "../../lib/Button.vue";  //这里需要时你自己的进入的Button的路径
  export default {
        name:"MyComponentName"
        components: {Button},
        setup() {
          //可以自定义为按钮绑定事件
        }
    };
  &lt;/script&gt;`,Prism.languages.html,"html")'></pre>
    </div>
  </div>

    <h1>示例四:支持disable</h1>
    <div class="demo">
    <h2>常规用发</h2>
    <div class="demo-component">
      <Button disable>disable</Button>
      <Button disable theme="link">disable link</Button>
      <Button disable theme="text">disable text</Button>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Button disabled theme="link"/&gt;big&lt;Button&gt;</pre>
      <pre class="language-html" v-html='Prism.highlight(`
  &lt;template&gt;
    &lt;Button disable&gt;disable&lt;/Button&gt;
    &lt;Button disable theme="link"&gt;disable link&lt;/Button&gt;
    &lt;Button disable theme="text"&gt;disable text&lt;/Button&gt;
  &lt;/template>
  &lt;script lang="ts">
  import Button from "../../lib/Button.vue";  //这里需要时你自己的进入的Button的路径
  export default {
        name:"MyComponentName"
        components: {Button},
        setup() {
          //可以自定义为按钮绑定事件
        }
    };
  &lt;/script&gt;`,Prism.languages.html,"html")'></pre>
    </div>
  </div>

    <h1>示例五: 支持loading</h1>

  <div class="demo">
    <h2>常规用发</h2>
    <div class="demo-component">
      <Button loading>loading</Button>

    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Button loading /&gt;big&lt;Button&gt;</pre>
      <pre class="language-html" v-html='Prism.highlight(`
  &lt;template&gt;
       &lt;Button loading&gt;loading&lt;/Button&gt;
  &lt;/template>
  &lt;script lang="ts">
  import Button from "../../lib/Button.vue";  //这里需要时你自己的进入的Button的路径
  export default {
        name:"MyComponentName"
        components: {Button},
        setup() {
          //可以自定义为按钮绑定事件
        }
    };
  &lt;/script&gt;`,Prism.languages.html,"html")'></pre>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
    import Button from "../lib/Button.vue";
    import 'prismjs';
    import 'prismjs/themes/prism.css'
    const Prism = (window as any).Prism

    export default {
        name: "ButtonDoc",
        components: {Button},
        setup() {
            const onclick = () => {
            };
            const onmouseover = () => {
            };
            return {onclick, onmouseover,Prism};
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