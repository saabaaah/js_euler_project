


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
	let title = "Sum square difference";
	let description = 
		"\
		Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.\
				";
	// find solution
	let concerned_number = 100;
	solution = sum_sqr_difference(concerned_number);
	// set html data 
	setUp(6, title, description, solution);
}

function sum_sqr_difference(concerned_number) {
	
	// init solution 
	let solution = 0;
	let sumOfSquares = 0;
	let squareOfSum = 0;

	// add only prime numbers to arrFactors :
	for (var i = 1; i <= concerned_number; i++) {
		// add number to array & to multiplication
		sumOfSquares += i*i;
		squareOfSum += i;
	}
	// make square of sum
	squareOfSum *= squareOfSum;
	// compute the difference
	solution =  squareOfSum - sumOfSquares;

	// print solution :
	console.log("solution : ", solution);
	return solution;
}

