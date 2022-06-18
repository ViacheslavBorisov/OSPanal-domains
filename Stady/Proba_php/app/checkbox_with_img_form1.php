<!DOCTYPE html>
<!-- Вариант 1: с использованием спрайта, без background, с возможностью массштабирования,
с условными комментариями стиля для IE (используется в реальной форме) -->
<html>
 <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Чекбокс в виде переключателя</title>
    <style type="text/css">
        .zopa {    
          height: 200px;
          width: 200px;
        }

        .block-check {
		position: relative;
		display: block;
		overflow: hidden;
		margin: 0;
		margin: auto;
        padding: 0;
		cursor: pointer;
		}		
		
		.block-check input {
        border: 0px;
	    position: absolute;
		display: block;
		top: 0; left: 0;
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
		outline: 0;
		opacity: 0;
        visibility: hidden;		
		}

		input[type="checkbox"] + img {
		position: absolute;
		width: 200%;
		height: 100%
		}
		
		input[type="checkbox"]:checked + img {
		left: -100%;
		}
	</style> 
<!--[if lt IE 9]>
    <style>
        input[type="checkbox"] + img {
        opacity: 0;
        visibility: hidden;
        }

        .block-check input {
		opacity: 1;
        visibility: visible;
        }
    </style>
<![endif]-->	
	</head>
    <body>
        <p style="margin: 0; text-align: center">Вариант 1. В IE6 - IE8 функционален без графики.</p>
        <label class="block-check zopa" style="height: <?php echo $height; ?>px; width: <?php echo $width; ?>px">
            <input type="checkbox" name="aaa" value="checked" <?php echo $_GET['aaa']; ?>>
		    <img src="<?php echo $sprite_url; ?>">
        </label> 
    </body>
</html>