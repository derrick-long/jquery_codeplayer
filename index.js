$(".toggleButton").hover(function (){
  $(this).addClass("highlightedButton");
},function (){
  $(this).removeClass("highlightedButton");
});


$(".toggleButton").click(function (){
  $(this).toggleClass("selected");
  $(this).removeClass("highlightedButton");
});

$(".panel").height($(window).height() - $("#header").height() - 15);

$(".panel").width(($(window).width() / 2) - 10);


$("textarea").on('change keyup paste', function(){
  $("#outputPanel").contents().find('html').html($('#htmlPanel').val());
});
