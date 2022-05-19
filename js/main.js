const hamburger = document.querySelector('.hamburger')
const hamburgerNav = document.querySelector('.hamburgerNav')
const hambgurgerNavLink = document.querySelectorAll('.hamburgerNav a')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('isActive')
    hamburgerNav.classList.toggle('isActive')
})
const nav = document.querySelectorAll('.navLinks a')

nav.forEach(link =>{
    link.addEventListener('click', function () {
        nav.forEach(anchor => anchor.classList.remove('isActive'))
        this.classList.add('isActive')
    })
})
hambgurgerNavLink.forEach(link =>{
    link.addEventListener('click', function () {
        hamburger.classList.toggle('isActive')
        hamburgerNav.classList.toggle('isActive')
    })
})