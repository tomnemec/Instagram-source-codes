const todayFilter = document.getElementById("filter-today");
const weekFilter = document.getElementById("filter-week");
const monthFilter = document.getElementById("filter-month");
const container = document.getElementById("users-container");

// Helper function to remove active class from all buttons
function removeActiveClasses() {
  todayFilter.classList.remove("active");
  weekFilter.classList.remove("active");
  monthFilter.classList.remove("active");
}

// Add event listeners for filter items
todayFilter.addEventListener("click", () => {
  removeActiveClasses();
  todayFilter.classList.add("active"); // Add active to button
  container.style.transform = "translateX(410px)"; // Move container for daily view
});

weekFilter.addEventListener("click", () => {
  removeActiveClasses();
  weekFilter.classList.add("active"); // Add active to button
  container.style.transform = "translateX(10px)"; // Move container for weekly view
});

monthFilter.addEventListener("click", () => {
  removeActiveClasses();
  monthFilter.classList.add("active"); // Add active to button
  container.style.transform = "translateX(-400px)"; // Move container for monthly view
});
