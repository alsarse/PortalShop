<?php 

	//Cabeceras de recepción y envio de datos 
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json; charset="UTF-8"');

	//Incluir las DTO y Conexion 
	include_once('../objects/database.php');
	include_once('../objects/productos.php');

	//Instanciar la conexcion con la base de datos.
	$database = new Database();
	$db = $database->getConnection(); 

	//Inicializar el objeto; 
	$prod = new Producto($db);

	//Consultas;
	$stmt = $prod->readAll();
	$num = $stmt->rowCount();

	$data = "";

	//Comprobar que la query devuelve resultados
	if($num>0){

		$x=1;
	      
	    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
	    
	        extract($row);
	          
	        $data .= '{';
	            $data .= '"id":"'  . $prod_id . '",';
	            $data .= '"name":"' . $prod_name . '",';
	            $data .= '"price":"' . $prod_price . '",';
	            $data .= '"img":"'. $img_route .'"';
	        $data .= '}'; 
	          
	        $data .= $x<$num ? ',' : ''; $x++; } 

	}

	//Formato JSON

	echo '{"records" : ['.$data.']}'; 

?>