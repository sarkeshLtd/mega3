<?php

/*
 * Function for load classes and files
 */
function loadFiles($class){
	$class = str_replace('\\','/',$class);
	$class .= '.php';
	$class = strtolower($class);
	if(file_exists(MEGA_PATH . $class)) require_once(MEGA_PATH . $class);
	if(file_exists($class)) require_once($class);
}
spl_autoload_register('loadFiles');
?>
