import documentationIcon from "~icons/lucide/book-open-text?raw";
import githubIcon from "~icons/lucide/github?raw";
import typescriptIcon from "~icons/vscode-icons/file-type-typescript-official?raw";
import viteIcon from "~icons/vscode-icons/file-type-vite?raw";
import heroImg from "./assets/hero.png";
import "./style.css";

const withClass = (svg, className) => svg.replace("<svg ", `<svg class="${className}" aria-hidden="true" `);

const docsIcon = withClass(documentationIcon, "icon");
const githubPanelIcon = withClass(githubIcon, "icon");
const githubButtonIcon = withClass(githubIcon, "button-icon");
const typescriptFrameworkIcon = withClass(typescriptIcon, "framework");
const typescriptButtonIcon = withClass(typescriptIcon, "button-icon");
const viteFrameworkIcon = withClass(viteIcon, "vite");
const viteLogoIcon = withClass(viteIcon, "logo");

document.querySelectorAll("[data-vp-wp-vanilla-example]").forEach((target) => {
  target.id = "app";

  let count = 0;

  const render = () => {
    target.innerHTML = `
      <section id="center">
        <div class="hero">
          <img src="${heroImg}" class="base" width="170" height="179" alt="" />
          ${typescriptFrameworkIcon}
          ${viteFrameworkIcon}
        </div>
        <div>
          <h1>Get started</h1>
          <p>Edit <code>resources/main.js</code> and save to test <code>HMR</code></p>
        </div>
        <button id="counter" type="button" class="counter">Count is ${count}</button>
      </section>

      <div class="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          ${docsIcon}
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                ${viteLogoIcon}
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://www.typescriptlang.org" target="_blank">
                ${typescriptButtonIcon}
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          ${githubPanelIcon}
          <h2>GitHub</h2>
          <p>Browse the vp-wp source and examples.</p>
          <ul>
            <li>
              <a href="https://github.com/nabasa-dev/vp-wp/" target="_blank">
                ${githubButtonIcon}
                nabasa-dev/vp-wp
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div class="ticks"></div>
      <section id="spacer"></section>
    `;

    target.querySelector("#counter")?.addEventListener("click", () => {
      count += 1;
      render();
    });
  };

  render();
});
