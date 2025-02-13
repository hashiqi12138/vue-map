import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { MapObjectFactory } from "../packages/core/MapRenderFactory";
import { MapRenderElement } from "../packages/core/MapRenderInterface";

const a = new MapRenderElement("layer")
console.log(a)

createApp(App).mount("#app");
