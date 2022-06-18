<?php //ЗАДАНИЕ _5. РАБОТА С ИНДЕКСАМИ МАССИВА. 
      //создать массив и заполнить его случайными числами от 1 до 100 (ф-я rand). 
      //Далее, вычислить произведение тех элементов, которые больше ноля и у которых парные индексы.
      //После вывести на экран элементы, которые больше ноля и у которых не парный индекс.
function TestPHP($input) {
    if(empty($input))
    echo '<p style="text-align: center; margin: 0px"><span style="color: lightgray; font-weight: bold">
    СКРИПТ ПОДКЛЮЧЕН. </span><br>Введите число элементов массива.</p>';
    else {
        if(substr($input, 2, 1) == "s") {
            $n = substr($input, 0, 2);
            echo "Смещение на ", substr($input, 0, 2), " строк вниз <br>";	
        }
//Тело исследуемой функции:
        echo " Число элементов массива массива: "; //Проверяем, что введено именно число.
        if(substr($input, 2, 1) == "s") $input = substr($input, 3, strlen($input)-3);
        $input = trim($input);
        if(!ctype_digit($input)) echo "Длинной массива могут быть только числа. Целые :))";
        else {                                     //Если введено число - выполняем задание.
            $i = 0; 
            $math_work = 1;
            while($i <= $input) {
                $arr[] = mt_rand(-100, 100);
                if($arr[$i] > 0) {
                    if(fmod($i, 2) == 0) { $math_work *= $arr[$i]; $lebel = 0; }
                    else { $j = $i; $arr_rez[$j] = $arr[$i]; }
                }
                $i++;				
            }
            echo $input;
            echo "<br>Созданный исходный массив: ";
            print_r($arr);
            echo "<br>Произведение положительных элементов с четными индексами: ";
            if(!isset($lebel)) echo " ОТСУТСТВУЮТ."; else echo $math_work;
            echo "<br>Массив, сформированный из положительных элементов с нечетными индексами: ";
            if(!isset($j)) echo " ОТСУТСТВУЮТ.";
            print_r($arr_rez);
        }
        $n = 2;
    }
//Конец исследуемой функции.
    return $n;
}
include("D:/progect/openserver/openserver/domains/Stady/viewer/test.php");
?>
