<?php 
  header('X-My-Header: "My-Header-Of-Requester"');
  // header('Content-Type: text/plain');
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Requester</title>
	</head>
	<body>
		
		<form name="form" method="post" action="./hendler.php">
			<input type="text" name="inp" />
			<input type="submit" value="send" />
		</form>
		
		
	</body>
</html>
