<template>
  <div>导航栏
    <router-link to="/">首页</router-link>

    <router-link to="/xxx">xxx</router-link>
  </div>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
