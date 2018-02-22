// JavaScript Document
var userEyes = prompt("How many eyes does ReneeA have?");

alert(userEyes);
	
if(userEyes<2) {
	alert("Are you sure about that?!");

} 
	else { 
alert("That looks about right!");
}
	
var userEyes = userEyes/1;
var userEyes = userEyes + 2;
alert ("In the morning she'll will have "+ userEyes);
	
var studentsName=prompt("Who is your teacher?");
	
switch(studentsName){
	case "Susan":
		alert ("Lucky");
		break;
		
	case "Nobody":
		alert ("Even Better!");
		break;
		
	default: 
		alert ("That is not her teacher's name!");
}
var a= 1;
	

for( var a= 1; a<4; a++){
	alert(a);
	a++;
}
while (a<4);
	
var mySiblings = ["Jasmine is her sister", "Jaia", "Demoree", "Ariana", "Jayden", "Amber", "Laneyah", "John"];
	
alert(mySiblings[0]);
	
var myFoods=new Array();
myFoods[0] = "Tacos are her favorite.";
myFoods[1] = "Mangos";
myFoods[2] = "Sushi";
	
document.write(myFoods[0]);
	
var myCar={
	color: "  White is the color of her car,", make: " Nissan", model: " Altima"};

document.write(myCar.color);
	
var myMovies=new Array();
myMovies[0] = " Horror";
myMovies[1] = " Thriller movies.";
myMovies[2] = "  And she likes Action";
myMovies[3] = " Suspense and";

myMovies.sort();

document.write(myMovies);

var myNavs = document.getElementById("naviBars");

console.log(myNavs.childNodes.length);

var myNavs = document.getElementsByTagName("li");

console.log ("Number of li links: "+ myNavs.length);

var myNavs = myNavs.getElementsByTagName("li");

console.log ("Number of Li items in Menu: "+ myNavs.length);
	// intro button					
