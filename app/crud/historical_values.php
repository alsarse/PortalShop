<?php 

	//Cabeceras de recepción y envio de datos 
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json; charset="UTF-8"');

	//Incluir las DTO y Conexion 
	include_once('../objects/database.php');
	include_once('../objects/historicos.php');

	//Instanciar la conexcion con la base de datos.
	$database = new Database();
	$db = $database->getConnection(); 

	//Inicializar el objeto; 
	$hist = new Historico($db);
	$data = json_decode(file_get_contents("php://input");

	$hist->user = $_SESSION['user']; 
	
	//Consultas;
	$response="";

	$stmt = $hist->showAll();
	$num = $stmt->rowCount();
	

	//Comprobar si la query devuelve resultados
	if($num>0){

		$x=1;
	      
	    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
	    
	        extract($row);
	          
	        $response .= '{';
	            $response .= '"usuario":"'  . $user . '",';
	            $response .= '"producto":"' . $prod_id . '",';
	            $response .= '"cantidad":"' . $cantidad . '",';
	            $response .= '"precio":"' . $precio . '",';
	            $response .= '"fecha":"'. $fecha .'"';
	        $response .= '}'; 
	          
	        $response .= $x<$num ? ',' : ''; $x++; } 

	}
	

	//Formato JSON

	echo '{"records" : ['.$response.']}'; 

?>