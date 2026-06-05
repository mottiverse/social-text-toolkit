// Kaomoji (Japanese-style text emoticons) organized by category

export const kaomojiCategories = [
  {
    id: 'happy',
    name: 'Happy',
    icon: '\u{1F60A}',
    kaomoji: [
      '(\u25CE\u203F\u25CE)',
      '(^_^)',
      '(\u2265\u25E1\u2264)',
      '(\u25CE\u203F\u25CE\u273F)',
      '(\uFF61\u25BD\uFF61)',
      '(\u2022\u1D25\u2022)',
      '(\u02D9\u3297\u02D9)',
      '(\u2022\u0300\u03C9\u2022\u0301)',
      '(\u256F\u203E\u25BD\u203E\uFF09',
      '(*\u2267\u03C9\u2266)',
      '(\u02C6\u25BF\u02C6)',
      '(=\u02C6\u2022\u03C9\u2022\u02C6=)',
      '(\u25CF\u25C9\u25CF)',
      '( \u1D25\u0300\u1D25\u0301 )',
    ],
  },
  {
    id: 'sad',
    name: 'Sad',
    icon: '\u{1F622}',
    kaomoji: [
      '(\u2555_\u2555)',
      '(T_T)',
      '(\u0CA0_\u0CA0)',
      '(;_;)',
      '(\u00AF\u2500\u2500\u00AF\u222B)',
      '( \u1D25\u0304\u1D25\u0304)',
      '(\u2260\u03C9\u2260)',
      '(\uFF65_\uFF65)',
      '(\u0E34\u2022\u0301\u2139\u2022\u0300\u0E34)',
      '(\uFE36_\uFE36)',
      '(\u00B4\uFF65\u03C9\uFF65\u0060)',
      '(\u00B7\u03C9\u00B7)',
      '(\u22EF\u03C9\u22EF)',
    ],
  },
  {
    id: 'love',
    name: 'Love',
    icon: '\u{1F970}',
    kaomoji: [
      '(\u2661_\u2661)',
      '(\u2665_\u2665)',
      '(\u0701\u2665\u03C9\u2665\u0701)',
      '(\u2736\u00B0\uFF65\u03C9\uFF65\u00B0\u2736)',
      '(\u2764\uFE0F\u203E\u250C\u0303\u203E\u2764\uFE0F)',
      '(\uFF61\u03C9\uFF61)',
      '(\u2764\uFE0F\u0304\u1D25\u0304\u2764\uFE0F)',
      '(\u2022\u0304\u1D25\u0304\u2022)',
      '(\u2736\uFE0F\uFF65\u03C9\uFF65\u2736\uFE0F)',
      '(\u2764\uFE0F\u02DA\u03C9\u02DA\u2764\uFE0F)',
      '(\u0E2D\u203E\u1D17\u203E\u0E2D)',
      '(\u2763\uFE0F\u00B4\u03C9\u0060\u2763\uFE0F)',
    ],
  },
  {
    id: 'angry',
    name: 'Angry',
    icon: '\u{1F621}',
    kaomoji: [
      '(\u256C\u00F2\uFE0F\u250F\u00D3\u256C)',
      '(\u0E23\u0CA0\u76D8\u0CA0\u0E23)',
      '(\u0E23\uFF20\u25CF\u2019\u25CF\uFF20\u0E23)',
      '(\uFF08\u2C7C\u25CB\u7CA5\u25CB\u2C7C\uFF09',
      '(\uFF1B\uFF9F\u0414\uFF9F)',
      '(\u00AC_\u00AC)',
      '(\u255C\u25A0\uFF0F\u25A0\u255A)',
      '(\u25B3\u00B0\u25CF\u25B3\u00B0)',
      '(\u0CA0\u0CA0)',
      '(\u0295\u0300\u25C9\u0301\u0295)',
      '(\u2588\u0CA0\u76D8\u0CA0\u2588)',
    ],
  },
  {
    id: 'cute',
    name: 'Cute',
    icon: '\u{1F970}',
    kaomoji: [
      '(\uFF61\u25CE\u203F\u25CE\uFF61)',
      '(\u25CE\u1D17\u25CE\u273F)',
      '(\u1F440\u0303\u1D17\u0303\u1F440)',
      '(\u2022\u1D25\u2022\u273F)',
      '(\u273F\u203E\u1D17\u203E\u273F)',
      '(\u02C6\u1D25\u02C6)',
      '(\uFF65\u03C9\uFF65)',
      '(\u25CF\u03C9\u25CF)',
      '(\u30FD\u1D17\uFF61\u1D17\uFF89',
      '(\u2033\u1D25\u2032\u1D25\u2033)',
      '(=\u03C9=)',
      '(\u25CB\u2742\u25CB)',
      '(\u25C8\u203F\u25C8)',
    ],
  },
  {
    id: 'shrug',
    name: 'Shrug',
    icon: '\u{1F937}',
    kaomoji: [
      '\u00AF\\_(\u30C4)_/\u00AF',
      '\u0303\\_(\u30C4)_/\u0303',
      '\u00AF\\\u3010\u30C4\u3011_/\u00AF',
      '(\u203C\u00B0\u25A1\u00B0)\u203C',
      '\u0304\\\u256F\u00B0\u25CF\u00B0\u2557/\u0304',
      '(\u30CE\u0CA0\u76D8\u0CA0\u30CE)',
      '(\u0E30\u25CE\u0304\u1D25\u0304\u25CE\u0E30)',
      '\u0304\\\u256F\u2500\u2557/\u0304',
      '\u0303\\\u256F\u251C\u273F\u251C\u2557/\u0303',
      '\u0304\\_(\u30C4)_/\u0304\u0644\u0644',
    ],
  },
];

/**
 * Search kaomoji across all categories.
 * @param {string} query - Search query
 * @returns {Array} Matching kaomoji with their category info
 */
export function searchKaomoji(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results = [];
  for (const category of kaomojiCategories) {
    if (category.name.toLowerCase().includes(q) || category.id.includes(q)) {
      for (const kaomoji of category.kaomoji) {
        results.push({ kaomoji, category: category.id, categoryName: category.name });
      }
    }
  }
  return results;
}
