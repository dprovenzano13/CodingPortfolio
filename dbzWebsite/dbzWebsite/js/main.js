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
    console.log(event.target.value)
    for(let i = 0; i < dbs.length; i++){
        if(event.target.value == dbs[i].name){
            let h1 = document.querySelector('h1')
            h1.innerText = `${dbs[i].name}`
        }
    }
})

//create a modal for everytime someone picks a character

// picture and info pops up in front

