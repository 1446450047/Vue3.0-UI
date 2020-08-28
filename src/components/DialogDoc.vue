<template>
  <p>示例一</p>
  <br>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x"/>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {ref} from 'vue'
export default {
  name: "DialogDoc",
  components: {Button, Dialog},
  setup() {
    const x = ref(false)
    const toggle = ()=>{
      x.value= !x.value
    }
    return {x,toggle};

  }
};
</script>

<style scoped lang="scss">

</style>