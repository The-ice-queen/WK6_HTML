// ===== Dropdown toggle =====
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const feedback = document.getElementById("feedback");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

// ===== Handle item selection =====
const items = dropdownMenu.querySelectorAll("li");
items.forEach(item => {
  item.addEventListener("click", () => {
    const selected = item.getAttribute("data-item");
    feedback.textContent = `You selected: ${selected}`;
    dropdownMenu.classList.remove("show"); // close after selection
  });
});

// ===== Close dropdown when clicking outside =====
window.addEventListener("click", (event) => {
  if (!event.target.matches("#dropdownBtn")) {
    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
    }
  }
});

// ===== Light/Dark Mode Toggle =====
const toggleModeBtn = document.getElementById("toggleModeBtn");

toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleModeBtn.textContent = "☀️ Light Mode";
  } else {
    toggleModeBtn.textContent = "🌙 Dark Mode";
  }
});
