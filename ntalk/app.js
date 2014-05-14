var express = require('express'), 
cookieParser = require('cookie-parser'),
session = require('express-session'),
bodyParser = require('body-parser'),
load = require('express-load'),
app = express();

const KEY = 'ntalk.sid';
const SECRET = 'ntalk';

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
/*app.use(cookieParser());
app.use(session({ secret: SECRET, key: KEY, cookie: { secure: true }}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());*/
app.use(express.cookieParser('ntalk'));
app.use(express.session());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
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