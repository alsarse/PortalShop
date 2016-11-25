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

			//Query para loguear un usuario
			$query = 'select password from '.$this->table_name.' where username = ?';

			//Consulta preparada
			$stmt = $this->con->prepare($query);
			$stmt->bindParam(1, $this->username);
			$stmt->execute();

			/*
				SE COMPRUEBA EN EL SCRIPT. DEVOLVER UN USUARIO: 
				Contemplar si :
					$stmt esta vacio ? -> El usuario no existe; RETURN FALSE
					$stmt devuelve 1 valor? ->
						!= $stmt['password'] ? -> La contraseña es incorrecta; RETURN FALSE
						 = $stmt['password'] ? -> Login Correcto; RETURN TRUE. 
			*/	

		}

	}
?>
