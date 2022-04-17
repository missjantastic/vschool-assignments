
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

//set theme names
let themeNames = document.getElementById('theme-drop-down');
themeNames[0].innerText = 'gryffindor';
themeNames[0].value = 'gryffindor';
themeNames[1].innerText = 'slytherin';
themeNames[1].value = 'slytherin';

//add two new themes
let themeThree = document.createElement('option');
themeThree.value = 'ravenclaw';
themeThree.innerText = 'ravenclaw'
let themeFour = document.createElement('option');
themeFour.value = 'hufflepuff';
themeFour.innerText = 'hufflepuff';
themeNames.append(themeThree, themeFour);

//change theme functionality
function changeTheme(e){
    let rightMessages = document.querySelectorAll('.right');
    let leftMessages = document.querySelectorAll('.left');
    for(let i = 0; i < leftMessages.length; i++){
        switch(themeNames.value){
            case 'gryffindor':
                leftMessages[i].style.backgroundColor = '#650000';
                leftMessages[i].style.color = '#E09C09';
                break;
            case 'slytherin':
                leftMessages[i].style.backgroundColor = '#2F751C';
                leftMessages[i].style.color = '#CCCCCC';
                break;
            case 'ravenclaw':
                leftMessages[i].style.backgroundColor = '#1A3956';
                leftMessages[i].style.color = '#FFC18F';
                break;
            case 'hufflepuff':
                leftMessages[i].style.backgroundColor = '#1F1E19';
                leftMessages[i].style.color = '#FF9D0A';
                break;
            default:
                break;
        }
    }
    for(let i = 0; i < rightMessages.length; i++){
        switch(themeNames.value){
            case 'gryffindor':
                rightMessages[i].style.backgroundColor = '#E09C09';
                rightMessages[i].style.color = '#650000';
                break;
            case 'slytherin':
                rightMessages[i].style.backgroundColor = '#CCCCCC';
                rightMessages[i].style.color = '#2F751C';
                break;
            case 'ravenclaw':
                rightMessages[i].style.backgroundColor = '#8E501D';
                rightMessages[i].style.color = '#ABD7FF';
                break;
            case 'hufflepuff':
                rightMessages[i].style.backgroundColor = '#FF9D0A';
                rightMessages[i].style.color = '#1F1E19';
                break;
            default:
                break;
        }
    }
}

themeNames.addEventListener('change', changeTheme);