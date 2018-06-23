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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
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
        event_date : $('form[id="2"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="2"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form2").hide();
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
        event_date : $('form[id="3"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="3"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form3").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='4']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="4"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="4"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="4"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="4"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="4"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="4"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form4").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='5']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="5"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="5"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="5"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="5"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="5"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="5"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form5").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='6']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="6"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="6"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="6"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="6"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="6"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="6"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form6").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='7']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="7"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="7"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="7"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="7"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="7"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="7"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form7").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='8']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="8"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="8"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="8"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="8"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="8"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="8"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form8").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='9']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="9"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="9"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="9"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="9"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="9"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="9"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form9").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='10']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="10"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="10"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="10"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="10"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="10"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="10"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form10").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='11']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="11"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="11"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="11"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="11"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="11"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="11"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form11").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='12']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="12"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="12"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="12"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="12"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="12"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="12"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form12").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='13']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="13"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="13"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="13"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="13"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="13"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="13"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form13").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='14']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="14"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="14"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="14"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="14"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="14"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="14"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form14").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='15']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="15"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="15"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="15"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="15"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="15"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="15"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form15").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='16']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="16"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="16"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="16"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="16"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="16"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="16"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form16").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='17']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="17"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="17"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="17"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="17"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="17"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="17"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form17").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='18']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="18"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="18"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="18"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="18"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="18"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="18"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form18").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='19']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="19"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="19"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="19"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="19"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="19"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="19"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form19").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='20']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="20"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="20"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="20"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="20"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="20"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="20"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form20").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='21']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="21"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="21"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="21"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="21"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="21"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="21"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form21").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='22']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="22"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="22"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="22"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="22"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="22"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="22"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form22").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='23']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="23"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="23"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="23"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="23"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="23"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="23"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form23").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='24']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="24"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="24"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="24"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="24"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="24"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="24"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form24").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='25']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="25"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="25"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="25"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="25"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="25"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="25"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form25").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='26']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="26"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="26"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="26"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="26"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="26"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="26"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form26").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='27']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="27"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="27"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="27"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="27"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="27"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="27"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form27").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='28']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="28"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="28"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="28"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="28"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="28"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="28"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form28").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='29']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="29"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="29"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="29"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="29"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="29"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="29"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form29").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='30']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="30"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="30"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="30"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="30"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="30"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="30"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form30").hide();
        $("#errorAlert").hide();
      }
    });
  });

  $("form[id='31']").on('submit', function(event){
    event.preventDefault();
    $.ajax({
      data : {
        event_title : $('form[id="31"]').find('input[id="event_title"]').val(),
        start_time : $('form[id="31"]').find('select[id="start_time"]').val(),
        end_time : $('form[id="31"]').find('select[id="end_time"]').val(),
        event_desc : $('form[id="31"]').find('textarea[id="event_description"]').val(),
        event_date : $('form[id="31"]').find('input[id="event_date"]').val(),
        event_month : $('form[id="31"]').find('input[id="event_month"]').val()
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
        $("#collapseEvents" + data.event_date + " > .card").append('<div class="card"><div class="card-body"><ul class="list-group"><li class="list-group-item">Event Title: ' + data.event_title + '</li><li class="list-group-item">Start Time: ' + data.start_time + '</li><li class="list-group-item">End Time: ' + data.end_time + '</li><li class="list-group-item">Event Description: ' + data.event_desc + '</li></ul></div></div><br>');
        $("#form31").hide();
        $("#errorAlert").hide();
      }
    });
  });

});
