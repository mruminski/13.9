var http = require('http');
var colors = require('colors');
var handlers = require('./handlers')

function start() {
  function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    
    switch(request.url) {
      case '/':
      case '/start':
        handlers.welcome(request, response);
        break;
      case '/upload':
        handlers.upload(request, response);
        break;
      default:
        handlers.error(request, response);
    }
  }
  http.createServer(onRequest).listen(3000);
  console.log('Server started'.green);
}

exports.start = start;