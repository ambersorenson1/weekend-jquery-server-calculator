console.log('Server is working!');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let calculationArray=[];
let HistoryArray = [];
let sum = 0;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.post('/values', (req, res) =>{
      console.log('req is', req.body);
      calculationArray.push(req.body);
      solvingMath()
      console.log(calculationArray);
      res.sendStatus(201);
});
app.get('/history', (req, res) => {
    console.log('history path', req.body.path);
    solvingMath();
    res.send(HistoryArray);
 });
 //sending MathInputs to the GET function on the client side.
      app.get('/results', (req, res) =>{
      console.log('results path', req.route.path);
      solvingMath();
//it's being sent here.
     res.send(calculationArray);
});

// create a function for if's conditional

  function solvingMath(){ 
      for (let aNumber of calculationArray){
        let fullSolve = {
          sum: sum,
          num1: aNumber.num1,
          num2: aNumber.num2,
          numBtn: aNumber.button
        }
      if (aNumber.button == "add-btn") {
          sum = Number(aNumber.num1) + Number(aNumber.num2);
          calculationArray.push(sum);

    }
      else if (aNumber.button == "minus-btn") {
          sum = Number(aNumber.num1) - Number(aNumber.num2);
          calculationArray.push(sum);
    }
      else if (aNumber.button == "multiply-btn") {
          sum = Number(aNumber.num1) * Number(aNumber.num2);
          calculationArray.push(sum);
    }
      else if (aNumber.button == "divide-btn") {
          sum = Number(aNumber.num1) / Number(aNumber.num2);
          calculationArray.push(sum);
    }
      HistoryArray.push(fullSolve);
  }
      console.log(HistoryArray);
      console.log(calculationArray);
}

    app.listen(PORT, (res) => {
      console.log('listening on port', PORT)
});