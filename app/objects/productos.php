<?php

	class Producto{

		private $con; 
		private $table_name= 'productos';

		//Propiedades del objeto

		public $prod_id;
		public $prod_name;
		public $prod_price;
		
		public function __construct($db){
			$this->con = $db; 
		}


		//CRUD 

		function readAll(){
			//Query para sacar todos los productos
			$query = "select prod_id, prod_name, prod_price,img_route from ".$this->table_name."";

			$stmt = $this->con->prepare($query);

			$stmt->execute();

			return $stmt; 
		}

		function getProduct(){
			//Query para un producto concreto
			$query = 'select prod_id,prod_name, prod_price from '.$this->table_name.' where prod_id = ?';

			//Consulta preparada
			$stmt = $this->con->prepare($query);
			$stmt->bindParam(1, $this->prod_id);
			$stmt->execute();

			$row = $stmt->fetch(PDO::FETCH_ASSOC);

			//Asignar resultados a las propiedades del objeto. 
			$this->prod_name = $row['name'];
			$this->prod_price= $row['price'];

		}

		function readBy($tag){

		}
	}
?>
