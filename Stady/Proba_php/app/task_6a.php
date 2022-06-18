<?php //                          РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
// Переделать задание 6 (поменять имя-отчество на инициалы) с использованием механизмов РВ. 
// (Определитель языка тоже :))
function TestPHP($input, $pat, $replace) {
    if(empty($input)) //ОСНОВНАЯ ЧАСТЬ ПРОГРАММЫ.
    echo '<p style="text-align: center; margin: 0px"><span style="color: lightgray; font-weight: bold">
    СКРИПТ ПОДКЛЮЧЕН. </span><br>Введите Фамилию Имя Отчество (через пробел).</p>';
    else {
//Тело исследуемой функции:
        mb_internal_encoding("UTF-8");
        $input = trim($input);
        echo "Введена строка : \"$input\" из " ,mb_strlen($input), " символов.";
        if(mb_ereg_match("^[а-яА-Я\s]+$", $input)) echo "<br> Язык ввода: Русский."; 
        elseif(mb_ereg_match("^[a-zA-Z\s]+$", $input)) echo "<br> Язык ввода: English."; 
            else echo "<br> Язык пес знает какой :))";
        $input = mb_convert_case(mb_strtolower($input), MB_CASE_TITLE); //Все первые буквы в словах - ЗАГЛАВНЫЕ.
        $input = mb_ereg_replace("\s+([А-ЯA-Z])\w*", ' \1.', $input);
        echo "<br>Результат обработки: \"$input\" из ", mb_strlen($input), " символов.";
//Конец исследуемой функции.
    $str_down = 3;
    }
$note_path = 'D:/progect/openserver/openserver/domains/Stady/Proba_php/note/task_6a.txt'; //$note_path - если по
return array($str_down, $note_path);               // ходу написания надо что-то законспектировать в файл *.txt
}
include("D:/progect/openserver/openserver/domains/Stady/viewer/test.php");
?>