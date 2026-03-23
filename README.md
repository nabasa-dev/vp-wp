# vp-wp

`vp-wp` is a WordPress integration plugin for Vite with a Vite+ first workflow.

It keeps the old `vite-for-wp` idea, but rewrites the package around a smaller API, TypeScript source, modern Vite defaults, and a cleaner PHP runtime.

## Install

```sh
pnpm add -D vite vite-plus @nabasa/vp-wp
```

If you want to use the PHP helpers through Composer:

```sh
composer require vp-wp/vp-wp
```

If you do not use Composer, require `vp-wp.php` manually.

## Vite+ config

```ts
import { defineConfig } from "vite-plus";
import { wordpress, wordpressExternals } from "@nabasa/vp-wp";

export default defineConfig({
  plugins: [
    wordpress({
      entry: {
        app: "resources/app.ts",
      },
      outDir: "assets/dist",
    }),
    wordpressExternals(),
  ],
});
```

Then use the standard Vite+ commands:

```sh
vp dev
vp build
```

`wordpress()` enables WordPress-friendly defaults:

- `base: './'`
- `build.manifest: 'manifest.json'`
- `build.modulePreload: false`
- `css.devSourcemap: true`
- a development manifest at `vite-dev-server.json`

`wordpressExternals()` externalizes common WordPress globals plus React by default.

If you are not using Vite+, you can use the same plugin with `defineConfig` from `vite`.

## PHP runtime

```php
<?php

use function Nabasa\Vite\assets;

$vite = assets( __DIR__ . '/assets/dist' );

add_action( 'wp_enqueue_scripts', function () use ( $vite ): void {
	$vite->enqueue(
		'resources/app.ts',
		[
			'handle' => 'theme-app',
			'dependencies' => [ 'react', 'react-dom' ],
			'in_footer' => true,
		]
	);
} );
```

Public PHP helpers:

- `Nabasa\Vite\assets()`
- `Nabasa\Vite\register_asset()`
- `Nabasa\Vite\enqueue_asset()`
- `Nabasa\Vite\asset_url()`

Public PHP filters:

- `nabasa_vite/manifest_data`
- `nabasa_vite/development_assets`
- `nabasa_vite/production_assets`
- `nabasa_vite/{scope}/manifest_data`
- `nabasa_vite/{scope}/development_assets`
- `nabasa_vite/{scope}/production_assets`

Use `assets()` when you want to bind a manifest directory once and reuse it:

```php
<?php

use function Nabasa\Vite\assets;

$vite = assets( __DIR__ . '/assets/dist' );

add_action( 'wp_enqueue_scripts', function () use ( $vite ): void {
	$vite->enqueue( 'resources/app.ts', [
		'handle' => 'theme-app',
	] );
} );
```

Pass a second argument to `assets()` when you want plugin- or theme-specific hooks:

```php
<?php

use function Nabasa\Vite\assets;

$vite = assets( __DIR__ . '/assets/dist', 'windpress' );

add_filter( 'nabasa_vite/windpress/production_assets', function ( array $assets ) {
	return $assets;
} );
```

Scoped helpers fire both the shared `nabasa_vite/*` hooks and the scoped `nabasa_vite/{scope}/*` hooks. The scope is normalized with `sanitize_key()`.

If you prefer the function API, `register_asset()` and `enqueue_asset()` accept the same scope as a fourth argument.

Supported PHP options:

- `handle`
- `dependencies`
- `css_dependencies`
- `css_media`
- `css_only`
- `in_footer`

During `vp dev`, `vp-wp` reads `vite-dev-server.json` and loads assets from the live dev server. During `vp build`, it reads `manifest.json` and registers the built JavaScript and extracted CSS files.

Use `asset_url()` when you need the public URL for a file inside the built assets directory without going through the manifest:

```php
<?php

use function Nabasa\Vite\asset_url;

$logo_url = asset_url( __DIR__ . '/assets/dist', 'images/logo.svg' );
```

## Externals presets

```ts
wordpressExternals({ preset: "wordpress" });
```

Available presets:

- `wordpress`
- `wordpress+react`

You can also extend or trim the map:

```ts
wordpressExternals({
  include: {
    "@acme/ui": "AcmeUI",
  },
  exclude: ["lodash"],
});
```

## Breaking changes from `vite-for-wp`

- `v4wp()` becomes `wordpress()`
- `wp_scripts()` becomes `wordpressExternals()`
- `create_config()` is removed
- JS utility exports are removed
- PHP namespace changes from `Kucrut\Vite` to `Nabasa\Vite`
- PHP option keys use snake case, such as `css_dependencies` and `in_footer`

## Credits

`vp-wp` is a rewrite inspired by [`@kucrut/vite-for-wp`](https://github.com/kucrut/vite-for-wp) by Dzikri Aziz.

## Development

```sh
vp install
vp check
vp test
vp pack
```

### CI/CD

GitHub Actions workflows live in `.github/workflows/`:

- `ci.yml` runs Composer validation, PHP lint, `vp check`, `vp test run`, `vp pack`, and pkg.pr.new preview publishes for pushes and pull requests
- `release.yml` publishes to npm and pkg.pr.new when you push a semver tag that matches `package.json`

The JavaScript jobs use `voidzero-dev/setup-vp` as recommended by the Vite+ CI guide.

The preview publish uses `vp dlx pkg-pr-new publish --packageManager=pnpm`. Before it can post preview URLs, install the pkg.pr.new GitHub App on the repository. The release workflow runs the same preview publish after npm publish so official tags also get preview artifacts.

For npm publishing, configure this repository as an npm trusted publisher. For Composer distribution, point Packagist at the GitHub repository so tags are picked up automatically.
