(function ($) {
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

    // tab
    var section = $(".section .sub_menu ul li");
    var product = $(".product ul");

    product.hide().eq(0).show();

    section.click(function (e) {
        e.preventDefault();
        section.removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        product.hide().eq(index).show();

    });

    // tab fixed
    $(".sub_menu").each(function () {
        var menu = $(this);
        var menuOffset = menu.offset().top;
        $(window).scroll(function () {
            var wScroll = $(this).scrollTop();
            if (wScroll > menuOffset) {
                menu.addClass("on");
            } else {
                menu.removeClass("on");
            }
        });
    });
})(jQuery);