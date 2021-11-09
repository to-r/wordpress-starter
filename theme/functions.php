<?php

add_action(
	'wp_enqueue_scripts',
	function () {
		$asset_file = include get_theme_file_path('/build/index.asset.php');

		wp_enqueue_style(
			'theme',
			get_theme_file_uri('/build/index.css'),
			[],
			$asset_file['version'],
		);

		// WordPressデフォルトのjQueryをオフ
		wp_deregister_script('jquery');

		wp_enqueue_script(
			'jquery',
			get_theme_file_uri('/vendor/jquery-3.6.0.min.js'),
			[],
			$asset_file['version'],
			true,
		);

		wp_enqueue_script(
			'theme',
			get_theme_file_uri('/build/index.js'),
			$asset_file['dependencies'],
			$asset_file['version'],
			true,
		);
	}
);
