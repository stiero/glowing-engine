// var http = require('http');

// http.createServer(function(req, res){
// 	var name = require('url').parse(req.url, true).query.name;
// 	res.write("The name is ");
// 	res.end(name);

// 	}
// 	).listen(8080);

console.log('One');
console.log('Two');
setTimeout(function () {
	console.log('Three');
	}, 2000);
console.log('Four');
console.log('Five');
