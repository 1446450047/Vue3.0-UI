<template>
  <div>
    <p>示例一</p>
    <br>
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
    <br>
    <br>

    <p>示例二</p>
    <br>
    <Button @click="showDialog">showDialog</Button>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {ref} from "vue";
import {showOpenDialog} from "../lib/openDialog";

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
      showOpenDialog({title:"标题",content:"内容",ok:()=>{/*OK*/},cancel:()=>{}})
    };
    return {visible, toggle, ok, cancel, showDialog};

  }
};
</script>

<style scoped lang="scss">

</style>