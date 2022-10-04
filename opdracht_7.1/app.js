const budget = 100;
const product = 60;
let output = document.getElementById("output");

if (budget > product) {
    output.innerText = "U heeft genoeg geld.";
    output.style.color = "lime";
} else {
    output.innerText = "Helaas, te weinig geld.";
    output.style.color = "crimson";
}