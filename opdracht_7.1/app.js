const budget = 100;
let output = document.getElementById("output");
let priceprompt = prompt("Hoeveel kost het product dat je wilt kopen?");
let product = priceprompt;

if (budget >= product) {
    output.innerText = "U heeft genoeg geld.";
    output.style.color = "lime";
} else {
    output.innerText = "Helaas, te weinig geld.";
    output.style.color = "crimson";
}