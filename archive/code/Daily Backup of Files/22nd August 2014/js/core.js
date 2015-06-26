// core.js

// responsive navigation (uses jQuery)
// On DOM Ready
        
$(function() {
    $('.toggle-nav').click(function() {
        toggleNav();
    });
    $('.close-nav').click(function() {
        closeNav();
    });
});

// Custom Functions

function toggleNav() {
    if ($('#secondary-nav').hasClass('show-nav')) {
        // Nav Close
        $('#secondary-nav').removeClass('show-nav');
        $('#menu-button').removeClass('show-nav');
        $('#content-wrapper').removeClass('show-nav');
        $('.nav').removeClass('show-nav');
    } else {
        // Nav Open
        if (window.innerWidth <= 500) {
            $('.nav').addClass('show-nav');
            $('#secondary-nav').addClass('show-nav');
            $('#content-wrapper').addClass('show-nav');
        } else {
            $('#secondary-nav').addClass('show-nav');
            $('#menu-button').addClass('show-nav');
            $('#content-wrapper').addClass('show-nav');
        }
    }
}

function closeNav() {
    if ($('#secondary-nav').hasClass('show-nav')) {
        // Close Nav
        $('#secondary-nav').removeClass('show-nav');
        $('#menu-button').removeClass('show-nav');
        $('#content-wrapper').removeClass('show-nav');
        $('.nav').removeClass('show-nav');
    }
}

// Full Width Image background scroll
$(function() {
    $(window).scroll(function(){
        parallax('#header-image' , 0.8);
    });
});

var  parallax = function( obj, speed ){
    var scrolled = $(window).scrollTop();
    $(obj).css('background-position', '50%' + ' -' + (scrolled * speed) + 'px');
}

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