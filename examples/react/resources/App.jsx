import IconBookOpenText from "~icons/lucide/book-open-text";
import IconGithub from "~icons/lucide/github";
import IconTypescript from "~icons/vscode-icons/file-type-typescript-official";
import IconVite from "~icons/vscode-icons/file-type-vite";
import { useState } from "react";
import heroImg from "./assets/hero.png";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" />
          <IconTypescript className="framework" />
          <IconVite className="vite" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>resources/main.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button id="counter" type="button" className="counter" onClick={() => setCount((value) => value + 1)}>
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <IconBookOpenText className="icon" aria-hidden="true" />
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <IconVite className="logo" aria-hidden="true" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://www.typescriptlang.org" target="_blank">
                <IconTypescript className="button-icon" aria-hidden="true" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <IconGithub className="icon" aria-hidden="true" />
          <h2>GitHub</h2>
          <p>Browse the vp-wp source and examples.</p>
          <ul>
            <li>
              <a href="https://github.com/nabasa-dev/vp-wp/" target="_blank">
                <IconGithub className="button-icon" aria-hidden="true" />
                nabasa-dev/vp-wp
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}
