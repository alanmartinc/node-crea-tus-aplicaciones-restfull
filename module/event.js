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
    console.log('Un evento con los siguientes argumentos ha ocurrido: ' + arg.id + ' ' + arg.numbers);
});

emitter.emit('eventWithArgument', {id: 1, numbers: 2});
