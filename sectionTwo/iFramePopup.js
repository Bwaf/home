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


var portfolioDiv = document.getElementById('portfolio');
var resultsDiv = document.getElementById('results');

var portfolioBtn = document.getElementById('RenderPortfolio_Btn');
var resultsBtn = document.getElementById('RenderResults_Btn');

portfolioBtn.onclick = function() {
    resultsDiv.setAttribute('class', 'hidden');
    portfolioDiv.setAttribute('class', 'visible');
};

resultsBtn.onclick = function() {
    portfolioDiv.setAttribute('class', 'hidden');
    resultsDiv.setAttribute('class', 'visible');
};
