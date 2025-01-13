//  tarefas simuladas
let tasks = {
    "todo": [],
    "in-progress": [],
    "done": []
};

// aqui é edição de tarefas
let currentColumn = "";
let editingTask = null;

// aqui abre o modal
function openTaskModal(column) {
    currentColumn = column;
    editingTask = null;
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskModal").style.display = "flex";
}

// aqui fechar o modal
function closeTaskModal() {
    document.getElementById("taskModal").style.display = "none";
}

// aqui salva uma nova tarefa 
function saveTask() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;

    if (editingTask) {
        editingTask.title = title;
        editingTask.description = description;
    } else {
        tasks[currentColumn].push({ title, description });
    }

    renderTasks();
    closeTaskModal();
}

// deletar uma tarefa
function deleteTask(column, index) {
    tasks[column].splice(index, 1);
    renderTasks();
}

// renderizar as tarefas no quadro
function renderTasks() {
    ["todo", "in-progress", "done"].forEach(column => {
        const taskList = document.querySelector(`#${column} .task-list`);
        taskList.innerHTML = "";
        tasks[column].forEach((task, index) => {
            const taskElement = document.createElement("div");
            taskElement.className = "task";
            taskElement.innerHTML = `
                <div>
                    <strong>${task.title}</strong>
                    <p>${task.description}</p>
                </div>
                <button onclick="deleteTask('${column}', ${index})">🗑️</button>
            `;
            taskList.appendChild(taskElement);
        });
    });
}


renderTasks();
