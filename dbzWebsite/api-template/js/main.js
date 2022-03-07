document.querySelector('button').addEventListener('click', getCharacter)

function getCharacter(){
    const characterName = document.querySelector('input').value.toLowerCase().replace(/\s+/g, '')
    console.log(characterName)
    document.querySelector('img').src = `assets/${characterName}.png`
}