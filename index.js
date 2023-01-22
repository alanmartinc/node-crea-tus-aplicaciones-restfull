const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const { body, validationResult, check } = require('express-validator');
const date = require('./module/date');
const morgan = require('morgan');

app.use(express.json());

// Middleware de Express
app.use(morgan('tiny'));

// Middleware de un Module
app.use(date);

// Middleware Anidado
app.use('/api/cars/list', function(req, res, next) {
    console.log('Request Type: ', req.method);
    next();
});

app.get('/', function(req, res) {
    res.send('Hello World');
});
