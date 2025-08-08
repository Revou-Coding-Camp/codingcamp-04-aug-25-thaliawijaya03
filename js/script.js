console.log("Hello, World!");

// Array to store todo items
let todoList = [];

// Validate the form inputs before adding a todo
function validateForm() {
    const todoText = document.getElementById('todo-input').value.trim();
    const dueDate = document.getElementById('date-input').value;

    if (todoText === '' || dueDate === '') {
        alert('Please enter a todo item and a due date.');
    } else {
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
    todoList.push(todoItem);
    displayTodos();
    console.log('Todo added:', todoList); 
}

// Display the todo list
function displayTodos() {
    const todoContainer = document.getElementById('todo-list');
    todoContainer.innerHTML = ''; // Clear existing todos

    if (todoList.length === 0) {
        todoContainer.innerHTML = '<p class="text-gray-700">No todos added yet.</p>';
        return;
    }

    todoList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('flex', 'justify-between', 'items-center', 'p-2', 'border-b');

        listItem.innerHTML = `
            <li class="todo-item">
                <span class="text-gray-700 text-xl">${item.task} - (${item.date})</span>
                <button class="delete-btn bg-red-500 text-white px-2 rounded" onclick="deleteTodo(${index})">Delete</button>
            </li>
        `;
        todoContainer.appendChild(listItem);
    });
}

function clearTodos(){
    todoList = []; 
    displayTodos(); 
    console.log('Todos list cleared:');
}

// Delete a todo item
function deleteTodo(index) {
    todoList.splice(index, 1);
    displayTodos();
}