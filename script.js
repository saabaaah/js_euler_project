


// call the problem function 
problem_1();


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

// problem N° 1 !
function problem_1() {
	// this is the solution 
	let solution;
	let title = "Multiples of 3 or 5";
	let description = "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\
	 					<br> Find the sum of all the multiples of 3 or 5 below 1000.";

	// find solution
	let max_value = 1000; 
	// set of nutaral multiples of 3 under max_value :
	const setMultiples3_5 = new Set();
	// adding multiples
	for (var i = 1; i*3 < max_value || i*5 < max_value; i++) {
		if (i*3 < max_value)
			setMultiples3_5.add(i*3);
		if (i*5 < max_value)
			setMultiples3_5.add(i*5);
	}
	//console.log("setMultiples3_5", setMultiples3_5);
	solution = Array.from(setMultiples3_5).reduce((a, b) => a + b, 0);

	// set html data 
	setUp(1, title, description, solution);
}





