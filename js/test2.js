
$(function () {

  $('#panel1').on('click', function () {
    $('#panel1').fadeOut(1000).fadeIn(1000);
  });

  $('#btn1').on('click', function () {
    $('#panel1').slideToggle(1000).slideToggle(1000);
    $('#panel1 .body').html('Gotcha! I am still here!');
  });

  $('#panel2').on('mouseover', function () {
    $('#panel2').toggle(1000).toggle(1000);

  });

  $('#btn2').on('click', function () {
    $('#panel2').toggle(300).fadeToggle(2000);
    $('#panel2 .body').html('Missed you!');
  });

  $('#panel3').on('click', function () {
    $('#panel3').fadeToggle(1000).fadeToggle(1000);
    $('#panel2 .body').html('I am not going anywhere!');

  });

  $('#btn3').on('click', function () {
    $('#panel3').toggle(1000).fadeIn(1000);
  });

  $('#panel4').on('mouseover', function () {
    $('#panel4').fadeOut(1000).fadeIn(1000);

  });

  $('#btn4').on('click', function () {
    $('#panel4').fadeOut(7000).fadeIn(1000);
    $('#panel4 .body').html('Back for more!');

  });

  $('#panel5').on('mouseover', function () {
    $('#panel5').fadeOut(500).fadeIn(500);
    $('#panel5 .body').html('You cannot get rid of us!');
  });

  $('#panel6').on('mouseover', function () {
    $('#panel6').fadeOut(500).fadeIn(500);
    $('#panel6 .body').html('You cannot get rid of us!');
  });

  $('#panel7').on('mouseover', function () {
    $('#panel7').fadeOut(500).fadeIn(500);
    $('#panel7 .body').html('You cannot get rid of us!');
  });

  $('#panel8').on('mouseover', function () {
    $('#panel8').fadeOut(500).fadeIn(500);
    $('#panel8 .body').html('You cannot get rid of us!');
  });

});
