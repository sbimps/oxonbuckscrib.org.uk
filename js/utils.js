$(document).ready(function () {
    content_resize();
    $(window).resize(content_resize);
    $(document).resize(content_resize);
    $('#slideshow').cycle({
        fx: 'fade',
        speed: 4000
    });

    function content_resize() {
        var w = $(window);
        var H = w.height();
        var W = w.width();
        var hdrHeight = $('#header').height();
        var pgHeight = $('#content').height();
        var ftrHeight = $('#footer').height();
   }
});
