<template>
  <div class="Vue3-information">
    <div class="Vue3-information-icon">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="[`#icon-${icon}`]"></use>
      </svg>
    </div>
    <div class="Vue3-information-text">
      <h2>{{ title }}</h2>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Infor",
  props: {
    title: {
      type: String
    },
    icon:{
      type:String
    }
  }
};
</script>

<style scoped lang="scss">
.Vue3-information{
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 1.5em;
  margin-right: 0.5em;
  &-icon{
    margin-right: 12px;
    svg{
      width: 54px;
      height: 54px;
    }

  }
  &-text{
    p{
      font-size: 14px;
    }
  }
}
</style>