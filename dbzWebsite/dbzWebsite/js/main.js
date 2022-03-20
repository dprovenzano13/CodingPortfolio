const select = document.querySelector('select')

function addOptions(obj){
    for(let i = 0; i < obj.length; i++){
        const option = document.createElement('option')
        option.value = obj[i].name
        option.innerText = obj[i].name
        select.appendChild(option)
    }
}
addOptions(dbs)

select.addEventListener('change', event =>{
    const modal = document.querySelector('.modalAll')
    const h1 = document.querySelector('h1')
    const race = document.querySelector('#race div')
    const bio = document.querySelector('#bio div')
    const abilities = document.querySelector('#abilities div')
    const image = document.querySelector('.modalImage img')
    const dragon = document.querySelector('#shenron')

    dragon.classList.add('hide')

    if(modal.classList.contains('hide')){
        modal.classList.remove('hide') 
    }

    for(let i = 0; i < dbs.length; i++){
        if(event.target.value == dbs[i].name){
            h1.innerText = dbs[i].name
            race.innerText = dbs[i].race
            bio.innerText = dbs[i].bio
            abilities.innerText = dbs[i].abilities.join(', ')
            image.src = dbs[i].img
        } else if(event.target.value == 'starter'){
            modal.classList.add('hide')
            dragon.classList.remove('hide')
        }
    }
})

