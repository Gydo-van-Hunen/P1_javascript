let text = document.getElementById("text");
let count = 0;

let bgn = document.body.style

function counter(){
    count += 1;
    text.innerText = count + " keer geklikt";
    bgn.backgroundColor = "blue";
    text.style.color = "white";
};

function counter1(){
    count -= 1;
    text.innerText = count + " keer geklikt";
    bgn.backgroundColor = "red";
    text.style.color = "white";
};
