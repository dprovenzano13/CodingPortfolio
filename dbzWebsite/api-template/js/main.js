const select = document.querySelector('select')

function addOptions(obj){
    for(let i = 0; i < obj.length; i++){
        const option = document.createElement('option')
        option.value = obj[i].name.toUpperCase()
        option.innerText = obj[i].name.toUpperCase()
        select.appendChild(option)
    }
}
addOptions(dbs)

select.addEventListener('change', event =>{

})

//create a modal for everytime someone picks a character

// picture and info pops up in front