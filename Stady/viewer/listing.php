<!DOCTYPE html>
<!--Процедура создает листинг программ, включивших ее в себя при помощи 
INCLUDE("Полный путь к программе listing.php"), и определисших перед этим
свой "обратный адрес" в переменной file_addres = "Полный путь к файлу, из
которого происходит вызов"-->
  <html>
    <head>
        <title> LISTING SCRIPT </title>
        <meta charset="utf-8">
        <link type="text/css" rel="stylesheet" href="http://stady/viewer/php_style.css"/>
        <script src='http://stady/viewer/highlight_js/highlight.pack.js'/></script>
        <link href='http://stady/viewer/highlight_js/styles/railscasts.css' rel='stylesheet'/>
        <script type='text/javascript'>
           hljs.initHighlightingOnLoad(); 
        </script>
        <script type='text/javascript'>
          hljs.configure({useBR: true}); $('div.code').each(function(i, block) { hljs.highlightBlock(block); });	   
        </script>
	</head>
	<body>
<pre><code class="html">           
<?php
    if ($str_num_max == 0) $str_num_max = 1000;//Максимальное количество строк в программе
    if(!(isset($file_addres)))     //Если file_addres не существует - распечатай саму себя 
        $file_addres = $listing_path ;
    if(!(fopen($file_addres, "r"))) echo "Ошибка открытия файла!";
        else {
	        $file_handle = fopen($file_addres, "r");
            $i = 1;
            while (!feof($file_handle)) {
                $line[$i] = fgets($file_handle);
                if(($i >= $str_num_min) & ($i <= $str_num_max)) 
                    echo "<br><span style=\"font-size: 120%\">",$i,'. '.htmlspecialchars($line[$i])."</span>";
                $i++;
            }
            fclose($file_handle);
        }
	unset($file_addres);
?>
</pre></code>
   </body>
  </html>