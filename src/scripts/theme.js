// Theme toggle script - runs immediately to prevent flash
(function () {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = stored === 'dark' || (!stored && prefersDark);

  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
})();

// Toggle function - called by ThemeToggle component
window.toggleTheme = function () {
  const isDark = document.documentElement.classList.toggle('dark');
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};
