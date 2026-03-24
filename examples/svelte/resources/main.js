import { mount } from "svelte";
import App from "./App.svelte";
import "./style.css";

document.querySelectorAll("[data-vp-wp-svelte-example]").forEach((target) => {
  target.id = "app";
  mount(App, { target });
});
