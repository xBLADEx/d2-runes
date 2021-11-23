const RUNES = {
  el: 'El',
  eld: 'Eld',
  tir: 'Tir',
  nef: 'Nef',
  eth: 'Eth',
  ith: 'Ith',
  tal: 'Tal',
  ral: 'Ral',
  ort: 'Ort',
  thul: 'Thul',
  amn: 'Amn',
  sol: 'Sol',
  shael: 'Shael',
  dol: 'Dol',
  hel: 'Hel',
  io: 'Io',
  lum: 'Lum',
  ko: 'Ko',
  fal: 'Fal',
  lem: 'Lem',
  pul: 'Pul',
  um: 'Um',
  mal: 'Mal',
  ist: 'Ist',
  gul: 'Gul',
  vex: 'Vex',
  ohm: 'Ohm',
  lo: 'Lo',
  sur: 'Sur',
  ber: 'Ber',
  jah: 'Jah',
  cham: 'Cham',
  zod: 'Zod',
};

const GEMS = {
  amethyst: {name: 'Amethyst', type: ['Chipped', 'Flawed', 'Normal', 'Flawless', 'Perfect']},
  diamond: {name: 'Diamond', type: ['Chipped', 'Flawed', 'Normal', 'Flawless', 'Perfect']},
  emerald: {name: 'Emerald', type: ['Chipped', 'Flawed', 'Normal', 'Flawless', 'Perfect']},
  ruby: {name: 'Ruby', type: ['Chipped', 'Flawed', 'Normal', 'Flawless', 'Perfect']},
  sapphire: {name: 'Sapphire', type: ['Chipped', 'Flawed', 'Normal', 'Flawless', 'Perfect']},
  topaz: {name: 'Topaz', type: ['Chipped', 'Flawed', 'Normal', 'Flawless', 'Perfect']},
};

// Select a rune
const runes = document.querySelector('#runes');
Object.entries(RUNES).map(rune => {
  const option = document.createElement('option');
  option.value = rune[0];
  option.innerText = rune[1];
  runes.appendChild(option);
});
runes.addEventListener('change', (e) => {
  console.log(e.target.value);
});

function upgradeCost() {
  
}
