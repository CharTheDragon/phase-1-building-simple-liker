// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let hearts = document.querySelectorAll('.like-glyph')

function addErrorMessage(){
  let hiddenTag = document.querySelector('#modal')
  hiddenTag.classList.remove('hidden')
}

function removeErrorMessage(){
  let hiddenTag = document.querySelector('#modal')
  hiddenTag.classList.add('hidden')
}

function checkHeart(event) {
  if (event.target.innerText === FULL_HEART) {
    console.log(event.target.classList)
    event.target.innerText = EMPTY_HEART;
    event.target.classList.remove('activated-heart');
  } else {
    mimicServerCall()
    .then(function() {
    console.log(event.target)
    event.target.classList.add('activated-heart');
    event.target.innerText = FULL_HEART;
    })
    .catch(function() {
    addErrorMessage();
    setTimeout(function(){
      removeErrorMessage()},3000);
    console.log('catch')
    })}

}

function heartClicked() {
  for (item of hearts) {
    item.addEventListener('click',checkHeart)
  } 
}

heartClicked()


//call server within another function
//if callsback as goo, change the heart
//create catch that changes modal

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
