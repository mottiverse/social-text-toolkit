// Platform compatibility data
export const platforms = {
  instagram: { name: 'Instagram', icon: '📸', bioLimit: 150, nameLimit: 30 },
  tiktok: { name: 'TikTok', icon: '🎵', bioLimit: 80, nameLimit: 24 },
  discord: { name: 'Discord', icon: '💬', nameLimit: 32, bioLimit: 190 },
  twitter: { name: 'Twitter/X', icon: '𝕏', bioLimit: 160, nameLimit: 20 },
  linkedin: { name: 'LinkedIn', icon: '💼', bioLimit: 220, nameLimit: null },
  youtube: { name: 'YouTube', icon: '▶️', bioLimit: 1000, nameLimit: null },
};

export const compatibilityLevels = {
  full: { label: 'Full', color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30', icon: '✓' },
  partial: { label: 'Partial', color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/30', icon: '⚠' },
  limited: { label: 'Limited', color: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900/30', icon: '✗' },
  warning: { label: 'Warning', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30', icon: '⚠' },
};

// Font compatibility data
export const fontCompatibility = {
  'bold': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'italic': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'script': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'partial', youtube: 'full' },
  'bold-script': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'partial', youtube: 'full' },
  'fraktur': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'partial', youtube: 'full' },
  'monospace': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'double-struck': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'partial', youtube: 'full' },
  'circled': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'partial', youtube: 'full' },
  'squared': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'limited', youtube: 'full' },
  'negative-squared': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'limited', youtube: 'full' },
  'regional': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'small-caps': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'upside-down': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'cursive': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'partial', youtube: 'full' },
  'bold-italic': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'partial', youtube: 'full' },
  'gothic': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'partial', youtube: 'full' },
  'fullwidth': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'sans-serif': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'sans-serif-bold': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'sans-serif-italic': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'sans-serif-bold-italic': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'parenthesized': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'partial', youtube: 'full' },
  'strikethrough': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'underline': { instagram: 'full', tiktok: 'full', discord: 'full', twitter: 'full', linkedin: 'full', youtube: 'full' },
  'zalgo': { instagram: 'limited', tiktok: 'limited', discord: 'full', twitter: 'limited', linkedin: 'limited', youtube: 'limited' },
};
