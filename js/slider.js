
$(function () {

    //settings for slider

    var width = $(".slide").width();
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function () {
            $slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function () {

                //reload page if screen size/orientation (mobile) changes
                window.onresize = function (event) {
                    document.location.reload(true);
                }
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
    //$("body").height(windowHeight);

});
