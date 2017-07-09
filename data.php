<?php
require 'db.php';
	// Set the JSON header
	header("Content-type: text/json");
	//conexión a la BD
	$conexion=connectDB();
	if($conexion!=null){
		$data=json_encode(select('temperatura_interna',$conexion));
		echo str_replace(' ', '', $data);
	}
?>