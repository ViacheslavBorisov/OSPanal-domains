<!DOCTYPE html>
     <html>
            <head>
                  <title> Proba PHP </title>
				  <link type="text/css" rel="stylesheet" href="php_style.css"/>
                  <meta charset="utf-8"/>
            </head>
            <body>
<!-- Приветствие. Индикатор работы PHP. -->
                  <p style="color: red; font-size: 20px; text-align: center"> Есть кто дома? <br>
                  <?php 
                       echo "Работает PHP";
                  ?>
                  </p>
				  <div class="link_pic">
				     <a href="http://php720.com/"> 
				         <img id="link_pic"; src="http://Stady/Proba_php/img/php_main_boock.png"/>
				     </a>
					 <a href="http://www.php5.ru/study/webbasics"> 
				         <img id="link_pic"; src="img/php5ru.png"/>
				     </a>
					 <a href="http://htmlbook.ru/html"> 
				         <img id="link_pic"; src="img/logo_html.png"/>
				     </a>
					 <a href="http://www.keeplex.ru/100004282/"> 
				         <img id="link_pic"; src="img/keeplex_logo_beta_blue_2.gif"/>
				     </a>
					 <a href="http://www.codecademy.com/learn"> 
				         <img id="link_pic"; src="img/Codecademy.png"/>
				     </a>
					 <a href="http://stady/Proba_1_HTML_CSS/Proba.html"> 
				         <img id="link_pic"; src="img/Proba1.png"/>
				     </a>
					  <a href="http://stady/Proba_php/app/test.php"> 
					     <img id="link_pic"; style="border-radius: 12px" src="img/test.png"/> 
					 </a>
					 <a href="http://stady/Proba_php/app/task_1.php"> 
					     <div id="link_pic" style="background-color: orange; width: 50px">Task 1</div> 
					 </a>
					 <a href="http://stady/Proba_php/app/task_2.php"> 
					     <div id="link_pic" style="background-color: orange; width: 50px">Task 2</div> 
					 </a>
					 <a href="http://stady/Proba_php/app/task_3.php"> 
					     <div id="link_pic" style="background-color: orange; width: 50px">Task 3</div> 
					 </a>
					 <a href="http://stady/Proba_php/app/run.php"> 
					     <div id="link_pic" style="background-color: orange; width: 50px">RUN!!!:)</div> 
					 </a>
				  </div>
				  <h1 style="text-align: center"> Практические задания по PHP. </h1>
<!--Задание 1. Левая колонка (Задание и рабочая область), Центральная - текст программы, Правая - расширенные коментарии.-->
				  <h2 class="task_name"> Задание 1: </h2>
				  <div class="task_block_main">
				    <?php
				    echo <<<test1
					Вам нужно разработать программу, которая считала бы сумму цифр числа введенного пользователем. <br> 
					Например: есть число 123, то программа должна вычислить сумму цифр 1, 2, 3, т. е. 6. <br>
По желанию можете сделать проверку на корректность введения данных пользователем. 
test1;
                  ?>
				        <br>
				        <br>О создании полей и получении данных: <br>
						<a href="http://php720.com/lesson/44"> конкретно </a> 
						или  <a href="http://www.php5.ru/study/webbasics">более общая информация</a> <br> или
						<a href="http://www.webchaynik.ru/PHP/perechacha_peremennyh.html"> еще интересно </a>
				        <p style="margin-bottom: 1px"> ОТВЕТ: </p>
				  <!-- Форма ввода текста. Взята с http://www.php5.ru/study/webbasics-->
				        <form method="GET" action="http://stady/Proba_php/Proba_php.php">
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
										    else echo 'Сумма цифр, входящих во введенную Вами строку:  <span style="color: red">',$summa,"</span> <br>" ;
										} 
								  echo 'Для повторения или очистки результата, нажмите "ВВЕДЕНО / ОЧИСТИТЬ".';
								}
                            ?>
				  </div>
