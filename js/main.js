const $ = document.querySelector.bind(document),
        $$ = document.querySelectorAll.bind(document);
    

const locationDropdown = $(".search .locations")

locationDropdown.addEventListener('click', function() {
    $('.locations__dropdown').style.display = 'block'
})

