// js to active and automatically resize the gallery slideshow

$(document).ready(function(){
    if (window.innerWidth >= 600) {
        resizeGallery();
        placeGalleryText();
    }
});

$(window).resize(function(){
    if (window.innerWidth >= 600) {
        resizeGallery();
        placeGalleryText();
    }
});

function resizeGallery(){
    var newHeight = $(window).height() + 'px';
    $('.bx-wrapper').css('height', newHeight);
    $('.gallery-image').css('height', newHeight);
    $('.bx-viewport').css('height', newHeight);
}

// zoom on img

$(function() {
    $('.zoom').click(function() {
        zoom();
    });
    $(window).scroll(function() {
        zoomOut();
    });
});

function zoom() {
    if ($('.zoom').hasClass('in')) {
        $('.zoom').removeClass('in');
        $('.article-text').removeClass('on-zoom');
    } else {
        $('.zoom').addClass('in');
        $('.article-text').addClass('on-zoom');
    }
}

function zoomOut() {
    $('.zoom').removeClass('in');
    $('.article-text').removeClass('on-zoom');
}

// place gallery text

function placeGalleryText() {
    var winH = window.innerHeight;
    var winW = window.innerWidth;
    var textLocation;
    if (winW <= 500) {
        textLocation = winH - 400;
        $('.gallery-text').css('top', textLocation + 'px');
        $('.next-image').removeClass('margin-left');
    } else {
        textLocation = winH - 300;
        $('.gallery-text').css('top', textLocation + 'px');
        $('.next-image').addClass('margin-left');
    }
}

// move gallery text on scroll
$(function() {
    $(window).scroll(function(){
        parallaxImg();
    });
});

function parallaxImg(){
    var scrolled = $(window).scrollTop();
    var opacity = (scrolled * 0.8);
    $('.gallery-text').css('opacity', 1 - (opacity/550));
    $('.bx-wrapper .bx-pager, .bx-wrapper .bx-controls-auto').css('opacity', 1 - (opacity/550));
    $('.gallery-text').css('transform', 'translate3d(0px, ' + scrolled / 20 + 'px, 0px)');
    $('.bx-wrapper .bx-pager, .bx-wrapper .bx-controls-auto').css('transform', 'translate3d(0px, ' + scrolled / 20 + 'px, 0px)');
}
