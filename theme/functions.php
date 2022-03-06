<?php

add_action(
	'wp_enqueue_scripts',
	function () {
		// $asset_file = include get_theme_file_path('/build/index.asset.php');

		// wp_enqueue_style(
		// 	'theme',
		// 	get_theme_file_uri('/build/index.css'),
		// 	[],
		// 	$asset_file['version'],
		// );

		// wp_enqueue_script(
		// 	'theme',
		// 	get_theme_file_uri('/build/index.js'),
		// 	$asset_file['dependencies'],
		// 	$asset_file['version'],
		// 	true,
		// );
	}
);
