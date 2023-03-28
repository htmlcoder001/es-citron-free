$(document).ready(function () {
  $('.calc-form input').change(function () {
    calc();
  });
  $('.calc-form input').keyup(function () {
    calc();
  });
});

function calc() {
  var age = $('.calc-form .inp1').val();
  var height2 = $('.calc-form .inp2').val();
  var weight2 = $('.calc-form .inp3').val();
  var summs = height2 - weight2;
  age = parseInt(age.replace(/\D+/g, ""));
  height2 = parseInt(height2.replace(/\D+/g, ""));
  weight2 = parseInt(weight2.replace(/\D+/g, ""));
  console.log(summs);
  if (age > 0 && height2 > 0 && weight2 > 0) {
    if (summs >= 115) {
      $('.calc-form .line1').attr('style', 'visibility: display;');
      $('.calc-form .line2').attr('style', 'visibility: display;');
      $('.calc-form .line1').html('<span class="green">ESTÁS EN PLENA FORMA.</span>');
      $('.calc-form .line2').html('Es suficiente tomar Citron una vez por semana para mantenerla.');
    } else {
      if (summs >= 104 && summs <= 114) {
        $('.calc-form .line1').attr('style', 'visibility: display;');
        $('.calc-form .line2').attr('style', 'visibility: display;');
        $('.calc-form .line1').html('NO TIENES MÁS DE 10 KG DE SOBREPESO.');
        $('.calc-form .line2').html('Un curso de Citron de 2 semanas es suficiente.');
      } else {
        if (summs >= 90 && summs <= 103) {
          $('.calc-form .line1').attr('style', 'visibility: display;');
          $('.calc-form .line2').attr('style', 'visibility: display;');
          $('.calc-form .line1').html('TIENES MÁS DE 18 KG DE SOBREPESO.');
          $('.calc-form .line2').html('Para deshacerse de él - se recomienda tomar un curso completo de Citron. La pérdida de peso esperada en el primer mes es de 8 a 17 kg.');
        } else {
          if (summs <= 89) {
            $('.calc-form .line1').attr('style', 'visibility: display;');
            $('.calc-form .line2').attr('style', 'visibility: display;');
            $('.calc-form .line1').html('TE ENCUENTRAS EN LA FASE EXTREMA DE LA OBESIDAD.');
            $('.calc-form .line2').html('Tome urgentemente un ciclo prolongado de Citron (de 10 a 14 semanas) y añada ejercicio. Puede perder entre 25 kg y 40 kg en este tiempo.');
          }
        }
      }
    }
  }
}