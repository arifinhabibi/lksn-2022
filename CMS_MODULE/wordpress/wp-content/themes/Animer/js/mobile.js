var bar = document.querySelector('.fa-bars')
var mobileNav = document.querySelector('.mobile-nav')


bar.addEventListener('click', function () {
    mobileNav.classList.toggle('show')
})