


// call the problem function 


// set up fct to update HTML page
function setUp(number, solution) {

	// Put the problem number in the HTML Page !
	document.getElementById("problem_number").innerHtml = number;

	// Put the solution in the HTML Page !
	document.getElementById("solution_goes_here").innerHtml = solution;
}