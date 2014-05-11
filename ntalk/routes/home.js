module.exports=function(app){
	var home = app.controllers.home;
	
	//dizendo o nome da rota
	app.get('/', home.index);
	app.post('/entrar', home.login);
	app.get('/sair',home.logout);

};