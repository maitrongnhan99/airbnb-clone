const $ = document.querySelector.bind(document),
    $$ = document.querySelectorAll.bind(document);


const locations = $(".search__item.locations"),
    dropDown = $('.locations__dropdown')


const options = $('.nav__item.options'),
    optionsDropdown = $('.options__list')

options.addEventListener('click', function () {
    optionsDropdown.classList.toggle('display-block')
})

const search = $('.search')

let prevPos = window.pageYOffset
window.onscroll = function () {
    let currentPos = window.pageYOffset
    if (prevPos > currentPos) {
        search.style.top = '0'
    } else {
        search.style.top = '-100px'
    }

    prevPos = currentPos
}

const visitors = $('.visitor'),
    visitorsList = $('.visitors__list')

visitors.addEventListener('click', function () {
    visitorsList.classList.toggle('display-block')
})

const searchItems = $$('.search__item'),
    searchBtn = $('.btn__search')

searchItems.forEach(searchItem => {
    searchItem.addEventListener('click', function () {
        searchBtn.classList.toggle('active')
    })
});