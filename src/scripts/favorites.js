// Favorites management (localStorage)
window.getFavorites = function () {
  try {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  } catch (e) {
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
  localStorage.setItem('favorites', JSON.stringify(favorites));
  return idx === -1; // returns true if added
};

window.removeFavorite = function (text) {
  const favorites = window.getFavorites();
  const idx = favorites.indexOf(text);
  if (idx > -1) {
    favorites.splice(idx, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
};
