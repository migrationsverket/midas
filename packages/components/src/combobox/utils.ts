import type { ListBoxItemElement, ListBoxSectionElement } from '../list-box'

export function generateMockOptions(count: number): ListBoxItemElement[] {
  const fruits = [
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
  ]

  return Array.from({ length: count }, (_, index) => {
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)]
    return {
      id: index + 1,
      name: randomFruit,
    }
  })
}

export const optionsWithSections: ListBoxSectionElement[] = [
  {
    name: 'Grönsaker',
    id: 123,
    children: [
      { name: 'Morot', id: 2 },
      { name: 'Broccoli', id: 3 },
      { name: 'Spenat', id: 4 },
      { name: 'Potatis', id: 5 },
      { name: 'Tomat', id: 6 },
    ],
  },
  {
    name: 'Frukter',
    id: 1234,
    children: [
      { name: 'Äpple', id: 11 },
      { name: 'Banan', id: 12 },
      { name: 'Kiwi', id: 13 },
      { name: 'Fläder', id: 14 },
      { name: 'Nektarin', id: 15 },
    ],
  },
  {
    name: 'Bär',
    id: 12345,
    children: [
      { name: 'Jordgubbe', id: 21 },
      { name: 'Blåbär', id: 22 },
      { name: 'Hallon', id: 23 },
      { name: 'Björnbär', id: 24 },
    ],
  },
  {
    name: 'Citrusfrukter',
    id: 123456,
    children: [
      { name: 'Apelsin', id: 31 },
      { name: 'Citron', id: 32 },
      { name: 'Lime', id: 33 },
      { name: 'Kokosnöt', id: 34 },
    ],
  },
  {
    name: 'Exotiska frukter',
    id: 1234567,
    children: [
      { name: 'Fikon', id: 41 },
      { name: 'Papaya', id: 42 },
      { name: 'Guava', id: 43 },
      { name: 'Granatäpple', id: 44 },
    ],
  },
  {
    name: 'Övriga frukter',
    id: 12345678,
    children: [
      { name: 'Drakfrukt', id: 51 },
      { name: 'Stjärnfrukt', id: 52 },
      { name: 'Passionsfrukt', id: 53 },
    ],
  },
  {
    name: 'Övrigt',
    id: 123456789,
    children: [
      { name: 'Morot', id: 61 },
      { name: 'Broccoli', id: 62 },
      { name: 'Spenat', id: 63 },
      { name: 'Potatis', id: 64 },
      { name: 'Tomat', id: 65 },
    ],
  },
]
