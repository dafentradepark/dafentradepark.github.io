// core.js

// function to set logo width based on max width margin

$(document).ready(function(){
    if (window.innerWidth >= 500) {
        getMargin()
    }
});

window.onresize = function() {
    if (window.innerWidth >= 500) {
        getMargin()
    }
}

function getMargin() {
    var p = document.getElementById('max-width-container');
    var style = p.currentStyle || window.getComputedStyle(p);
    var margin = style.marginLeft;
    var marginInt = parseInt(margin, 10);

    var logoCont = document.getElementById('logo-container');
    logoCont.style.width = marginInt + 221 + "px";
}
