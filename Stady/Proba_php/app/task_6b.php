<?php //                     РАБОТА С ФАЙЛАМИ. РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ.
//                         ПОСТРОЧНАЯ ОБРАБОТКА ФАЙЛА (str[$i]=fgets()).
// Из исходных данных создает файл data.php (открывается в виде комментов), проставляет кавычки в
// строковых индексах, результат выводит в файл datanew.php, считает сумму элементов массива.
function TestPHP($input, $pat, $rep) {
    if(empty($input)) //ОСНОВНАЯ ЧАСТЬ ПРОГРАММЫ.
    echo '<p style="text-align: center; margin: 0px"><span style="color: lightgray; font-weight: bold">
    СКРИПТ ПОДКЛЮЧЕН. </span><br>Проставление пропущенных кавычек в строковых индексах массива.<br>
    Введите в поле "входные данные" попарно, через пробел индексы и значения массива.</p>';
    else {
//Тело исследуемой функции:
    $array = explode(" ", $input);
	$i =0;
	$n = count($array);
    while($i < $n) {
        $arr[$array[$i]] = $array[$i+1];
        $i = $i+2;
    }
    echo "Из исходных данных создает файл data.php (открывается в виде комментов), проставляет кавычки в
          строковых индексах, результат выводит в файл datanew.php, считает сумму элементов массива.<br>";
	$write_arr = print_r($arr);
    $arr_flip = array_flip($arr);
    echo "<br>";
	$write_arr = print_r($arr_flip);
    $file_descriptor = fopen('data.php', 'w+');
	if($file_descriptor) {
        $rez_write = fwrite($file_descriptor, print_r($arr, TRUE));
        fclose($file_descriptor);
    } else echo "<br>Ошибка записи в файл..... :((";
    unset($file_descriptor);
	
    mb_internal_encoding("UTF-8");
    $fd = fopen('data.php', 'a+');
    $fdwr = fopen('datanew.php', 'w+');
    if($fd) {
        fwrite($fdwr, "<?php \r\n");
        $i = 0;
        while(!feof($fd)) {
            $content[$i] = fgets($fd);
			if(!mb_ereg("\[([a-zA-Z0-9]+)\]", $content[$i])) 
				$content[$i] = '';
			else {
                $content[$i] = mb_ereg_replace("\[([a-zA-Z]+)\]", '$mas[\'\1\']', $content[$i]);  
                $content[$i] = mb_ereg_replace("\[([0-9]+)\]", '$mas[\1]', $content[$i]);  
                $content[$i] = mb_ereg_replace('\s*=>\s*([0-9]+)', ' = \1;', $content[$i]);  
                echo '<br>',$content[$i];
                fwrite($fdwr, $content[$i]);
			}
			$i++;	
		}
    }
	fclose($fd);
	fwrite($fdwr, " \$sum = 0; \r\n foreach(\$mas as \$value) \r\n     \$sum = \$sum + \$value; \r\n
	echo '<br>Сумма: ', \$sum; \r\n ?> ");
    fclose($fdwr);
    include('datanew.php');	
//Конец исследуемой функции.
    $str_down = 7;
    }
$note_path = $_SERVER['DOCUMENT_ROOT'].'/Proba_php/app/data.php';//$note_path - если 
return array($str_down, $note_path);// по ходу написания надо что-то законспектировать в файл *.txt          
}
include($_SERVER['DOCUMENT_ROOT']."/viewer/test.php");
?>