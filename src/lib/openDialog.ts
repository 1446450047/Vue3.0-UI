import {createApp, h} from "vue";
import Dialog from "./Dialog.vue";

const showOpenDialog = (options: any) => {
    const {title, content,ok,cancel} = options;
    const div = document.createElement("div");
    document.body.appendChild(div);
    const app = createApp({
        render() {
            return h(
                // @ts-ignore
                Dialog,
                {
                    visible: true,
                    "onUpdate:visible": (newVisible: any) => {
                        if (newVisible === false) {
                            app.unmount(div);
                            div.remove();
                        }
                    },
                    ok,
                    cancel
                }, {title, content}
            );
        }
    });
    app.mount(div);
};

export {showOpenDialog};