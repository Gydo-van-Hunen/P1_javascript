document.onkeydown = detectKey;
const distance = 22;

function detectKey(e) {

    var posLeft = document.getElementById('myId').offsetLeft;
    var posTop = document.getElementById('myId').offsetTop;

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        if (posTop - distance < 0) {

        } else if (posTop - distance <= 175 && posLeft >= 88) {
            location.reload();
        } else {
            document.getElementById('myId').style.marginTop = (posTop - distance) + "px";
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        if (posTop + distance > 330) {

        } else if (posTop + distance >= 67 && posLeft <= 44 || posTop + distance >= 243) {
            location.reload();
        } else {
            document.getElementById('myId').style.marginTop = (posTop + distance) + "px";
        }
    }
    else if (e.keyCode == '37') {
        // left arrow
        if (posLeft - distance < 0) {

        } else if (posTop >= 88 && posLeft - distance <= 65) {
            location.reload();
        } else {
            document.getElementById('myId').style.marginLeft = (posLeft - distance) + "px";
        }
    }
    else if (e.keyCode == '39') {
        // right arrow
        if (posLeft + distance > 660) {

        } else if (posTop <= 154 && posLeft + distance >= 67) {
            location.reload();
        } else {
            document.getElementById('myId').style.marginLeft = (posLeft + distance) + "px";
            if (posLeft + distance >= 640) {
                document.getElementById('text').innerText = 'you win!'
            }
        }
    }
    
}

function reload() {
    location.reload();
}