<!-- Задание_1.(Комментарии).-->
				  <div style="color: green">
                  <h2 style="text-align: center; margin-bottom: 0px; margin-top: 2px; color: blue"> Комментарии, замечания, наработки.</h2>
				  При попытке вывести на экран средствами PHP условия первого задания были выявлены особенности использования синтаксисов с <br>
				  <a href="http://php.net/manual/ru/language.types.string.php#language.types.string.syntax.single"> ОДИНАРНЫМИ </a> и 
<a href="http://php.net/manual/ru/language.types.string.php#language.types.string.syntax.double"> ДВОЙНЫМИ </a>, <br>кавычками, а так же <br>
<a href="http://php.net/manual/ru/language.types.string.php#language.types.string.syntax.heredoc"> "HEREDOC" </a> и 
<a href="http://php.net/manual/ru/language.types.string.php#language.types.string.syntax.nowdoc"> "NOWDOC" </a>. <br>
1.При одинарных кавычках PHP распознает, как команды в строке, только символ самих одинарных кавычек "'" и обратную косую черту "\", чтобы и эти 
символы оторбражались, как просто символы их надо ПРОЭКРОНИРОВАТЬ "\". <br> НАПРИМЕР: \' или \\ <br>
2. При исползовании двойных кавычек, набор символов в строке, воспринимаемык как команды - гораздо шире (см. ссылку). Для экранирования используют ту же "\".
Основное отличие двойных кавычек от одинарных - обработка переменных. <br>
3. При использовании стиля HEREDOC, ОЧЕНЬ ВАЖНО, чтобы перенос строки (клавиша ENTER) был сразу после начального идентификатора, и сразу после окончания строки.
<span style="color: red">НИКАКИХ ТАБУЛЯЦИЙ И ДОП ПРОБЕЛОВ НЕ ДОПУСКАЕТСЯ!</span> <br>
<img style="width: 400px"; src="img/2015-03-23_194059.png"/><br>
4 Про стиль NOWDOC - не прочитал :))<br>
5. echo: мат. операции, записанные в echo выводят результат. HTML операторы, не содержащие "", но заключенные в них - выполняются, содержащие "двойные", 
но заключенные в 'одинарные' - выполняются <span class="task_name"> echo 'Сумма цифр, входящих во введенную Вами строку:  &lt;span style="color: red"&gt;',$summa,"&lt;/span&gt; &lt;br&gt;";</span><br>
6. Символ . - склеивание кусков. Символ , последовательное выведение элементов. Если надо отобразить html-теги, то "<" заменяют (& l t ;) (без пробелов и скобок),а ">" - (& g t ;) <br> 
<span style="color: blue"> По поводу ввода данных при помощи формы...
При использовании метода POST при перезагрузке страницы всплывает сообщение, предупреждающее о том, что данные формы используются и предложением "продолжить 
либо отменить", что раздражает. Когда используется метод GET - данной фигни не твориться :)<br>
После изменений сохраненных в тексте программы, не забудь ОБНОВИТЬ СТРАНИЧКУ В БРАУЗЕРЕ :))</span> <br>
1. Обращение к элементам массива - КВАДРАТНЫЕ скобки. КРУГЛЫЕ скобки - вызов функции; даже если аргументом является элемент - это только первичные передаваемые данные. <br>
2. Для смены типа данных используют: с присваиванием $var = (int)$var; без присваивания settype($var, integer) <br>
3. Для определения длины строки: $n = strlen($input_string); (В результате $n - целое число, равное числу символов в строке). <br>
4. Для преобразования строки в массив: $chars = str_split($string, длина куска на которые рубим) (В результате $chars - массив отдельных элементов, подлежащих нумерации [:)])<br>
5. Функция gettype($var) - возвращает ТИП ПЕРЕМЕННОЙ $var. Пригодилось при отладке :).<br>
6. Для проверки того, существует ли переменная (определена ли она) служат функции <br> 
empty - если в переменной ноль или нечего - TRUE  и isset - тоже какая-то непонятная заморочка <br> 
           		  </div></div>
				  <h2 class="task_name"> Задание 2: </h2>
