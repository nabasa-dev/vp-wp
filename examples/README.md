# WordPress Plugin Examples

These example plugins show how `@nabasa/vp-wp` fits into real WordPress setups for React, Vue, Svelte, SolidJS, and vanilla JavaScript.

Use them when you want a concrete starting point instead of a minimal snippet.

## What to inspect

- `composer.json` shows the Composer dependency on `nabasa/vp-wp`
- `package.json` lists the frontend dependencies for each framework
- `vite.config.js` shows a practical Vite+ config with `wordpress()` and `wordpressExternals()`
- `vp-wp-*.php` shows the plugin bootstrap and admin page registration
- `resources/*` contains the frontend entry and example UI

## Run an example locally

To try an example in WordPress, copy it into your WordPress plugins directory, then install its PHP and JavaScript dependencies from inside the copied folder:

```sh
cp -R examples/react /path/to/wp-content/plugins/vp-wp-react-example
cd /path/to/wp-content/plugins/vp-wp-react-example
composer install
vp install
```

Each example loads `nabasa/vp-wp` through Composer, so run `composer install` before you activate the plugin.

Then:

1. Activate the example plugin in WordPress.
2. Open the matching top-level admin page in the WordPress sidebar.
3. Run `vp dev` during development, or `vp build` to generate production assets.

## Example matrix

| Framework | Folder                          |
| --------- | ------------------------------- |
| React     | [`examples/react`](./react)     |
| Vue       | [`examples/vue`](./vue)         |
| Svelte    | [`examples/svelte`](./svelte)   |
| SolidJS   | [`examples/solidjs`](./solidjs) |
| Vanilla   | [`examples/vanilla`](./vanilla) |

## Notes

- Each example writes `manifest.json` and `vite-dev-server.json` to `assets/dist`.
- Each example registers a simple top-level admin page in WordPress.
- The React example uses `wordpressExternals()` with the default `wordpress+react` preset and declares `react` and `react-dom` as WordPress script dependencies.
- The other examples keep their framework runtime bundled and use `wordpress()` for WordPress-friendly manifest and output defaults.
- Each example expects `vendor/autoload.php` to exist, so `composer install` is a required part of setup.
