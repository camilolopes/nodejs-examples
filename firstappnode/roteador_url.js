var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request,response){
		var result = url.parse(request.url,true);
		console.log(result);
		if (result.pathname == "/") {
			fs.readFile(__dirname + '/artigos.html',function(err,html){
				response.write(html);
				response.end();
			});
		}else if (result.pathname=="/artigos") {
			fs.readFile(__dirname + '/artigos.html',function(err,html){
				response.write(html);
				response.end();
			});
		} else if (result.pathname=="/contatos") {
			fs.readFile(__dirname + '/contato.html',function(err,html){
				response.write(html);
				response.end();
			});
		} else {
			fs.readFile(__dirname + '/error.html',function(err,html){
				response.write(html);
				response.end();
			});
		};
		
});
server.listen(3000);