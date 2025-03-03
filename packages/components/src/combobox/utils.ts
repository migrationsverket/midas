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
