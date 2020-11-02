<template>
  <div class=" Vue3-Tabs">
    <div class="Vue3-Tabs-nav" ref="container">
      <div class="Vue3-Tabs-item"
           :class="{selected : t=== selected}"
           @click="select(t)"
           :ref="el=>{if(el) navItems[index] = el}"
           v-for="(t, index) in titles " :key="index">{{ t }}
      </div>
      <div class="Vue3-Tabs-item-indicator" ref="indicator"></div>
    </div>
    <div class="Vue3-Tabs-content">
      <component class="Vue3-Tabs-content-item" v-for="(c) in defaults"
                 :is="c" :class="{selected : c.props.title === selected}"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {ref, onMounted, onUpdated} from "vue";

export default {
  name: "Tabs",
  components: {Tab},
  props: {
    selected: {
      type: String
    }
  },
  setup(props: any, context: any) {
    const navItems = ref<HTMLDivElement[]>([]);
    const defaults = context.slots.default();
    const indicator = ref<HTMLDivElement>();
    const container = ref<HTMLDivElement>()
    const x = () => {
      const divs = navItems.value;
      const result = divs.filter(div => div.classList.contains("selected"))[0];
      const {width,left:left2} = result.getBoundingClientRect();
      indicator.value && (indicator.value.style.width = width + "px");
      const left1 = container.value && container.value.getBoundingClientRect().left || 0;
      indicator.value && (indicator.value.style.left = left2 - left1 + "px");
    };
    onMounted(x)
    onUpdated(x)
    defaults.forEach((tag: any) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 的 子组件必须为Tab组件");
      }
    });
    const titles = defaults.map((tag: any) => {
      return tag.props.title;
    });
    const select = (t: string) => {
      context.emit("update:selected", t);
    };
    return {defaults, titles, select, navItems, indicator,container};
  }
};
</script>

<style lang="scss">
$border-color: #d9d9d9;
$blue: #40a9ff;
.Vue3-Tabs {
  &-nav {
    position: relative;

    display: flex;
    border-bottom: 1px solid $border-color;
  }

  &-item {
    padding: 8px 0;
    margin: 0 16px;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }

    &.selected {
      color: $blue;
    }

    &-indicator {
      transition: all 250ms;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background: $blue;
      width: 100px;
    }
  }

  &-content {
    padding-top: 8px;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }

  }

}
</style>