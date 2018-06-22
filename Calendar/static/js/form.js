//TODO Connect to front end
$(document).ready(function(){
  $("form[id='1']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="1"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="1"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="1"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="1"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="1"]').find('input[id="event_date"]').val()
      },
      type : 'POST',
      url : '/events',
    })
    .done(function(data){
      if(data.error) {
        $('#errorAlert').text(data.error).show();
      }
      else {
        $("#collapseEvents" + data.event_date + " > .card").append("<br>");
        $("#collapseEvents" + data.event_date + " > .card").append("<p>Title: " + data.event_title + "</p>");
        $("#collapseEvents" + data.event_date + " > .card").append("<p> Start Time: " + data.start_time + "</p>");
        $("#collapseEvents" + data.event_date + " > .card").append("<p> End Time: " + data.end_time + "</p>");
        $("#collapseEvents" + data.event_date + " > .card").append("<p> Description: " + data.event_desc + "</p>");
        $("#form1").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='2']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="2"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="2"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="2"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="2"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="2"]').find('input[id="event_date"]').val()
      },
      type : 'POST',
      url : '/events',
    })
    .done(function(data){
      if(data.error) {
        $('#errorAlert').text(data.error).show();
      }
      else {
        $("#collapseEvents" + data.event_date + " > .card").append("<br>");
        $("#collapseEvents" + data.event_date + " > .card").append("<p>Title: " + data.event_title + "</p>");
        $("#collapseEvents" + data.event_date + " > .card").append("<p> Start Time: " + data.start_time + "</p>");
        $("#collapseEvents" + data.event_date + " > .card").append("<p> End Time: " + data.end_time + "</p>");
        $("#collapseEvents" + data.event_date + " > .card").append("<p> Description: " + data.event_desc + "</p>");
        $("form[id='2']").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='3']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="3"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="3"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="3"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="3"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="3"]').find('input[id="event_date"]').val()
      },
      type : 'POST',
      url : '/events',
    })
    .done(function(data){
      if(data.error) {
        $('#errorAlert').text(data.error).show();
      }
      else {
        $("#collapseEvents" + data.event_date + " > .card").append("<br>");
        $("#collapseEvents" + data.event_date + " > .card").append("<p>Title: " + data.event_title + "</p>");
        $("#collapseEvents" + data.event_date + " > .card").append("<p> Start Time: " + data.start_time + "</p>");
        $("#collapseEvents" + data.event_date + " > .card").append("<p> End Time: " + data.end_time + "</p>");
        $("#collapseEvents" + data.event_date + " > .card").append("<p> Description: " + data.event_desc + "</p>");
        $("form[id='3']").hide();
        $("#errorAlert").hide();
      }
    });
  });


});
