<script>
  import IconBookOpenText from "~icons/lucide/book-open-text";
  import IconGithub from "~icons/lucide/github";
  import IconTypescript from "~icons/vscode-icons/file-type-typescript-official";
  import IconVite from "~icons/vscode-icons/file-type-vite";
  import heroImg from "./assets/hero.png";

  let count = 0;
</script>

<section id="center">
  <div class="hero">
    <img src={heroImg} class="base" width="170" height="179" alt="" />
    <IconTypescript class="framework" />
    <IconVite class="vite" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>resources/main.js</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter" onclick={() => (count += 1)}>Count is {count}</button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <IconBookOpenText class="icon" aria-hidden="true" />
    <h2>Documentation</h2>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank">
          <IconVite class="logo" aria-hidden="true" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://www.typescriptlang.org" target="_blank">
          <IconTypescript class="button-icon" aria-hidden="true" />
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <IconGithub class="icon" aria-hidden="true" />
    <h2>GitHub</h2>
    <p>Browse the vp-wp source and examples.</p>
    <ul>
      <li>
        <a href="https://github.com/nabasa-dev/vp-wp/" target="_blank">
          <IconGithub class="button-icon" aria-hidden="true" />
          nabasa-dev/vp-wp
        </a>
      </li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
