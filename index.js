$(".toggleButton").hover(function (){
  $(this).addClass("highlightedButton");
},function (){
  $(this).removeClass("highlightedButton");
});


$(".toggleButton").click(function (){
  $(this).toggleClass("selected");
  $(this).removeClass("highlightedButton");
});

$("textarea").height($(window).height() - $("#header").height() - 15);
