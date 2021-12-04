

// const $ = document.querySelector.bind(document),
//     $$ = document.querySelectorAll.bind(document);


// const locations = $(".search__item.locations"),
//     dropDown = $('.locations__dropdown')


// const options = $('.nav__item.options'),
//     optionsDropdown = $('.options__list')

// options.addEventListener('click', function () {
//     optionsDropdown.classList.toggle('display-block')
// })

// const search = $('.search')

// let prevPos = window.pageYOffset
// window.onscroll = function () {
//     let currentPos = window.pageYOffset
//     if (prevPos > currentPos) {
//         search.style.top = '0'
//     } else {
//         search.style.top = '-100px'
//     }

//     prevPos = currentPos
// }

// const visitors = $('.visitor'),
//     visitorsList = $('.visitors__list')

// visitors.addEventListener('click', function () {
//     visitorsList.classList.toggle('display-block')
// })

// const searchItems = $$('.search__item'),
//     searchBtn = $('.btn__search')

// searchItems.forEach(searchItem => {
//     searchItem.addEventListener('click', function () {
//         searchBtn.classList.toggle('active')
//     })
// });

// window.addEventListener('scroll', function() {
//     console.log(this.scrollY)
// })

// import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

 const sliders = $$('.swiper-slide')

 sliders.forEach(slider => {
     if(slider.classList.contain('.swiper-slide-active'))
        $('.slider__testimonial').style.display = 'block'
 });