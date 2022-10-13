let modal = document.getElementById("myModal"); //the modal
let btn = document.getElementById("myBtn"); //the button to open the modal
let span = document.getElementsByClassName("close")[0]; //the span to close the modal
let ipt = document.getElementById("myInput"); //the age input
let sub = document.getElementById("mySub"); //the submit button

//open modal
btn.onclick = function () {
    modal.style.display = "block";
}

//close modal
span.onclick = function () {
    modal.style.display = "none";
}

//also close modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//submiting age
sub.onclick = function () {
    if (ipt.value >= 18) {
        window.open("web.html")
    } else {
        window.open("error.html")
    }

}