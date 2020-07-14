(function ($) {
    // slider
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 3.5,
        spaceBetween: 0,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        breakpoints: {
            600: {
                slidesPerView: 2.6,
            }
        }

    })

    // ham
    $(".ham").click(function (e) {
        e.preventDefault();
        $("#dropdown").animate({
            height: "toggle"
        }, 300);
        $("#mobile .mobile").animate({
            'left': '0'
        }, 300);
        $("#mobile .backdrop").addClass("on");
    });

    $("#mobile .backdrop").click(function (e) {
        e.preventDefault();
        $("#mobile .mobile").animate({
            'left': '-100%'
        }, 300);
        $("#mobile .backdrop").removeClass("on");
    });

    var mob = $(".mobile .menu > a");
    mob.click(function (e) {
        e.preventDefault();
        $(this).siblings("ul").slideToggle();
        $(this).find("span").toggleClass("up");
    });

    // modal
    $(".header .plate").click(function (e) {
        e.preventDefault();
        $("#modal").show();
    });
    $(".modal .close").click(function (e) {
        e.preventDefault();
        $("#modal").hide();
    });
})(jQuery);