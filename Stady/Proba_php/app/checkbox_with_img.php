<?php //                     ЧЕКБОКС С КАРТИНКОЙ
// Игрушки с HTML и CSS. Вспоминаем пройденное, чтобы не заржавело.
// Издевательства проходят над файлом формы (копия) по адресу: .../Proba_php/app/form.php
function TestPHP($input, $pat, $rep) {
    if(empty($input)) { //ОСНОВНАЯ ЧАСТЬ ПРОГРАММЫ.
    echo '<p style=" text-align: center; color: lightgray; font-weight: bold; margin: 0px">
    СКРИПТ ПОДКЛЮЧЕН. </p><p style="text-align: left; margin: 0px">Чекбокс в виде картинки. Введите в поле 
	"входные данные":<br> 
    1 - с использованием спрайта, возможностью массштабирования, без background. Используется в реальной форме. В IE отключены картинки, но функционально. <br>
	2 - аналогично пункту 1, но с подключением JS, обеспечивающих работу графики в IE6-8. Полностью функциональна  
	если скрипты в IE не заблокированы.<br>
	3 - с заменой картинок. В IE не функционально. <br> 4 - с украденным где-то кодом. Полная чушь.';
	echo '<br>Введите в поле "Шаблон" номер варианта спрайта для просмотра (от 1 до 3). Только для пп. 1 и 2.
          <br>Введите в поле "Замена" размеры чекбокса: ширина и высота (через пробел)';
    $str_down = 8;
    }
    else {
//Тело исследуемой функции:
    switch($pat) {
        case 1:
        $sprite_url = 'http://Stady/Proba_php/img/buttom_ass_sprite.png';
        break;
        case 2:
        $sprite_url = 'http://Stady/viewer/img/power_on_sprite.png';
        break;
        case 3:
        $sprite_url = 'http://Stady/viewer/img/notepad_sprite.png';
        break;
        default: echo 'Невнятные исходные данные. Обратите внимание на поле "Шаблон". ';
    }
    $rep = explode(" ",$rep);
    $width = $rep[0];
	$height = $rep[1];
    switch($input) {
	    case 1:
        require('checkbox_with_img_form1.php');
        break;
	    case 2:
        require('checkbox_with_img_form2.php');
        break;
	    case 3:
        require('checkbox_with_img_form3.php');
        break;
	    case 4:
        require('checkbox_with_img_form4.php');
        break;
        default: { echo 'Невнятные исходные данные. Обратите внимание на поле "Входные данные": ';
                   echo "1 - с использованием спрайта без JS, 2 - с использованием спрайта c JS, 
                         3 - с заменой картинок, 4 - с украденным где-то кодом."; }
	}
	echo '<p style="text-align: center; margin: 0"> Браузер : .... <span style="color: red; font-size: 120%">';
    if ( stristr($_SERVER['HTTP_USER_AGENT'], 'Firefox') ) echo '"firefox"'; 
        elseif ( stristr($_SERVER['HTTP_USER_AGENT'], 'Chrome') ) echo '"chrome"'; 
        elseif ( stristr($_SERVER['HTTP_USER_AGENT'], 'Safari') ) echo '"safari"'; 
        elseif ( stristr($_SERVER['HTTP_USER_AGENT'], 'Opera') ) echo '"opera"'; 
        elseif ( stristr($_SERVER['HTTP_USER_AGENT'], 'MSIE 6.0') ) echo '"ie6"'; 
        elseif ( stristr($_SERVER['HTTP_USER_AGENT'], 'MSIE 7.0') ) echo '"ie7"'; 
        elseif ( stristr($_SERVER['HTTP_USER_AGENT'], 'MSIE 8.0') ) echo '"ie8"'; 
    echo '</span></p>';
//Конец исследуемой функции.
    $str_down = 12;
    }
$note_path = $_SERVER['DOCUMENT_ROOT'].'/Proba_php/note/checkbox_with_img.txt';//$note_path - если по ходу написания надо что-то законспектировать в файл *.txt
return array($str_down, $note_path);         // В данном случае это ЛИСТИНГ МУЧАЕМОЙ ФОРМЫ         
}
include($_SERVER['DOCUMENT_ROOT']."/viewer/test.php");
?>