// Copy to clipboard with fallback
window.copyToClipboard = async function (text) {
  try {
    await navigator.clipboard.writeText(text);
    window.showToast('Copied!');
    window.saveToHistory(text);
    announceToScreenReader('Copied to clipboard');
    return true;
  } catch (err) {
    // Fallback for older browsers and non-HTTPS
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      window.showToast('Copied!');
      window.saveToHistory(text);
      announceToScreenReader('Copied to clipboard');
      return true;
    } catch (e) {
      window.showToast('Failed to copy', true);
      announceToScreenReader('Copy failed');
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
};

function announceToScreenReader(message) {
  const announcer = document.getElementById('sr-announce');
  if (announcer) {
    announcer.textContent = message;
  }
}

// Toast notification
let toastTimer = null;
window.showToast = function (message, isError = false) {
  // Remove existing toast
  const existing = document.getElementById('toast');
  if (existing) existing.remove();
  if (toastTimer) clearTimeout(toastTimer);

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.className = 'toast ' + (isError ? 'bg-red-500 text-white' : 'bg-brand-500 text-white dark:bg-brand-400 dark:text-gray-900');
  toast.textContent = message;
  document.body.appendChild(toast);

  toastTimer = setTimeout(() => {
    toast.remove();
    toastTimer = null;
  }, 2000);
};

// Save to copy history (localStorage)
window.saveToHistory = function (text) {
  try {
    const history = JSON.parse(localStorage.getItem('copyHistory') || '[]');
    // Avoid duplicates
    const idx = history.indexOf(text);
    if (idx > -1) history.splice(idx, 1);
    history.unshift(text);
    // Keep max 20 items
    if (history.length > 20) history.pop();
    localStorage.setItem('copyHistory', JSON.stringify(history));
  } catch (e) {
    // localStorage full or unavailable — clear oldest entries and retry
    if (e.name === 'QuotaExceededError') {
      try {
        const history = JSON.parse(localStorage.getItem('copyHistory') || '[]');
        history.splice(-5); // remove 5 oldest
        localStorage.setItem('copyHistory', JSON.stringify(history));
      } catch (e2) { /* localStorage broken */ }
    }
  }
};

// Get copy history
window.getCopyHistory = function () {
  try {
    return JSON.parse(localStorage.getItem('copyHistory') || '[]');
  } catch (e) {
    return [];
  }
};
