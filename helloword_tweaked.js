var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	var name = url.parse(req.url, true).query.name;

	if (name == undefined) {
		name = 'world';
	}

	if (name == 'burningbird') {
		var file = 'phoenix5a.png';
		fs.stat(file, function(err, stat){
			if (err) {
				console.error(err);
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.end("Sorry, burningbird isn't around right now \n");
			}
			else {
				var img = fs.readFileSync(file);
				res.contentType = 'image/png'
				res.contentLength = stat.size;
				res.end(img, 'binary');
			}
		});
	}
	else
	{
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('Hello ' + name + '\n');

	}

}).listen(8080);