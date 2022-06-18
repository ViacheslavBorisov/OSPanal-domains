<!DOCTYPE html>        
<html>                 
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Разбор позиционирования</title>
  <style type="text/css">
  .box {
	  position: relative;
	  width: 700px;
	  margin: auto;
	  border: 5px solid green;
  }
  .relative {
	  border: 5px solid blue;
	  background-color: yellow;
	  height: 100px;
	  width: 100px;
	  position: relative;
	  top: 40px;
	  left: 50px;
  }
  .absolute {
	  border: 5px solid red;
	  background-color: white;
	  height: 100px;
	  width: 100px;
	  position: absolute;
	  top: 80px;
	  left: 70px;
  }

  </style> 
 </head>
 <body>
  <div class="box">

	    <div class="relative">
	       <p> RELATIVE </p>
     <div class="absolute">
	 <p> ABSOLUTE </p>
     </div>
        </div>

    

     <!--div class="absolute" style="left: 275px">
	 <p> ABSOLUTE 1 </p>
     </div>

     <div class="relative">
	 <p> RELATIVE 1</p>
     </div-->

   </div>
 </body>
</html> 
