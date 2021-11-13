let mathmaticalEquation =[];
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))
// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));
app.get('/answer', (req, res) => {
  console.log('hey express');
  solveMathmaticalEquation();
    res.send(mathmaticalEquation);
});


app.post('/calculate', (req, res) => {
    console.log("show calculation:", req.body);
    mathProblem.push(req.body);
    console.log(mathmaticalEquation);
    
    res.send(201);
  });

//Send the mathmaticalEquations array to our front-end
// app.get('/calculations', (req, res) => {
//   console.log('in GET /calculations');
  
// })

 function solveMathmaticalEquation(){
   for (let problem of mathmaticalEquation){
     if(problem.operator  === '+'){
       problem.answer = Number(items.numOne) + Number(items.numTwo);
     }else if (problem.operator  === '-'){
       problem.answer = Number(items.numOne) - Number(items.numTwo);
     }else if (problem.operator === '*'){
       problem.answer = Number(items.numOne) * Number(items.numTwo);
     }else if (problem.operator === '/'){
       problem.answer = Number(items.numOne) / Number(items.numTwo);
   };
  }
   console.log(solveMathmaticalEquation);
  console.log(MathmaticalEquation);
  
  };

app.listen(5000, () => {
  console.log('listening on port', PORT)
});