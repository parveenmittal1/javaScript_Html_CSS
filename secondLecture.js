function whatIsThis(){
	//console.log(this)
}


var person={
	firstName:"parveen",
	lastName:"Kumar",
	whatIsThis: function(){//console.log(this)},
	//greetFunction: function(whatToSay) {//console.log(whatToSay+ this.lastName+" "+this.firstName)}

};
//person.whatIsThis();
//person.greetFunction('hi');

var student = {
	firstName: 'jack',
	lastName: 'john'
};
//student.greetFunction=person.greetFunction;
//student.greetFunction();
//var studentGreetMethod=person.greetFunction.bind(student, 'hi');
studentGreetMethod();
var arr=['hi','hello','System']
//person.greetFunction.call(student,'hi');

//person.greetFunction.apply(student,arr);

function(){
	//console.log('hi')
}
()=>{
	//console.log('hi')
}

var arr=[1,2,3,4];
function addOne(x)
{
	return x+1
}
console.log(arr.map(addOne))