<?php //                     РАБОТА С ФАЙЛАМИ. РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ.
function TestPHP($input, $pat, $rep) {
    if(empty($input)) //ОСНОВНАЯ ЧАСТЬ ПРОГРАММЫ.
    echo '<p style="text-align: center; margin: 0px"><span style="color: lightgray; font-weight: bold">
    СКРИПТ ПОДКЛЮЧЕН. </span><br>РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ.<br>Дана строка. Проверить, все ли символы в ней
	уникальны.</p>
<p style="color: red; text-align: center; margin: 0px">Введите содержание строки в поле "Входные данные".</p>';
    else {
//Тело исследуемой функции:
mb_internal_encoding("UTF-8");
echo "Введена последовательность: $input<br>";	
while(!empty($input)) {
    mb_ereg('^.', $input, $simbol);
	$input = mb_ereg_replace('^.', '', $input);
	if(mb_ereg($simbol[0], $input)) echo "Повторяющиеся символы есть!....: $simbol[0]<br>";
}
//Конец исследуемой функции.
    $str_down = 8;
    }
$note_path = $_SERVER['DOCUMENT_ROOT'].'/Proba_php/note/files.txt';//$note_path - если 
return array($str_down, $note_path);// по ходу написания надо что-то законспектировать в файл *.txt          
}
include($_SERVER['DOCUMENT_ROOT']."/viewer/test.php");
?>