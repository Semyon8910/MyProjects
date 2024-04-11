var http = require('http');
const PORT = 8080;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h2>Hello Class 48</h2> <hr/> <h3>My name is Semyon</h3>`);
}).listen(PORT);

console.log(`Server is running on http://localhost:${PORT}`);

