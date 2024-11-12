
const items = document.getElementById("products");

new Sortable(items, {
  group: 'shared',
  animation: 150,
  chosenClass: "product-chosen",
  dragClass: "product-drag",
});

const myProducts = document.getElementById("my-products");

new Sortable(myProducts, {
  group: 'shared',
  animation: 150,
  chosenClass: "product-chosen",
  dragClass: "product-drag",
});