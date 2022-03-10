// document.querySelector('button').addEventListener('click', getCharacter)

// function getCharacter(){
//     const characterName = document.querySelector('input').value.toLowerCase().replace(/\s+/g, '')
//     console.log(characterName)
//     document.querySelector('img').src = `assets/${characterName}.png`
// }

function addOptions(obj){
    for(let i = 0; i < obj.length; i++){
        const select = document.querySelector('select')
        const option = document.createElement('option')
        option.value = obj[i].name.toUpperCase()
        option.innerText = obj[i].name.toUpperCase()
        select.appendChild(option)
    }
}
addOptions(dbs)