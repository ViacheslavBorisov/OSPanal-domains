<?php
header('Content-Type: text/html; charset=UTF-8');
  mb_internal_encoding('UTF-8');
  echo 'Скрипт работает!';
  echo '<br>';
	$xml = simplexml_load_file('my-xml.xml');
  // var_dump($html);
  // var_dump($xml);
  // echo '<br>';
  // echo $xml->name;
  // foreach($xml->names as $names) {
  //   echo '<br>';
  //   echo $names;
  // }
  // echo $xml->tagg['attr']; // выведет val
  // echo '<br>';
  // echo $xml->surn;
  // echo '<br>';
  // echo $xml->tagg;         // выведет text
  // echo '<br>';
  // echo 'Users name is: ', $xml->user;
  // echo '<br>';
  // echo 'Users salary is: ', $xml->user['salary'];
  // echo '<br>';
  // echo 'Users age is: ', $xml->user['age'];
  // echo '<br>';
  // echo '<br>';
  // echo 'Выведите на экран название, цену и количество каждого продукта:';
  // echo '<br>';
  // echo 'Название продукта ! Цена продукта ! Количество продукта';
  // foreach($xml->product as $product) {
  //   $str = '!............'.$product.'.........!..........'
  //   .$product['cost'].'...........!.................'
  //   .$product['amount'].'..................!';
  //   echo '<br>', $str;
  // }
  // echo '<br>';
  // echo 'Поиск по вложенному тэгу: <br>';
  // echo $xml->tag->elem;
  // echo '<br>';
  // 
  // Вывести на экран название цену категорию и количество каждого товара
  // <product cost="100" amount="3">
	// 	<name>prod1</name>
	// 	<category>cat1</category>
  $i = 1;
  echo '<br>! № ! Название ! Цена ! Категория ! Количество !';
  foreach($xml->product as $product) {
    $str = '<br>! '.$i.'&nbsp ! .....'.$product->name.'...!...'.$product['cost'].'...!.....'.$product->category.'.......!..........'.$product['amount'].'.........!';
    echo $str;
    $i = $i + 1;
  }
// Парсер PHP работает только с xml, т.к. он более строгий к ошибкам
// Для html нужны сторонние библиотеки.
// Подключаем библиотеку Simple html DOM Parser
  include 'simple_html_dom.php';
// Получаем страницу в объект $html
  $html = file_get_html('../html-css/1-8.html');
  echo '<br>';
  echo '<br>';
  echo 'Работа с html при помощи библиотеки simple_html_dom.php';
  echo '<br> Код заголовков со страницы ../html-css/1-8.html';
  foreach($html->find('header') as $header) {
    echo '<br>', $header;
  }
?>
