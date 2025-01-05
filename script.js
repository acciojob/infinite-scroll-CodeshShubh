document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("infi-list");

  // Function to add new items to the list
  const addItems = (count = 10) => {
    for (let i = 0; i < count; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${list.children.length + 1}`;
      list.appendChild(listItem);
    }
  };

  // Add initial items
  addItems(20);

  // Infinite scroll implementation
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      // Add new items when the user scrolls near the bottom
      addItems(10);
    }
  });
});
