<?php 

	//Incluir DTO y Conexion. 
	include_once('../objects/database.php');
	include_once('../objects/productos.php');

	//Instanciar la conexcion con la base de datos. 
	$database = new Database(); 
	$db = $database->getConnection();
 
	// Crear objeto Producto:
	$prod = new Producto($db);
 
	// Recuperar ID del Producto
	$data = json_decode(file_get_contents("php://input"));     
 
	$prod->prod_id = $data->id;
	 
	// Ejercutar funcion readOne: devuelve un producto. 
	$prod->readOne();
 
	// Crear objeto con ID del producto obtenido.
	$product_arr[] = array(
	    "id" =>  $prod->prod_id,
	    "name" => $prod->prod_name,
	    "price" => $prod->price
	);
 
	//  Devolver en formato JSON
	print_r(json_encode($product_arr));
?>