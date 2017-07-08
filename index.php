<?php 
	$mbd = new PDO('mysql:host=localhost;dbname=ingplantaeDB', 'johanduran', '');
    foreach($mbd->query('SELECT * from variables') as $fila) {
        print_r($fila);
    }	
	require 'views/index.view.php'
?>