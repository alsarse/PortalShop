<?php 

	//Incluir DTO y Conexion. 
	include_once('../objects/database.php');
	include_once('../objects/usuarios.php');

	//Instanciar la conexcion con la base de datos. 
	$database = new Database(); 
	$db = $database->getConnection();
 
	// Crear objeto Usuario
	$user = new Usuario($db);
 
	// Contraseña del usuario
	$data = json_decode(file_get_contents("php://input"));     
 
	$user->password = $data->password;
	 
	// Ejercutar funcion validUser: controllar que los campos coincidan. 
	$user->validUser();
 
	
	$user_data[] = array(
	    "username" =>  $user->username,
	    "password" => $user->password
	);

	/*
		Contemplar si :
					$stmt esta vacio ? -> El usuario no existe; 
					$stmt devuelve 1 valor? ->
						!= $stmt['password'] ? -> La contraseña es incorrecta; 
						 = $stmt['password'] ? -> Login Correcto; $_SESSION['user']="username";  
	*/
 
	//  Devolver en formato JSON ??? NO ES NECESARIO
	print_r(json_encode($user_data));
?>