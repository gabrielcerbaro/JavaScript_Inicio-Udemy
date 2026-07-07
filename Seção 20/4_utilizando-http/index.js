const {createServer} = require('http');

let server = createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
        <h1>Hello world!</h1>
        <p>Primeira página com Node.js</p>[]        
    `);
    res.end();
});

server.listen(8000);

console.log('Ouvindo a porta 8000')
