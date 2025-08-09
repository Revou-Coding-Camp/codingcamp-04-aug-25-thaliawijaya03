console.log("Hello, World!");
let todos = [];

function addTodo() {
    const task = document.getElementById("task").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;

    if (!task || !dueDate) {
        alert("Isi task dan due date!");
        return;
    }

    todos.push({ task, dueDate, status });
    displayTodos();
    clearForm();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}

function displayTodos(list = todos) {
    const table = document.getElementById("todoTable");
    table.innerHTML = "";

    list.forEach((todo, index) => {
        table.innerHTML += `
            <tr class="border-b">
                <td class="px-4 py-2">${todo.task}</td>
                <td class="px-4 py-2">${todo.dueDate}</td>
                <td class="px-4 py-2">${todo.status}</td>
                <td class="px-4 py-2">
                    <button onclick="deleteTodo(${index})" class="bg-red-500 text-white px-2 py-1 rounded">Hapus</button>
                </td>
            </tr>
        `;
    });
}

function clearForm() {
    document.getElementById("task").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("status").value = "Pending";
}

// Filter function
function applyFilter() {
    const filterTask = document.getElementById("filterTask").value.toLowerCase();
    const filterDate = document.getElementById("filterDate").value;
    const filterStatus = document.getElementById("filterStatus").value;

    const filtered = todos.filter(todo => {
        const matchTask = todo.task.toLowerCase().includes(filterTask);
        const matchDate = filterDate ? todo.dueDate === filterDate : true;
        const matchStatus = filterStatus ? todo.status === filterStatus : true;

        return matchTask && matchDate && matchStatus;
    });

    displayTodos(filtered);
}

// Reset filter
function resetFilter() {
    document.getElementById("filterTask").value = "";
    document.getElementById("filterDate").value = "";
    document.getElementById("filterStatus").value = "";
    displayTodos();
}