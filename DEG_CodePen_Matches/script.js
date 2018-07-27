/* 
Goal: Learn to use the Element.matches() method

Task: All 5 buttons detonate the bomb when clicked. Using the .matches() method, make the button with the "dismantle" class show a "Success!" alert message, and all other buttons show a "Boom!" alert message.

For reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
*/

const buttonEls = document.querySelectorAll('button');

for (let i = 0; i < buttonEls.length; i++) {
  buttonEls[i].addEventListener('click', function(e) {
    const buttonEl = e.target;
     // .matches() logic goes here
     if (buttonEl.matches('.dismantle')) {
     	alert("SUCCESS!");
     	return;
     }
    alert('BOOM!');
  });
}