<!--Задание_2-->
				  <div class="task_block_main">
				     <?php
				    echo <<<test2
					Вам нужно разработать программу, которая считала бы количество вхождений какой-нибуть <br> выбранной вами цифры 
в выбранном вами числе. <br> Например: цифра 5 в числе 442158755745 встречается 4 раза
test2;
			?>
			<br><br>
			<form method="GET" action="http://stady/Proba_php/Proba_php.php">
			    Введите строку символов: <input type="text" name="input_data_str">
				<br>
				Введите искомый символ: <input type="text" name="input_data_char">
				<br>
				<input type="submit" value="Введено / Очистить результат">
			</form>
			<?php 
			    if($_SERVER['REQUEST_METHOD'] == 'GET') {
					$data_str = $_GET['input_data_str'] ;
					$len_data_str = strlen($data_str) ;
					$char = $_GET['input_data_char'] ;
					$len_char = strlen($char);
					    if(($len_data_str == 0) and ($len_char == 0)) echo 'Для повторения или очистки результата, нажмите "НАЧАТЬ / ОЧИСТИТЬ".';
						if(($len_data_str == 0) and ($len_char == 1)) echo 'Нечего сравнивать :). Нажмите "ОЧИСТИТЬ" и попробуйте снова.';
						if($len_char > 1) echo 'К сожалению, программа может подсчитать сколько раз встречается ОДИН символ в строке... <br>
						                        Нажмите "ОЧИСТИТЬ" и попробуйте снова.';
						if(($len_data_str >= 1) and ($len_char == 0)) { $len_char = 1; $char = ' '; }  
						if(($len_data_str >= 1) and ($len_char == 1)) {
							$data_array = str_split($data_str);
							$i = 0;
							$counter = 0;
							    while($i <= $len_data_str) {
									if($char == $data_array[$i]) ++$counter;
									$i++;
								}
							echo 'Символ "', $char,'" встречается в строке : "',$data_str, '" ..........',$counter,' раз'; 
						} 
				}
			?>
				  </div>
<!--Задание 2.(Коментарии)-->
				  <div style="color: green">
                  <h2 style="text-align: center; margin-bottom: 0px; margin-top: 2px; color: blue"> Комментарии, замечания, наработки.</h2>
				      1.При вводе данных кирилицей, есть устойчивое ощущение, что один символ считается за два.<br>
					  2.Виноваты ЧЕРТОВЫ КОДИРОВКИ! Никогда (СЦУКО!!!!) не выставляй больше кодировку UTF-8 - браузер нормально отображает кирилицу,
			но передача кирилицы из форм приводит к удвоению числа символов, если ставить "UTF-8(без ВСМ)"- тогда нормально
			считается число символов, но, (БЛЕАДЬ!!!), вся кириллица в браузере превращается а АБРАКАДАБРУ.<br>
			<strong> Выставил ANCI - ВСЕ ЗАРАБОТАЛО!!!</strong> <br>. Про кодировки и смену кодировок в Notepad++ написано <a href="http://web-ru.net/sajtostroenie/texnicheskie-momenty/kak-smenit-kodirovku-fajla-notepad-plus-plus-redaktor-s-podsvetkoj-sintaksisa-kodirovka-utf-8-bez-bom.html">
			ТУТ</a>. Справился "на отлично" :).
			<span style="color: blue"> 3.Функция count() определяет ЧИСЛО ЭЛЕМЕНТОВ МАССИВА, так что его даже можно не знать заранее :)<br>
