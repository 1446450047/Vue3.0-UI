import {createRouter, createWebHashHistory} from "vue-router";
import Doc from "./views/Doc.vue";
import SwitchDoc from "./components/SwitchDoc.vue";
import ButtonDoc from "./components/ButtonDoc.vue";
import DialogDoc from "./components/DialogDoc.vue";
import TabsDoc from "./components/TabsDoc.vue";
import Home from "./views/Home.vue";
import Document from "./components/Document.vue";

const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        {path: "/", component: Home},
        {path: "/document", component: Doc,children:[
                {path:'',component: Document},
                {path:'switch',component: SwitchDoc},
                {path:'button',component: ButtonDoc},
                {path:'dialog',component: DialogDoc},
                {path:'tabs',component: TabsDoc}
            ]}
    ]
});