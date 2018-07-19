$(document).ready(function() {
  /* Change input border on focus */
  $('input').bind('blur', function() {
    $(this).closest('.input-container').toggleClass('focused');
  });

  $('input').bind('focus', function() {
    $(this).closest('.input-container').toggleClass('focused');
  });

  /* Calculate */
  var calculate = function(id) {
    /* Current answer */
    var currentAnswer = $('#' + id).find('.answer');
    var currentAnswerVal = $(currentAnswer).find('input').val();

    /* Check both inputs for a number */
    var inputs = $('#' + id).find('input');
    var input1 = $(inputs[0]);
    var input2 = $(inputs[1]);

    switch (id) {
      case 'calc-1':
        var answer = input1.val() / 100 * input2.val();
        break;
      case 'calc-2':
        var answer = input1.val() / input2.val() * 100;
        break;
      case 'calc-3':
        var answer = (input2.val() - input1.val()) / input1.val() * 100;
        break;
    }

    answer = Number((answer).toFixed(5));

    if (input1.val().length === 0 || input2.val().length === 0 || isNaN(answer)) {
      $(currentAnswer).removeClass('active');
      window.setTimeout(function() {
        $(currentAnswer).find('input').val('');
      }, 100);
    } else if (answer != currentAnswerVal || input1.val().length > 0 && input2.val().length > 0){
      $(currentAnswer).removeClass('active');
      window.setTimeout(function (){
        $(currentAnswer).find('input').val(answer);
        $(currentAnswer).addClass('active')
      }, 100);
    }
  }

  $('input').bind('change paste keyup', function() {
    var calcOptionId = $(this).closest('.calc-section').attr('id');

    calculate(calcOptionId);
  });
});
