<?php // Тестирование строк функцией CTYPE_XXXX(строка) на предмет определения характеристик вводимых 
      // данных.
function TestPHP($input) {
    if(empty($input))
    echo '<p style="text-align: center; margin: 0px"><span style="color: lightgray; font-weight: bold">
    СКРИПТ ПОДКЛЮЧЕН. </span><br>Тест функции ctype_x() (проверка класса символов в строке).</p>';
    else {
        if(substr($input, 2, 1) == "s") {
            $n = substr($input, 0, 2);
            echo "Смещение на ", substr($input, 0, 2), " строк вниз <br>";	
        }
//Тело исследуемой функции:
        echo "<br>Печатные символы (ctype_print): ";
        $test = (ctype_print($input)) ? "Все " : "Не все ";
		echo $test;
		echo '<span style="color: red">"Непечатными" символами считается ВСЯ КИРИЛИЦА и знак номера "№"</span>';
        echo "<br>Все печатные символы, кроме пробела (ctype_graph): ";
        $test = (ctype_graph($input)) ? "Все " : "Не все ";
		echo $test;
        echo "<br>Печатные, но не пробел или буква-цифра(ctype_punct):";
        $test = (ctype_punct($input)) ? "Все " : "Не все";
		echo $test;
        echo "<br>Буквенные символы (ctype_alpha): ";
        $test = (ctype_alpha($input)) ? "Все " : "Не все ";
		echo $test;
        echo "<br>Буквенно-цифровые символы (ctype_alnum): ";
        $test = (ctype_alnum($input)) ? "Все " : "Не все";
		echo $test;
        echo "<br>Цифровые символы (ctype_digit): ";
        $test = (ctype_digit($input)) ? "Все " : "Не все";
		echo $test;
        echo "<br>Символы пробела(ctype_space):";
        $test = (ctype_space($input)) ? "Все " : "Не все";
		echo $test;
        echo "<br>Управляющие символы (ctype_cntrl): ";
        $test = (ctype_cntrl($input)) ? "Все " : "Не все ";
		echo $test;
        echo "<br>Символы в верхнем регистре(ctype_upper):";
        $test = (ctype_upper($input)) ? "Все " : "Не все";
		echo $test;
        echo "<br>Cимволы в нижнем регистре(ctype_lower): ";
        $test = (ctype_lower($input)) ? "Все " : "Не все ";
		echo $test;
//Конец исследуемой функции.
$n = 8;
        return $n;
    }
}
include("D:/progect/openserver/openserver/domains/Stady/viewer/test.php");
?>



