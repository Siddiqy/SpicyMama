window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = "0px"
    document.getElementById("header").style.backgroundColor = "#F2994A"
  } else {
    document.getElementById("header").style.padding = "5px"
    document.getElementById("header").style.backgroundColor = "#F2994A"
  }
}

$('.hero-slider').owlCarousel({
  loop: true,
  items:1,
  dots: false,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  dots: true,
  nav:false,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:4
    }
  }
});

$('.item').hover(function() {
  $(this).find('.add-basket-btn').show();
},
function () {
   $('.add-basket-btn').hide();
}
);
