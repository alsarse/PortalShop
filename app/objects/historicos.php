<?php

	class Historico{

		private $con; 
		private $table_name= 'historicos';

		//Propiedades del objeto

		public $usuario;
		public $prod_id;
		public $precio; 
		public $cantidad;
		public $fecha; 
		
		
		public function __construct($db){
			$this->con = $db; 
		}


		//FUNCIONES


		function compraProducto(){
			$query ='insert into '.$this->table_name.' values (?,?,?,?,?)';

			$stmt = $this->con->prepare($query);
			$stmt->bindParam(1, $this->usuario);
			$stmt->bindParam(2, $this->prod_id);
			$stmt->bindParam(3, $this->cantidad);
			$stmt->bindParam(4, $this->fecha);
			$stmt->bindParam(5, $this->precio);

			$stmt->execute();

			return $stmt; 
		}

		function showAll(){
			$query = 'select * from ? where usuario=? group by "fecha" ';

			$stmt = $this->con->prepare($query);
			$stmt->bindParam(1, $this->table_name);
			$stmt->bindParam(2, $this->usuario);

			$stmt->execute();

			return $stmt; 
		}	

	}
?>
