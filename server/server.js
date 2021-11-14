console.log('Server is working!');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let arrayOfCalculations=[];
let previousInputedData = [];
let sum = 0;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.post('/values', (req, res) =>{
      console.log('req is', req.body);
      arrayOfCalculations.push(req.body);
      mathEquationSolution()
      console.log(arrayOfCalculations);
      res.sendStatus(201);
});
app.get('/history', (req, res) => {
    console.log('history path', req.body.path);
    res.send(previousInputedData);
 });
 //sending MathInputs to the GET function on the client side.
      app.get('/results', (req, res) =>{
      console.log('results path', req.route.path);
//it's being sent here.
     res.send(arrayOfCalculations);
});

// create a function for if's conditional

  function mathEquationSolution(){ 
      for (let number of arrayOfCalculations){
        let fullSolve = {
          sum: sum,
          num1: number.num1,
          num2: number.num2,
          numBtn: number.button
        }
      if (number.button == "add-btn") {
          sum = Number(number.num1) + Number(number.num2);

    }
      else if (number.button == "minus-btn") {
          sum = Number(number.num1) - Number(number.num2);
    }
      else if (number.button == "multiply-btn") {
          sum = Number(number.num1) * Number(number.num2);
    }
      else if (number.button == "divide-btn") {
          sum = Number(number.num1) / Number(number.num2);
    }
  previousInputedData.push(fullSolve);
  }
      console.log(previousInputedData);
      console.log(arrayOfCalculations);
}

    app.listen(PORT, (res) => {
      console.log('listening on port', PORT)
});