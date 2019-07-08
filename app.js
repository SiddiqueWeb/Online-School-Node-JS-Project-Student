var express 		= require('express');
var ejs 			= require('ejs');
var bodyParser 		= require('body-parser');
var expressSession 	= require('express-session');
var cookieParser 	= require('cookie-parser');
var home            = require ('./controllers/home');
var login           = require ('./controllers/login');
var studentAccount  = require ('./controllers/studentAccount');
var logout          = require ('./controllers/logout');
var ChangePassword  = require ('./controllers/ChangePassword');
var studentProfile  = require ('./controllers/studentProfile');
var Result          = require ('./controllers/Result');
var Course          = require ('./controllers/Course');
var registration    = require ('./controllers/registration');
var RegistrationView    = require ('./controllers/RegistrationView');
var RegistrationDelete    = require ('./controllers/RegistrationDelete');


// var Message			= require ('/controllers/Message');


var app = express();


//CONFIG
app.set('view engine', 'ejs');


app.use('/css',express.static('css')); 
app.use('/images',express.static('images')); 
app.use('/js',express.static('js'));

//MIDDLEWARE
app.use(bodyParser.urlencoded({'extended': false}));
app.use(expressSession({secret: 'my top secret password', saveUninitialized: true, resave: false}));
app.use(cookieParser());



app.use('/login', login);
app.use('/studentAccount', studentAccount);
app.use('/logout', logout);
app.use('/ChangePassword', ChangePassword);
app.use('/studentProfile', studentProfile);
app.use('/Result', Result);
app.use('/Course', Course);
app.use('/registration', registration);
app.use('/RegistrationView', RegistrationView);
app.use('/RegistrationDelete', RegistrationDelete);
// app.use('/Message', Message);







//ROUTING
app.get('/', function(req, res){
	res.send('Welcome to express web server...');
});


console.log(home(['siddique', 'Naim']));



//SERVER STARTUP
app.listen(1000, function(){
	console.log('Server started at 1000....');
})
