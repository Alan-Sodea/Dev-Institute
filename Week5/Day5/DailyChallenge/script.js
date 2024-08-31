// script.js

const tasks = [];
let taskId = 0;

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        return; // Do nothing if the input is empty
    }

    // Create a new task object
    const task = {
        task_id: taskId++,
        text: taskText,
        done: false
    };
    tasks.push(task);
    renderTasks();
    taskInput.value = ''; // Clear the input field
}

function renderTasks() {
    const listTasks = document.querySelector('.listTasks');
    listTasks.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task-item';
        taskElement.dataset.taskId = task.task_id;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.done;
        checkbox.addEventListener('change', () => doneTask(task.task_id));
        
        const label = document.createElement('label');
        label.textContent = task.text;
        label.style.textDecoration = task.done ? 'line-through' : 'none';
        label.style.color = task.done ? 'red' : 'black';
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        deleteButton.addEventListener('click', () => deleteTask(task.task_id));

        taskElement.appendChild(checkbox);
        taskElement.appendChild(label);
        taskElement.appendChild(deleteButton);

        listTasks.appendChild(taskElement);
    });
}

function doneTask(taskId) {
    const task = tasks.find(t => t.task_id === taskId);
    if (task) {
        task.done = !task.done; // Toggle the done property
        renderTasks();
    }
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(t => t.task_id === taskId);
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
}
