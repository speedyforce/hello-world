const http = require('http');

const hostname = 'localhost';
const port = 9000;

function handleRequest (req, res) {
    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain');
    res.end('May the speedy force be with you.');
}

http.createServer(handleRequest).listen(port, hostname, () => {
    console.log(`[alive] http://${hostname}:${port}`);
});
