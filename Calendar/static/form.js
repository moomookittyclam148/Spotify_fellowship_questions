//TODO Connect to front end
$(document).ready(function(){

  $('form').on('submit', function(event){

    $.ajax({
      data : {
        event_title : $('#event_tite').val(),
        start_time : $('#start_time').val(),
        end_time : $('#end_time').val(),
        event_desc : $('#event_description').val(),
        event_date: $('#event_date').val()
      },
      type: 'POST',
      url: '/events'
    })
    .done(function(data){
      if(data.error) {
        $('#errorAlert').text(data.error).show();
      }
      else {
        $('#collapseEvents > .card').append("<br><br>")
        $('#collapseEvents > .card > #event_title_display').append("<p>" + data.event_title + "</p>");
        $('#collapseEvents > .card > #start_time_display').append("<p>" + data.start_time + "</p>");
        $('#collapseEvents > .card > #end_time_display').append("<p>" + data.end_time + "</p>");
        $('#collapseEvents > .card > #event_desc_display').append("<p>" + data.event_description + "</p>");
        $('#errorAlert').hide();
      }

    });

    event.preventDefault();

  });

});
