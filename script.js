function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const themeIcon = document.getElementById("theme-icon");
  const isDark = document.body.classList.contains("dark-mode");

  // Optional: Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Emoji switching
  if (isDark) {
    themeIcon.textContent = "🌙";
  } else {
    themeIcon.textContent = "☀️";
  }
}

// Check for saved user preference on load
window.onload = function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById("theme-icon").textContent = "🌙";
  }
}
