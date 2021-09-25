


// call the problem function 
problem();


// ------------------------ SETUP FUNCTIONS ----------------------- //
// set up fct to update HTML page
function setUp(number, title, description, solution) {

	// Put the problem data in the HTML Page !
	document.getElementById("problem_number").innerHTML = number;
	document.getElementById("problem_title").innerHTML = title;
	document.getElementById("problem_description").innerHTML = description;

	// Put the solution in the HTML Page !
	document.getElementById("solution_goes_here").innerHTML = solution;
}


// ------------------------ PROBLEMS Functions ---------------------- //

// problem solution !
function problem() {
	// this is the solution 
	let solution;
	let title = "10 001'st prime";
	let description = 
		"\
		By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.\
		What is the 10 001st prime number?\
				";
	// find solution
	let concerned_number = 10001;
	solution = nth_prime(concerned_number);
	// set html data 
	setUp(6, title, description, solution);
}

function nth_prime(concerned_number) {
	
	// init solution state, 2 as the desired initial prime number !
	let solution = 2;
	let countPrimes = 1;

	// since 2 is already considered we start by 3 , 
	// so that we can avoid even numbers by jumping by 2
	let i = 3;

	while(countPrimes < concerned_number){
		// check if i is prime :
		if(isPrime(i)){
			countPrimes++;
			solution = i;

			console.log("prime N° ", countPrimes, " : ", i);
		}
		i+=2; // go to the next number
	}

	// print solution :
	console.log("solution : ", solution);
	return solution;
}

function isPrime(number) {
	
	for (var i = 2; i <= Math.sqrt(number); i++) {
		if(number % i == 0) return false;
	}

	return true;
}

