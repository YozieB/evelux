if ($(window).width() > 1000) {
    $(".compare-mob").fadeOut("fast");
    $(".compare-mob").css("display", "none");
} else {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $(".compare-mob").fadeIn();
            $(".compare-mob").css("display", "grid");             
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() < 600) {
            $(".compare-mob").fadeOut("fast");
        }
    });
}


if ($(window).width() > 1000) {
    $(".compare-mob").fadeOut("fast");
    $(".compare-mob").css("display", "none");
} else {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $(".compare-mob").fadeIn();
            $(".compare-mob").css("display", "grid");             
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() < 600) {
            $(".compare-mob").fadeOut("fast");
        }
    });
}

window.addEventListener('resize', function(event){
    let newWidth = window.innerWidth;
    if (newWidth <= 1000) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 600) {
                $(".compare-mob").fadeIn();
                $(".compare-mob").css("display", "grid");             
            }
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() < 600) {
                $(".compare-mob").fadeOut("fast");
            }
        });
    } else {
        $(".compare-mob").fadeOut("fast")
        $(".compare-mob").css("display", "none");
    }
});


$('.compare-inner').scroll(function(e){
    $('.compare-inner').scrollLeft(e.target.scrollLeft);
  });