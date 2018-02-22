// JavaScript Document

window.onclick = myFunction;

function myFunction() {
    document.getElementsByTagName("header")[0].style.backgroundColor = "purple";
}

document.getElementById("myFrame").onload = function() {myPhoto()};

function myPhoto() {
    document.getElementById("photo").innerHTML = "Iframe is loaded.";
}

function myNumber() {
    document.getElementById("number").innerHTML = "210-836-51565(text only)";
}
function myEmail() {
    document.getElementById("email").innerHTML = "contact@artbyreneea.com";
}