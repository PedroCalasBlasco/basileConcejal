<?php
error_reporting(0);
$nombre = $_POST['nombre'];
$correo_electronico= $_POST['email'];
$direccion = $_POST['direccion'];
$telefono=$_POST['telefono'];
$barrio=$_POST['barrio'];
$reclamo= $_POST['reclamo'];
$texto= $_POST['texto'];

$header = 'From: ' . $correo_electronico. "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $correo_electronico . " \r\n";
$mensaje .= "direccion: " . $direccion . " \r\n";
$mensaje .= "telefono: " . $telefono . " \r\n";
$mensaje .="barrio: ".$barrio . " \r\n";
$mensaje .= "reclamos: " . $reclamo . " \r\n";
$mensaje .= "texto: " . $texto . " \r\n";
$mensaje .= "Enviado el: " . date('d/m/Y', time());

$para = 'concejalbasile@concejosantafe.gov.ar';
$asunto = 'OFICINA MOVIL RECLAMO';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo'<script type="text/javascript">
    alert("mensaje enviado correctamente");
    window.location.href="form.php";
    </script>';
?>
