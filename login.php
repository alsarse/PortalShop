<?php
	include_once('templates/header.php');
	
	if(!isset($_REQUEST['login'])){
?>		
	<div class="container">	
		<div class="row">
			<div class="col-md-4">
		<form action="" method="POST">
			<p><label>Nombre de usuario:</label><input type="text" placeholder="Usuario" name="user" required/>
			<p><label>Contraseña: </label><input type="password" placeholder="Contraseña" name="pass" required</>
			<p><button type="submit" name="login">Iniciar Sesion</button></p>
		</form>
			</div>
		</div>
	</div>
<?php
	}else{
			if(validUser($_REQUEST['user'],$_REQUEST['pass'])){
				//USUARIO LOGEADO CORRECTAMENTE;
				echo "<script type='text/javascript'> window.location.replace('productos.php');</script>"; 
			}else{
?>
	<div id="login_wraper">	
		<form action="" method="POST">
			<p><label>Nombre de usuario:</label><input type="text" placeholder="Usuario" name="user" required/>
			<p><label>Contraseña: </label><input type="password" placeholder="Contraseña" name="pass" required</>
			<p><button type="submit" name="login">Iniciar Sesion</button></p>
		</form>
	</div>
<?php
			}
	}
	include_once('templates/footer.php'); 
?>