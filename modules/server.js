var http = require('http');
var colors = require('colors');

function start() {
  function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end();
  }
  http.createServer(onRequest).listen(3000);
  console.log('Server started'.green);
}

exports.start = start;