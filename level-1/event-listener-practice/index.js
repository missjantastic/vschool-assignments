let colorSquare = document.getElementById('square');

function changeColor(e){
    if (e.type === 'keydown'){
        console.log(e.key);
        switch(e.key){
            case 'b':
                colorSquare.className = 'blue';
                break;
            case 'r':
                colorSquare.className = 'red';
                break;
            case 'y':
                colorSquare.className = 'yellow';
                break;
            case 'g':
                colorSquare.className = 'green';
                break;
            case 'o':
                colorSquare.className = 'orange';
                break;
            default:
                colorSquare.className = 'pink';
        }
    }else{
        switch(e.type){
            case 'mouseover':
                colorSquare.className = 'blue';
                break;
            case 'mousedown':
                colorSquare.className = 'red';
                break;
            case 'mouseup':
                colorSquare.className = 'yellow';
                break;
            case 'dblclick':
                colorSquare.className = 'green';
                break;
            case 'scroll':
                colorSquare.className = 'orange';
                break;
            case 'mouseleave':
                colorSquare.className = 'pink';
                break;
            default:
                colorSquare.className = 'pink';
        }
    }   
}

colorSquare.addEventListener('mouseover', changeColor);
colorSquare.addEventListener('mousedown', changeColor);
colorSquare.addEventListener('mouseup', changeColor);
colorSquare.addEventListener('dblclick', changeColor);
colorSquare.addEventListener('mouseleave', changeColor);
document.addEventListener('scroll', changeColor);
document.addEventListener('keydown', changeColor);

colorSquare.className = 'pink';