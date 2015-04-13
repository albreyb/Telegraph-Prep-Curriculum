/*

This section is for solidifying your understanding of
basic object syntax. Memorizing syntax is BORING
but necessary. Once you're not worried
about whether you're typing something incorrectly
you can worry about the program itself.


The answers are placed within functions and commented out. Don't
comment out the answer until you're 100% sure you've tried.

*/

//---------------------------------------------------------
var challengeOne = "Create the variable 'myFirstCar' and " +
"assign it to an object literal with three properties" + 
"make, model, nickname. Assign each property to a string value";


console.log(myFirstCar);
// function answerOne(){
// 	var myFirstCar = {
// 		make:"Honda",
// 		model:"Civic",
// 		nickname: "Miss Daisy",
// 	};

// 	console.log(myFirstCar);
// }


//---------------------------------------------------------

var challengeTwo = "Using bracket notation, add three properties" +
"to your myFirstCar object: color, year, radio. The color" +
"property should be string, the year property should be a number" +
"and the radio property should be a boolean.";



// function answerTwo(){
// 	myFirstCar['color'] = "blue";
// 	myFirstCar['year'] = 1991;
// 	myFirstCar['radio'] = true;
// 	console.log(myFirstCar);
// };

//---------------------------------------------------------

var challengeThree = "Loop through your new object and console.log" +
"the key's and values separated by a colon. The keys should be" + 
"put in all capital letters in order to distinguish themselves" +
"from the values.";

// Example output: COLOR: blue
// Hint: is there a function strings can use to make them capitalized?


// function answerThree(){
// 	for(var key in myFirstCar){
// 		console.log(key.toUpperCase() + ':' + myFirstCar[key]);
// 	}
// }


//---------------------------------------------------------

var challengeFour = "Now it's time to get our car ready to be sold." +
"Using dot notation add a property 'price' and assign it an integer" +
"equal to the price of your car. Next, add a property 'condition' and" +
"assign it the string value 'good condition' ";


// function answerFour(){
// 	myFirstCar.price = 100;
// 	myFirstCar.goodCondition = 'good condition';
// };


//---------------------------------------------------------

var challengeFive = "This is where things get a little tricky!" +
"We're going to create a 'craigslistAd' property for our myFirstCar object" +
"Look at the example below and fill in the missing information" +
"using the properties you have in your object. Then, add the fullAd" +
"variable to your myFirstCar object.";

var firstSentence = ("Come buy my awesome " + 'fillInYear' + ' ' + 'fillInMake' + ' ' + 'fillInModel' + '! \n');
var secondSentence = ("It's in very " + 'fillInCondition' + ' at the price of' + 'fillInPrice');
var fullAd = firstSentence + secondSentence;

// now, assign the fullAd variable to a property on your object


// function answerFive(){
// 	var firstSentence = ("Come buy my awesome " + myFirstCar.year + ' ' + myFirstCar.make + ' ' + myFirstCar.model + '! \n');
// 	var secondSentence = ("It's in very " + myFirstCar['condition'] + ' at the price of' + myFirstCar['price']);
// 	var fullAd = firstSentence + secondSentence;

// 	myFirstCar['craigslistAd'] = fullAd;
// }

//YOU ARE NOW ENTERING NIGHTMARE MODE---------------------------------------------------------

var challengeSix = "Brad Pitt saw your ad and is interested in your car!" +
"Use a loop to add all of your myFirstCar properties and values" +
"EXCLUDING 'price' and 'craigslistAd' to the bradPitt object";

/*
at the end of the loop, your bradPitt object should look EXACTLY
like your myFirstCar object minus the 'price' and 'craigslistAd'
properties.

HINTS: How are you going to exclude the 'price' and 'craigslist'
ad properties from being added?

Look up the OR operand (||) and try to utilize it in your code
*/

var bradPitt = {}



// function answerSix(){
// 	for(var key in myFirstCar) {
// 		if (key !== 'price' || key !== 'craigslistAd') {
// 			bradPitt[key] = myFirst[key];
// 		}
// 	}

// 	console.log(bradPitt);
// };


//---------------------------------------------------------
var challengeSeven = "Let's check to make sure bradPitt has recevied" +
"our myFirstCar properties. Use a loop to go through and check each key and value" +
"against eachother. If all of the keys and values are equal send an alert to your" +
"browser that says 'SUCCESS!'"


// function answerSeven(){
// 	var count = 0;
// 	for(var key in myFirstCar) {
// 		if (myFirstCar[key] === bradPitt[key]) {
// 			count++;
// 		}
// 	}

// 	if (count > 5) {
// 		alert('SUCCESS!');
// 	}
// }