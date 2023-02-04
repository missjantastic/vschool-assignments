const addForm = document.add;
const subForm = document.subtract;
const mulForm = document.multiply;

addForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    const sum = +addForm.num1.value + +addForm.num2.value;
    const p = document.createElement('p');
    p.textContent = sum;
    addForm.append(p);
})

subForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    const sum = +subForm.num1.value - +subForm.num2.value;
    const p = document.createElement('p');
    p.textContent = sum;
    subForm.append(p);
})

mulForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    const sum = +mulForm.num1.value * +mulForm.num2.value;
    const p = document.createElement('p');
    p.textContent = sum;
    mulForm.append(p);
})