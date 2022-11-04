let shoppingList = document.getElementById('list');
let itemForm = document.addItem;

document.addEventListener('submit', addNewTodo)

axios.get("https://api.vschool.io/janinaalvarez/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const todoItem = response.data[i];
            createTodo(todoItem);
        }
    })
    .catch(error => console.log(error))


function createTodo(todoItem) {
    const listItem = document.createElement('li');
    listItem.innerHTML = '<div>'+todoItem.title+'</div>';
    if (todoItem.completed === true){
        listItem.innerHTML = '<s><div>'+todoItem.title+'<s></div>';
    }
    const imageURL = isValidUrl(todoItem.imgUrl);
    if (imageURL !== false) {
        const image = document.createElement('img');
        image.src = todoItem.imgUrl;
        listItem.appendChild(image);
    }
    shoppingList.appendChild(listItem);
}

function isValidUrl(urlString){
    try { 
        return Boolean(new URL(urlString)); 
    }
    catch(e){ 
        return false; 
    }
}

function addNewTodo(evt) {
    evt.preventDefault();

    const itemValues = {};

    if (itemForm.itemTitle.value !== "") {
        const title = itemForm.itemTitle.value;
        itemValues.title = title;
    }
    if (itemForm.itemPrice.value !== "") {
        const price = itemForm.itemPrice.value;
        itemValues.price = price;
    }
    if (itemForm.itemDescription.value !== "") {
        const description = itemForm.itemDescription.value;
        itemValues.description = description;
    }
    if (itemForm.itemImage.value !== "") {
        const image = itemForm.itemImage.value;
        itemValues.imgUrl = image;
    }
    
    createTodoItem(itemValues);
}

function createTodoItem(itemValues) {
    const newTodo = {...itemValues};

    axios.post("https://api.vschool.io/janinaalvarez/todo", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}



function addItem(evt) {
    evt.preventDefault();

    let newItem = document.addItem.newItem.value;
    document.addItem.newItem.value = '';

    let editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.addEventListener('click', editItem);

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', deleteItem)

    let listItem = document.createElement('li');
    listItem.innerHTML = '<div>'+newItem+'</div>';
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    shoppingList.appendChild(listItem);
}

function deleteItem(evt) {
    let listItem = evt.target.parentElement;
    listItem.remove();
}

function editItem(evt) {
    let editButton = evt.target;
    let listItem = editButton.parentElement;
    let itemText = listItem.firstChild;
    itemText.style.display = 'none';
    editButton.style.display = 'none';

    let editInput = document.createElement('input');

    let saveButton = document.createElement('button');
    saveButton.innerText = 'save';
    saveButton.addEventListener('click', updateItem);

    listItem.insertBefore(saveButton, listItem.firstChild);
    listItem.insertBefore(editInput, listItem.firstChild);

}

function updateItem(evt) {
    let saveButton = evt.target;
    let listItem = saveButton.parentElement;
    let editInput = listItem.firstChild;
    let newText = editInput.value;

    editInput.remove();
    saveButton.remove();

    let itemText = listItem.firstChild;
    itemText.innerText = newText;
    let editButton = listItem.children[1];

    itemText.style.display = 'block';
    editButton.style.display = 'inline';
}