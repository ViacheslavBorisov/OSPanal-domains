<!DOCTYPE html>
  <html>
    <head>
        <title> SKRIPT VIEWER </title>
        <link type="text/css" rel="stylesheet" href="http://stady/viewer/php_style.css"/>
        <meta charset="utf-8">
	</head>
	<body>
        <div class="task_block" style="position: fixed; left: 8px; top: 8px; background-color: white; margin-top: -8px; margin-left: -8px; padding-left: 8px">
        <div style="height: 15px"><!--Блок ссылок-->
            <a href="https://php.net/manual/ru/index.php"> 
                <img id="link_pic"; src="http://Stady/viewer/img/php_manual.png"/>
            </a>
            <a href="http://php720.com/"> 
                <img id="link_pic"; src="http://Stady/viewer/img/php_main_boock.png"/>
            </a>
            <a href="http://www.php5.ru/study/webbasics"> 
                <img id="link_pic"; src="http://Stady/viewer/img/php5ru.png"/>
            </a>
            <a href="http://www.php.su/learnphp/"> 
                <img id="link_pic"; src="http://Stady/viewer/img/NEW_php_su.png"/>
            </a>
            <a href="http://htmlbook.ru/html"> 
                <img id="link_pic"; src="http://Stady/viewer/img/logo_html.png"/>
            </a>
            <a href="http://phpclub.ru/detail/article/regexp_1"> 
                <img id="link_pic"; src="http://Stady/viewer/img/php_club.png">
            </a>
            <a href="http://www.keeplex.ru/100004282/"> 
                <img id="link_pic"; src="http://Stady/viewer/img/keeplex_logo_beta_blue_2.gif"/>
            </a>
            <a href="http://stady/viewer/test.php"> 
                <img id="link_pic"; style="border-radius: 6px" src="http://Stady/viewer/img/test.png"/> 
            </a>
            <a href="http://stady/viewer/test.php?str_begin=&str_end=&n_str=&full_path=D%3A%2Fprogect%2Fopenserver%2Fopenserver%2Fdomains%2FStady%2Fviewer%2Flisting_form.php&data="> 
                <img id="link_pic"; style="border-radius: 6px" src="http://Stady/viewer/img/form.png"/> 
            </a>
            <a href="http://stady/viewer/test.php?str_begin=&str_end=&n_str=&full_path=D%3A%2Fprogect%2Fopenserver%2Fopenserver%2Fdomains%2FStady%2Fviewer%2Flisting.php&data="> 
                <img id="link_pic"; style="border-radius: 6px" src="http://Stady/viewer/img/listing.png"/> 
            </a>
        </div><!--Конец блока ссылок-->
<div style="clear: both"><!--Блок формы-->
<?php //ПОДКЛЮЧАЕМ ФОРМУ
    $form_path = $_SERVER['DOCUMENT_ROOT']."/viewer/listing_form.php";// Пути указываются относительно файла /Proba_php/app/run.php  
    $listing_path = $_SERVER['DOCUMENT_ROOT']."/viewer/listing.php";  // при изменении его местоположения надо менять пути.
    include("$form_path");
?>
</div><!--Конец блока формы-->		
        <div class="task_block" style="background-color: blue; width: 1250px; margin: 0px; padding-bottom: 25px">
        <div class="task_block" style="background-color: brown; width: 1250px"> 
        <div class="anser_block">
<?php //БЛОК ПОДКЛЮЧЕНИЯ ИССЛЕДОВАЕМОГО СКРИПТА
// Скрипт должен быть написанн в виде функции с именем "TestPHP", по завершении которой должно идти включение
// обработчика оператором INCLUDE или REQUIRE. Желательно, чтобы возвращала число выводимых ею строк.
	if($_GET['printform'] == 'checked') 
list($n_str, $note_path) = TestPHP($_GET['data']/*удалить после рабора РВ*/, $_GET['pattern'],  $_GET['replacement']);
    else echo '<p style="text-align: center; color: lightgray; font-weight: bold; margin: 0px">ОБЛАСТЬ ВЫВОДА РЕЗУЛЬТАТА</span>';
    $n_str += $_GET['n_str'];
?>
        </div></div></div>
        <div style="clear: both"></div> <!-- Не дает "провалиться" следующим блокам на нулевую строку --> 
        <div style="width: 1250px; margin: 0px; padding: 0px">
          <div style="width: 25px; height: 10px; background-color: blue; margin: 0px; padding: 0px; float: left"></div>
          <div style="width: 4px; height: 10px; background-color: black; margin: 0px; padding: 0px; float: left"></div>
          <div style="width: 1192px; height: 7px; background-color: white; border-top: 3px solid black; margin: 0px; padding: 0px; float: left"></div>
          <div style="width: 4px; height: 10px; background-color: black; margin: 0px; padding: 0px; float: left"></div>
          <div style="width: 25px; height: 10px; background-color: blue; margin: 0px; padding: 0px; float: left"></div>
        </div>
    </div><!--Конец блока fixed-->
<!-- БЛОК ВЫВОДА ТЕКСТА СКРИПТА -->	
        <div class="task_block" style="background-color: blue; margin-right: 0px; width: 1250px; padding: 0px"> 
        <div class="anser_block" style="margin-top: 0px"><!--Сдвигает блок листинга на N_STR строк вниз-->
        <div class="listing_padding"; style="height: <?php echo ($n_str-1)*20+168; ?>px"></div>
<?php //АНАЛИЗ ДАННЫХ, полученных от формы для вывода: что выводить, диапазон строк и т.д.
    if($_GET['note'] == "checked") {        //Если есть запрос о распечатке "Заметок к заданию", распечатать файл 
        $file_addres = $note_path;  //с заметками, путь к которому возвращает функция "TestPHP".
        include("$listing_path");
    }
    if($_GET['printform'] == "checked") { //При значении чекбокса "Распечатать форму", в качестве
        $file_addres = $form_path ;       //адреса, печатаемого файла, задает адрес формы.
        $str_num_min = $str_num_max = 0;  //Форма всегда печатается вся. 	
//        include ("$listing_path");        Решено, что специальное отношение к распечатке именно формы, излишне :))
    } else $_GET['printform'] = '';       // Иначе, чтобы "флажок держался"
    if($_GET['full_path'] != '') {                    //Если в поле "Распечатать файл" что-то введелно...  
        $_GET['full_path'] = str_replace('\\', "/", $_GET['full_path']);  //Развернуть слеши...
        if(file_exists($_GET['full_path']) == '1') {    // и, если файл существует...
            $file_addres = $_GET['full_path'];        // передать его адрес...
            $str_num_min = $_GET['str_begin'];        // и диапазон выводимых строк... 
            $str_num_max = $_GET['str_end'];
            include ("$listing_path");                // на распечатку.
        }
        unset($_GET['full_path']);		
    }  
    $file_addres = $_SERVER['SCRIPT_FILENAME']; //Всегда, как минимум, отображает код обрабатываемой
    $str_num_min = $_GET['str_begin'];
    $str_num_max = $_GET['str_end'];
    include("$listing_path");                   // (исходной) программы.
?>
        </div></div>
    </body>
  </html>