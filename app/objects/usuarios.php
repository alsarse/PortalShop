<?php

	class Usuario{

		private $con; 
		private $table_name= 'usuarios';

		//Propiedades del objeto

		public $username;
		public $password;
		
		
		public function __construct($db){
			$this->con = $db; 
		}


		//CRUD 

		function validUser(){
			session_start();
			//Query para loguear un usuario
			$query = 'select password from '.$this->table_name.' where username ="'.$this->username.'"';

			//Consulta preparada
			$stmt = $this->con->prepare($query);
			$stmt->execute();

			return $stmt; 
		}


		function logout(){
			session_destroy(); 
		}

		function getSession(){
			session_start();
			if(isset($_SESSION['user'])){
				return $_SESSION['user'];
			}else{
				return "";
			}
		}

	}
?>
