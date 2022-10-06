let text = document.getElementById("text");
let count = 0;
let limit = 10;

function counter() {
    count++;
    text.innerText = count + " keer geklikt";
    text.style.backgroundColor = "lime"
    if (count >= limit) {
        count = 0;
        text.innerText = count + " keer geklikt";
        text.style.backgroundColor = "cyan"
    }
}

