<template>
  <article class="markdown-body">
    <h2>介绍</h2>
    <p>Vue3.0-UI是我大概学习了一些Vue3的一些新特性后所封装的一些简单的UI组件，是主要基于 <a href="https://vue3js.cn/">Vue3</a>和 <a href="https://www.typescriptlang.org/">Typescript</a></p>
    &nbsp;
    <p>这个组件库是我基于Vue3的compositionAPI所编写的，主要是对我学习了Vue3的一些知识的总结，整个库由我自己编写，包括主页的编写和技术实现
    其中主页设计使用到了 <a href="https://dribbble.com/shots/13934987/attachments/5545918?mode=media">Dribbble</a>上的一个页面的设计风格
      页面的代码使用涉及到了 <code>github-markdown-css</code>的一个库，如果有想学习Vue3的小伙伴可以看看我的源代码 ⬇⬇⬇⬇⬇⬇
      
    </p>
    <p>源码链接： <a href="https://github.com/1446450047/Vue3.0-UI">https://github.com/1446450047/Vue3.0-UI</a></p>
  </article>
</template>

<script lang="ts">
export default {
  name: "Introduce"
};
</script>

<style  lang="scss">
article{
  padding: 0 100px;
  @media (max-width:500px) {
    padding: 0 10px;
  }
}
</style>