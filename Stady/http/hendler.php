<?php
  header( "HTTP/1.1 444 Prived from start string");
  header('X-My-Header: "My-Header-Of-Hendler"');
  session_start();
	
	if (isset($_SESSION['flash'])) {
		echo $_SESSION['flash'];
		unset($_SESSION['flash']);
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <meta http-equiv="refresh" content="0; URL=http://stady/http/requester.php" /> -->
  <title>http-php</title>
</head>
<body style="background-color: yellow">
  <?php
      // phpinfo();
			$method = $_SERVER['REQUEST_METHOD'];
			$post_data = $_POST['inp'];
			$get_data = $_GET['inp'];
    if ($method == 'GET') {
      echo "Privet, GET!";
    } elseif ($method == 'POST') {
      echo "Privet, POST!";
    } else {
      echo "WTF??!";
    }
		echo "<br>";
    echo $post_data, $get_data;
		echo "<br>";
    // var_dump($_SERVER);
		echo "<br>";
		echo "<br>";
    echo 'HTTP_ACCEPT:  ', $_SERVER['HTTP_ACCEPT'];
		echo "<br>";
    echo 'HTTP_ACCEPT_LANGUAGE:  ', $_SERVER['HTTP_ACCEPT_LANGUAGE'];
		echo "<br>";
    echo 'REQUEST_METHOD:  ', $_SERVER['REQUEST_METHOD'];
		echo "<br>";
    echo 'REMOTE_ADDR:  ', $_SERVER['REMOTE_ADDR'];
		echo "<br>";
    $headers = getallheaders();
		echo "<br>";
    echo "Ask headers:";
		echo "<br>";
    echo "---------------";
    foreach($headers as $key => $value) {
      echo "<br>";
      echo $key, " : ", $value;
    }
    echo "<br>";
    echo "<br>";
    echo "Answer headers:";
    echo "<br>";
    echo "-----------------------";
    $answer_headers = headers_list();
    foreach($answer_headers as $key => $value) {
      echo "<br>";
      echo $key, " : ", $value;
    }
?>
</body>
</html>