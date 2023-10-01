

// Число фібаначі !

/*
let fibanaci=(x) => {
	let fib = [1, 1];
	for (let i = 2; i < x; i++) {
		fib.push(fib[i - 1] + fib[i - 2]);
	}
	return fib;
}
let result = fibanaci(15);
console.log(result.join(' '));
*/


// Геометрична прогресія !!

/*
function geometricProgression(a, b) {
	let sum = 0;
	let next = 1;
	for (let i = 0; i < a; i++) {
		sum += next;
		next *= b;
	}
	return sum;
}
const result = geometricProgression(6, 3);
console.log(result);
*/

/*
function geometricProgression(a, b) {
	return 1 * (1 - Math.pow(b, a)) / (1 - b);
}

let result = geometricProgression(6, 3);
console.log(result);
*/


// Прості числа

let numeric1 = +prompt("Введіть початкове число:");
let numeric2 = +prompt("Введіть кінцеве число:");

let isPrime = (num) => {
	if (num < 2) return false;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
}

let simpleNumber = (start, end) => {
	let primes = [];

	for (let i = start; i <= end; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}
	console.log(...primes);
}
simpleNumber(numeric1, numeric2);

