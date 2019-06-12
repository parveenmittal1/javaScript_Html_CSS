function makeHelloFunction(){
	var message ='hello world';
	function logMessage()
	{
		console.log(message);
	}
	return logMessage;
}
var hiMessage=makeHelloFunction();
hiMessage();//it will print hello world



function makeFunctionArray(){
	var arr=[];
	for(var i=0;i<5;i++)
	{
		arr.push(function(){
			console.log(i);
		})
		}
		return arr;
	}
	var functions=makeFunctionArray();
	functions[0]();



	/////IIFE


	{function()
	{
		console.log("hi")
	}}()