<?php 

	//Cabeceras de recepción y envio de datos 
	header('Access-Control-Allow-Origin: *');
	

	//Incluir DTO y Conexion. 
	include_once('../objects/database.php');
	include_once('../objects/usuarios.php');

	//Instanciar la conexcion con la base de datos. 
	$database = new Database(); 
	$db = $database->getConnection();
 
	// Crear objeto Usuario
	$user = new Usuario($db);
 
	// Contraseña del usuario
	session_start(); 			
	$user->logout(); 

?>