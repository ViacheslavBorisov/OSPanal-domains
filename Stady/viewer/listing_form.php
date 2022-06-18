<!DOCTYPE html>
<!-- Включается в исходный скрипт оператором INCLUDE("Путь к форме");
возвращает данные исходному скрипту (action="?php echo $_SERVER['PHP_SELF']; ?>")-->
  <html>
    <head>
        <title> LISTING FORM SCRIPT </title>
        <meta charset="utf-8">
        <link type="text/css" rel="stylesheet" href="http://stady/viewer/checkbox_style.css"/>
        <!--[if lt IE 9]>
            <link type="text/css" rel="stylesheet" href="http://stady/viewer/ie_style.css"/>
        <![endif]--> 
    </head>
    <body>
    <form method="GET" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        Диапазон отображаемых строк: 
        От: <input style="width: 30px" type="text" name="str_begin" value="<?php echo $_GET['str_begin']; ?>"/> 
        До: <input style="width: 30px" type="text" name="str_end" value="<?php echo $_GET['str_end']; ?>"/>
        Вниз на: <input style="width: 30px" type="text" name="n_str" value="<?php echo $_GET['n_str']; ?>"/>
        Распечатать файл: <input style="width: 530px" type="text" name="full_path"
                           value="
<?php
    $_GET['full_path'] = trim($_GET['full_path']);
    if(!empty($_GET['full_path'])) {	
        $_GET['full_path'] = str_replace('\\', "/", $_GET['full_path']);
        if(file_exists($_GET['full_path']) <> 1) 
            echo ".....Файл по данному пути не обнаружен !!! ..... Еще попытка?...:))";
            else echo $_GET['full_path'];
	}			
?>"/><br>
        <input type="submit" value="Ни пуха - ни пера!"/>
      <label class="block-checkbox a">
        <input type="checkbox" name="printform" value="checked" <?php echo $_GET['printform']; ?>>
        <img src="http://Stady/viewer/img/power_on_sprite.png">
      </label>:Выполнять скрипт.
      <label class="block-checkbox a">
        <input type="checkbox" name="note" value="checked" <?php echo $_GET['note']; ?>>
        <img src="http://Stady/viewer/img/notepad_sprite.png">
      </label>:Показать заметки.
        Вхдоные данные : 
        <input style="width: 531px" type="text" name="data" value="<?php echo $_GET['data']; ?>"/><br>
<!--Удалить после разбора Регулярных выражений-->
        Шаблон:
        <input style="width: 500px" type="text" name="pattern" value="<?php echo $_GET['pattern']; ?>"/>
        Меняем на:
        <input style="width: 500px" type="text" name="replacement" value="<?php echo $_GET['replacement']; ?>"/>
<!--Конец области удаления-->
        <br>		
    </form>    
	</body>
 </html>