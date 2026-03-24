<?php

/**
 * Plugin Name: vp-wp Vue Example
 * Description: Vue-based WordPress plugin example for @nabasa/vp-wp.
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
        'Vue Example',
        'Vue',
        'manage_options',
        'vp-wp-vue-example',
        function (): void {
            echo '<div class="wrap">';
            echo '<div data-vp-wp-vue-example></div>';
            echo '</div>';
        },
        'dashicons-admin-generic',
    );

    add_action('load-' . $page_hook, function (): void {
        add_action('admin_enqueue_scripts', function (): void {
            /**
             * @var \Nabasa\VitePlus\Assets $vp_wp
             */
            $vp_wp = assets(__DIR__ . '/assets/dist', 'vp-wp-vue-example');

            $vp_wp->enqueue('resources/main.js', [
                'handle' => 'vp-wp-vue-example',
                'in_footer' => true,
            ]);
        });
    });
});
