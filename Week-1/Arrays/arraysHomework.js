/*

This section is for solidifying your understanding of
basic object syntax. Memorizing syntax is BORING
but necessary. This week you'll
*/

//---------------------------------------------------------

var challengeOne = "Create an object, 'facebookUser' and add" +
"4 properties: 'firstName', 'lastName', 'email'" +
"first, last, and email should be string values"
// your code here




expectedOutput1();
// solution: http://jsbin.com/vagopibupa/1/edit?js
//---------------------------------------------------------

var challengeTwo = "Using dot notation, add a 'relationships' property" +
"to your facebookUser object and assign it to another object." +
"use a for loop and counter to count the # of properties in your" +
"object. Console.log your object and the count";
// your code here



// can you console.log two things at once?

//expectedOutput2();
// solution: http://jsbin.com/jebademocu/1/edit?js,console
//---------------------------------------------------------

var challengeThree = "Using bracket notation, add 3 properties" +
"to your relationships object: 'friends', 'family', 'acquaintances'" +
"the values of each property should be empty arrays";
// your code here

// expectedOutput3();
// solution: http://jsbin.com/rasugijaqu/1/edit?js,console
//---------------------------------------------------------

var challengeFour = "Below there's an array full of 20 names! and" +
"and a random number generator named 'randomNumber'. Use three" +
"seperate for loops to add 5 random names to EACH of the arrays" +
"in your relationships object";

var twentyNames = ['Amy', 'Abby', "Sherryl", "Sage", "Sam", "Brad", "Kanye", "Lebron", "Kelly", "Martin", "Gina", "Shawn", "Marcus", "Tony", "Theresa", "Kim", "Adele", "Gordon", "Rihanna", "Jay-z"];

/* use the formula below to assign a value in your array to a
RANDOM name in the twentyNames array.

twentyNames[Math.floor(Math.random() * twentyNames.length)]
*/


// solution: http://jsbin.com/luvocakaxa/1/edit






















































function expectedOutput1(){
	console.log({
		firstName: 'Albrey',
		lastName: 'Brown',
		email: 'albrey@telegraphacademy.com'

	});
};
function expectedOutput2(){
	console.log({
		firstName: 'Albrey',
		lastName: 'Brown',
		email: 'albrey@telegraphacademy.com',
		relationships: {},

	}, 4);
};
function expectedOutput3(){
	console.log({
		firstName: 'Albrey',
		lastName: 'Brown',
		email: 'albrey@telegraphacademy.com',
		relationships: {
			friends: [],
			family: [],
			acquaintances: [].
		},

	});
};