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
	$data = json_decode(file_get_contents("php://input"));      

	$user->username = $data->username;
	$user->password = $data->password; 
	 
	// Ejercutar funcion validUser: controllar que los campos coincidan. 
	$stmt =$user->validUser();
	$row = $stmt->fetch(PDO::FETCH_ASSOC);
	
	if($row['password']== md5($user->password)){
		$valid = true; 
		$_SESSION['user'] = $user->username; 
	}else{
		$valid= false; 
	}
	
	$user_data = array(
	    "username" =>  $user->username,
	    "login" => $valid,
	    "password" => $user->password
	);

	print_r(json_encode($user_data));
?>