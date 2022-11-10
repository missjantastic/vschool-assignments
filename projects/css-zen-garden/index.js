const iconArray = [];

// Get icons by ID
const validityHTML = document.getElementById('validity-html');
const validityCSS = document.getElementById('validity-css');
const creativeCommons = document.getElementById('creative-commons');
const accessibility = document.getElementById('accessibility');
const github = document.getElementById('github');

iconArray.push(validityHTML, validityCSS, creativeCommons, accessibility, github);

// Add hover event listener to each icon
for (const icon of iconArray) {
    icon.addEventListener('mouseover', () => {toggleIcon(icon)});
    icon.addEventListener('mouseout', () => {toggleIcon(icon)});
}

// Toggle icon content on hover
function toggleIcon(icon) {
    switch (icon.textContent) {
        case '5':
            icon.textContent = '%';
            break;
        case '%':
            icon.textContent = '5';
            break;
        case '3':
            icon.textContent = '#';
            break;
        case '#':
            icon.textContent = '3';
            break;
        case 'c':
            icon.textContent = 'C';
            break;
        case 'C':
            icon.textContent = 'c';
            break;
        case 'a':
            icon.textContent = 'A';
            break;
        case 'A':
            icon.textContent = 'a';
            break;
        case 'g':
            icon.textContent = 'G';
            break;
        case 'G':
            icon.textContent = 'g';
            break;
    }
}