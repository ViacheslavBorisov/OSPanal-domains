<?php //ЗАДАНИЕ 4: создать массив, наполнить это случайными значениями (функция rand), 
      //найти максимальное и минимальное значение и поменять их местами.
function TestPHP($input) {
    if(empty($input))
    echo '<p style="text-align: center; margin: 0px"><span style="color: lightgray; font-weight: bold">
    СКРИПТ ПОДКЛЮЧЕН. </span><br> Введите число элементов массива.</p>';
    else {
        if(substr($input, 2, 1) == "s") {
            $n = substr($input, 0, 2);
            echo "Смещение на ", substr($input, 0, 2), " строк вниз <br>";	
        }
//Тело исследуемой функции:
/*<<<M1
Создает массив случайных чисел длиной N, находит максимальное и минимальное и меняет их местами. <br>
M1;*/
        echo " Число элементов массива массива: ";
        if(substr($input, 2, 1) == "s") $input = substr($input, 3, strlen($input)-3);
        $input = trim($input);
        if(!ctype_digit($input)) echo "Длинной массива могут быть только числа. Целые :))";
        else {
            echo $input, "<br>";
            $i = 0;
            while($i < $input) {
                $arr[$i] = mt_rand(-100, 100); 
                if(!isset($max) & (!isset($min))) { $min = $max = $arr[$i]; $imin = $imax = $i; }
                if($arr[$i] > $max) { $max = $arr[$i]; $imax = $i; }
                if($arr[$i] < $min) { $min = $arr[$i]; $imin = $i; }
                $i++;
            }
            echo "Введен массив:........................... ", print_r($arr);
            echo "<br> Максимальный элемент: [", $imax, "] => ", $arr[$imax];
            echo "<br> Минимальный элемент: [", $imin, "] => ", $arr[$imin];
            $x = $arr[$imin]; $arr[$imin] = $arr[$imax]; $arr[$imax] = $x;
            echo "<br> После смены мест переменных: ", print_r($arr);
        }
        $n = 3;
    }		
//Конец исследуемой функции.
    return $n;
}
include("D:/progect/openserver/openserver/domains/Stady/viewer/test.php");
?>



