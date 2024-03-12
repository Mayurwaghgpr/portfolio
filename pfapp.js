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
});
