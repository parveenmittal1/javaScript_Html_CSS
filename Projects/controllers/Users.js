var userDb =[];
var idCounter=0;

userDb.insertUser=function(user,callback){
	user.id=idCounter;
	idCounter++;
	this.push(user);


	callback();
};

userDb.getUserById = function(id,callback) {
	for (var i=0; i<this.length;i++)
	{
		if(+id=== this[i].id)
		{
			callback(this[i]);
		}
	}
};


module.exports.createUser = function(req,res){
	//console.log("Request a user ")
	//return res.send("it worked...");
	var newUser={
		firstName:req.body.firstName,
		lastName:req.body.lastName,
		email:req.body.password,
		createdDate: new Date()
	};
	userDb.insertUser(newUser,function) {
		return res.send('it worked ')

	}
}


module.exports.getUsers=function(req,res) {
	 	return res.send(userDb);
}


module.exports.getUserById = function(req,res) {
	userDb.getUserById(req.params.id,function(user){
		return res.json(user);
	})
}