// core.js

// Full Width Image background scroll
$(function() {
    $(window).scroll(function(){
        parallaxImg('#header-image' , 0.3);
    });
});

function parallaxImg( obj, speed ){
    var scrolled = $(window).scrollTop();
    var opacity = (scrolled * speed);
    $(obj).css('background-position', '50%' + ' +' + (scrolled * speed) + 'px');
    $('.header-intro').css('opacity', 1 - (opacity/250));
    $('.down-arrow-cont').css('opacity', 1 - (opacity/150));
    $('.header-intro').css('transform', 'translate3d(0px, ' + scrolled / 1.8 + 'px, 0px)');
    $('.down-arrow-cont').css('transform', 'translate3d(0px, ' + scrolled / 6 + 'px, 0px)');
}

// function to set logo width based on max width margin

$(document).ready(function(){
    headerImageSize()
    if (window.innerWidth >= 500) {
        getMargin()
    }
});

window.onresize = function() {
    headerImageSize()
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

function headerImageSize() {
    var winH = window.innerHeight;
    $('#header-image').css('height', winH + 'px');
    $('.intro-container').css('padding-top', winH / 2.5 + 'px');
    $('.down-arrow-cont').css('margin-top', winH / 3.5 + 'px');
}