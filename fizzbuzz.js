console.log("Running my FIZZ BUZZ!");

function main() {
    console.log("Running Main");
    const app = document.querySelector('#app');

    //add a new div inside app element
    const newDiv = document.createElement('div');
    newDiv.innerText = "I am a new div";
    app.appendChild(newDiv);

    app.appendChild(document.createElement('p'));

    const mypar = app.querySelector('p');
    mypar.innerText = "Lorem Ipsum";
    // mypar.style.backgroundColor = "red";
    mypar.classList.add("warning-text");
    mypar.classList.add("bold-text");
    mypar.id = "hopefully-unique";
}





