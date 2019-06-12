module.exports = function () {
	console.log("hi");
};
var express =require('express')
	var app=express()
	var coinState;
	app.get('/' ,function(req,res){
		res.send("hello world")
	})
	app.get('/hello',function(req,res){
		res.send("hi from hello")
	});
	app.get('/coinFlip',function(req,res){
		var randomNumber=Math.random();
		if(randomNumber>0.5)
		{
			var coin='head'
		}else var coin='tail'
		res.send(coin);
	})
app.get('/flipCoin',function(req,res){
	//coinState=Boolean(Math.round(Math.randomNumber())) or
	coinState=!!Math.round(Math.random())
	res.send();
});

app.get('/returnCoinState',function(req,res){
	res.send(coinState);
});


app.get('/returnCoinState/:hello/:asdf',function(req,res){
	res.send( req.params.hello + ' ' + req.params.asdf );
})

	app.listen(3000,function(){
		console.log("app is running on 3000")
	});