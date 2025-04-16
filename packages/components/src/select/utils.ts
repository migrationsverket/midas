export const options = [
  'Äpple',
  'Banan',
  'Kiwi',
  'Fläder',
  'Nektarin',
  'Vattenmelon',
  'Ananas',
  'Aprikos',
  'Hjortron',
  'Mango',
  'Jordgubbe',
  'Blåbär',
  'Hallon',
  'Björnbär',
  'Körsbär',
  'Persika',
  'Plommon',
  'Druva',
  'Apelsin',
  'Citron',
  'Lime',
  'Kokosnöt',
  'Fikon',
  'Papaya',
  'Guava',
  'Granatäpple',
  'Drakfrukt',
  'Stjärnfrukt',
  'Passionsfrukt',
].map(fruit => ({
  name: fruit,
  id: fruit.toLocaleLowerCase(),
}))

export const optionsWithSections = [
  {
    name: 'Grönsaker',
    children: [
      { name: 'Morot', id: 'morot' },
      { name: 'Broccoli', id: 'broccoli' },
      { name: 'Spenat', id: 'spenat' },
      { name: 'Potatis', id: 'potatis' },
      { name: 'Tomat', id: 'tomat' },
    ],
  },
  {
    name: 'Bär',
    children: [
      { name: 'Jordgubbe', id: 'jordgubbe' },
      { name: 'Blåbär', id: 'blåbär' },
      { name: 'Hallon', id: 'hallon' },
      { name: 'Björnbär', id: 'björnbär' },
    ],
  },
  {
    name: 'Citrusfrukter',
    children: [
      { name: 'Apelsin', id: 'apelsin' },
      { name: 'Citron', id: 'citron' },
      { name: 'Lime', id: 'lime' },
      { name: 'Grapefrukt', id: 'grapefrukt' },
    ],
  },
  {
    name: 'Tropiska Frukter',
    children: [
      { name: 'Ananas', id: 'ananas' },
      { name: 'Mango', id: 'mango' },
      { name: 'Papaya', id: 'papaya' },
      { name: 'Guava', id: 'guava' },
    ],
  },
  {
    name: 'Stenfrukter',
    children: [
      { name: 'Persika', id: 'persika' },
      { name: 'Plommon', id: 'plommon' },
      { name: 'Körsbär', id: 'körsbär' },
      { name: 'Aprikos', id: 'aprikos' },
    ],
  },
  {
    name: 'Meloner',
    children: [
      { name: 'Vattenmelon', id: 'vattenmelon' },
      { name: 'Cantaloupe', id: 'cantaloupe' },
      { name: 'Honungsmelon', id: 'honungsmelon' },
    ],
  },
  {
    name: 'Exotiska Frukter',
    children: [
      { name: 'Drakfrukt', id: 'drakfrukt' },
      { name: 'Stjärnfrukt', id: 'stjärnfrukt' },
      { name: 'Passionsfrukt', id: 'passionsfrukt' },
    ],
  },
  {
    name: 'Torkade Frukter',
    children: [
      { name: 'Russin', id: 'russin' },
      { name: 'Fikon', id: 'fikon' },
      { name: 'Dadlar', id: 'dadlar' },
    ],
  },
  {
    name: 'Nötter',
    children: [
      { name: 'Mandel', id: 'mandel' },
      { name: 'Valnöt', id: 'valnöt' },
      { name: 'Pistage', id: 'pistage' },
    ],
  },
  {
    name: 'Örter',
    children: [
      { name: 'Basilika', id: 'basilika' },
      { name: 'Mynta', id: 'mynta' },
      { name: 'Koriander', id: 'koriander' },
    ],
  },
  {
    name: 'Kryddor',
    children: [
      { name: 'Kanel', id: 'kanel' },
      { name: 'Ingefära', id: 'ingefära' },
      { name: 'Gurkmeja', id: 'gurkmeja' },
    ],
  },
  {
    name: 'Baljväxter',
    children: [
      { name: 'Linser', id: 'linser' },
      { name: 'Kikärtor', id: 'kikartor' },
      { name: 'Svarta Bönor', id: 'svarta-bönor' },
    ],
  },
]
