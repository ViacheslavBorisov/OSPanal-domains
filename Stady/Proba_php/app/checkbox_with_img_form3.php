<!DOCTYPE html>
<!--Вариант 2: с использованием 2х разных картинок и браузерных аттрибутов 
 -webkit-appearance и -moz-appearance.-->
<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Чекбокс в виде переключателя</title>
  <style type="text/css">
   
    .checkbox_div {
    border-radius: 105px;
    margin: auto;
    height: 210px; 
    width: 210px; 
    }

   input[name="c2"] {
    -webkit-appearance: none; /* Прячем чекбокс в Crome и Safari */
    -moz-appearance: none; /* Прячем чекбокс в Mozille */
    cursor: pointer; /* Курсор в виде руки */
    outline: none;  /* Убрать "свечение" вокруг активного поля */
/*	opacity: 0;     /* Полностью прозрачный (невидимый) (включая картинку :)) */
    display: block;
    background: url("http://Stady/Proba_php/img/buttom-ess-empty.png"); /* Переключатель выключен */
    height: 209px; /* Высота картинки */
    width: 214px; /* Ширина картинки */
	}
   input[name="c2"]:checked {
 /*   background-position: 0 -26px;  Смещение картинки в случае использования спрайта */
    -webkit-appearance: none; /* Прячем чекбокс в Crome и Safari */
    -moz-appearance: none; /* Прячем чекбокс в Mozille */
    cursor: pointer; /* Курсор в виде руки */
    outline: none;  /* Убрать "свечение" вокруг активного поля */
/*	opacity: 0;     /* Полностью прозрачный (невидимый) (включая картинку :)) */
    display: block;
    background: url("http://Stady/Proba_php/img/buttom-ess.png"); /* Переключатель выключен */
    height: 209px; /* Высота картинки */
    width: 214px; /* Ширина картинки */
    }
 </style> 
 </head>
 <body>
     <div class="checkbox_div">
        <input type="checkbox" name="c2"/>
     </div>
 </body>
</html>