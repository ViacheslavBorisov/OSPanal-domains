<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>send-mail</title>
</head>
<body style="background-color: rgba(205, 239, 184, 0.5);
  color: green;
  font-size: 24px;
  display: flex;
  justify-content: center; 
  align-items: center;"
>
  <?php
  // echo mb_internal_encoding();
  // echo "<br>";
  $email = $_POST['email'];
  echo "Адрес электронной почты: $email";
  $email = htmlspecialchars($email);
  $email = urldecode($email);
  $email = trim($email);
  echo "<br>";
  if (mail("via4eslawbor@meta.ua", "Данные из формы сайта: Web Studio", "E-mail: ".$email ,"From: borisov.v.1972@gmail.com \r\n"))
    {
      echo "Сообщение успешно отправлено";
    } else {
      echo "При отправке сообщения возникли ошибки";
    }
  ?>
</body>
</html>
