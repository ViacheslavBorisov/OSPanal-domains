<?php //                     РАБОТА С ФАЙЛАМИ. РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ.
function TestPHP($input, $pat, $rep) {
    if(empty($input)) //ОСНОВНАЯ ЧАСТЬ ПРОГРАММЫ.
    echo '<p style="text-align: center; margin: 0px"><span style="color: lightgray; font-weight: bold">
    СКРИПТ ПОДКЛЮЧЕН. </span><br>Напишите скрипт, выводящий на экран дерево каталога /usr и пропускающий файлы, 
    в которые запрещена запись. Дерево должно иметь вид, например, такой:</p>
<div style="text-align: left; padding: 0px; width: 100px; margin: auto">
/usr/
    <br> --local/
    <br> ----etc/
    <br> ----bin/
    <br> --home/
    <br> ----myfolder/
    <br> --------my_file 
</div>
<p style="color: red; text-align: center; margin: 0px">Введите путь и имя каталога в поле "Входные данные".</p>';
    else {
//Тело исследуемой функции:
$input = mb_convert_encoding($input, "cp-1251");
//$input = mb_convert_encoding($input, "cp-1251");
if(is_dir($input)) echo "$input - ДИРРЕКТОРИЯ<br>";
if(is_file($input)) echo "$input - ФАЙЛ<br>";
//Конец исследуемой функции.
    $str_down = 8;
    }
$note_path = $_SERVER['DOCUMENT_ROOT'].'/Proba_php/note/files.txt';//$note_path - если 
return array($str_down, $note_path);// по ходу написания надо что-то законспектировать в файл *.txt          
}
include($_SERVER['DOCUMENT_ROOT']."/viewer/test.php");
?>