const items = document.querySelectorAll(".gallery-item");

const resetItems = () => {
  items.forEach((item) => item.classList.remove("active"));
};

const setActive = (index) => {
  resetItems();
  items.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add("active");
    }
  });
};