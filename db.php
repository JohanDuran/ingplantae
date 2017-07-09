<?php
function connectDB(){
    try {
        $mbd = new PDO('mysql:host=localhost;dbname=ingplantaeDB', 'johanduran', '');
        return $mbd;
    } catch (PDOException $e) {
        print "¡Error!: " . 'Error al conectar a la Base de Datos' . "<br/>";
        return null;
    }
}

function select($var, $mbd){
    $response = array();
    $fecha = new DateTime();
    $time=$fecha->getTimestamp();
    $dia = 24 * 60 * 60;
    $ayer=$time-$dia;
    $hoy=$time+$dia;
    echo date('l jS \of F Y h:i:s A');

    $query=$mbd->query('SELECT '.$var.', fecha_stamp from variables where fecha_stamp BETWEEN '.$ayer.' AND '.$hoy);
    if($query!=null){
        foreach($query as $fila) {
            $response[]=[$fila['fecha_stamp'],$fila['temperatura_interna']];
        }
        $mbd = null;        
        return $response;
    }else{
        return null;
    }
}

function insert($vars, $mbd){
    $sentencia = $mbd->prepare("INSERT INTO variables (temperatura_interna, humedad_relativa, radiacion, humedad_sustrato_A, humedad_sustrato_B) VALUES (:temperatura_interna, :humedad_relativa, :radiacion, :humedad_sustrato_A, :humedad_sustrato_B)");
    $sentencia->bindParam(':temperatura_interna', $vars['temperatura_interna']);
    $sentencia->bindParam(':humedad_relativa', $vars['humedad_relativa']);
    $sentencia->bindParam(':radiacion', $vars['radiacion']);
    $sentencia->bindParam(':humedad_sustrato_A', $vars['humedad_sustrato_A']);
    $sentencia->bindParam(':humedad_sustrato_B', $vars['humedad_sustrato_B']);
    $sentencia->execute();
}

?>