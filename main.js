
$(function (){

    $('.rev_slider').slick({
        arrows: false,
        dots: true,
        autoplay : true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    arrows: false,
                    dots: true,
                    autoplay : true,
                    autoplaySpeed: 2000,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            ]
    })
})

const $button = document.querySelector('button');
const $form = document.querySelector('form');

$button.addEventListener('click', e => {

    $form.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
    });
});

const $svyaz = document.querySelector('.svyaz1');
const $form1 = document.querySelector('form');

const $svyaz1 = document.querySelector('.rekl');
const $form2 = document.querySelector('form');

const $svyaz2 = document.querySelector('.rekl1');
const $form3 = document.querySelector('form');

$svyaz.addEventListener('click', e => {

    $form1.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
    });
});

$svyaz1.addEventListener('click', e => {

    $form2.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
    });
});

$svyaz2.addEventListener('click', e => {

    $form3.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
    });
});

const $ishMakets = document.querySelector('.button-makets')
const $makets = document.querySelector('.block-neon1')

$ishMakets.addEventListener('click', e=> {

    $makets.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
    })
})

const $ishNeon = document.querySelector('.button-neon')
const $neon = document.querySelector('.block-neon')

$ishNeon.addEventListener('click', e=> {

    $neon.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
    })
})
const $ishAdv = document.querySelector('.button-adv')
const $adv = document.querySelector('.advirtesment')

$ishAdv.addEventListener('click', e=> {

    $adv.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
    })
})




function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

