const form = document.getElementById("create-task-form");
const input = document.getElementById("new-task-description");
const tasks = document.getElementById("tasks");

// Listen for form submission
form.addEventListener("submit", function (event) {
  // Stop the page from refreshing
  event.preventDefault();

  // Create a new list item
  const li = document.createElement("li");

  // Get the user's input
  li.textContent = input.value;

  // Add the task to the list
  tasks.appendChild(li);

  // Clear the input
  input.value = "";
});
