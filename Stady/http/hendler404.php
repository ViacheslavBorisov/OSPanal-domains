<?php
	session_start();
	
	$_SESSION['flash'] = 'FLASH MASSAGE FROM hendler404.php';
	header('Location: hendler.php');
	die();
?>
