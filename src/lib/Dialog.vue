<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="Vue3-dialog-overlay" @click="clickOverlayToClose"></div>
      <div class="Vue3-dialog-wrapper">
        <div class="Vue3-dialog">
          <header>
            <slot name="title"/>
            <span class="Vue3-dialog-close" @click="close"></span></header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button level="main" @click="ok">确定</Button>
            <Button @click="cancel">取消</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
  name: "Dialog",
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    clickOverlayToClose: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function
    },
  },
  setup(props:any, context:any) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const clickOverlayToClose = () => {
      props.clickOverlayToClose && close();
    };
    //点击ok后先执行外面传进来的ok，然后再运行这个ok
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    //点击cancel后执行外面传进来的cancel之后再关闭
    const cancel = () => {
      props.cancel && props.cancel();
      close();
    };

    return {close, clickOverlayToClose, ok, cancel};
  }
};
</script>

<style scoped lang="scss">
$overlay: #969595;
$wrapperBG: #fff;
$bottomColor: #969595;
$radius: 4px;
.Vue3-dialog-overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: $overlay;
  opacity: 0.75;
}

.Vue3-dialog-wrapper {
  min-width: 15em;
  background: $wrapperBG;
  border-radius: $radius;
  z-index: 11;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  > .Vue3-dialog {
    padding: 12px 16px;

    > header {
      font-size: 20px;
      display: flex;
      justify-content: space-between;
      align-content: center;
      padding-bottom: 12px;
      border-bottom: 1px solid $bottomColor;
      text-align: center;

      > span {
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
        cursor: pointer;

        &::before, &::after {
          content: " ";
          position: absolute;
          height: 100%;
          width: 1px;
          background: $bottomColor;
          left: 50%;
        }

        &::before {
          transform: rotate(-45deg);
        }

        &::after {
          transform: rotate(45deg);
        }
      }
    }

    > main {
      padding: 20px;
      border-bottom: 1px solid $bottomColor;
    }

    > footer {
      display: flex;
      padding-top: 20px;

      > button:first-child {
        margin-right: 50px;
      }
    }
  }
}
</style>