// Modify the code below so that it prints 1, 2, 2
// console logs must stay in their respective functions
// HINT: lexical environment


function y() {
    var a = 2;
    console.log(a);
    x();
}

function x() {
    console.log(a);
}


var a = 1;
console.log(a);
y();
