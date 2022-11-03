<?php
header('X-My-Header: "Curl-Header"');?>
<?php
$myCurl = curl_init();
curl_setopt_array($myCurl, array(
    CURLOPT_URL => 'http://stady/http/hendler.php',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query(array())
));
$response = curl_exec($myCurl);
curl_close($myCurl);
echo "Answer for yore requst: ".$response;
echo "<br>";
?>
<html>
  <head>
</head>
<body>
  <p>Vot tack vot...</p>
</body>
</html>

