<template>
  <Switch v-model:checked="checked2" disabled/>
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue";
import {ref} from "vue";
export default {
  name: "Switch2Demo",
  components: {Switch},
  setup(){
    const checked2 = ref(false)
    return {checked2}
  }
}
</script>
