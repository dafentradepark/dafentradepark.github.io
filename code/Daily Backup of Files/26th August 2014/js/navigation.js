// Navigation by Taylor Rees

// responsive navigation (uses jQuery)
// On DOM Ready
        
$(function() {
    $('.toggle-nav').click(function() {
        toggleNav();
    });
    $('.close-nav').click(function() {
        closeNav();
    });
    $(window).scroll(function() {
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