<template>
  <article class="markdown-body">
    <h1>开始使用</h1>
    &nbsp;
    <p>在使用之前请先 <a href="#/document/install">安装</a> 我的最牛X的组件库,以免你错过最好的东西</p>
    &nbsp;
    <p>安装之后还请在使用的地方引用你要使用的最牛X的UI组件</p>
    &nbsp;
    <pre><code>import {Button, Tabs, Switch, Dialog} from "Vue3.0-UI"</code></pre>
    就可以使用我提供的组件了。
    <h2>我觉得必须要给你做一个演示</h2>
    <pre><code>&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button} from "king-ui"
  export default {
    components: {Button}
  }
&lt;/script&gt;
 </code></pre>
  </article>
</template>

<script lang="ts">
export default {
  name: "Start"
};
</script>
