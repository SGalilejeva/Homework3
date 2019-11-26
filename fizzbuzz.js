console.log("Running my FIZZ BUZZ!");

const app = document.querySelector('#app');

const newDiv = document.createElement('div');
newDiv.innerText = "I am a new Div";
app.appendChild(newDiv);

app.appendChild(document.createElement('p'));

const mypar = app.querySelector('p');
mypar.innerText = "Lorem Ipsem";

// mypar.style.backgroundColor = "red";
mypar.classList.add("warning-text");

mypar.id = "hopefully-unique";







