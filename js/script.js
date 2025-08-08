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
function addTodo(task, dueDate) {
    const todoItem = {
        task: task,
        dueDate: dueDate
    };
    todoList.push(todoItem);
    console.log('Todo added:', todoItem); 
}