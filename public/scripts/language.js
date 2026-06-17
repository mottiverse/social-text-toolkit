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
  var packs = window.__translations;
  // Use the requested language pack, fall back to English
  var t = packs[lang] || packs['en'] || {};

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
  if (lang === 'en') return; // Default is English, no translation needed

  var t = window.__translations[lang] || window.__translations['en'] || {};

  mutations.forEach(function (mutation) {
    mutation.addedNodes.forEach(function (node) {
      if (node.nodeType !== 1) return;
      if (node.hasAttribute && node.hasAttribute('data-i18n')) {
        var key = node.getAttribute('data-i18n');
        if (t[key]) {
          node.textContent = t[key];
        }
      }
      if (node.querySelectorAll) {
        node.querySelectorAll('[data-i18n]').forEach(function (el) {
          var key = el.getAttribute('data-i18n');
          if (t[key]) {
            el.textContent = t[key];
          }
        });
        node.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
          var key = el.getAttribute('data-i18n-placeholder');
          if (t[key]) {
            el.setAttribute('placeholder', t[key]);
          }
        });
      }
    });
  });
});

function startObserver() {
  observer.observe(document.body, { childList: true, subtree: true });
}
if (document.body) {
  startObserver();
} else {
  document.addEventListener('DOMContentLoaded', startObserver);
}

// Apply translations on DOM ready if language is not English
function applyInitialTranslations() {
  var lang = window.getLanguage();
  if (lang !== 'en') {
    applyTranslations(lang);
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyInitialTranslations);
} else {
  applyInitialTranslations();
}
