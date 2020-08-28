<template>
  <div>
    <p>示例一</p>
    <br>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible" :clickOverlayToClose="true"/>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {ref} from "vue";

export default {
  name: "DialogDoc",
  components: {Button, Dialog},
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    return {visible, toggle};

  }
};
</script>

<style scoped lang="scss">

</style>