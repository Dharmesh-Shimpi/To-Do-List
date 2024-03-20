// Array to store tasks
// let tasks = [];

// // Function to render tasks
// function renderTasks() {
//     const tasksContainer = document.querySelector('.tasks');
//     tasksContainer.innerHTML = '';
//     console.log(tasks.length)
//     tasks.forEach((task, index) => {
//         const taskDiv = document.createElement('div');
//         taskDiv.classList.add('task-item');
//         console.log(task);
//         // taskDiv.innerHTML = `
//         //     <input type="radio" class="checkbox" id="task${index}" ${task.completed ? 'checked' : ''}, onclick= "(event) => checked(event.target.id)">   
//         //     <label for="task${index}" class="task-label">${task.text}</label>
//         //     <button class="delete-btn" onclick="deleteTask(${index})">
//         //         <i class="fas fa-trash-alt"></i>
//         //     </button>
//         // `;
//         const radio = document.createElement('input');
//         radio.type = 'radio';
//         radio.classList.add('checkbox');
//         taskDiv.appendChild(radio);
//         radio.addEventListener('click', (event) => {
//             if (event.target.checked) {
//                 tasks[currentTaskIndex].completed = true;
//             } else {
//                 tasks[currentTaskIndex].completed = false;
//             }
//         // })
//         // const label = document.createElement('label');
//         // label.
//         // label.classList.add('task-label');
//         // taskDiv.appendChild(label);

//         // const deleteBtn = document.createElement('button');
//         // deleteBtn.classList.add('delete-btn');
//         // taskDiv.appendChild(deleteBtn);
//         // deleteBtn.textContent = '<i class="fas fa-trash-alt"></i>';
//         // Create the input element
//         const input = document.createElement('input');
//         input.type = 'radio';
//         input.classList.add('checkbox');
//         input.id = `task${index}`;
//         if (task.completed) {
//             input.checked = true;
//         }
//         // Add event listener to the input element
//         input.addEventListener('click', (event) => checked(event.target.id));

//         // Create the label element
//         const label = document.createElement('label');
//         label.htmlFor = `task${index}`;
//         label.classList.add('task-label');
//         label.textContent = task.text;

//         // Create the button element
//         const button = document.createElement('button');
//         button.classList.add('delete-btn');
//         button.addEventListener('click', () => deleteTask(index));
//         const icon = document.createElement('i');
//         icon.classList.add('fas', 'fa-trash-alt');
//         button.appendChild(icon);

//         // Create the task container div
//         const taskDiv = document.createElement('div');
//         taskDiv.classList.add('task-item');
//         taskDiv.appendChild(input);
//         taskDiv.appendChild(label);
//         taskDiv.appendChild(button);

//         // Append the task container to the tasks container
//         tasksContainer.appendChild(taskDiv);

//     });

//     updateTaskCounter();
// });
// }
let tasks = []; // Assuming this is defined elsewhere in your code


// Function to render tasks
function renderTasks(tasks) {

    const tasksContainer = document.querySelector('.tasks');
    tasksContainer.innerHTML = '';

    tasks.forEach((task, index) => {
        // Create the input element
        const input = document.createElement('i');
        input.classList.add('checkbox',"fa-regular", "fa-circle");
        input.id = `task${index}`;
        if (task.completed) {
            input.checked = true;
            input.classList.remove('fa-circle');
            input.classList.add('fa-check-circle');
        }
        // Add event listener to the input element
        input.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            if (tasks[index].completed) {
                input.classList.remove('fa-circle');
                input.classList.add('fa-check-circle');
            } else {
                input.classList.remove('fa-check-circle');
                input.classList.add('fa-circle');
            }
            renderTasks(tasks); // Update the UI after task completion status changes
        });

        // label element
        const label = document.createElement('label');
        label.htmlFor = `task${index}`;
        label.classList.add('task-label');
        label.textContent = task.text;

        //Delete btn
        
        const icon = document.createElement('i');
        icon.addEventListener('click', () => deleteTask(index));
        icon.classList.add('fas', 'fa-trash-alt', 'icon-style', 'delete-icon');

        // task container div
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-item', 'input-style');
        taskDiv.appendChild(input);
        taskDiv.appendChild(label);
        taskDiv.appendChild(icon);

        // Append the task container to the tasks container
        tasksContainer.appendChild(taskDiv);
    });

    updateTaskCounter();
}
// Function to update task counter
function updateTaskCounter() {
    const taskCounter = document.querySelector('.task-counter');
    const incompleteTasks = tasks.filter(task => !task.completed).length;
    taskCounter.textContent = incompleteTasks;
}

// Function to add new task
function addTodo() {
    const input = document.querySelector('.todo-input');
    const text = input.value.trim();

    if (text !== '') {
        const newTask = {
            text: text,
            completed: false
        };
        tasks.push(newTask);
        renderTasks(tasks);
        input.value = '';
    }
    renderTasks(tasks);
}

// document.
//     if (b.checked) {
//         b.checked = false;
//     } else {
//         b.checked = true;
//     }
//     if (b.checked) {
//         tasks[currentTaskIndex].completed = true;
//     } else {
//         tasks[currentTaskIndex].completed = false;
//     }
//     renderTasks();
// })
function checked(id) {
    console.log(id)
}


// Function to delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks(tasks);
}

// Function to complete all tasks
function completeAll() {
    tasks.forEach(task => task.completed = true);
    renderTasks(tasks);
}

// Function to clear completed tasks
function clearComplete() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks(tasks);
}

// Function to filter tasks - All
function allList() {
    renderTasks(tasks);
}

// Function to filter tasks - Incomplete
function incomplete() {
    const newArray = [...tasks]
    const incompleteTasks = newArray.filter(task => !task.completed);
// const completedTasks = tasks.filter(task => task.completed);
    renderTasks(incompleteTasks);
}

// Function to filter tasks - Completed
function completed() {
    console.log(tasks.length)
    const newArray = [...tasks]
    const completedTasks = newArray.filter(task => task.completed);
    // const incompleteTasks = tasks.filter(task => !task.completed);
    // tasks = completedTasks.concat(incompleteTasks);
    renderTasks(completedTasks);
}
// Add event listener to todo button
const todoButton = document.querySelector('.todo-button');
todoButton.addEventListener('click', addTodo);

// Add event listener to input field to detect "Enter" key press
const todoInput = document.querySelector('.todo-input');
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
// Initial rendering
renderTasks(tasks);
