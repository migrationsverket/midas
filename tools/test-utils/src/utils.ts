export const getRandomElement = <T extends string>(elements: T[]) =>
  elements[Math.floor(Math.random() * elements.length)]
