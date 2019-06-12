function print_One() {
	// body...
	console.log('One');
}


function print_Two() {
	// body...
	console.log('TWO');
}

function print_Three() {
	// body...
	console.log('Three');
}

function print_Four() {
	// body...
	console.log('Four');
}

function print_Five() {
	// body...
	console.log('Five');
}

function print_Six() {
	// body...
	console.log('Six');
}

setTimeout(print_One,1000);
setTimeout(print_Two,0);
print_Three();

console.log("First Call done");
setTimeout(print_Four,1000);
setTimeout(print_Five,0);
setTimeout(print_Three,0);


