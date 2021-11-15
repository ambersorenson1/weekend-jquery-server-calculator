$(document).ready(onReady);

let buttonClicked = "";

// Create new functions for calculations buttons.
// create seperate button to solve the calculation.
    function onReady(){
      console.log('Lets GO!!'); 
      $('#add-btn').on('click', newButton)
      $('#minus-btn').on('click', newButton)
      $('#multiply-btn').on('click', newButton)
      $('#divide-btn').on('click', newButton)
      $('#clear-btn').on('click', newButton)
      $('#equal-btn').on('click', solve)
      calculationHistory();
    }


// The newButton function brings in the clicked Id's buttons 
// and reassigned it the variable buttonClicked

    function newButton(){
          if ($(this).attr('id') == "add-btn"){
          buttonClicked = "add-btn";
        }
        else if ($(this).attr('id') == "minus-btn"){
          buttonClicked = "minus-btn";
        }
      else if ($(this).attr('id') == "multiply-btn"){
          buttonClicked = "multiply-btn";
        }
      else if ($(this).attr('id') == "divide-btn"){
          buttonClicked = "divide-btn"; 
        }
      else if ($(this).attr('id') == "clear-btn"){
        buttonClicked = $('#first-number').val(''), $('#second-number').val('');
        }
    }

      console.log('show results of buttonClicked', buttonClicked );

// Create an object of the inputs from the inputs field of the calculation
// send the information from the object to the server
    function solve(){
      let valuesObject = {
        num1: $('#first-number').val(),
        num2: $('#second-number').val(),
        button: buttonClicked
      }


  // Now, we need to send the information to the server by creating routes
  // Using the Ajax method to send the response. 
  // Check to ensure the response was send without error using .catch.

      $.ajax({
        method: 'POST',
        url:'/values',
        data: valuesObject,
    }).then ( (response) => {
      console.log('POST route /values', response);
    if ( response === 'OK' ){
      // Ceate function to get results of calculation.
        calculationResults();

      // Create function to get the history of all calcualtions.
        calculationHistory();
    }
    else {
      console.log(response)
    }
    }).catch (error => {
      console.log('POST route /values', error);
    });

  }

// Create GET route request to push the calculation results to the DOM.
    function calculationResults(){
      $.ajax({
      method: 'GET',
      url: '/results'
    }).then ((response) => {
      console.log('GET route /results response', response);
// Show the results to the DOM.
      sumResults = $('#calculation').text(response[response.length - 1])
      console.log(response);
    }).catch (error => {
      console.log('GETroute /values', error);
  });
}

// Creat a function to post the history of all calculation to the DOM.
  function calculationHistory() {
      $.ajax({
        method: 'GET',
        url: '/history'
        }).then((response) =>{
          console.log('GET history response', response);
// Create a new variable to append all history as a ul tag on the DOM.
          let pastHistory = $('#history');
          pastHistory.empty();
// Create a loop to loop all GET responses.
          for (let pushHistory of response ){
            if (pushHistory.numBtn == "add-btn") {
              buttonClicked = "+";
          }
          else if (pushHistory.numBtn == "minus-btn") {
              buttonClicked = "-";
          }
          else if (pushHistory.numBtn == "multiply-btn") {
              buttonClicked = "*";
          }
          else if (pushHistory.numBtn == "divide-btn") {
              buttonClicked = "/";
          }
// push all past calculations History to the DOM using pastHistory by append it.
    pastHistory.append(`
      <li> ${pushHistory.num1} ${buttonClicked} ${pushHistory.num2} = ${pushHistory.sum}
      </li>`)
    }
  });
}




