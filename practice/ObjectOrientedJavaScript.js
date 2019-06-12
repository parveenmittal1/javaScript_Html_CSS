var booleans=true;
var numbers=10;
var string ="Java Script is awesome";
var string2=string;
var nulls=null;
var undf=undefined;
console.log(booleans);
console.log(numbers);
console.log(string);
console.log(string2);
console.log(nulls);
console.log(undf);
console.log(typeof string);
console.log(typeof undf);
console.log(typeof nulls);
console.log(typeof numbers);
var temp=string.toLowerCase();
console.log(temp);
console.log(numbers.toFixed(2));


var object =new Object();
var object2=object;
object.name=string+"name property";
console.log(object.name);
console.log(object2.name);


var arrays =new Array();
var nowDate=new Date();
var error=new Error("This is new error");
var func=new Function("console.log('hi')");
var Obj=new Object();
var regexps=new RegExp();



func();



var objInLitr={
	Name:"this is object in literal"
}


console.log(objInLitr.Name);

function reflect(value)
{
	return value;
}

console.log(reflect(100));

console.log(arrays instanceof Array);
console.log(nowDate instanceof Date);
console.log(error instanceof Error);
console.log(objInLitr instanceof Object);
console.log(reflect instanceof Function);
console.log(func instanceof Function);
console.log(regexps instanceof RegExp);
console.log(regexps instanceof Function);



/////////////////////*************************************************/////////////////////////////////////////////////
//////////////////////////////////Chapter-2   Functions ///////////////////////////////////////////////////////////////
function addNumber(num1,num2){
	return num1+num2;
}

var subNumber=function(num1,num2){
	if(num1>num2)
	{
		return num1-num2;
	}
	return num2- num1;
}


console.log(addNumber(4,5));
console.log(subNumber(9,5));
console.log(mulNumber(9,5));
console.log(divNumber(4,2));



function mulNumber(num1,num2)
{
	return num1*num2;
}
function divNumber(num1,num2)
{
	return num1/num2;
}

var mulNumber2=mulNumber;

console.log(mulNumber2(9,5));////function has to be defined before we can have call on mulNumber2;

/////We can pass any number of argument to the function 
function sum()
{
	var result=0;
	for(var i=0;i<arguments.length;i++)
	{
		result =result+arguments[i];
	}
	return result;
}
console.log("sum Of Numbers -> \n")
console.log(sum(1,2,3,4,5,67,8,90));


/////Function overloading in java Script is not possible but we can mimic Function OverLoading 



/////Object Method 


 var objectWithFunction={
	Name:"Ram",
	FullName:function(Lastname) {
		console.log(objectWithFunction.Name+" "+Lastname);
	},
	FullnameWithThis:function(Lastname) {
		console.log(this.Name+" "+Lastname);
	}
}

objectWithFunction.FullName("Mittal");
objectWithFunction.FullnameWithThis("Kumar");

////here this method is used to define the current instance of object 

//Another Example of this



function sayHi(variable)
{
	console.log("hi to"+this.name+" "+variable);
}

// var object =new Object();
// var object2 =new Object();

 var obj={};

object.name="Ram Shyam";
object.Say=sayHi;
obj.name="Praveen ...."
obj.Say=sayHi;
object2.Say("Mittal");
object2.name="Krishna ";
object2.Say=sayHi;


obj.Say("Mittal");
object.Say("Mittal");
object2.Say("Mittal");

///////////////////Changing This ///////////////////////


/////call apply bind methods 




////////////////***************************************UnderStanding Objects**********************************************/////////////////////////////////////
//********************************************************************************************************************************************************//////////////

var obj1=new Object();
var obj2={};
obj1.name="newObject";
obj2.name="objLiteral";


obj1.age=19;
obj2.age=20;


obj1.DelPro="Delete this Property";
obj2.DelPro=obj1.DelPro;

console.log(obj1.name);
console.log(obj2.name);
console.log(obj1.age);
console.log(obj2.age);
console.log(obj1.DelPro);
console.log(obj2.DelPro);

delete obj1.DelPro;

console.log("obj2 ->"+obj2.DelPro);
console.log("obj1 ->"+obj1.DelPro);


var properties1=Object.keys(obj1);
var properties2=Object.keys(obj2);
console.log("ALL PROPETIES OF BOTH OBJECTS*************************** \n");
for(var i=0;i<properties1.length;i++)
{
	console.log("Name :"+properties1[i]);
	console.log("Value :"+obj1[properties1[i]]);
	console.log(obj1.propertyIsEnumerable(properties1[i]))
}
for(var i=0;i<properties2.length;i++)
{
	console.log("Name :"+properties2[i]);
	console.log("Value :"+obj2[properties2[i]]);
	console.log(obj2.propertyIsEnumerable(properties2[i]))
}


//////Accessor Properties


