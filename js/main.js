const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', function () {
    this.classList.toggle('isActive')
})

const nav = document.querySelectorAll('.navLinks a')

nav.forEach(link =>{
    link.addEventListener('click', function () {
        nav.forEach(anchor => anchor.classList.remove('isActive'))
        this.classList.add('isActive')
    })
})