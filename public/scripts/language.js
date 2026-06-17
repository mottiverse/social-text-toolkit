// Language management script — mirrors theme.js pattern
(function () {
  const stored = localStorage.getItem('lang');
  const lang = stored || 'en';
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
})();

// Get current language
window.getLanguage = function () {
  return document.documentElement.lang || 'en';
};

// Set language and update page
window.setLanguage = function (lang) {
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
  // Dispatch event for pages that need to re-render
  window.dispatchEvent(new CustomEvent('language-change', { detail: { lang } }));
};

// Apply translations to all [data-i18n] and [data-i18n-placeholder] elements
function applyTranslations(lang) {
  if (!window.__translations) return;
  var t = window.__translations;

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });
}

// Observe dynamically added elements (MutationObserver)
var observer = new MutationObserver(function (mutations) {
  if (!window.__translations) return;
  var lang = window.getLanguage();
  if (lang === 'en') return; // Default is English

  mutations.forEach(function (mutation) {
    mutation.addedNodes.forEach(function (node) {
      if (node.nodeType !== 1) return;
      if (node.hasAttribute && node.hasAttribute('data-i18n')) {
        var key = node.getAttribute('data-i18n');
        if (window.__translations[key]) {
          node.textContent = window.__translations[key];
        }
      }
      if (node.querySelectorAll) {
        node.querySelectorAll('[data-i18n]').forEach(function (el) {
          var key = el.getAttribute('data-i18n');
          if (window.__translations[key]) {
            el.textContent = window.__translations[key];
          }
        });
        node.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
          var key = el.getAttribute('data-i18n-placeholder');
          if (window.__translations[key]) {
            el.setAttribute('placeholder', window.__translations[key]);
          }
        });
      }
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });

// Apply translations on DOM ready if language is not English
document.addEventListener('DOMContentLoaded', function () {
  var lang = window.getLanguage();
  if (lang !== 'en') {
    applyTranslations(lang);
  }
});
