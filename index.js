 $(document).ready(function () {
     $(".ifunnybtn").click(function () {
         $(".popifunny").fadeIn(300);
         positionPopup();
     });

     $(".popifunny > span, .popifunny").click(function () {
         $(".popifunny").fadeOut(300);
     });
     $(".scenes").click(function () {
         $(".popifunny").fadeIn(300);
         positionPopup();
     });

     $(".popifunny > span, .popifunny").click(function () {
         $(".popifunny").fadeOut(300);
     });

  $('.circle-graph').easyPieChart({
    scaleColor: false,
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#a378aa',
    trackColor: '#e7b8ef' ,
    size: 150,
    animate: 800
  });



 });
