const mongoose = require('mongoose');
const Schema =mongoose.Schema;


var couponSchema = new Schema ({

},
{
	toObject :{getters:true},
	timeStamps: {
		createdAt:'createdDate',
		updatedAt:'updatedDate'
	}

}
);


couponSchema.pre('save',function(callback){



	callback();
});


var Coupon = mongoose.model('Coupon',couponSchema);

module.exports= Coupon;
