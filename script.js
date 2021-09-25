


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
	let title = "Smallest multiple";
	let description = 
		"\
		2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.\
		What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?\
		";
	// find solution
	let concerned_number = 20;
	solution = smallest_miltiple(concerned_number);
	// set html data 
	setUp(5, title, description, solution);
}

function smallest_miltiple(concerned_number) {
	
	// init solution 
	let solution = 0;
	let allFactors = [];
	let finalFactors = [];
	let multiplicationValue = 1;

	// add only prime numbers to arrFactors :
	for (var i = 1; i <= concerned_number; i++) {
		// add number to array & to multiplication
		multiplicationValue *= i;
		allFactors.push(i);
		finalFactors.push(i);
	}
	// for each eliminable factor, we divide on it and eliminate ot
	for (var i = finalFactors.length - 1; i >= 0; i--) {
		let tmpFactor = finalFactors[i];
		let eliminate = true;
		// check if even after division, the new number is dividable by all initial numbers :
		for(var j = 0; j < allFactors.length ; j++){
			if((multiplicationValue/tmpFactor)%allFactors[j] != 0){
				eliminate = false;
				break;
			}
		}
		if(eliminate){
			// eliminate factor, since even after dividing the number by it, it is still devided be it again :
			finalFactors = finalFactors.filter((a) => a != tmpFactor);
			multiplicationValue /= tmpFactor;
		}
	}

	// reduce finalFactors to multiplication
	solution = finalFactors.reduce((a,b) => a*b, 1);

	// print finalFactors :
	console.log("finalFactors : ", finalFactors);
	console.log("solution : ", solution);
	return solution;
}

