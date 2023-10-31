import { createApp } from "vue";
import App from "./App.vue";
import { Tabbar, TabbarItem } from "vant";
import "amfe-flexible";
import { handleMaxWidth } from "./assets/utils/util";
handleMaxWidth();
window.addEventListener("resize", handleMaxWidth);
const app = createApp(App);
app.use(Tabbar).use(TabbarItem);
app.mount("#app");
