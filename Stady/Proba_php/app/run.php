<?php //                     РАБОТА С ФАЙЛАМИ. РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ.
function TestPHP($input, $pat, $rep) {
    if(empty($input)) //ОСНОВНАЯ ЧАСТЬ ПРОГРАММЫ.
    echo '<p style="text-align: center; margin: 0px"><span style="color: lightgray; font-weight: bold">
    СКРИПТ ПОДКЛЮЧЕН. </span><br>РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ.<br>Дана строка. Проверить, все ли символы в ней
	уникальны.</p>
<p style="color: red; text-align: center; margin: 0px">Введите содержание строки в поле "Входные данные".</p>';
    else {
//Тело исследуемой функции:
function rnd_replace($matches)
{
	print_r($matches);
	echo "<br>";
    if ($matches[0] > 'c')
        return '('.$matches[0].'->'.rand(0, 9).')';
    else 
        return $matches[0];
}
$rnd_rep = 'rnd_replace';
$res = str_replace('909', $rnd_rep, $input);
echo $res;
//Конец исследуемой функции.
    $str_down = 8;
    }
$note_path = $_SERVER['DOCUMENT_ROOT'].'/Proba_php/note/files.txt';//$note_path - если 
return array($str_down, $note_path);// по ходу написания надо что-то законспектировать в файл *.txt          
}
include($_SERVER['DOCUMENT_ROOT']."/viewer/test.php");
?>