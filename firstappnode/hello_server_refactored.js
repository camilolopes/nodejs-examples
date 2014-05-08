var http = require('http'); 

var atendeRequisicao = function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("<h1>Hello world NodeJS</h1>");
	response.end();
}
var server = http.createServer(atendeRequisicao);

var servidorUp = function(){
	console.log("Servidor node rodando");
}
server.listen(3000,servidorUp);
