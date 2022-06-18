<!DOCTYPE html>
<!-- Вариант 2: с использованием спрайта, без background, с возможностью массштабирования,
с подключением библиотек JS для IE, обеспечивающих "понимание" CSS3  -->
<html>
 <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- Библиотека, позволяющая эксплореру понимать некоторые виды CSS, в нашем
случае, псевдокласс "checked" -->
	<!--[if lt IE 9]>
        <script src="http://Stady/Proba_php/JS/IE9.js"></script>
    <![endif]-->
    <title>Чекбокс в виде переключателя</title>
    <style type="text/css">
       
.size, input[name='aaa'] {    
    height: 200px;
    width: 200px;
}
		
.chboxdiv {
    border: 2px solid red;
	position: relative;
	margin: 0;
	padding: 0;
	margin: auto;
	border: 0;
	overflow: hidden;
	cursor: pointer;
    outline: none;
}

input[name="bbb"] {   /*Убираем чекбокс с глаз долой*/
    position: absolute;
    left: -9999px;

}

div[class~="chboxdiv"] label {
    display: block;            /* Метка, по которой кликаем, чтобы чекнуть чекбокс */
	height: 100%;
	width: 100%;
	position: absolute;        /* воздействие идет по ID */
	background-color: yellow;  /*Цвет задавать обязательно, иначе не работает*/
	opacity: 0;
    outline: none;
}		

div[class~="chboxdiv"] img {
	position: absolute;
    display: inline-block;
	width: 200%;
	height: 100%;
}
		
input:checked + div[class~="chboxdiv"] img {
	position: absolute;
	left: -100%;
}
		
	</style> 
	</head>
    <body>
        <p style="margin: 0; text-align: center">Вариант 2. С использованием библиотек JS. 
           В IE6 - IE8 функционален, включая графику, если не отключены JS.</p>
        <input id="chbox" type="checkbox" name="bbb" value="checked" <?php echo $_GET['aaa']; ?>>
        <div class="chboxdiv size" style="height: <?php echo $height; ?>px; width: <?php echo $width; ?>px">
	        <img id="im" src="<?php echo $sprite_url; ?>">
	        <label for="chbox"></label> 
        </div>	    
	</body>
</html>