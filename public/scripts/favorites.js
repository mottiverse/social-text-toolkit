// Favorites management (localStorage)
window.getFavorites = function () {
  try {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  } catch (e) {
    // Corrupted data — reset
    localStorage.removeItem('favorites');
    return [];
  }
};

window.isFavorite = function (text) {
  return window.getFavorites().includes(text);
};

window.toggleFavorite = function (text) {
  const favorites = window.getFavorites();
  const idx = favorites.indexOf(text);
  if (idx > -1) {
    favorites.splice(idx, 1);
    window.showToast('Removed from favorites');
  } else {
    favorites.unshift(text);
    window.showToast('Added to favorites');
  }
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      window.showToast('Storage full — removed oldest favorites', true);
      favorites.splice(-5);
      try { localStorage.setItem('favorites', JSON.stringify(favorites)); } catch (e2) {}
    }
  }
  return idx === -1;
};

window.removeFavorite = function (text) {
  const favorites = window.getFavorites();
  const idx = favorites.indexOf(text);
  if (idx > -1) {
    favorites.splice(idx, 1);
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (e) {
      // Silently fail — data is already removed from memory
    }
  }
};
