<?php
	//Importacion de los scripts principales
	session_start();
	echo '<script src="app/app.js"></script>'; 
		echo '<script src="app/pages/pages.module.js"></script>';
			echo '<script src="app/pages/home/home.module.js"></script>';
				echo '<script src="app/pages/home/homeCtrl.js"></script>';
			echo '<script src="app/pages/catalogo/catalogo.module.js"></script>';
				echo '<script src="app/pages/catalogo/catalogoCtrl.js"></script>';
			echo '<script src="app/pages/profile/profile.module.js"></script>';
			echo '<script src="app/pages/profile/profileCtrl.js"></script>';
			echo '<script src="app/pages/cart/cart.module.js"></script>';
				echo '<script src="app/pages/cart/cartCtrl.js"></script>';
		echo '<script src="app/components/components.module.js"></script>';
			echo '<script src="app/components/templates/login/login.module.js"></script>';
			echo '<script src="app/components/templates/login/loginCtrl.js"></script>';
			echo '<script src="app/components/templates/navbar/navbar.module.js"></script>';
			echo '<script src="app/components/templates/navbar/navbarCtrl.js"></script>';


	//Scripts predefinidos
?>
