const EventEmitter = require('events');

// Crea un emisor
const emitter = new EventEmitter();

// Escucha el evento y permite agregar una función
emitter.on('event', function() {
    console.log('Un evento ha ocurrido...');
});

// Ejecuta el evento
emitter.emit('event');

emitter.on('eventWithArgument', function(arg) {
    console.log('Un evento function con los siguientes argumentos ha ocurrido: ' + arg.id + ' ' + arg.numbers);
});

emitter.emit('eventWithArgument', {id: 1, numbers: 1});

// Funciones flecha
emitter.on('eventArrow', (arg) => {
    console.log('Un evento flecha con los siguientes argumentos ha ocurrido: ' + arg.id + ' ' + arg.numbers);
});

emitter.emit('eventArrow', {id: 2, numbers: 2});
