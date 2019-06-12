// var object={name2:"parveen",
// lastName:"Kumar"}
// console.log(object.name2+ "  " +object.lastName)

// function sayMessage()
// {
// 	console.log("hi there ");
// }

// sayMessage("hi non argument but will exicute inside argument function");

// function sayMessage(arguments)
// {
// 	console.log(arguments);
// }

// sayMessage("HI arguments");


 

 // function SayNameForAll(Lable){
	// console.log(Lable+"  "+this.name);
// }


// var person1={
	// name:"Parveen"
	//sayName:SayNameForAll
// }
// var person2={
	// name:"Anup"
	//sayName:SayNameForAll
// }

// var name = "GlobalName";

//person2.sayName();
//person1.sayName();

// SayNameForAll.call(this,"global");
// SayNameForAll.call(person1,"person1");
// SayNameForAll.call(person2,"person2");



// SayNameForAll.apply(this,["global"]);
// SayNameForAll.apply(person1,["person1"]);
// SayNameForAll.apply(person2,["person2"]);


// console.log("name" in person1);
// console.log(person1.propertyIsEnumerable("name"));
// var properties=Object.keys(person1);
// console.log("length" in properties);
// console.log(properties.propertyIsEnumerable("length"));



// var person3={
	// _name:"Parveen_Kumar",//here wecan store data to variable or object itself 
//	var roll="rollnumber",
	// obj:{
		// objNm:"objname"
	// },

	// get name() {
		// return this._name;
	// },
	// set name(value) {
		// this._name=value;
	// },
	// get Obj(){
	// 	return this.obj[objNm];
	// },
	// set Obj(value){
	// 	this.obj.objNm=value;
	// }
// };
// console.log(person1.name);
// console.log(person1.Obj);

// person1.name="Test";
// console.log(person1.name)


var person4 = {};
	Object.defineProperties(person4,{
		_name:{
		value:"parveen",
		writable:true,
		enumerable:true,
		configurable:true
	},
	name: {
		get: function() {
		//	console.log("Reading name");
			return this._name;
		},
		set: function (value){
			this._name=value
		},
		enumerable:true,
		configurable:true
}
});
	console.log(person4.name);
	//person4.name="kamal";
	//console.log(person4.name);


	var temp=Object.getOwnPropertyDescriptor(person4,"name");
	console.log(temp.enumerable); // true
	console.log(temp.configurable); // true
	//console.log(temp.writable); // true
	//console.log(temp.value);
////////Inheritance////////////////////
var book={
	Title:"The title of the book",
	toString:function()
	{
		return this.Title;
	}
};

var message="Book   ->"+book;
console.log(message);


////modifying Object.prototype 
Object.prototype.add=function(value)
{
	return this+value;
}
var book={
	title:"the title of the book is...... "
};
console.log(book.add(5));
console.log("title".add("end"));
//in a web browser
//console.log(document.add(true));
//console.log(window.add(5));


var empty={};
for(var properties in empty)
{
	console.log(properties);
}



var book2 = Object.create(Object.prototype, {
title: {
configurable: true,
enumerable: true,
value: "The Principles of Object-Oriented JavaScript",
writable: true
}
});


var person5={
	name:"Ram",
	sayName:function(){
		console.log(this.name);
	}
};
var person6=Object.create(person5,{
name :{
	value:"Shyam",
	writable:true,
	configurable:true,
	enumerable:true
}
});
person5.sayName();
person6.sayName();


var nullObject=Object.create(null);
console.log(nullObject);



//Constructore Stealing
function Rectangle(length,width)
{
	this.length=length;
	this.width=width;

}
Rectangle.prototype.getArea=function(){
	return this.length*this.width;
}
Rectangle.prototype.toString(){
	return this.length+" Rectangle  "+this.width;
}

function Square(side){
	Rectangle.call(this,side,side)
}


Square.prototype= Object.create(Rectangle.prototype,{
	constructore:{
		configurable:true,
		enumerable:true,
		value:Square,
		writable:true
	}
});
Square.prototype.toString=function{
	return "Square String";
}

// Square.prototype.toString=function{
// 	var text = Rectangle.prototype.toString(this);
// 	text.replace("Rectangle", "Square");
// };this function is same as the function above ;
var square=new Square(6);
console.log(square.length);
console.log(square.width);
console.log(square.getArea());

//Inheritance in javaScript is also 



/////Module Pattren and use of IIFE



var YourObject=(function(){
	return {
		;
	};
}());


/////The module pattern allows you to use regular variables as de facto
/////object properties that aren’t exposed publicly.

var person=(function(){
	var age=25;
	return {
		name:"nicholas",
		getAge: function(){
			return age ;
		},

		growOlder:function(){
			age++;
		}
	};
}())

console.log(person.name);
console.log(person.getage());
person.age=100;
console.log(person.getAge());
person.growOlder();
console.log(person.getAge())	