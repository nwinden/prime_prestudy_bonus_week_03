
var bonus = 1;

function doubleIt(num) {
	return num*2;
}

function tripleIt(num) {
	return num*3;
}

function quadrupleIt(num) {
 	return num*4;
}


console.log(quadrupleIt(tripleIt(doubleIt(bonus))));