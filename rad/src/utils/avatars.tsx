const names = [
  'alexa.svg',
  'emily.svg',
  'eric.svg',
  'jon.svg',
  'kyle.svg',
  'sam.svg',
  'sarah.svg',
  'sonia.svg',
  'eli.svg',
  'steve.svg',
];

export const avatars = () => names[Math.floor(Math.random() * Math.floor(names.length))];
