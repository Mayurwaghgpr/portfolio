$(document).ready(function() {
    let typed = new Typed("#typer", {
        strings: ["Web Developer", "Python developer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    $('.hamburger').click(function() {
        $('.hamburger').toggleClass("active");
        $('.nav-content').toggleClass("active");
    });

    $('.link').click(function() {
        $('.hamburger').removeClass("active");
        $('.nav-content').removeClass("active");
    });

    $(window).scroll(function(){
        console.log(this.scrollY);
        if(this.scrollY > 20){
          $('.main-navbar').addClass("nave-scrol");
        }
        else{
            $('.main-navbar').removeClass("nave-scrol");
        }
    });
    let sections = $('.section');
    let navlinks = $('.main-navbar .nav-content .link');
    $(window).scroll(() => {
        sections.each((index, el) => {
            let top = window.scrollY;
            let offset = $(el).offset().top - 150;
            let height = $(el).outerHeight();
            let id = $(el).attr('id');

            if (top >= offset && top < offset + height) {
                navlinks.removeClass('active');
                $('.main-navbar .nav-content a[href*=' + id + ']').addClass('active');
            }
        });
    });
});
