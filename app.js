function addTask() {
    // Get the input element
    const inputElement = document.getElementById('todoInput');

    // Get the value from the input element
    const taskText = inputElement.value;

    // Check if the input is empty
    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item (li) element
    const listItem = document.createElement('li');

    // Create a text node with the task text and append it to the list item
    const textNode = document.createTextNode(taskText);
    listItem.appendChild(textNode);

    // Create a delete button and append it to the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        listItem.remove();
    };
    listItem.appendChild(deleteButton);

    // Add event listener for marking the task as completed
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    // Append the list item to the unordered list (ul)
    const todoList = document.getElementById('todoList');
    todoList.appendChild(listItem);

    // Clear the input field
    inputElement.value = '';
}
