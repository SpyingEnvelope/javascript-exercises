function add (a, b) {
	let result = a + b;
	return result;
}

function subtract (a, b) {
	let result = a - b;
	return result;
}

function sum (array1) {
	let arraySum = 0;

	for (let i = 0; i < array1.length; i++) {
		arraySum += array1[i];
	}

	return arraySum;
}

function multiply (array1) {
	let arraySum = 0 + array1[0];

	for (let i = 1; i < array1.length; i++) {
		arraySum *= array1[i];
	}

	return arraySum;
	
}

function power(a, b) {
	let result = Math.pow(a, b);
	return result;
	
}

function factorial(a) {
	let result = a;
	if (a === 0 || a === 1) {
		return 1;
	}

	for (let i = a - 1; i > 1; i--) {
		result = result * i;
	}

	return result;
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}