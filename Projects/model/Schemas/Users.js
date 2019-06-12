const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema= new Schema ({
	firstName: {type:String ,trim:true},
	lastName :{type:String ,trim:true},
	classYear: Number ,
	email: {type:String ,unique:true,sparse:true,trim:true},
	phone: {type:String ,unique:true,sparse:true},
	phoneProvider:{type:String,trim:true},
	interests:[Number],
	isAdmin: {type:Boolean,index:true},
	isSuperAdmin: Boolean,
	hash: String,
	companyName: {type:String,trim:true},
	token:String,

},

{
	toObject: {getters: ture},

	timStamps: {
		createdAt:'createdDate',
		updatedAt:'updatedDate'
	},
}
);

//hash if admin,ensure phone and provider if not 

userSchema.pre('save',function(callback){
//// run hook code 
if(this.isAdmin||this.isSuperAdmin) {
	if(!this.email)
		return callback(new Error('Missing email'));
	if(!this.hash && !this.password) {
		return callback(new Error('Missing Password'));
	if(!this.companyName)
	return callback(new Error('Missing companyName'));

	}

	//this.hash=this.hash||this.password//if anyone is missing then it would store that in hash
	
	//TODO hash password 

}
else {
	if(!this.phone ) {
		callback( new Error('Missing phone '));
		}


		if(!this.phoneProvider ){
			callback( new Error('Missing provider'));

		}
}

	    if (this.phone) {
        if (typeof this.phone !== 'string')
            return callback(new Error('Invalid phone'));
        var phone = '';
        for (var i = 0; i < this.phone.length; i++) {
            if (!isNaN(this.phone[i]))
                phone += this.phone[i];
        }
        if (phone.length !== 10)
            return callback(new Error('Invalid phone'));
        this.phone = phone;
    }

     callback();
});

//});

userSchema.virtual('name').get(function() {
    var name = "";
    if (this.firstName) {
        name = this.firstName;
        if (this.lastName) name += ' ' + this.lastName;
    } else if (this.lastName) name = this.lastName;
    return name;
});



userSchema.methods.comparePassword = function(pw) {
    return (pw === this.hash);
};

//create my methods 

userSchema.methods.greet =function() {
	console.log('hi' + this.firstName);

};

//TODO method to check hash password 

userSchema.methods.checkPassword = function(pw){
	return (this.hash===pw);
}

var User = mongoose.model('User',userSchema);

module.exports = Coupon;