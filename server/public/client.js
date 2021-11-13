$(document).ready(onReady);

function onReady (){
  $('#equals').on('click', calcButtonPushed);
}


function calcButtonPushed(){
  let equation = {
    numOne: $('#firstNumberInput').val(),
    operator: operator,
    numTwo: $('#secondNumberInput').val(),
  };
  $('#firstNumberInput').val('');
  $('#secondNumberInput').val('');
  $.ajax ({
    method: 'POST',
    url: '/calculate',
    data: equation
  }).then ((response) => {
    console.log(response);
    $('#theCalcs').append(`
    <li>${response}</li>
    <li>${response}</li>
    `);
    handleRenderItems();
  }).catch ((error) => {
    console.log('error', error);
  });
}

function handleRenderItems() {
  $.ajax ({
    method: 'GET',
    url: '/answer',
  }).then ((response) => {
    console.log('the response is:', response);
    $('#theCalc').append(`
    <li>${response}</li>
    <li>${response}</li>
    `);
  }).catch ((error) => {
    console.log('error', error);
  });
}

