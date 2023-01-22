const express = require('express');
const app = express();

const car = require('./routes/car');
app.use(express.json());
app.use('/api/cars/', car);

const port = process.env.PORT || 3003;
const date = require('./module/date');
const morgan = require('morgan');

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

app.listen(port, () => console.log('Escuchando puerto: ' + port));
