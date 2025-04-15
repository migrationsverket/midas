import { Item } from './types'

export function generateMockOptions(count: number): Iterable<Item> {
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

export const optionsWithSections = [
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
]
