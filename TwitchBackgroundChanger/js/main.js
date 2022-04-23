
document.querySelector('#purple').addEventListener('click', partyPurple);
document.querySelector('#green').addEventListener('click', partyGreen);
document.querySelector('#blue').addEventListener('click', partyBlue);
document.querySelector('#red').addEventListener('click', partyRed);

function partyPurple () {
  let body = document.querySelector('body');
  body.style.backgroundColor = 'rgba(229, 164, 232, 1)'
  body.style.color = 'white'
}
function partyGreen () {
  let body = document.querySelector('body');
  body.style.backgroundColor = 'rgba(0, 210, 67,1)'
  body.style.color = 'white'
}
function partyBlue () {
  let body = document.querySelector('body');
  body.style.backgroundColor = 'rgba(47, 231, 231, 1)'
  body.style.color = 'white'
}
function partyRed () {
  let body = document.querySelector('body');
  body.style.backgroundColor = 'rgba(255, 62, 78,1)'
  body.style.color = 'white'
}


// When you click on the color.. The background image changes to a streamer room with that color.