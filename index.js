var express = require('express');
var multer = require('multer');
var request = require('request');
var csv = require('csv-stream');
var path = require('path');
var fs = require('fs');

var upload = multer({
	dest: './uploads'
});

var app = express();

app.use('/uploads', express.static(path.join(__dirname, './uploads')));

app.get('/', function (req, res){
	res.send('Hello World!');
});

app.get('/import', function (req, res){
	res.send('<form action="/import/upload" method="post" enctype="multipart/form-data"><input type="file" name="upFile" accept="*.csv"><br><input type="submit" value="Import"></form>');
});

app.post('/import/upload', upload.single('upFile'), function (req, res, next) {
	if (req.file && req.file.path) {
		console.log(req.file);

		var csvStream = csv.createStream();
		request('http://localhost:9000/uploads/' + req.file.filename).pipe(csvStream)
			.on('error', function(error){
				console.error(error);
			})
			.on('data', function(data){
				// console.log(data);

				request({
					url: 'http://192.168.99.101:8080',
					method: 'POST',
					json: data
				}, function (error, response, body){
					if (!error && response.statusCode == 200) {
						console.log('Request post success');
					} else {
						res.end('no file...');
					}
				});
			});
		}
		res.end('flie uploaded! ' + req.file.filename);
});

app.listen(9000, function(){
	console.log('App running on port 9000');
});