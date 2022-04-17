// function myMap() {
//     var mapCanvas = document.getElementById("map");
//     var mapOptions = {
//         center: new google.maps.LatLng(51.5, -0.2),
//         zoom: 10
//     };
//     var map = new google.maps.Map(mapCanvas, mapOptions);
// }

// const slider = document.querySelector(".slider")
// const container = document.querySelector(".slider_container")
// const slides = document.querySelectorAll(".slide")
// const navigations = document.querySelectorAll(".navigation")
//
// let activeOrder = 0
//
// init();
//
// function init() {
//     for (let i = 0; i < slides.length; i++) {
//         const slide = slides[i];
//
//         slide.dataset.order = i
//         slide.style.transform = "translate( -50%, -50%)'
//     }
//     activeOrder = Math.floor(slides.length / 2);
//
//     update();
// }
//
// function update() {
//     const { width, height } = container.getBoundingClientRect()
//
//     const a = width / 2
//     const b = height / 2
//
//     const delta = Math.PI / slides.length / 2
//
//
//     for (let i = 0; i < slides.length; i++) {
//         const leftSlide = document.querySelector('.slide[data-order="${activeOrder - i}"]'
//         );
//
//         if (leftSlide) {
//             leftSlide.style.left = '${width / 2 + a * Math.cos((Math.PI * 3) / 2 - delta * i * 2)' +
//                 '}px'
//
//             leftSlide.style.top = '${-b * Math.sin((Math.PI * 3) / 2 - delta * i * 2)}'
//         }
//
//         const rightSlide = document.querySelector(
//             '.slide[data-order="${activeOrder + i}"]')
//     }
// }

$(function (){

    $('.rev_slider').slick({
        arrows: false,
        dots: true,
        autoplay : true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    })

})