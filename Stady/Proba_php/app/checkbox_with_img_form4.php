<!DOCTYPE html>
<!--Вариант 3: был скопирован код с какого-то сайта и производился анализ его работы.
С использованием псевдокласса :before - громоздко и не работает на IE вообще...-->
<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <!--[if lt IE 9]>
<script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
<![endif]-->
  <title>Чекбокс в виде переключателя</title>
  <style type="text/css">
   
.checkbox,                   /* Класс, определяющий разбиение, задающее позиционирование */
.radio {                     /* чекбокса на странице. Из необходимого: position: relative */
    border: 5px solid violet;	
    border-radius: 105px;    /* Даже если разбиение круглое, чекбокс все равно описаный квадрат */
    margin: auto;            /* Ставим красиво, по центру */
    height: 209px;           /* Для того, чтоб img с высотой 209 не вылезала за границы род. блока */ 
    width: 214px;            /* Чтобы было что центровать в род. блоке margin: auto, иначе наследует */ 
    position: relative;      /* Для того, чтобы "раздвинуть" границы родительского блока для ЧБ */
}
/* подгоняем размер чекбокса/радиокнопки под картинку, обнуляем отступы, вешаем поверх всего и скрываем
 */  
.checkbox input[type="checkbox"], /* Задает область "чекбокс" - если внутри нее кликнуть, то происходит */
.radio input[type="radio"] {      /* процесс: checked */
  position: absolute;/* Чтобы накладывалось на предыдущее выделение */
  width: 100%;      /* Задаем размер области с характеристиками "чекбокс" (может быть и больше) картинки, */
  height: 100%;     /* т.е. область чекбокс - везде, где внутри нее происходит клик - картинка меняется */
  /* особо ни на что не влияет, разве, что браузеры, не умеющие работать с картинками будут отображать */
  /* стандартный ЧБ соответствующего размера (IE7,8, Crome)) */
  overflow: hidden; /* =не отображать элементы, выходящие за рамки выделения (и так не отображаются) - */
  cursor: pointer;  /* курсор в виде руки, на случай браузеров, не отображающих картинки */ 
  margin: 0;        /* =стандартный ЧБ просто принимает размеры этой области, или остается маленьким */
  padding: 0;       /* =в зависимости от браузера */
  border: 0;
  outline: 0;       /* не подсвечивать ЧБ, когда он активен. Есть еще значение 'none' */
  opacity: 0;   /* ГЛАВНОЕ: сделать ЧБ полностью ПРОЗРАЧНЫМ!(для IE7,8 не работает - остается исходный вид ЧБ)*/
  visibility: hidden; /* Делает ПОЛНОСТЬЮ невидимым (в IE7,8 на месте ЧБ - пустота) */
}
/* Задаем конкретный спрайт для конкретного чекбокса по его имени */
.checkbox input[name="for"] + label:before, 
.radio input[name="for"] + label:before {
  background: url('../img/forms_scripts.gif'); /*inherit;/* спрайт - ЭТО БЭКГРАУНД МЕТКИ (которая блочный элемент)*/
}
.checkbox input[name="ass"] + label:before, 
.radio input[name="ass"] + label:before {
  background: url('../img/buttom_ass_sprite.png'); /* спрайт - ЭТО БЭКГРАУНД МЕТКИ (которая блочный элемент)*/
}
/* Собственно, картинка загнана в тег LABEL свойством BACKGROUND: URL(); (не работает для IE) */
.checkbox input[type="checkbox"] + label:hover, /* курсор в виде руки при наведении на метку, которая */ 
.radio input[type="radio"] + label:hover {      /* по сути картинка */
cursor: pointer;
}
.checkbox input[type="checkbox"] + label:before, /* before - ЭЛЕМЕНТ:копирует свойства предъидущего элемента (в нашем */
.radio input[type="radio"] + label:before {      /* случае ЧБ и присваивает их тому, где указано CONTENT: " " */
  position: absolute;                           /* опять, чтобы наложилось сверху */
  display: block;                                /* тафталогия из предъидущего класса */
  width: 100%;                                   /* Размеры окна, в которое проглядывает картинка */
  height: 100%;
  content: " ";                                 /* передает метке свойства ЧБ (из-за наличия :before) */ 
  vertical-align: middle;                       /* хитрое выравнивание - надо посмотреть внимательнее */
  left: 0;                                      /* а шо, по умолчанию так не будет ?! */
  top: 0;
border: 1px solid blue;
}
/* Позиционируем фоновую картинку в зависимости от состояния контролла */
.radio input[type="radio"] + label:before {
  background-position: 0 0;
}
.radio input[type="radio"]:checked + label:before {
  background-position: -213px 0;
}
.checkbox input[type="checkbox"] + label:before {
  background-position: 0 0;
}
.checkbox input[type="checkbox"]:checked + label:before { /* подстваляем нужную часть спрайта в зависимости от */
  background-position: -213px 0;                          /* состояния CHECKED */
}
 </style> 
 </head>
 <body>
 <form action="http://Stady/Proba_php/app/run.php">
        <div class="checkbox">
            <input type="checkbox" id="foo-1" name="ass" value="checked" <?php echo $_GET['ass']; ?>>
            <label for="foo-1"></label>
        </div>
        <div class="checkbox">
            <input type="checkbox" id="foo-2" name="for" value="checked" <?php echo $_GET['ass']; ?>>
            <label for="foo-2"><!--img style="height: 100%; width: 100%" 
			src="http://Stady/Proba_php/img/2015-04-05_185147.png"/--></label>
        </div>
 <input type="submit" value="Ни пуха - ни пера!"/>
 </form>
</body>
</html>