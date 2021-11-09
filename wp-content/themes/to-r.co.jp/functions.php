<?php

add_action(
    'wp_enqueue_scripts',
    function () {

      wp_enqueue_style(
        'theme',
        get_template_directory_uri() . '/assets/main.css',
        false,
        ASSETS_VERSION,
      );

      // WordPressデフォルトのjQueryをオフ
      wp_deregister_script('jquery');

      wp_enqueue_script(
        'jquery',
        get_template_directory_uri() . '/assets/static/vendor/jquery-3.6.0.min.js',
        false,
        ASSETS_VERSION,
        true
      );

      wp_enqueue_script(
        'gsap',
        get_template_directory_uri() . '/assets/static/vendor/gsap.min.js',
        false,
        ASSETS_VERSION,
        true
      );

      wp_enqueue_script(
        'theme',
        get_template_directory_uri() . '/assets/main.js',
        array(
          'jquery',
          'gsap'
        ),
        ASSETS_VERSION,
        true
      );
    }
  );
