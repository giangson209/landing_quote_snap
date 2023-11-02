$( document ).ready(function() {

    const lenis = new Lenis({
        duration: 1.25,
    })
    function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    $(window).scroll(function() {
        var headerH = $('.home-banner').outerHeight(true);
        console.log(headerH);
        var scrollVal = $(this).scrollTop();
        if ( scrollVal > headerH ) {
            $('.home-try').addClass('active');
        } else {
            $('.home-try').removeClass('active');
        }
    });

   	$('.home-try button').click(function() {
        $('.home-try').addClass('hide-active');
	});

   	$('.btn_field').click(function() {
        $('.frm-field').slideUp(300);
        $('.frm-success').slideDown(300);
	});

   	$('.clc-top').click(function() {
	    $('html, body').animate({
	      scrollTop: 0
	    }, 800);
	    return false;
	});

    $('.click-scroll').click(function(e){
        e.preventDefault();
        var target = $($(this).attr('href'));
        if(target.length){
            var scrollTo = target.offset().top;
            $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
        }
    });

    new WOW().init();

	$('.slide-box').slick({
        autoplay: true,
        autoplaySpeed:4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
