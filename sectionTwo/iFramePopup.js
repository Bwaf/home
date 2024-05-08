var button = document.getElementById('button'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('div');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
        div.style.visibility = 'hidden';
    }
    else {
        div.style.display = 'block';
    }
};

function changeSrc(loc) {
    document.getElementById('iframeId').src = loc;
}