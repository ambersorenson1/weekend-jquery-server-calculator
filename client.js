$(document).ready(onReady)
let calculations = [];
function onReady(){
$('#equals').on('click', renderCalculationsOutput);
};

function handleEqualButton(){
  const newCalculatedObject = {
    numOne: $('#firstNumberInput').val(),
    numTwo: $('#secondNumberInput').val(),
     }
     calculations.push(newCalculatedObject);
     $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');
  }

  function renderCalculationsOutput(){
    handleEqualButton();
    $('#theCalcs').empty();
    for (let calculate of calculations) {
    $('#theCalcs').append(`
    <li> ${calculate.numOne} ${calculate.numTwo}
    `)
    }
  }
  
  function calculateTotal(calculation){
    let sum = 0;
  }