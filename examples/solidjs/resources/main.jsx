import { render } from "solid-js/web";
import { App } from "./App.jsx";
import "./style.css";

document.querySelectorAll("[data-vp-wp-solid-example]").forEach((target) => {
  target.id = "app";
  render(() => <App />, target);
});
