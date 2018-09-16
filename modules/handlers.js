var fs = require('fs');

exports.upload = function(request, response) {
  console.log('upload');
  response.write('Upload started!');
  response.end();
}

exports.welcome = function(request, response) {
  console.log('home');
  fs.readFile('templates/start.html', function(err, file) {
    if (err) throw err;
    response.writeHead(200, { 'Content-Type': 'text-plain; charset=utf-8'});
    response.write(file);
    response.end();
  });
}

exports.error = function(request, response) {
  console.log('error');
  response.write('404');
  response.end();
}