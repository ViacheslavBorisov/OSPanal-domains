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
function scan($path) {
	$scan_path = mb_convert_encoding($path, "cp-1251", "UTF-8, koi8");
	$dir_content = scandir($scan_path);
    $j = $k = $l = 0;
    foreach($dir_content as $i => $name) { 
	    $type = filetype($scan_path."/$name");
        if($type == 'file') { 
            if(mb_ereg('.lnk',$name)) {
                $links[$l] =  mb_convert_encoding($name, "UTF-8", "cp-1251, koi8");
                $l++;
            } else {
            $files[$k] =  mb_convert_encoding($name, "UTF-8", "cp-1251, koi8");
            $k++;
            }
        }
        if($type == 'dir') {
            if(($name == '.') or ($name == '..')) unset($name); 
            else {
                $dirs[$j] =  mb_convert_encoding($name, "UTF-8", "cp-1251, koi8");
                $j++;
            }
        }
    }
    return array($files, $links, $dirs);
}

function print_file_link($lnk, $file, $tab) {
    $yellow = "<br><span style=\"background-color: yellow\">";
    $orange = "<br><span style=\"background-color: orange\">";
    if(!empty($dir))echo $cyan, $tab, $dir, "</span>";
    if(!empty($lnk))
    foreach($lnk as $value) {
        $name = array_shift($lnk); 
        echo $orange, $tab, $name,"</span>";
	}
    if(!empty($file))
    foreach($file as $value) {
        $name = array_shift($file);
        echo $yellow, $tab, $value,"</span>";
    }
return ;
}

$input = trim($input);
$input = str_replace('\\', '/', $input);
mb_ereg('/([0-9a-zA-Zа-яА-Я_:]+)/*$', $input, $d);
$cyan = "<br><span style=\"background-color: cyan\">";
$deepskyblue = "<span style=\"background-color: deepskyblue\">";
echo $deepskyblue, "Выводится содержание каталога по пути: ".$input." ", "</span>";
echo "<span style=\"background-color: cyan\">", " Папки ", "</span>";
echo "<span style=\"background-color: orange\">", " Файлы ", "</span>";
echo "<span style=\"background-color: yellow\">", " Метки ", "</span>";
echo $cyan, $d[1]."/ ", "</span>";
$level=0;
$path = $input;
if(file_exists(mb_convert_encoding($input, "cp-1251", "UTF-8, koi8")))
do {
    if(!empty($path)) { //$path пустая только в случае возвращения по дереву подкаталогов на верхние уровни,
                        //значит не надо распечатывать файлы и папки, т.к. они уже распечатаны ранее.
        list($files[$level], $links[$level], $folders_names[$level+1]) = scan($path);
        $tab_file = "---".$tab[$level];
        print_file_link($files[$level], $links[$level], $tab_file); //Если перед распечаткой файлов ввести
    } //ограничение по конкретному пути: if($path == "..."), то можно распечатывать содержимое ТОЛЬКО нужных dir.
    if(!empty($folders_names[$level+1])) {    //Если в последующем уровне есть папки, переходим не него.
    	$level++;
    	foreach($folders_names[$level] as $i => $value) //Из имен насканированных папок создаем пути для 
            $scan_path[$level][$i] = $path."/".$value;  //дальнейшего сканирования
	    $tab[$level] = $tab[$level-1]."---";
	}
	if(empty($folders_names[$level])) {
        $path = '';  //Если и текущий уровень пуст - возвращаемся "наверх", обнулив путь, чтобы повторно не                                                          // распечатывать файлы.
        $level--;    // распечатывать файлы и ссылки.
    }
    if(!empty($folders_names[$level]) || !empty($scan_path[$level])) { //На текущем (с учетом вышестоящего)
        $path = array_shift($scan_path[$level]);    // уровне задаем путь для сканирования следующей папки 
        $folder_name = array_shift($folders_names[$level]); // и распечатываем ее название.
        echo $cyan, $tab[$level], $folder_name."/ ", "</span>";
    }
} while($level > 0);
else echo "Не удалось найти (или открыть) указанный файл или директорию :(((";
//Конец исследуемой функции.
    $str_down = 8;
    }
$note_path = $_SERVER['DOCUMENT_ROOT'].'/Proba_php/note/files.txt';//$note_path - если 
return array($str_down, $note_path);// по ходу написания надо что-то законспектировать в файл *.txt          
}
include($_SERVER['DOCUMENT_ROOT']."/viewer/test.php");
?>