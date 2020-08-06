import {createApp} from "vue";
import App from "./App.vue";
import "./index.css";
import {createWebHashHistory, createRouter} from "vue-router";
import Hhh from "./components/Hhh.vue"
import Xxx from "./components/Xxx.vue"
const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {        path: '/',component: Hhh    },
        {        path: '/xxx',component: Xxx   }
    ]
});
const app = createApp(App)
app.use(router)
app.mount("#app");