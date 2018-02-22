	// JavaScript Document

	
var userEyes = prompt("How many eyes do you have?");

alert(userEyes);
	
if(userEyes<2) {
	alert("Are you sure about that?!");

} 
	else { 
alert("That looks about right!");
}
	
var userEyes = userEyes/1;
var userEyes = userEyes + 2;
alert ("In the morning you will have "+ userEyes);
	
var studentsName=prompt("Who is your student?");
	
switch(studentsName){
	case "Renee":
		alert ("Lucky");
		break;
		
	case "Traishelle":
		alert ("Even Better!");
		break;
		
	default: 
		alert ("That is not a students name!");
}
var a= 1;
	

for( var a= 1; a<6; a++){
	alert(a);
	a++;
}
while (a<6);
	
var mySiblings = ["Jasmine", "Jaia", "Demoree", "Ariana", "Jayden", "Amber", "Laneyah", "John"];
	
alert(mySiblings[3]);
	
var myFoods=new Array();
myFoods[0] = "Tacos";
myFoods[1] = "Mangos";
myFoods[2] = "Sushi";
	
document.write(myFoods[2]);
	
var myCar={
	color: "  White", make: " Nissan", model: " Altima"}

document.write(myCar.color);
	
var myMovies=new Array();
myMovies[0] = " Horror";
myMovies[1] = " Thriller";
myMovies[2] = "  Action";
myMovies[3] = " Suspense";

myMovies.sort();

document.write(myMovies);

var myNavs = document.getElementById("naviBars");

console.log(myNavs.childNodes.length);

var myNavs = document.getElementsByTagName("li");

console.log ("Number of li links: "+ myNavs.length);

var myNavs = myNavs.getElementsByTagName("li");

console.log ("Number of Li items in Menu: "+ myNavs.length);
						
function myFunction() {
    document.getElementById("myName").innerHTML = "Digital Designer";
}

function myTitle() {
    var list = document.getElementsByTagName("UL")[0];
    list.getElementsByTagName("LI")[0].innerHTML = "Mother";
}
