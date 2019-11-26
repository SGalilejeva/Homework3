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

function addElement(parent, id, tag = 'p', content = null, classList = null) {
    const elem = document.createElement(tag);
    elem.id = id;
    if (content) elem.innerText = content;
    elem.classList.add(classList);
    parent.appendChild(elem);
}

addElement(app, "mynewelement", "p", "Lorems");
addElement(app, "mynewelement2", "p", "Lorems");

for (let i = 1; i < 101; i++) {
    addElement(app, "myid" + i, "div", "MyText" + i);
}





