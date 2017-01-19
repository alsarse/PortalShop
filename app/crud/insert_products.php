<?php 

	//Cabeceras de recepción y envio de datos 
	header('Access-Control-Allow-Origin: *');
	//header('Content-Type: application/json; charset="UTF-8"');

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

	$sum=0; 

	$hist->usuario = $user->getSession();
	$hist->fecha = date("Y-m-d H:i:s");	

	for($i=0; $i<count($data); $i++){

		$hist->prod_id = $data[$i]->id;
		$hist->precio = $data[$i]->price;
		$hist->cantidad = $data[$i]->uds;

		$insert= $hist->compraProducto();

		if(!$insert)
			$flag=false;

		$sum++;
	}

	$response = array(
	    "insert" =>  $flag,
	    "total" => $sum
	);

	print_r(json_encode($response));
?>