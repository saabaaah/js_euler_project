


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
	let title = "Largest product in a series";
	let description = 
		"\
		Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?\		What is the 10 001st prime number?\
				";
	// find solution
	let concerned_number = 13;
	let strData =
"73167176531330624919225119674426574742355349194934\
96983520312774506326239578318016984801869478851843\
85861560789112949495459501737958331952853208805511\
12540698747158523863050715693290963295227443043557\
66896648950445244523161731856403098711121722383113\
62229893423380308135336276614282806444486645238749\
30358907296290491560440772390713810515859307960866\
70172427121883998797908792274921901699720888093776\
65727333001053367881220235421809751254540594752243\
52584907711670556013604839586446706324415722155397\
53697817977846174064955149290862569321978468622482\
83972241375657056057490261407972968652414535100474\
82166370484403199890008895243450658541227588666881\
16427171479924442928230863465674813919123162824586\
17866458359124566529476545682848912883142607690042\
24219022671055626321111109370544217506941658960408\
07198403850962455444362981230987879927244284909188\
84580156166097919133875499200524063689912560717606\
05886116467109405077541002256983155200055935729725\
71636269561882670428252483600823257530420752963450";

	// convert string data to int :
	let intData = strData.split("");

	solution = max_product_series(concerned_number, intData);
	// set html data 
	setUp(8, title, description, solution);
}

function max_product_series(concerned_number, intData) {
	
	// product put to 1
	let solution = 1;

	// check horizontal series :
	for (var i = 0; i < intData.length -concerned_number; i++) {
		let tmpProduct = 1;
		for (var k = 0; k < concerned_number; k++) {
			tmpProduct *= intData[i+k];
		}
		// a max product check
		solution = (tmpProduct > solution)? tmpProduct : solution;

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

