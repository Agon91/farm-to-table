// const submit = document.querySelector('input[type=submit]');


// const messages = submit.addEventListener('click', () => {
//     // const inputText = document.querySelectorAll('input[type=text]');
//     const inputText = document.querySelector('input[type=text]');
//     if (inputText === '') {
//         const p = document.createElement('p');
//         p.innerText = "Please Enter First Name";
//         inputText.appendChild(img);
//     }
// });

// messages();

const inputText = document.querySelector('input[type=text]');
const formDiv = document.querySelector('.form-container');
const submit = document.querySelector('input[type=submit]');

// const p = document.createElement('p');
// p.innerText = "Please Enter First Name";
// const add = inputText.appendChild(p);

submit.addEventListener("click", function(event) {
   event.preventDefault(); 
   const blueAlert = document.createElement('div');
   const p = document.createElement('p');
   blueAlert.appendChild(p);
   console.log(blueAlert);
   p.innerHTML = '<b>Join for Free 30 days</b> then $59/mo. after';
   blueAlert.classList.add('blue');
    formDiv.insertAdjacentElement("beforebegin", blueAlert);
});
