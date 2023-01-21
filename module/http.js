const http = require('http');

/*
const server = http.createServer();

server.on('connection', (socket) => {
    console.log('Nueva conexión detectada');
});

server.listen(2012);
console.log('Escuchando en el puerto 2012...');
*/

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hola Mundo');
        res.write('desde NodeJS');
        res.end();
    }

    if(req.url == '/coches') {
        res.write('Coche1');
        res.end();
    }
});

server.listen(3030);
console.log('Escuchando en el puerto 3030...')
