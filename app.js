const list = document.getElementById('list');

function addItem() {
    const todoItme = document.getElementById('todo_items');
    const database = firebase.database().ref('todos')
    const key = database.push().key
    const todo = {
        value: todoItme.value,
        key: key
    }
    database.push(todo)
}

firebase.database().ref('todos').on('child_added', function (data) {
    //creating li
    const li = document.createElement('li');
    const liText = document.createTextNode(data.val().value);
    li.appendChild(liText);

    //creating delete button
    var button = document.createElement('button');
    var buttonText = document.createTextNode('Delete');
    button.setAttribute('onclick', "deleteItem(this)");
    button.setAttribute('id', data.val().key)
    button.appendChild(buttonText);
    //edit btn
    var editBtn = document.createElement('button');
    var editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute('onclick', 'editBtn(this)')
    editBtn.setAttribute('id', data.val().key)


    li.appendChild(editBtn);
    li.appendChild(button);
    list.appendChild(li);
    



    
})
todoItme.value = ''


function deleteItem(e) {
    console.log(e.id)
    firebase.database().ref(`todos/  ${e.id}`).remove();
    e.parentNode.remove()
}

function deleteAll() {
    list.innerHTML = ''
}

function editBtn(e) {
    console.log(e.id)
    // const val = e.parentNode.firstChild.nodeValue;
    // const editValue = prompt('Enter Edit Value', val);
    // e.parentNode.firstChild.nodeValue = editValue;
}

