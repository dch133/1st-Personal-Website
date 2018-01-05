
$(function () {

  $('#panel1').on('click', function () {
    $('#panel1').fadeOut(1000).fadeIn(1000);
  });

  $('#btn1').on('click', function () {
    $('#panel1').slideToggle(1000,
      function () {
        $('#panel1 .body').html('Gotcha! I am still here!');
      }
    ).slideToggle(1000);
  });

  $('#panel2').on('mouseover', function () {
    $('#panel2').toggle(1000).toggle(1000);

  });

  $('#btn2').on('click', function () {
    $('#panel2').toggle(4000,
      function () {
        $('#panel2 .body').html('Missed you!');
      }
    ).fadeToggle(2000);
  });

  $('#panel3').on('click', function () {
    $('#panel3').fadeToggle(100,
      function () {
        $('#panel2 .body').html('I am not going anywhere!');
      }
    ).fadeToggle(1000);
  });

  $('#btn3').on('click', function () {
    $('#panel3').toggle(1000,
      function () {
        $('#panel3 .body').html('Good luck getting rid of the rest!');
      }).fadeIn(1000);
  });

  $('#panel4').on('mouseover', function () {
    $('#panel4').fadeOut(1000).fadeIn(1000);

  });

  $('#btn4').on('click', function () {
    $('#panel4').fadeOut(5000,
      function () {
        $('#panel4 .body').html('I am back for more!');
      }
    ).fadeIn(1000);
    $('#panel4 .body').html('I will be back! You will see!');

  });

  $('#panel5').on('mouseover', function () {
    $('#panel5').fadeOut(500).fadeIn(500,
      function () {
        $('#panel5 .body').html('You cannot get rid of us!');
      }
    );
  });

  $('#panel6').on('mouseover', function () {
    $('#panel6').fadeOut(500).fadeIn(500,
      function () {
        $('#panel6 .body').html('I do not want to go!');
      }
    );
  });

  $('#panel7').on('mouseover', function () {
    $('#panel7').fadeOut(500).fadeIn(500,
      function () {
        $('#panel7 .body').html('We will not go down easily!');
      }
    );
  });

  $('#panel8').on('mouseover', function () {
    $('#panel8').fadeOut(500).fadeIn(500,
      function () {
        $('#panel8 .body').html('You cannot get rid of us! <br> Many have tried and failed!');
      }
    );
  });

});
