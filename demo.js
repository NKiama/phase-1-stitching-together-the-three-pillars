
const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

// STEP 1: The line of code below is what lets JavaScript find the elements that
// we want to make clickable. Without JavaScript, clicking on these heart shapes
// does nothing. Uncomment the code and refresh the demo page. 

// const articleHearts = document.querySelectorAll(".like-glyph");
const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
  .then(function(serverMessage){
      // mimicking Pillar 3 (Server Communication) to only update the screen if
      // the sending of information to the server succeeds.
      alert("You notified the server!");
      // alert(serverMessage);
      // heart.innerText = glyphStates[heart.innerText];
      // heart.style.color = colorStates[heart.style.color];
    alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch (function(error) {
      alert("Something went wrong!");
    });
  }
// work, we need to add a click event listener to the elements we identified in
// STEP 1. That's Pillar 2, event handling. Uncomment this code:

// for (const glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

// STEP 4: 

// When all the STEPs' code changes have been complete, you'll be able to see a
// working demonstration of our reference example. Sure, it's maybe not as
// pretty as a professional site, but they're only different from our site in
// style, not substance.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}