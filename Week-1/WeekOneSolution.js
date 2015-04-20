//Use this file to implement Part One of your project
var animal = {};
animal.username = "Bugs Bunny";
//console.log(animal.username);
animal['tagline'] = "What's up Doc?"
// console.log(animal.tagline);
var noises = [];
animal['noises'] = noises;
//console.log(animal);
var count = 0;
for (var key in animal) {
	count++
	if(key === 'username'){
		console.log("Hi, my name is " + animal[key]);
	} else if (key === 'tagline') {
		console.log("I like to say, " + animal[key]);
	}
}
//console.log(count);
var noiseArray = ['quack!'];
noiseArray.push('flap!');
noiseArray.unshift('chirp!');
noiseArray[noiseArray.length] = 'hello!';

//console.log(noiseArray.length);
//console.log(noiseArray);
//console.log(noiseArray[noiseArray.length - 1]);
animal.noises = noiseArray;

var animals = [];
animals.push(animal);
var quackers = { 
	username: 'DaffyDuck',
 	tagline: 'Yippeee!', 
 	noises: ['quack', 'honk', 'sneeze', 'growl'] 
}

animals[animals.length] = quackers;
//console.log(animals);
var bear = {
	username: "Winnie The Pooh",
	tagline: "Ooh! Honey!",
	noises: ['munch', 'oooh!', 'sigh']

};

var spiritAnimal = {
	username: "Usher",
	tagline: "Peace up, A Town Down",
	noises: ['u got it bad!', 'ow!', 'usha', 'yeah, yeah yeah!']

}; 

animals.push(bear, spiritAnimal);
//console.log(animals.length);

var friends = [];
friends[0] = animals[0].username;
friends[1] = animals[1].username;
// console.log(friends);

var relationships = {};
relationships.friends = friends;
//console.log(realationships);

var matches = [];
relationships.matches = matches;
relationships.matches[0] = animals[2].username;
// console.log(relationships)

for (var i = 0; i < animals.length; i++) {
	animals[i].relationships = relationships;
} 

console.log(animals[0].relationships);

var AnimalTestUser = function(username){
	return {
		username: username
	}
}

var testSheep = AnimalTestUser('CottonBall');
// console.log(testSheep);

var AnimalTestUserTwo = function(username) {
	var ourUser = {};
	ourUser.username = username;
	if (arguments.length > 1) {
		// var otherArgs = Array.prototype.slice.call(arguments, 1);
		var otherArgs = [];		
		for (var i = 1; i < arguments.length; i++) {
			otherArgs[i - 1] = arguments[i];
		
		}
		ourUser.otherArgs = otherArgs;
	}

	return ourUser;
}


var testSheep2 = AnimalTestUserTwo("CottonBall", "yassss", 'kanye west');

//console.log(testSheep2);

var AnimalCreator = function(username, species, tagline, noises) {
	return {
		username: username,
		species: species,
		tagline: tagline,
		noises: noises,
		friends: [],
	}
};

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
// console.log(sheep);

var addFriend = function(animalOne, animalTwo) {
	animalOne.friends.push(animalTwo.username);
	//console.log("Your new friend " + animalOne.friends[animalOne.friends.length - 1]);
};

var cow = AnimalCreator("E-Moo", "cow", "I'm utterly disgusted", ['moo', 'nomnomnom', 'yooooo!'])
// console.log(cow);

addFriend(sheep, cow);
addFriend(sheep, bear);
addFriend(sheep, spiritAnimal);
addFriend(sheep, quackers);


var frog = AnimalCreator("Jumper", "frog", "Jiggity jiggity jump to me, son!", ['ribbit', 'croak', 'snap!'])
var myFarm = [cow, sheep, frog];


addFriend(frog)

function giveMatches(farmArray) {
	for (var i = 0; i < farmArray.length; i++) {
		farmArray[i].matches = farmArray[i].friends[0]
		console.log(farmArray[i]);
	}
}

giveMatches(myFarm);
