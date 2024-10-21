const todayFilter = document.getElementById("filter-today");
const weekFilter = document.getElementById("filter-week");
const monthFilter = document.getElementById("filter-month");
const container = document.getElementById("users-container");

function removeActiveClasses() {
  todayFilter.classList.remove("active");
  weekFilter.classList.remove("active");
  monthFilter.classList.remove("active");
}

todayFilter.addEventListener("click", () => {
  removeActiveClasses();
  todayFilter.classList.add("active"); 
  container.style.transform = "translateX(410px)";
});

weekFilter.addEventListener("click", () => {
  removeActiveClasses();
  weekFilter.classList.add("active"); 
  container.style.transform = "translateX(10px)"; 
});

monthFilter.addEventListener("click", () => {
  removeActiveClasses();
  monthFilter.classList.add("active"); 
  container.style.transform = "translateX(-400px)"; 
});
