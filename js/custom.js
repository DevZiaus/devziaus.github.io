$(function(){
    
    // for feature part slider
    $('.feature_slider').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
    
    // for skills part slider
    $('.skills_slider').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
    
    // for venobox
    $('.venobox').venobox({});
    });