4. Функция strlen($string) считает число элементов (СИМВОЛОВ) СТРОКИ. УЧИТЫВАЮТСЯ даже ПРОБЕЛЫ: <strong>если в верхнее поле ввести только пробелы,
их тоже подсчитает. Тоже самое с многочисленными пробелами в середине строки.</strong> Пробелы "съедаются" при выводе, а не при подсчете.<br>
5. Функция explode(признак,$string) - позволяет разбить СТРОКУ и превратить ее в МАССИВ. "Признак" - какой-то символ, встречающейся в строке - он 
и служит границей (границами, если встречается неоднократно) разбиения. Сам символ признака в созданные потом элементы массива не входит - исчезает<br>
6. unset() - разопределить (вообще уничтожить) переменную (массив); isset() - проверить ее существование.<br>
7. Интересные варианты выводов массивов есть <a href="http://www.php.su/articles/?cat=vars&page=014"> ТУТ</a>.</span> 
            	</div>
				<h2 class="task_name"> Задание 3: </h2>
<!--Задание_3-->
				<div class="task_block_main">
			<?php
				    echo <<<test2
					Разработайте программу, которая из чисел 20..45 находила те, которые делятся на 5 и найдите<br>
					сумму этих чисел.<br>
					Рекомендуется использовать функцию fmod для определения "делится число" или "не делится".
test2;
			?>
			<br><br>
			<form method="GET" action="http://stady/Proba_php/Proba_php.php">
			    Введите границы диапазона чисел: <br>
				от <input type="text" name="border_1">
				до <input type="text" name="border_2">
				<br> и делитель: <input type="text" name="separ"> <br>
				<input type="submit" value="Calculate">
				<input type="reset" value="Clean">
			</form>
			<?php
    			if($_SERVER['REQUEST_METHOD'] == 'GET') {
					echo '<div class="task_block" style="background-color: brown"> <div class="anser_block">';
					$correct = 1;   //Маркер корректности ввода ВСЕХ данных во ВСЕХ полях
	    			for($i = 1; $i <= 3; ++$i) { //Проверка вводимых данных: все ли они цифры
						if($i == 1) { $input_data = $_GET['border_1']; $aria_name = "от"; }
					    if($i == 2) { $input_data = $_GET['border_2']; $aria_name = "до"; }
					    if($i == 3) { $input_data = $_GET['separ']; $aria_name = "делитель"; }
						$len_str = strlen($input_data);
						$input_array = str_split($input_data); //Начало блока проверки введенных данных.
						if($len_str > 0) {  //Данный оператор можно заменить на "обязательность заполнения" полей в форме.
                            $chislo = 1;
							$l = 0; //Счетчик индексов некорректных элементов
    						for($j = 0; $j <= ($len_str - 1); ++$j) {  //Перебираем символы входящие в энное поле
								$cifra = 0;
							    for($k = 0; $k <= 9; ++$k) {           //Сравниваем их с цифрами от 0 до 9
								    if($input_array[$j] == "$k") $cifra = 1;//$cifra = 1 -> Символ совпал с цифрой
				                }
								if($cifra == 0) { $index_corrupt[$l] = $j; ++$l;} 
									//" символ ",$input_array[$j]," на позиции ",$j + 1," не корректен!<br>";
                                $chislo = $chislo * $cifra; // $chislo = 1 -> все символы во энном поле формы - цифры
                           	}
							if($chislo == 1) {
								if ($i == 1) { settype($input_data, integer); $ot = $input_data; }
                                if ($i == 2) { settype($input_data, integer); $do = $input_data; }
                                if ($i == 3) { settype($input_data, integer); $delitel = $input_data; }									
							    } else {
							        echo 'В поле "<span class="anser_task">',$aria_name,'</span>" в исходных данных: ';
									$l = 0;
									for ($j = 0; $j <= ($len_str - 1); ++$j) {
										if($j == $index_corrupt[$l]) {
										    $l++;
                                            echo '<span style="color: red; font-size: 140%">',$input_array[$j],"</span>";											
										} else  echo '<span class="anser_data">',$input_array[$j],"</span>";
									}
									echo ' введен <span style="color: red">некорректный символ</span> или пробел.<br>';
							}		
                            $pole_ok++; //Одно из полей чем-то заполнено - после 3 циклов - в идеале все три.
						}
						$correct = $correct * $chislo; //В очередном поле корректные данные. В идеале - во всех 3х.
					}					//Конец блока проверки входных данных
					if($pole_ok == 0) echo '<p style="text-align: center; color: lightgray; font-weight: bold; margin: 0px">ОБЛАСТЬ ВЫВОДА РЕЗУЛЬТАТА</span>';
					if(($pole_ok > 0) and ($pole_ok < 3)) echo '<p class="anser_rez">Не все поля заполнены!</p>';
					if(($correct == 1) and ($pole_ok == 3)) { //Данные верны. Начало блока вычислений.
					    if($ot < $do) { $min = $ot; $max = $do; } else { $min = $do; $max = $ot; }
					    echo 'В диапазоне от.. <span class="anser_task">',$min, '</span> ..до.. <span class="anser_task">',$max, '</span> ..на.. <span class="anser_task">', $delitel, "</span> ..нацело делятся числа:<br>";
	                    $i = 0;
						while($min <= $max) {
						    if(fmod($min, $delitel) == 0) {
						        $summa = $summa + $min;
					            echo '<span class="anser_data"> ',$min,", </span>";
                                $i = 1;								
					        }
                             $min++;							
					    }
						if($i == 1) { echo '<br>их сумма равна: <span class="anser_rez">' ,$summa,"</span>" ; } 
					        else { echo '<br><span class="anser_rez">Такие числа отсутствуют</span>'; }
					}
					echo "</div> </div>";
		        }
			?>				
				</div>
