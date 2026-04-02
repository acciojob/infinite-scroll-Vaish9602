//your code here!

const list = document.getElementById("infi-list");

let count = 0;

// Function to add items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++count}`;
    list.appendChild(li);
  }
}

// ✅ Add initial 10 items
addItems(10);

// ✅ Infinite scroll logic
list.addEventListener("scroll", () => {
  // Check if scrolled to bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // add 2 more items
  }
});