
document.addEventListener("DOMContentLoaded", () => {

  // Select the form
  const form = document.getElementById("create-task-form");

  // Add event listener to the form
  form.addEventListener("submit", (event) => {

    // Prevent page from refreshing
    event.preventDefault();

    // Get the task entered by the user
    const task = document.getElementById("new-task-description").value;

    // Call buildToDo function
    buildToDo(task);

  });

  // Create a function to build the task
  function buildToDo(task) {

    // Create a new li element
    const li = document.createElement("li");

    // Add the task as text
    li.textContent = task;

    // Select the task list
    const taskList = document.getElementById("tasks");

    // Append the new task to the list
    taskList.appendChild(li);

  }

});
