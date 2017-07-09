<?php
require 'db.php';
	// Set the JSON header
	header("Content-type: text/json");
	//conexión a la BD
	$conexion=connectDB();
	if($conexion!=null){
		echo json_encode(select('temperatura_interna',$conexion));
	}
?>