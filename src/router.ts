import {createRouter, createWebHashHistory} from "vue-router";
import Doc from "./views/Doc.vue";
import Switch from "./components/Switch.vue";
import Button from "./components/Button.vue";
import Dialog from "./components/Dialog.vue";
import Tabs from "./components/Tabs.vue";
import Home from "./views/Home.vue";

const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        {path: "/", component: Home},
        {path: "/document", component: Doc,children:[
                {path:'switch',component: Switch},
                {path:'button',component: Button},
                {path:'dialog',component: Dialog},
                {path:'tabs',component: Tabs}
            ]}
    ]
});