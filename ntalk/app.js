var express = require('express'), 
cookieParser = require('cookie-parser'),
session = require('express-session'),
bodyParser = require('body-parser'),
load = require('express-load'),
app = express();

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(session({ secret: 'ntalk', key: 'sid', cookie: { secure: true }}));
app.use(bodyParser());
app.use(express.static(__dirname + '/public')); 

/*app.get('/', routes.index);
app.get('/usuarios', routes.users.index);*/

load('models')
.then('controllers')
.then('routes')
.into(app);

app.listen(3000,function(){
    console.log("Ntalk no ar");
});