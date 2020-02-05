$(document).ready(function () {
    $('.header-slider ').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 1023,
            settings: {
                // dots: false
            }
        }]
    });
    var slider = $('.header-slider ');
    var total = slider.slick("getSlick").slideCount;
    var currentSlide = $('.header-slider ').slick('slickCurrentSlide');
    var slide = currentSlide + 1;
    if (total > 1) {
        $(".sl-count__current").text('0' + slide);
        $('.sl-count__total').text('0' + total);
    }
    $(".header-slider ").on('afterChange', function (event, slick, currentSlide, nextSlide) {
        var currentSl = currentSlide + 1;
        $(".sl-count__current").text('0' + currentSl);
    });

    $(' .works-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<span class="slick-arrow--custom-left">	&larr;</span>',
        nextArrow: '<span class="slick-arrow--custom-right">&rarr;</span>'
    });

    $('.doc-slider').slick({
        slidesToShow: 1,
        centerMode: true,
        infinite: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<span class="slick-arrow--custom-left">	&larr;</span>',
        nextArrow: '<span class="slick-arrow--custom-right">&rarr;</span>'

    });


    //BENEFITS
    const benefitsCards = document.querySelectorAll('.benefits-img-item');
    const benefitsText = document.querySelectorAll('.benefits-text-item');
    const benefittextOut = document.querySelector('#benefits-text');

    for (let i = 0; i < benefitsCards.length; i++) {
        benefitsCards[i].addEventListener('mouseenter', function (e) {
            e.preventDefault();
            const thisData = this.getAttribute('data-card')
            for (let i = 0; i < benefitsText.length; i++) {
                benefitsText[i].classList.remove('active');
                const textData = benefitsText[i].getAttribute('data-item');
                if (textData == thisData) {
                    benefitsText[i].classList.add('active');
                }
            }
            console.log(thisData);
        })
    }

    //magnifyk
    $(".docs-items").magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    //menu-drop
    const menuElement = document.querySelector('.nav__item-drop ');
    const menuDrop = document.querySelector('.dropdown ');
    const bodyElement = document.querySelector('body')
    menuElement.addEventListener('mouseenter', function () {
        menuDrop.classList.add('active');
    });
    bodyElement.addEventListener('click', function () {
        menuDrop.classList.remove('active');
    })
    // menuElement.addEventListener('click', function (e) {
    //     e.stopImmediatePropagation()
    //     menuDrop.classList.toggle('active');
    // })
    window.addEventListener('resize', function () {
        menuDrop.classList.remove('active');
    })

    // $(".doc-slider").magnificPopup({
    //     delegate: 'a',
    //     type: 'image',

    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    //     }
    // });

    //tabs
    const filerToggles = document.querySelectorAll('.filter-item')
    const filerContent = document.querySelectorAll('.tab-content')

    for (let i = 0; i < filerToggles.length; i++) {
        filerToggles[i].addEventListener('click', function () {
            for (let item of filerToggles) {
                item.classList.remove('active');
            }
            this.classList.add('active');
            const thisData = this.getAttribute('data-index');
            for (let content of filerContent) {
                content.classList.remove('active');
                const contentData = content.getAttribute('data-role');
                if (contentData == thisData) {
                    content.classList.add('active');
                }
            }

        })
    }


})