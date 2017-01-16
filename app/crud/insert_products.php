<?php 

	//Cabeceras de recepción y envio de datos 
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json; charset="UTF-8"');

	//Incluir las DTO y Conexion 
	include_once('../objects/database.php');
	include_once('../objects/historicos.php');
	include_once('../objects/usuarios.php');

	//Instanciar la conexcion con la base de datos.
	$database = new Database();
	$db = $database->getConnection(); 

	//Inicializar el objeto; 
	$user = new Usuario ($db);
	$hist = new Historico($db);
	
	$data = json_decode(file_get_contents("php://input"));
	
	$flag= true; 

	$hist->user = $user.getSesion();
	$hist->fecha = time();	

	for($i=0; $i<count($data); i++){
		$hist->prod_id = $data[i].id;
		$hist->precio = $data[i].price;
		$hist->cantidad = $data[i].uds;

		$insert= $hist->compraProducto();
		if(!$insert){
			$flag=false;
		}
	}


	print_r(json_encode($flag));
	
	
	//Consultas;
	

?>