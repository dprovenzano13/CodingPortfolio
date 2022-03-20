
document.querySelector('#purple').addEventListener('click', partyPurple);
document.querySelector('#green').addEventListener('click', partyGreen);
document.querySelector('#blue').addEventListener('click', partyBlue);
document.querySelector('#red').addEventListener('click', partyRed);

function partyPurple () {
  let body = document.querySelector('body');
  body.style.backgroundColor = 'rgba(241,63,247,1)'
  body.style.color = 'white'
}
function partyGreen () {
  let body = document.querySelector('body');
  body.style.backgroundColor = 'rgba(0,253,81,1)'
  body.style.color = 'white'
}
function partyBlue () {
  let body = document.querySelector('body');
  body.style.backgroundColor = 'rgba(0,254,255)'
  body.style.color = 'white'
}
function partyRed () {
  let body = document.querySelector('body');
  body.style.backgroundColor = 'rgba(224,108,117,1)'
  body.style.color = 'white'
}