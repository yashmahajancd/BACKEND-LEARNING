const http = require('http');

const server = http.createServer(function(req, res) {
    res.end("Hello\nYash Mahajan.");
})

server.listen(3000);