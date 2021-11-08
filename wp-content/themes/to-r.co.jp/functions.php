<?php

add_action(
    'wp_enqueue_scripts',
    function () {

      wp_enqueue_style(
        'theme',
        get_template_directory_uri() . '/assets/main.css',
        false,
        'v1.0.0',
      );

      wp_deregister_script('jquery');

      wp_enqueue_script(
        'jquery',
        get_template_directory_uri() . '/assets/static/vendor/jquery-3.6.0.min.js',
        false,
        'v1.0.0',
        true
      );

      wp_enqueue_script(
        'theme',
        get_template_directory_uri() . '/assets/main.js',
        array(
          'jquery'
        ),
        'v1.0.0',
        true
      );
    }
  );
