$(document).ready(function(){
  $("#videolink").click(function(){
    $("#video").fadeIn();
    $("#close").click(function(){
      $("#video").fadeOut();
    })
  })
})
