document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        if (taskValue === '') return;

        // Create new task elements
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const span = document.createElement('span');
        const deleteButton = document.createElement('button');

        checkbox.type = 'checkbox';
        span.textContent = taskValue;
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');

        // Append elements to list item
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        // Append list item to task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Event listener for checkbox
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.classList.add('checked');
                taskList.appendChild(li);
                // Play sound
                const audio = new Audio('ding.mp3');
                audio.play();
            } else {
                li.classList.remove('checked');
                // Move item back to the original position if unchecked
                taskList.insertBefore(li, taskList.firstChild);
            }
        });

        // Event listener for delete button
        deleteButton.addEventListener('click', () => {
            li.style.opacity = '0';
            setTimeout(() => {
                li.remove();
            }, 500); // Allow fade-out animation
        });
    });
});
