<?php
function TestPHP($input) {
    if(empty($input)) //ОСНОВНАЯ ЧАСТЬ ПРОГРАММЫ.
    echo '<p style="text-align: center; margin: 0px"><span style="color: lightgray; font-weight: bold">
    СКРИПТ ПОДКЛЮЧЕН. </span><br>Введите Фамилию Имя Отчество (через пробел).</p>';
    else {
//Тело исследуемой функции:
//Написал проверку входных данных, а теперь выбрасывать жалко... :).
//Ввиду того, что обращение к элементам строк идет, как к элементам массивов - происходит ПОБИТОВОЕ, а не
//ПОСИМВОЛЬНОЕ сравнение.
    function InputCorrect($data) { // Проверка входной строки на ИСКЛЮЧИТЕЛЬНО букво-пробелистость.
        mb_internal_encoding("UTF-8"); // Определение языка ввода.
        $liters[0] = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ ";
        $liters[1] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
        $n = strlen($data)-1;
	    echo "Введена строка: \"$data\" длиной: ",mb_strlen($data)," символов.";
        $m[0] = strlen($liters[0])-1;
        $m[1] = strlen($liters[1])-1;
        $rez_detect = 'error';
        for($k = 0; $k <= 1; $k++) {
            $word = 1;
            for($i = 0; $i <= $n; $i++) {
                $litera = 0;
                for($j =0; $j <= $m[$k]; $j++) { 
                    if($liters[$k][$j] == $data[$i]) { 
                        $litera = 1;
                        $j = $m[$k];				
                    }
                }
                $word = $word*$litera;
                if(($word == 0) & ($k == 0)) $i = $n;
                if(($word == 0) & ($k == 1)) $i = $n;
            }
            if(($word == 1) & ($k == 1)) $rez_detect = 'english';
            if(($word == 1) & ($k == 0)) { $k = 1; $rez_detect = 'russian'; }
        }
    return $rez_detect; // "russian" - Русский, "english" - English, "error" - Ошибка ввода.
    }
//ОСНОВНАЯ ПРОГРАММА:
    $langvige = InputCorrect($input);
    if($langvige == 'error')
		echo "<br> Во входной строке присутствуют символы не характерные для человеческих фамилий и имен :)";
    else {
        mb_internal_encoding("UTF-8"); //Сразу задаем "внутреннюю" кодировку, в которую будут преобразованы 
                               //входные данные, чтобы не прописывать ее все время в mb_xxx - функциях.
        $fio = $input;         //Без ее определения с кириллицей не работает. UTF-8, т.к. браузер на нее
        $fio = explode(' ', $fio); //настроен, а он так настроен потому что в оболочке (test.php) выставлено:
	    for($i = 1; $i <= count($fio)-1; $i++) {   //  meta charset utf-8.
            if(mb_substr($fio[$i], 0, 1) != '') {  //Чтобы не было ряда точек при нескольких пробелах подряд.
                $fio[$i] = mb_substr($fio[$i], 0, 1);
                $fio[$i] .= '.';
            }
        }
	    $fio = implode(' ', $fio);
        $fio = mb_convert_case(mb_strtolower($fio), MB_CASE_TITLE); //Все первые буквы в словах делаем ЗАГЛАВНЫМИ.
        switch($langvige) {
            case "english":
            echo "<br> Язык ввода: English";
            break;
            case "russian":
            echo "<br> Язык ввода: Русский";
            break;
        }
        echo "<br> Результат обработки: ", $fio;
    }
//Конец исследуемой функции.
    $str_down = 1;
    }
$note_path = 'D:/progect/openserver/openserver/domains/Stady/Proba_php/note/task_6.txt';
return array($str_down, $note_path);
}
include("D:/progect/openserver/openserver/domains/Stady/viewer/test.php");
?>