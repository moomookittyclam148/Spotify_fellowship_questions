$(document).ready(function(){
  $('button[id="1"]').click(function(){
    $("#form1").show();
    $("#form2").hide();
  });

  $('button[id="2"]').click(function(){
    $("#form1").hide();
    $("#form2").show();
  });
});
