$(document).ready(function() {

// скроллинг страницы
    $(function() {
        var $page = $('html, body');
        $('nav a[href*="#"], #btnNav').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 90
            }, 1000);
            return false;
        });
    });
// изменение background хэдера
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $("header").addClass("scroll");
        } else if ($(this).scrollTop() <= 10) {
            $("header").removeClass("scroll");
        }
    });

});