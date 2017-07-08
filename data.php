<?php
	// Set the JSON header
	header("Content-type: text/json");

	// The x value is the current JavaScript time, which is the Unix time multiplied 
	// by 1000.
	$x1 = time() * 1000;
	// The y value is a random number
	$y1 = rand(0, 100);


	// Create a PHP array and echo it as JSON
	$ret = [$x1, $y1];
	echo json_encode($ret);
?>