console.log("Hello, World!");

// Array to store todo items
// Each item will be an object with 'task' and 'dueDate' properties
let todoList = [];

// Validate the form inputs before adding a todo
function validateForm() {
    // Gunakan nama variabel unik agar tidak bentrok
    const todoText = document.getElementById('todo-input').value.trim();
    const dueDate = document.getElementById('date-input').value;

    // Check if either input is empty
    if (todoText === '' || dueDate === '') {
        alert('Please enter a todo item and a due date.');
    } else {
        // Add the todo item to the list
        addTodo(todoText, dueDate);

        // Clear the input fields
        document.getElementById('todo-input').value = '';
        document.getElementById('date-input').value = '';
    }
}

// Add a new todo to the list
function addTodo(task, date) {
    const todoItem = {
        task: task, 
        date: date
    };
    // Push the new todo item to the todoList array
    todoList.push(todoItem);
    // Display the updated todo list
    displayTodos();
    // Log the todo list to the console 
    console.log('Todo added:', todoList); 
}

// Display the todo list
function displayTodos() {
    // Get the todo list element from the DOM
    const todoContainer = document.getElementById('todo-list');
    todoContainer.innerHTML = ''; // Clear existing todos

    // Loop through the todoList array and create list items
    if (todoList.length === 0) {
        todoContainer.innerHTML = '<p class="text-gray-700">No todos added yet.</p>';
        return;
    }

    todoList.forEach((item, index) => {
        todoListElement.innerHTML = <span class="text -gray-700 text -xl">${item.task} - (${item.date})</span>;
        const listItem = document.createElement('div');
        listItem.classList.add('flex', 'justify-between', 'items-center', 'p-2', 'border-b');

        listItem.innerHTML = `<li class="todo-item"
<span>${item.task} - ${item.date}</span>
<button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
</li>`;
});
}


// Delete a todo item
function deleteTodo(index) {
    todoList.splice(index, 1);
    displayTodos();
}