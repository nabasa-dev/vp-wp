import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./style.css";

document.querySelectorAll("[data-vp-wp-react-example]").forEach((target) => {
  target.id = "app";
  const root = createRoot(target);

  root.render(<App />);
});
