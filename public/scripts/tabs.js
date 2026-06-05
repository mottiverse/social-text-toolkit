// Reusable category tab switching utility
// Use: setupTabs('.tab-btn', categoryId => renderFunc(categoryId))

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
      });
      tab.classList.add(...activeClasses);
      tab.classList.remove(...inactiveClasses);
      onCategoryChange(tab.dataset.category);
    });
  });
};
