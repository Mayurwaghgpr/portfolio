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
const scriptURL = 'https://script.google.com/macros/s/AKfycbwPeq1iGR1bhbV7kLR7wSaBlafu3eWdVXX_y44ZeCpdcOzpn-mYAUu4hV-9OO7INsSE/exec'
const forme = document.forms['submit-to-google-sheet']

forme.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(forme)})
    .then(response => {
      document.querySelectorAll('input ,textarea').forEach((item)=>{item.value= ""})
      console.log('Success!', response),alert(document.getElementById('success_message'))}
      
    )
    .catch(error => console.error('Error!', error.message))
})
});


