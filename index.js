
$(".toggleButton").hover(function (){
  $(this).addClass("highlightedButton");
},function (){
  $(this).removeClass("highlightedButton");
});


$(".toggleButton").click(function (){
  $(this).toggleClass("selected");

  $(this).removeClass("highlightedButton");

  var panelId = $(this).attr("id") + "Panel";

  $("#" + panelId).toggleClass("hidden");

   var activePanels = 4 - $('.hidden').length;

  $(".panel").width(($(window).width() / activePanels) - 10);
});


$(".panel").height($(window).height() - $("#header").height() - 15);

$(".panel").width(($(window).width() / 2) - 10);




$("textarea").on('change keyup paste', function(){
  $("#outputPanel").contents().find('html').html($('#htmlPanel').val());
});
