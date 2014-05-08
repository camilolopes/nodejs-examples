var http = require('http');
var fs = require('fs'); 

var server = http.createServer(function(request,response){
	//__dirname é uma constante que retorna o diretorio raiz da app
	fs.readFile(__dirname + '/index.html',function(err,html){
		response.write(html);
		response.end();
	});
});
server.listen(3000);