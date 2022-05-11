const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', function () {
    this.classList.toggle('isActive')
})

const nav = document.querySelector('.navLinks')

nav.addEventListener('click',  (e) => {
    e.target.classList.toggle('isActive')
    
})