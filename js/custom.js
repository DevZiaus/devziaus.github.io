/*
*******************************************
*******************************************

Template Name: Portfie
Template URL: http://www.mzsbulbul.ga
Description: MZSBulbul's Personal Portfolio
Author: Md. Ziaus Samad
Author URL: https://www.mzsbulbul.ga
Version: 1.0

* This file contains the JavaScript &
jQuery Code.

***********************************************
***********************************************
*/


$(function () {

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Preloader js    
    $(window).on('load', function () {
        $('.preloader').delay(1500).fadeOut(500);
    })

    //for menu repositioning
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".nav_main");
        var colr = $(".nav-item");
        if (scrolling > 50) {
            sticky.addClass("bg_nav"), 500;
        } else {
            sticky.removeClass("bg_nav");
        }

        if (scrolling > 50) {
            sticky.addClass("nav_repos"), 500;
        } else {
            sticky.removeClass("nav_repos");
        }
    });
    
    //for smooth scroll
    var html_body = $('html, body');
    $('a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 100
                }, 1500);
                return false;
            }
        }
    });
    
    //Type Effect
    new TypeIt('.type_effect', {
        //strings: ["Front End Web Developer" , "PSD to HTML Expert"],
        speed: 150,
        waitUntilVisible: true,
        loop: true,
    }).go();


    // for feature part slider
    $('.feature_slider').slick({
        nextArrow: '<i class="fas fa-chevron-circle-right"></i>',
        prevArrow: '<i class="fas fa-chevron-circle-left"></i>',
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

    // for testimonial slider
    $('.testimonial_slider').slick({
        nextArrow: '<i class="fa fa-chevron-circle-right"></i>',
        prevArrow: '<i class="fa fa-chevron-circle-left"></i>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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

    // for venobox
    $('.venobox').venobox();

    // for wow animate
    new WOW({
        mobile: false,
    }).init();

    // for back to top
    $(function () {

        var btn = $('#button');

        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

    });

    //for counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

//for form validation
function form_validate() {
    "use strict";
    var name = document.getElementById('in_nm'),
        email = document.getElementById('in_em'),
        subject = document.getElementById('in_sub'),
        message = document.getElementById('in_msg'),
        phone = document.getElementById('in_phone'),
        submit = document.getElementById('submit');

    if (name.value === "") {
        alert("Please, Enter Your Name!");
        name.focus;
        return false;
    }
    if (email.value === "") {
        alert("Please, Enter Your Email");
        email.focus;
        return false;
    }
    if (Subject.value === "") {
        alert("Please, Enter Your subject!");
        pass.focus;
        return false;
    }

    if (message.value === "") {
        alert('Please, Enter Your Messages!');
        mess.focus;
        return false;
    }

    if (phone.value === "") {
        alert('Please, Enter Your Phone Number!');
        phone.focus;
        return false;
    }
}

submit.addEventListener('click', function () {
    form_validate();
})