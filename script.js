document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("infi-list");

  const addItems = (count = 2) => {
    for (let i = 0; i < count; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `item ${list.children.length + 1}`;
      list.appendChild(listItem);
    }
  };

  // Add initial items to the list
  addItems(10);

  // Scroll event listener
  list.addEventListener("scroll", () => {
	  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      addItems(2); // Add 2 more items when reaching the end of the list
    }
  });
});
