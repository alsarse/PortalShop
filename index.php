<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title> Tienda </title>
	
	<!--JavaScript base-->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script defer src="https://code.getmdl.io/1.2.1/material.min.js"></script>
	
	<!--ngInjections-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.3.1/ui-bootstrap-tpls.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.5.0/angular-local-storage.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.2/angular-ui-router.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angularjs-toaster/1.1.0/toaster.min.js"></script>
	<script src="https://code.angularjs.org/1.2.0/angular-animate.min.js" ></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-touch/1.6.0/angular-touch.js"></script>
	


	<!--Modules -->
	<?php include_once('scripts.php'); ?>
	
	<!--STYLES-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/angularjs-toaster/1.1.0/toaster.min.css" rel="stylesheet" />
	<link rel="stylesheet" href="css/main.css"
	
</head>
<body ng-app="Portalshop">
	<?php		 
		if(isset($_SESSION['user'])){
			
	?>
		<ps-navbar></ps-navbar>
		<div class="row">
			<div ui-view class="col-md-10 col-md-offset-1"></div>
		</div>
		<content-footer></content-footer>
	<?php
		}else{
	?>
			<login-view></login-view>
	<?php
		}
	?>
</body>
</html>
