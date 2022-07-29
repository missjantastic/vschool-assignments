const clickTracker = document.getElementById('clickTracker');
let displayClicks = document.getElementById('displayClicks');


if(!localStorage.clickCount){
    localStorage.setItem('clickCount', 0);
}else{
    displayClicks.textContent = `Total Clicks: ${localStorage.clickCount}`;
}

clickTracker.addEventListener('click', trackClicks);


function trackClicks(){
    localStorage.clickCount++;
    displayClicks.textContent = `Total Clicks: ${localStorage.clickCount}`;
}
