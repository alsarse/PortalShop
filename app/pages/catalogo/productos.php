<?php
	getProducts();
	
	function getProducts(){
		
		$jsondata = array();
		
		try{		
		$db =  new PDO('mysql:host=localhost;dbname=db_tienda','root',''); 
		
		$query = "select prod_id,prod_name from productos" ; 
		
		if($prod = $db->query($query)){
			if($prod->rowCount() >0){
				$jsondata["success"] = true;
				$jsondata["message"]= sprintf ("query executed");
				$jsondata["prod"] = array();
				
				while( $row = $prod->fetch(PDO::FETCH_OBJ) ) {
                	$jsondata["prod"][] = $row;
				}
			}else{
				$jsondata["success"] = false;
				$jsondata = array( 'message' => "query failed");
			}
			
		}else{
			$jsondata["success"] = false;
			$jsondata= array( 'message' => "database error");
		}
					
		}catch(PDOException $e){

			/* CONTEMPLAR ERRORES */
		}finally{
			header('Content-type: application/json; charset=utf-8');
			echo json_encode($jsondata, JSON_FORCE_OBJECT);
			unset($db); 
		}
	}
	exit();