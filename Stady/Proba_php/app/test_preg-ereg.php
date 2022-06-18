<?php //                          РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
// ШАБЛОН для тестирования поведения функций, ориентированых на работу с регулярными выражениями.
function TestPHP($input, $pat, $rep) {
    if(empty($input)) //ОСНОВНАЯ ЧАСТЬ ПРОГРАММЫ.
    echo '<p style="text-align: center; margin: 0px"><span style="color: lightgray; font-weight: bold">
    СКРИПТ ПОДКЛЮЧЕН. </span><br>ШАБЛОН для тестирования поведения функций, ориентированых на работу с 
    регулярными выражениями.</p>';
    else {
//Тело исследуемой функции:
mb_internal_encoding("UTF-8");
echo "Шаблон: $pat";
echo "<br> Замена: $rep";
$input = trim($input);
echo "<br> Введена строка : \"$input\" из " ,mb_strlen($input), " символов.";  //Блок определения 
if(mb_ereg_match("^[а-яА-Я\s]+$", $input)) echo "<br> Язык Русский!!!";        //параметров исходных
elseif(mb_ereg_match("^[a-zA-Z\s]+$", $input)) echo "<br> Язык Английский!!!"; //данных. 
    else echo "<br> Язык пес знает какой :))";
// $pat - PATTERN (Шаблон), $rep - REPLACE (Заменяющие данные), $input - преобразуемая строка.
// В стоке ниже убрать комментарий и задать требуемую функцию.
//$fio = mb_ereg_.....($pat, $rep, $input);
echo "<br> После  mb_ereg_..... : \"$fio\" из ", mb_strlen($fio), " символов.";
//Конец исследуемой функции.
    $str_down = 5;
    }
$note_path = 'D:/progect/openserver/openserver/domains/Stady/Proba_php/note/task_6a.txt'; //$note_path - если по
return array($str_down, $note_path);               // ходу написания надо что-то законспектировать в файл *.txt
}
include("D:/progect/openserver/openserver/domains/Stady/viewer/test.php");
?>