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
function PrintDir($dir, $tab) {
	$tab = $tab.'---';
	$dirS = scandir($dir);
	foreach($dirS as $key => $name) {
		if($name == '.' or $name == '..') continue;
		if(is_dir($dir."/".$name)) {
			$newdir = $dir."/".$name;
            $namePr = mb_convert_encoding($name, "UTF-8", "cp-1251");
	        echo "<span style=\"background-color: cyan\">", $tab, $namePr, "/</span><br>";			
			PrintDir($newdir, $tab);
		}
		if(is_file($dir."/".$name)) {
			$namePr = mb_convert_encoding($name, "UTF-8", "cp-1251");
			if(mb_ereg('.lnk', $name))
                echo "<span style=\"background-color: orange\">", $tab, $namePr, "</span><br>";
            else echo "<span style=\"background-color: yellow\">", $tab, $namePr, "</span><br>";
            }
	}
return ;
}
echo "<span style=\"background-color: cyan\">$input</span><br>";
$input = mb_convert_encoding($input, "cp-1251", "UTF-8");
$tab = '';
PrintDir($input, $tab);

//Конец исследуемой функции.
    $str_down = 8;
    }
$note_path = $_SERVER['DOCUMENT_ROOT'].'/Proba_php/note/files.txt';//$note_path - если 
return array($str_down, $note_path);// по ходу написания надо что-то законспектировать в файл *.txt          
}
include($_SERVER['DOCUMENT_ROOT']."/viewer/test.php");
?>