
let ans = document.getElementById("awnser");

function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    awnser = +num1 + +num2;
    ans.innerText = "het antwoord is " + awnser;
}

function sub() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    awnser = +num1 - +num2;
    ans.innerText = "het antwoord is " + awnser;
}

function mul() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    awnser = +num1 * +num2;
    ans.innerText = "het antwoord is " + awnser;
}

function dif() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    awnser = +num1 / +num2;
    ans.innerText = "het antwoord is " + awnser;
}
