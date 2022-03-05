document.querySelector('button').addEventListener('click', getCharacter)

function getCharacter(){
    const characterName = document.querySelector('input').value
    console.log(characterName)
}