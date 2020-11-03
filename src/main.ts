import "./index.scss";
import "./lib/Vue3.scss";
import {createApp} from "vue";
import App from "./App.vue";
import "github-markdown-css"
import {router} from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");