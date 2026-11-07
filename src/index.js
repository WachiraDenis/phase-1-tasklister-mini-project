
document.addEventListener("DOMContentLoaded", () => {

  // 1. Select the form
  const form = document.getElementById("create-task-form");

  // 2. Listen for form submission
  form.addEventListener("submit", function(event) {

    // 3. Prevent the default page refresh
    event.preventDefault();

    // 4. Get the task entered by the user
    const taskInput = document.getElementById("new-task-description");
    const task = taskInput.value.trim();

    // 5. Check that the input is not empty
    if (task === "") {
      return;
    }

    // 6. Build and display the task
    buildToDo(task);

    // 7. Clear the input field
    taskInput.value = "";

  });

  // Function to create and display a task
  function buildToDo(task) {

    // Create a new list item
    const li = document.createElement("li");

    // Add the task description
    li.textContent = task;

    // Select the task list
    const taskList = document.getElementById("tasks");

    // Append the new task to the list
    taskList.appendChild(li);

  }

});
