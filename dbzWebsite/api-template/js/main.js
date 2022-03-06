document.querySelector('button').addEventListener('click', getCharacter)

function getCharacter(){
    const characterName = document.querySelector('input').value.toLowerCase().replace(' ', '')
    console.log(characterName)

}