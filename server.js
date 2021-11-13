const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));