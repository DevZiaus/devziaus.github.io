$(function(){
    
    //for menu scrolling
       
    
    // for feature part slider
    $('.feature_slider').slick({
      nextArrow: '<i class="mdi mdi-arrow-right-drop-circle"></i>',
      prevArrow: '<i class="mdi mdi-arrow-left-drop-circle"></i>',
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
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
    $('.venobox').venobox();
    
    // for wow animate
    new WOW({
        mobile: false,
    }).init();
    
    // for back to top
    $(function() {
  
      var btn = $('#button');

      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });

      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
      });

    });
	
    //for form validation
	function check(){
    var name = document.getElementById('in_nm');
    var email = document.getElementById('in_em');
    var subject = document.getElementById('in_sub');
    var message = document.getElementById('in_msg');
    
    if(name.value === ""){
        alert("Please, Enter Your Name!");
        name.focus;
        return false;
    }
    if(email.value === ""){
        alert("Please, Enter Your Email");
        email.focus;
        return false;
    }
    if(Subject.value === ""){
        alert("Please, Enter Your subject!");
        pass.focus;
        return false;
    }
    
    if(message.value === ""){
        alert('Please, Enter Your Messages!');
        mess.focus;
        return false;
    }
}

});