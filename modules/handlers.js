var fs = require('fs');
var formidable = require('formidable');
var mv = require('move-file');

exports.upload = function(request, response) {
  console.log('upload');
  var form = new formidable.IncomingForm();
  form.parse(request, function(error, fields, files) {
    mv(files.upload.path, './test.png');
    fs.readFile('templates/upload.html', function(err, file) {
      if (err) throw err;
      response.writeHead(200, {'Content-Type': 'text-plain; charset=utf-8'});
      response.write(file);
      response.end();
    });
  });
 }

exports.welcome = function(request, response) {
  console.log('home');
  fs.readFile('templates/start.html', function(err, file) {
    if (err) throw err;
    response.writeHead(200, {'Content-Type': 'text-plain; charset=utf-8'});
    response.write(file);
    response.end();
  });
}

exports.error = function(request, response) {
  console.log('error');
  response.write('404');
  response.end();
}

exports.show = function(request, response) {
  fs.readFile('test.png', 'binary', function(err, file) {
    if (err) throw err;
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.write(file, 'binary');
    response.end();
  });
}