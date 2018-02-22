// JavaScript Document
function myPhone() {
    document.getElementById("number").innerHTML = "210-836-5165";
}
function myEmail() {
    document.getElementById("email").innerHTML = "www.artbyreneea.com";
}

window.onclick = myFunction;

function myFunction() {
    document.getElementsByTagName("header")[0].style.backgroundColor = "purple";
}