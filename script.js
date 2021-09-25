


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
	let title = "Largest prime factor";
	let description = 
		"\
		The prime factors of 13195 are 5, 7, 13 and 29.\
		<br>What is the largest prime factor of the number 600851475143 ?\
		";
	// find solution
	let concerned_number =  600851475143 ; //13195; 
	solution = max_prime_factor(concerned_number);
	// set html data 
	setUp(3, title, description, solution);
}

function max_prime_factor(concerned_number) {
	
	// generate prime numbers up to the concerned_number
	let arrFactors = [];
	let tmpFactor = 2; // starting dividedBy number!

	while(concerned_number >= 2){
		// while the given number is still superior than 2, we divide it and get its factors
		if(concerned_number%tmpFactor == 0){
			// factor found
			arrFactors.push(tmpFactor);
			concerned_number /= tmpFactor ; // prevent non prime numbers
		}else{
			// go to the next number & check if it is a factor
			tmpFactor++;
		}
	}
	// print arrFactors :
	console.log("arrFactors : ", arrFactors);
	return arrFactors.reduce((a,b) => (a>b)? a:b, 0);
}



