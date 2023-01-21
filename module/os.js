const os = require('os');

console.log('Versión SO', os.release());
console.log('Memoria Libre: ', os.freemem());
console.log('Memoria Total: ' + os.totalmem());
