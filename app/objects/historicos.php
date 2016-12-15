<?php

	class Historico{

		private $con; 
		private $table_name= 'historicos';

		//Propiedades del objeto

		public $user;
		public $prod_id;
		public $precio; 
		public $cantidad;
		public $fecha; 
		
		
		public function __construct($db){
			$this->con = $db; 
		}


		//FUNCIONES


		function compraProducto(){
			$query ='insert into'.$this->table_name.' values (?,?,?,?,?)';

			$stmt = $this->con->prepare($query);
			$stmt->bindParam(1, $this->user);
			$stmt->bindParam(2, $this->prod_id);
			$stmt->bindParam(3, $this->cantidad);
			$stmt->bindParam(4, $this->precio);
			$stmt->bindParam(5, $this->fecha);

			$stmt->execute();

			return $stmt; 
		}

		function showAll(){
			$query = 'select * from'.$this->table_name.'where user="'.$this->user.'" group by'.$this->fecha ;

			$stmt = $this->con->prepare($query);

			$stmt->execute();

			return $stmt; 
		}	

	}
?>
