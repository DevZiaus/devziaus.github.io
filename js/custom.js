/*
*******************************************
*******************************************

Template Name: Developer Ziaus
Template URL: http://www.mzsbulbul.ga
Description: MZSBulbul's Personal Portfolio
Author: Md. Ziaus Samad
Author URL: https://www.mzsbulbul.ga
Version: 1.0
Copyright: Md Ziaus Samad - www.mzsbulbul.ga

***********************************************
***********************************************
*/


$(function () {
    "use strict";

    // Preloader js    
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });
    
    /*** On Refresh takes to top ***/
    $(window).scrollTop(0);

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //for menu repositioning
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 100) {
            $('header').addClass('header-dark')
        } else {
            if ($('header').hasClass('header-dark')) {
                $('header').removeClass('header-dark')
            }
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
    $('.testimonial-slider').slick({
        nextArrow: '<i class="fa fa-chevron-circle-right"></i>',
        prevArrow: '<i class="fa fa-chevron-circle-left"></i>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });
    
    // for portfolio filtering
    var $grid = $('.portfolio-wrapper').isotope({
        itemSelector: '.portfolio-item'
    });

    $('.filter li').on('click', function () {
        $('.filter li').removeClass('filter-active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        $(this).addClass('filter-active');
    });//Md Ziaus Samad

    // for venobox
    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#0095da',
    });

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

    /*------------------------------------------------
            12 - Achievement Number Counter
    ---------------------------------------------------*/
	  $('.count-num').counterUp({
	      delay: 10,
	      time: 500
	  });//Md. Ziaus Samad
});
