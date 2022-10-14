 $(document).ready(function () {
   $('.header-boorger, .navigation a').click((event) => {
     $('.header-boorger, .navigation').toggleClass('active');
    //  Block scroll content under menu 
     $('body').toggleClass('lock');
   })
 })

