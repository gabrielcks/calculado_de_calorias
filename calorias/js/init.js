(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready


})(jQuery); // end of jQuery name space

/**
 * TMB =  66 + (13,8 x peso em kg.) + (5 x altura em cm) - (6,8 x idade em anos).
 * Para as mulheres, usa-se a fórmula: TMB = 655 + (9,6 x peso em kg.) + (1,8 x altura em cm) - (4,7 x idade em anos).
 */

function validarSexo() {

  var sexo = document.getElementById('sexo').value.toUpperCase();
  
  if (sexo === '') {
    alert('O campo Sexo Precisa ser preenchido com M ou F');
    return false;
  }else if (sexo === 'M') {
    return 1;
  } else if (sexo === 'F') {
    return 2;
  }
  return alert('O campo Sexo Precisa ser preenchido com M ou F');
}

function validarPeso() {

  if (isNaN(document.getElementById('peso').value) || document.getElementById('peso').value.length === 0) {
    return false;
  }

  if (isNaN(document.getElementById('altura').value)  || document.getElementById('altura').value.length === 0 ) {
    return false;
  }

  if (isNaN(document.getElementById('idade').value) || document.getElementById('idade').value.length === 0) {
    return false;
  }

  return true
}

function calcular() {

  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value
  var idade = document.getElementById('idade').value
  var atividade =document.getElementById('select').value;

  if (validarPeso() === false) {
    alert("Verifique os campos Peso , Altura e Idade todos precisam estar Preenchidos");
    return; 
  }
    var resultadoHomen = 66 + (13.8 * parseInt(peso) ) + (5 * parseInt(altura)) - (6.8 * parseInt(idade) );
    var resultadoMulher = 655 + (9.6 * parseInt(peso) ) + (1.8 * parseInt(altura)) - (4.7 * parseInt(idade)); 

    switch (atividade) {
      case 'leve':
        if (validarSexo() === 1) {
          var soma = resultadoHomen * 0.25
          return document.getElementById('resultado').textContent =  parseInt(resultadoHomen + soma)  + " kcal";

        } else if (validarSexo() === 2) {
            soma = resultadoMulher * 0.20
            return document.getElementById('resultado').textContent = parseInt(resultadoMulher + soma)  + " kcal";
        }

      case 'moderada':
        if (validarSexo() === 1) {
          var soma = resultadoHomen * 0.35
          return document.getElementById('resultado').textContent =  parseInt(resultadoHomen + soma)  + " kcal";
          
        } else if (validarSexo() === 2) {
            soma = resultadoMulher * 0.30
            return document.getElementById('resultado').textContent = parseInt(resultadoMulher + soma)  + " kcal";
        }

      case 'intensa':
        if (validarSexo() === 1) {
          var soma = resultadoHomen * 0.45
          return document.getElementById('resultado').textContent =  parseInt(resultadoHomen + soma)  + " kcal";
          
        } else if (validarSexo() === 2) {
            soma = resultadoMulher * 0.40
            return document.getElementById('resultado').textContent = parseInt(resultadoMulher + soma)  + " kcal";
        }

      case '':
        if (validarSexo() === 1) {
            return document.getElementById('resultado').textContent = parseInt(resultadoHomen) + " kcal";
        } else if (validarSexo() === 2) {
            return document.getElementById('resultado').textContent = parseInt(resultadoMulher) + " kcal";
          }
    }

}