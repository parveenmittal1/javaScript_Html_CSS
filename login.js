function login(req,res,callback)
{
	User.findOne({email:req.body.email}).exec()
	.then(function(user){
		return user.comparePassword(req.body.password);
	}).then(function(isMatch)=>{
		if(!isMatch)
		{
			return res.status(401).send('Incorrect password');
		}
		var payload={
			id:user_Id,
			email:user.email,
			companyName:user.companyName,
		};
		return jwt.sign(payload,config.secret,{})
	}).then(function(token){
		user.token=token;
		user.save().then(function(){ res.json(token)
});
		}).catch(function(err){return next(err)})
	};