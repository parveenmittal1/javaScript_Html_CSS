const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser=require('body-parser');
const mongoose= require('mongoose');


const config = require('./model/config');
const users=require('./controllers/users');

var app = express();

mongoose.connect('localhost:5000');
if (app.get('env') === 'devlopment') var dev=true ;


if(dev) app.use(logger('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

///
/// Routes
///

app.post('/users',users.createUser);


// handle 404

app.use(function(req, res , next ){
	var err = new Error('Not Found')
	err.status = 404;
	next(err);

});


//for now 
userDb =[];

/////development err handler 
if(dev)
{
	app.use(function(err,req,res,next){
		console.log(err)
		res.status(err.status||500).send();
	});
}



//////production Error handler 
app.use(function(err,req,res,next){
	res.status(err.status||500).send();
});



var server =app.listen(config.port);
console.log('listening to port at ....')
module.exports=app;




