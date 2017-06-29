//Array of objects

var posts = [
	{
		title: "Cats are Selfish",
		author: "Nabs",
		comments: ["Very True", "You are a mean person"]
	},
	{
		title: "Dogs are man's best friend",
		author: "Nabendu",
		comments: ["You are a great person", "I know that"]
	}

]

console.log("*** The array of Objects is ***");
console.log(posts);
console.log("'posts[0].title' " + posts[0].title);
console.log("'posts[1].author' " + posts[1].author);
console.log("'posts[0].comments[1]' " + posts[0].comments[1]);
console.log("'posts[1].comments[0]' " + posts[1].comments[0]);


//Complicated objects
var someObject = {
	friends: [
		{name: "Nabendu"},
		{name: "Parag"},
		{name: "Amit"}
	],
	color: "Dark blue",
	isCoder: true
};

console.log("*** The Object of Objects is ***");
console.log(someObject);
console.log("'someObject.friends[0].name' " + someObject.friends[0].name);

//Movies example
var movies = [
	{
		title: "Bahuballi",
		ratings: 4,
		hasWatched: true
	},
	{
		title: "Bahuballi 2",
		ratings: 5,
		hasWatched: true
	},
	{
		title: "Bagrangi bhaijan",
		ratings: 3,
		hasWatched: false
	},
	{
		title: "Interstellar",
		ratings: 4.5,
		hasWatched: true
	}

]

console.log("*** MoviesDB Exercise ***")

movies.forEach(function(name){
	if(name.hasWatched){
		console.log('You have watched "'  + name.title + '" - ' + name.ratings + " stars");
	}else {
		console.log('You have not seen "'  + name.title + '" - ' + name.ratings + " stars");

	}
});

//function inside objects
var obj = {
	name: "Chuck",
	age: 45,
	isCoder: false,
	friends: ["Katie", "Lina"],
	add: function(x,y){
		return x+y;
	}
}

console.log("*** The function inside Object is ***");
console.log(obj);
console.log("'obj.add(10,15)' " + obj.add(10, 15));