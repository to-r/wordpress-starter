<?php

add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_style('main', get_theme_file_uri('assets/main.css'));
		wp_enqueue_script('main', get_theme_file_uri('assets/main.js'), [], '', true);
	}
);
