exports.upload = function(request, response) {
  console.log('upload');
  response.write('Upload started!');
  response.end();
}

exports.welcome = function(request, response) {
  console.log('home');
  response.write('Welcome on the home page');
  response.end();
}

exports.error = function(request, response) {
  console.log('error');
  response.write('404');
  response.end();
}