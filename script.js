


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
	let title = "Largest palindrome product";
	let description = 
		"\
		A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.\
		<br>Find the largest palindrome made from the product of two 3-digit numbers.\
		";
	// find solution
	solution = largest_palindrome_multipl_2_3_digits();
	// set html data 
	setUp(4, title, description, solution);
}

function largest_palindrome_multipl_2_3_digits() {
	
	// init solution 
	let solution = 0;
	// limits of multiplied numbers
	let i_start = 999, i_end = 100;
	let j_start = 999, j_end = 100;

	for (var i = i_start; i >= i_end; i--) {
		for (var j = j_start; j >= j_end; j--) {
			// check if multiplying i*j gived a palyndrom number
			let tmp_1 = (i*j).toString();
			let tmp_2 = tmp_1.split("").reverse().join("");

			console.log("i", i);
			console.log("j", j);
			if(tmp_1 == tmp_2 && solution < i*j){
				// solution found :
				solution = i*j;
			}
		}
	}
	// print arrFactors :
	console.log("solution : ", solution);
	return solution;
}



