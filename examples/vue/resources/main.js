import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

document.querySelectorAll("[data-vp-wp-vue-example]").forEach((target) => {
  target.id = "app";
  createApp(App).mount(target);
});
