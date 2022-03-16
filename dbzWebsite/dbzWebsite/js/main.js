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
    const race = document.querySelector('#race span')
    const bio = document.querySelector('#bio span')
    const abilities = document.querySelector('#abilities span')
    const image = document.querySelector('.modalImage img')

    if(modal.classList.contains('hide')){
        modal.classList.remove('hide') 
    }

    for(let i = 0; i < dbs.length; i++){
        if(event.target.value == dbs[i].name){
            h1.innerText = dbs[i].name
            race.innerText = `${dbs[i].race}`
            bio.innerText = `${dbs[i].bio}`
            abilities.innerText = `${dbs[i].abilities}`
            image.src = dbs[i].img
        } else if(event.target.value == 'undefined'){
            modal.classList.add('hide')
        }
    }
})

//create a modal for everytime someone picks a character

// picture and info pops up in front

