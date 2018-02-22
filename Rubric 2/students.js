

var myNavs = document.getElementById("naviBars");

console.log(myNavs.childNodes.length);

var myNavs = document.getElementsByTagName("li");

console.log ("Number of li links: "+ myNavs.length);

var myNavs = myNavs.getElementsByTagName("li");

console.log ("Number of Li items in Menu: "+ myNavs.length);
	// intro button					
function myIntro() {
    document.getElementById("intro").innerHTML = "Dont forget to read!";
}
//contact me button
function myFunction() {
    document.getElementsByTagName("P")[0].innerHTML = "contact@artbyreneea.com";
} 

function myPortfolio() {
    var node = document.createElement("li");
    var textnode = document.createTextNode("Portfolio");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}

if (new Date().getHours() < 18) {
    document.getElementById("welcome").innerHTML = "Good day!";
}

