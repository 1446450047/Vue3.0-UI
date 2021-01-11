<template>
  <Switch v-model:checked="checked1" />
</template>

<script lang="ts">
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
</script>
