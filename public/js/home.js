
(navDuty => {
    const sideNav = document.getElementById('sideNav');
    const closeNavBtn = document.querySelector('.closeBtn');
    const toggleNavBtn = document.querySelector('.toggleNav');
    const pageOverlay = document.querySelector('.page__overlay');

    // Nav listeners
    closeNavBtn.addEventListener('click', toggleNav);
    toggleNavBtn.addEventListener('click', toggleNav);
    pageOverlay.addEventListener('click', toggleNav);
    // Nav funtion
    function toggleNav() {
        sideNav.classList.toggle('open');
    };

    // (on mobile) close nav menu when link is clicked
    // this is useful on mobile when clicking an anchor tag on the current page (eg. index.html#last-section)
    let navItems = document.querySelectorAll(".nav__item");
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function (event) {
            toggleNav();
        });
    }
})();


//non related
(stickyNav => {
    const button = document.querySelector('button');
    const onOffHTML = document.querySelector('.sticky-on-off');
    const on = '<strong>On</strong>';
    const off = '<strong>Off</strong>';
    const navWrapper = document.querySelector('.nav-wrapper');

    button.addEventListener('click', toggleStickyNav => {
        navWrapper.classList.toggle('sticky-nav');
        (navWrapper.classList.contains('sticky-nav') ? onOffHTML.innerHTML = on : onOffHTML.innerHTML = off);
    });

})();

$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 10,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 10198,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 104,duration: 3000});
$('#number4').jQuerySimpleCounter({end: 8,duration: 2500});

// About Us

// slider Promotion tours
$('.slider').slick({
    centerMode: true,
    centerPadding: '140px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

//slider customerofus
$('.slider-customer').slick({
    centerMode:true,
    centerPadding:'240px',
    slidesToShow:1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }
    ]
});
//slide travel tips
$('.slide-travel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
