$(document).ready(function(){
  $("form[id='1']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="1"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="1"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="1"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="1"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="1"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="1"]').find('input[id="event_month"]').val()
      },
      type : 'POST',
      url : '/events',
    })
    .done(function(data){
      if(data.error_msg){
        $('#errorAlert').text(data.error_msg).show();
        $('html, body').animate({
          scrollTop: $("#errorAlert").offset().top
        }, 500);
      }
      else {
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card">');
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card-body">');
        $("#collapseEvents" + data.event_date + " > .card").append('<ul class="list-group">');
        $("#collapseEvents" + data.event_date + " > .card").append('<li class="list-group-item">Event Title: ' + data.event_title + '</li>');
        $("#collapseEvents" + data.event_date + " > .card").append('<li class="list-group-item">Start Time: ' + data.start_time + '</li>');
        $("#collapseEvents" + data.event_date + " > .card").append('<li class="list-group-item">End Time: ' + data.end_time + '</li>');
        $("#collapseEvents" + data.event_date + " > .card").append('<li class="list-group-item">Description: ' + data.event_desc + '</li>');
        $("#collapseEvents" + data.event_date + " > .card").append('</ul>');
        $("#collapseEvents" + data.event_date + " > .card").append('</div>');
        $("#collapseEvents" + data.event_date + " > .card").append('</div>');
        $("#form1").hide();
        $("#errorAlert").hide();
      }
    });
  });

});
