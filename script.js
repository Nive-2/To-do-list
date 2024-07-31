function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <div>
                <button onclick="editTask(this)">Edit</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function editTask(button) {
    const li = button.parentNode.parentNode;
    const span = li.querySelector('span');
    const currentTask = span.textContent;

    if (li.classList.contains('editing')) {
        const input = li.querySelector('input');
        span.textContent = input.value;
        button.textContent = 'Edit';
    } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentTask;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'Save';
    }
    li.classList.toggle('editing');
}

function deleteTask(button) {
    const li = button.parentNode.parentNode;
    li.remove();
}
