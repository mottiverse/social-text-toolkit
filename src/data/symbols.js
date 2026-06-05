// Symbol categories for the Symbol Library

export const symbolCategories = [
  {
    id: 'hearts',
    name: 'Hearts',
    icon: '\u2764\uFE0F',
    symbols: [
      '\u2764\uFE0F', '\uD83D\uDC95', '\uD83D\uDC96', '\uD83D\uDC97', '\uD83D\uDC93',
      '\uD83D\uDC9E', '\uD83D\uDC9D', '\uD83D\uDC9B', '\uD83D\uDC98', '\uD83D\uDCF7',
      '\uD83D\uDC9C', '\uD83D\uDC94', '\uD83D\uDC9A', '\uD83E\uDE77', '\uD83D\uDDA4',
      '\uD83E\uDD0D', '\u2763\uFE0F', '\uD83D\uDC8B', '\u2665\uFE0F', '\u2661',
      '\uD83D\uDE18', '\uD83E\uDE17', '\uD83D\uDC9F',
    ],
  },
  {
    id: 'stars',
    name: 'Stars',
    icon: '\u2728',
    symbols: [
      '\u2728', '\u2B50', '\u2605', '\u2606', '\uD83D\uDCAB',
      '\u2721\uFE0F', '\u2726', '\u2727', '\u22C6', '\u00B7',
      '\u2022', '\u25CF', '\u25CB', '\u2734', '\u2736',
      '\u2735', '\u2737', '\u2728', '\uD83C\uDF1F', '\uD83C\uDF20',
      '\u2733', '\u2731', '\u2732', '\u2730',
    ],
  },
  {
    id: 'arrows',
    name: 'Arrows',
    icon: '\u27A1\uFE0F',
    symbols: [
      '\u2192', '\u2190', '\u2191', '\u2193', '\u2197',
      '\u2198', '\u2199', '\u2196', '\u27A1\uFE0F', '\u27A4',
      '\u279C', '\u2B05', '\u27A2', '\u2B06', '\u2B07',
      '\u21BA', '\u21BB', '\u27F5', '\u27F6', '\u27F7',
      '\u21D2', '\u21D0', '\u21D1', '\u21D3', '\u2933',
    ],
  },
  {
    id: 'flowers',
    name: 'Flowers',
    icon: '\uD83C\uDF38',
    symbols: [
      '\uD83C\uDF38', '\uD83C\uDF39', '\uD83C\uDF3B', '\uD83C\uDF3C', '\uD83C\uDF37',
      '\uD83D\uDC90', '\uD83C\uDF3F', '\uD83C\uDF40', '\u2618\uFE0F', '\uD83C\uDF31',
      '\uD83C\uDF3E', '\uD83D\uDC8E', '\uD83C\uDF43', '\uD83C\uDF41', '\uD83C\uDF42',
      '\uD83C\uDF44', '\uD83C\uDF3A', '\uD83C\uDF4A', '\uD83C\uDF4B', '\uD83C\uDF4C',
      '\uD83C\uDF34', '\uD83C\uDF35',
    ],
  },
  {
    id: 'music',
    name: 'Music',
    icon: '\uD83C\uDFB5',
    symbols: [
      '\uD83C\uDFB5', '\uD83C\uDFB6', '\uD83C\uDFBC', '\u266A', '\u266B',
      '\u266C', '\uD83D\uDD0A', '\uD83D\uDD09', '\uD83D\uDD08', '\uD83C\uDFA4',
      '\uD83C\uDFA7', '\uD83D\uDCFB', '\uD83C\uDFB5', '\uD83C\uDFB6', '\uD83C\uDF99',
      '\uD83C\uDF9B', '\uD83C\uDF9C', '\uD83C\uDF9D', '\uD83C\uDF9E', '\uD83C\uDFB7',
    ],
  },
  {
    id: 'hands',
    name: 'Hands',
    icon: '\uD83D\uDC4B',
    symbols: [
      '\uD83D\uDC4B', '\uD83E\uDD1D', '\uD83D\uDC4D', '\uD83D\uDC4E', '\u270C\uFE0F',
      '\uD83E\uDD1E', '\uD83E\uDD1F', '\uD83E\uDD18', '\uD83D\uDC4C', '\uD83E\uDD19',
      '\uD83D\uDCAA', '\uD83D\uDE4F', '\uD83D\uDE4C', '\uD83E\uDD1A', '\uD83E\uDD1B',
      '\uD83D\uDC4F', '\uD83D\uDC90', '\uD83E\uDD1C', '\uD83E\uDDD1', '\uD83E\uDDD2',
    ],
  },
  {
    id: 'shapes',
    name: 'Shapes',
    icon: '\u2B1B',
    symbols: [
      '\u25CF', '\u25CB', '\u25A0', '\u25A1', '\u25B2',
      '\u25B3', '\u25BC', '\u25BD', '\u2666', '\u25C6',
      '\u2605', '\u2606', '\u25AA', '\u25AB', '\u25CF',
      '\u25CB', '\u25A0', '\u25A1', '\u25B6', '\u25C0',
      '\u2B1B', '\u2B1C', '\u2B22', '\u2B21', '\u25C8',
    ],
  },
  {
    id: 'decorations',
    name: 'Decorations',
    icon: '\u273F\uFE0F',
    symbols: [
      '\u273F\uFE0F', '\u2740', '\u2741', '\u2742', '\u2747',
      '\u273F', '\u2748', '\u2749', '\u2933', '\u2042',
      '\u2726', '\u2727', '\u25E6', '\u02DA', '\u2746',
      '\u2740', '\u2736', '\u2737', '\u2756', '\u2757',
      '\u274B', '\u2734', '\u2735', '\u2742',
    ],
  },
];

/**
 * Search symbols across all categories.
 * @param {string} query - Search query (e.g. "heart", "star")
 * @returns {Array} Matching symbols with their category info
 */
export function searchSymbols(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results = [];
  for (const category of symbolCategories) {
    // Match by category name
    if (category.name.toLowerCase().includes(q) || category.id.includes(q)) {
      for (const symbol of category.symbols) {
        results.push({ symbol, category: category.id, categoryName: category.name });
      }
    }
  }
  return results;
}