<!--Задание 3.(Коментарии)-->
            <div style="color: green">
            <h2 style="text-align: center; margin-bottom: 0px; margin-top: 2px; color: blue"> Комментарии, замечания, наработки.</h2>
1. Наш великолепный оператор COUNT(), оказывается <strong>даже при пустых полях</strong>, ВЫДАЕТ ЗНАЧЕНИЕ <strong>ЕДЕНИЦА</strong>.<br> 
1.1. В незаполненном массиве, преобразованном из пустой (полученной из пустого поля формы) строки (strlen()=0), при помощи функции
str_split(), есть как минимум один элемент $array[1]="Array", поэтому мерять число символов во входной строке (проверять поле на "заполненность")
функцией count() - дело неблагодарное. Она как минимум покаже ОДИН ЭЛЕМЕНТ МАССИВА.<br>
2. Запись вида: $var = settype($var1, integer); - некорректна, т.к. ЗДЕСЬ СНАЧАЛА ПРОИЗВОДИТСЯ ПРИСВАИВАНИЕ, а потом уже преобразование типа данных,
 что конечно странно. <br>
3. Для нескольких пробелов подряд используют сущность (& n b s p) - без скобок и пробелов - ЭТО ПРОБЕЛ :))<br>
4. В цикле FOR с обработкой элементов массива глубоко пофиг ПРЕ- или ПОСТ - декримент ты используешь. Главное помнить, что нумерация элементов
начинается с нуля, а подсчет количества элементов (функция strlen()) - с единицы, то есть цикл должен идти (от 0 до strlen()-1)<br>
5. Строка символов, состоящая из цифр, при преобразовании типа к целому - СТАНОВИТСЯ ЧИСЛОМ!!!. Нули и пробелы в начале числа - игнорируются.<br>
6. Также игнорируются все цифры, стоящие после символа не являющегося цифрой. Если такой символ стоит в начале данных, то преобразование вида:
$var=(int)$var_1 дает: $var = 0.<br>Пример: $var_1= "479" -> $var= 479 <br> $var_1 = "4a9" -> $var = 4<br>$var_1 = "+79" -> $var = 0<br>
			</div>
		</body>
     </html> 