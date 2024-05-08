var button = document.getElementById('button'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('gameDiv');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

buttontwo.onclick = function() {
    var div = document.getElementById('gameDiv');
    if (div.style.display == 'none') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }
};

function changeSrc(loc) {
    document.getElementById('iframeId').src = loc;
}