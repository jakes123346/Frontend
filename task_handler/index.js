function addTask() {
    const taskInput = document.getElementById("task");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create list item
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
        <span>${taskValue}</span>
        <div>
            <button class="btn btn-success btn-sm me-2" onclick="markDone(this)">Done</button>
            <button class="btn btn-danger btn-sm" onclick="removeTask(this)">Remove</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function markDone(button) {
    const li = button.closest("li");

    li.classList.add("done-task");
    button.classList.add("done-btn");
    button.disabled = true;

    showNotification("Task marked as done!");
}

function removeTask(button) {
    const li = button.closest("li");
    li.remove();
}

function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.remove("d-none");

    setTimeout(() => {
        notification.classList.add("d-none");
    }, 2000);
}
