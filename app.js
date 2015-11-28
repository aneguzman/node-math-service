var express = require('express');
var app = express();
var formidable = require('formidable');
var math = require('simple_math_aneguzman');

app.use(express.static(__dirname + '/public'));

app.get('/addition', function (request, response) {
	var x = Number(request.query.x),
	y = Number(request.query.y),
	result = math.addition(x, y);
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end('{ "result": ' + result + '}');
	console.log('Handled addition request for x=' + x + ' : y=' + y);
});

app.post('/subtraction', function(request, response){
	var form = new formidable.IncomingForm();
	form.parse(request, function(err, fields){
		var x = Number(fields.x);
		var y = Number(fields.y);
		var result = math.subtraction(x, y);
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.end('{ "result": ' + result + '}');
		console.log('Handled subtraction request for x=' + x + ' : y=' + y);

	});
});

app.put('/multiply', function(request, response){
	var form = new formidable.IncomingForm();
	form.parse(request, function(err, fields){
		var x = Number(fields.x);
		var y = Number(fields.y);
		var result = math.multiplication(x, y);
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.end('{ "result": ' + result + '}');
		console.log('Handled multiplication request for x=' + x + ' : y=' + y);

	});
});

app.delete('/divide', function(request, response){
	var form = new formidable.IncomingForm();
	form.parse(request, function(err, fields){
		var x = Number(fields.x);
		var y = Number(fields.y);
		var result = math.division(x, y);
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.end('{ "result": ' + result + '}');
		console.log('Handled division request for x=' + x + ' : y=' + y);

	});
});

var port = 8080;
app.listen(port);
console.log('Listening on port: ' + port);