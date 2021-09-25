


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
	let nb_digits = 3;
	// limits of multiplied numbers
	let i_start = 10**(nb_digits), i_end = 10**(nb_digits-1);
	let j_start = 10**(nb_digits), j_end = 10**(nb_digits-1);

	for (var i = i_start*j_start -1; i >= i_end*j_end; i--) {
		// check if i is a palindrom number
		let tmp_1 = (i).toString();
		let tmp_2 = tmp_1.split("").reverse().join("");

		if(tmp_1 == tmp_2){
			console.log("palindrome i : ", i);
			// check if it has 2 factors with 3 digits
			if(has_2_3_digits_factors(i, nb_digits)){
				solution = i;
				break;
			}
		}
	}
	// print arrFactors :
	console.log("solution : ", solution);
	return solution;
}

function has_2_3_digits_factors(number, nb_digits){
	let i_start = 10**(nb_digits) - 1 , i_end = 10**(nb_digits-1);

	for (var i = i_start; i >= i_end ; i--) {
		// check if number is divided
		if(number%i == 0){
			// factor found 
			let tmpFactor = number/i;
			if (tmpFactor <= i_start && tmpFactor >= i_end){
				return true;
			}
		}
	}
	return false;
}



