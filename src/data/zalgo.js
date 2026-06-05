// Zalgo/Glitch Text — combining diacritical marks for corrupted text effect

// Combining marks that go above characters
const marksAbove = [
  '\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305',
  '\u0306', '\u0307', '\u0308', '\u0309', '\u030A', '\u030B',
  '\u030C', '\u030D', '\u030E', '\u030F', '\u0310', '\u0311',
  '\u0312', '\u0313', '\u0314', '\u0315',
  '\u0334', '\u0335', '\u0336', '\u0337', '\u0338',
  '\u035B', '\u035C', '\u035D', '\u035E',
];

// Combining marks that go below characters
const marksBelow = [
  '\u0316', '\u0317', '\u0318', '\u0319', '\u031A', '\u031B',
  '\u031C', '\u031D', '\u031E', '\u031F',
  '\u0320', '\u0321', '\u0322', '\u0323', '\u0324', '\u0325',
  '\u0326', '\u0327', '\u0328', '\u0329', '\u032A',
  '\u032B', '\u032C', '\u032D', '\u032E', '\u032F', '\u0330',
  '\u0331', '\u0332', '\u0333',
];

// Combining marks that go through/middle
const marksThrough = [
  '\u0339', '\u033A', '\u033B', '\u033C', '\u033D', '\u033E',
  '\u033F', '\u0340', '\u0341', '\u0342', '\u0343',
  '\u0344', '\u0345', '\u0346', '\u0347', '\u0348',
  '\u0349', '\u034A', '\u034B', '\u034C', '\u034D',
];

function randomMarks(arr, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return result;
}

export const intensityLevels = [
  { id: 'light', name: 'Light', above: 1, below: 0, through: 0 },
  { id: 'medium', name: 'Medium', above: 2, below: 1, through: 0 },
  { id: 'heavy', name: 'Heavy', above: 4, below: 2, through: 1 },
  { id: 'extreme', name: 'Extreme', above: 7, below: 3, through: 2 },
];

export function zalgoText(text, intensity) {
  const level = intensityLevels.find(l => l.id === intensity) || intensityLevels[0];
  let result = '';
  for (const ch of text) {
    if (ch === ' ' || ch === '\n') {
      result += ch;
      continue;
    }
    let zalgoCh = ch;
    zalgoCh += randomMarks(marksAbove, level.above).join('');
    zalgoCh += randomMarks(marksThrough, level.through).join('');
    zalgoCh += randomMarks(marksBelow, level.below).join('');
    result += zalgoCh;
  }
  return result;
}
