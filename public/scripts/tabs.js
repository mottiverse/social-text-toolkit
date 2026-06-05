// Reusable category tab switching utility with ARIA support

window.setupCategoryTabs = function (selector, onCategoryChange) {
  const tabs = document.querySelectorAll(selector);
  if (!tabs.length) return;

  const activeClasses = ['bg-brand-500', 'text-white', 'dark:bg-brand-400', 'dark:text-gray-900'];
  const inactiveClasses = ['border', 'border-[var(--border-color)]', 'text-[var(--text-secondary)]'];

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove(...activeClasses);
        if (!t.classList.contains('border')) {
          t.classList.add(...inactiveClasses);
        }
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add(...activeClasses);
      tab.classList.remove(...inactiveClasses);
      tab.setAttribute('aria-selected', 'true');
      onCategoryChange(tab.dataset.category);
    });
  });

  // Set initial aria-selected on first tab
  if (tabs.length > 0) {
    tabs[0].setAttribute('aria-selected', 'true');
  }
};
