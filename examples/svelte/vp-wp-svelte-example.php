<?php

/**
 * Plugin Name: vp-wp Svelte Example
 * Description: Svelte-based WordPress plugin example for @nabasa/vp-wp.
 * Version: 0.0.0
 * Author: Nabasa
 */

declare(strict_types=1);

use function Nabasa\VitePlus\assets;

if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

add_action('admin_menu', function (): void {
    $page_hook = add_menu_page(
        'Svelte Example',
        'Svelte',
        'manage_options',
        'vp-wp-svelte-example',
        function (): void {
            echo '<div class="wrap">';
            echo '<div data-vp-wp-svelte-example></div>';
            echo '</div>';
        },
        'dashicons-admin-generic',
    );

    add_action('load-' . $page_hook, function (): void {
        add_action('admin_enqueue_scripts', function (): void {
            /**
             * @var \Nabasa\VitePlus\Assets $vp_wp
             */
            $vp_wp = assets(__DIR__ . '/assets/dist', 'vp-wp-svelte-example');

            $vp_wp->enqueue('resources/main.js', [
                'handle' => 'vp-wp-svelte-example',
                'in_footer' => true,
            ]);
        });
    });
});
