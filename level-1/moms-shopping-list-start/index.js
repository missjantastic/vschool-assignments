let shoppingList = document.getElementById('list');
let itemForm = document.addItem;

document.addEventListener('submit', addItem)

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