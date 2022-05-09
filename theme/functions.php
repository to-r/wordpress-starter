<?php

add_action(
	'wp_enqueue_scripts',
	function () {
		$manifest_json = get_theme_file_path('/build/manifest.json');
		$hash = json_decode(file_get_contents($manifest_json), true);

		wp_enqueue_style('main', get_theme_file_uri($hash['main.css']));
		wp_enqueue_script('main', get_theme_file_uri($hash['main.js']), [], '', true);
	}
);
