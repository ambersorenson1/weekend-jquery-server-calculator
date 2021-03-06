console.log('Server is working!');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let arrayOfCalculations= [];
let previousInputedData = [];
let sum = 0;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.post('/values', (req, res) =>{
      console.log('req is', req.body);
      //arrayOfCalculations.push(req.body);
      mathEquationSolution(req.body)
      console.log(arrayOfCalculations);
      res.sendStatus(200);
});
app.get('/history', (req, res) => {
    console.log('history path', req.route.path);
    res.send(previousInputedData);
});
 //sending MathInputs to the GET function on the client side.
      app.get('/results', (req, res) =>{
      console.log('results path', req.route.path);
//it's being sent here.
    res.send(arrayOfCalculations);
});

// create a function for if's conditional

  function mathEquationSolution(number){ 
        let solution = {
          num1: number.num1,
          num2: number.num2,
          numBtn: number.button
        }
      if (number.button === "add-btn") {
          solution.sum = Number(number.num1) + Number(number.num2);
            arrayOfCalculations.push(solution.sum)
    }
      else if (number.button === "minus-btn") {
          solution.sum = Number(number.num1) - Number(number.num2);
          arrayOfCalculations.push(solution.sum)
    }
      else if (number.button === "multiply-btn") {
          solution.sum = Number(number.num1) * Number(number.num2);
          arrayOfCalculations.push(solution.sum)
    }
      else if (number.button === "divide-btn") {
          solution.sum = Number(number.num1) / Number(number.num2);
          arrayOfCalculations.push(solution.sum)
    }
  previousInputedData.push(solution);
  }
      console.log(previousInputedData);
      console.log(arrayOfCalculations);

    app.listen(PORT, (res) => {
      console.log('listening on port', PORT)
});