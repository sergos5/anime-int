const slider = function() {
    /* swiper-slider */
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        //direction: 'vertical',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        effect: "fade",
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },    
    });


}

slider()