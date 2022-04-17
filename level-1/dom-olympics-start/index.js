
//header
const h1 = document.createElement('h1');
h1.textContent = 'JavaScript made this!';
h1.className = 'header';
document.getElementById('header').appendChild(h1);

//subheader
const subHeader = document.createElement("h3");
subHeader.innerHTML = '<span class="name">Janina</span> wrote the JavaScript';
subHeader.style.textAlign = 'center';
document.getElementById('header').appendChild(subHeader)

//changing message text
let messages = document.getElementsByClassName('message');

messages[0].textContent = "It was standing on a trap door, which means it wasn't there by accident. It's guarding something."
messages[1].textContent = "Guarding something?"
messages[2].textContent = "That's right. Now, if you don’t mind, I am going to bed, before you come up with another clever idea to get us killed, or worse, expelled!"
messages[3].textContent = "You need to sort out your priorities";

//clear message text
let clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {
    while (messages.length > 0){
        messages[0].remove();
    }
})