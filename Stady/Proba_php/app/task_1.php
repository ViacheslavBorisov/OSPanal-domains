<!DOCTYPE html>
    <html>
	    <head>
		    <title> Задание 1. </title>
			<link type="text/css" rel="stylesheet" href="http://stady/Proba_php/php_style.css"/>
			<meta charset="utf-8"/>
		</head>
		<body>
		    <h2 class="task_name"> Задание 1. </h2> <a href="http://stady/Proba_php/Proba_php.php"> <h3> НА ГЛАВНУЮ </h3> </a>
			<?php
				    echo <<<test1
					Вам нужно разработать программу, которая считала бы сумму цифр числа введенного пользователем. <br> 
					Например: есть число 123, то программа должна вычислить сумму цифр 1, 2, 3, т. е. 6. <br>
По желанию можете сделать проверку на корректность введения данных пользователем. 
test1;
                  ?>
		                <form method="GET" action="http://stady/Proba_php/app/task_1.php">
                            Введите число: <input type="text" name="input_data">
                            <br>
                            <input type="submit" value="Введено / Очистить результат">
                        </form>
						    <?php
                                if($_SERVER['REQUEST_METHOD'] == 'GET') {
	                                $input_string = $_GET['input_data'];
                                    $n = strlen($input_string);
									    if($n>0) {
											echo 'ВВЕДЕНО: <span style="color: blue">', $input_string, "</span> длиной ",$n," символов <br>";
									        $input_char = str_split($input_string);
                                            $i = 0;
											$zero = 0;
										    while($i <= $n) {
											    if(($input_char[$i] == "0") or ($input_char[$i] == "1") or ($input_char[$i] == "2") 
												 or ($input_char[$i] == "3") or ($input_char[$i] == "4") or ($input_char[$i] == "5") 
												 or ($input_char[$i] == "6") or ($input_char[$i] == "7") or ($input_char[$i] == "8") 
												 or ($input_char[$i] == "9")) 
												   { $input_char[$i] = (int)$input_char[$i];
                                                    if($input_char[$i] == "0") $zero = 1; 													
       											    $summa = $input_char[$i] + $summa; }
                                                $i++;											
										    }
											if(empty($summa)) {
											      if($zero !== 0) 
											        echo 'Сумма цифр, входящих во введенную Вами строку:  <span style="color: red">',0,"</span> <br>";
												   else echo "Во введенных вами данных нет цифр <br>"; 
											}
										    else echo 'Сумма цифр, входящих во введенную Вами строку:  <span style="color: red">',$summa,"</span> <br>";
										} 
								  echo 'Для повторения или очистки результата, нажмите "ВВЕДЕНО / ОЧИСТИТЬ".';
								}
                            ?>
			<p class="task_name"> Текст программы. Вариант с "главной страницы". </p> 				
			<img src="http://stady/Proba_php/img/task_1.png"/>
        </body>
	</html>