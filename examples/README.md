# WordPress Plugin Examples

These examples are small WordPress plugins that show how to use `@nabasa/vp-wp` with React, Vue, Svelte, SolidJS, and vanilla JavaScript.

Use them as references to see what a complete plugin setup looks like for each framework.

## What To Inspect

- `composer.json` shows the PHP dependency on `nabasa/vp-wp`
- `package.json` shows the JavaScript dependencies for the framework
- `vite.config.js` shows how `wordpress()` and `wordpressExternals()` are configured
- `vp-wp-*.php` shows the plugin bootstrap and admin page registration
- `resources/*` shows the frontend entry and UI implementation

## Run One Locally

If you want to try one in WordPress, copy an example into your WordPress plugins directory and install its PHP and JavaScript dependencies from the copied folder:

```sh
cp -R examples/react /path/to/wp-content/plugins/vp-wp-react-example
cd /path/to/wp-content/plugins/vp-wp-react-example
composer install
vp install
```

Each example loads `nabasa/vp-wp` through Composer, so run `composer install` before activating the plugin.

Then:

1. Activate the example plugin in WordPress.
2. Open the matching top-level admin page in the WordPress sidebar.
3. Run `vp dev` for local development or `vp build` for a production bundle.

## Example matrix

| Framework | Folder             | Plugin file                                  | Top-level menu |
| --------- | ------------------ | -------------------------------------------- | -------------- |
| React     | `examples/react`   | `examples/react/vp-wp-react-example.php`     | `React`        |
| Vue       | `examples/vue`     | `examples/vue/vp-wp-vue-example.php`         | `Vue`          |
| Svelte    | `examples/svelte`  | `examples/svelte/vp-wp-svelte-example.php`   | `Svelte`       |
| SolidJS   | `examples/solidjs` | `examples/solidjs/vp-wp-solidjs-example.php` | `SolidJS`      |
| Vanilla   | `examples/vanilla` | `examples/vanilla/vp-wp-vanilla-example.php` | `Vanilla`      |

## Notes

- Each example writes `manifest.json` and `vite-dev-server.json` into `assets/dist`.
- Each example registers a simple top-level admin page.
- The React example uses `wordpressExternals()` with the default `wordpress+react` preset and declares `react` plus `react-dom` as WordPress script dependencies.
- The other examples keep their framework runtime bundled and use `wordpress()` for the WordPress-friendly manifest and output defaults.
- Each example expects `vendor/autoload.php` to exist, so `composer install` is part of the setup.
