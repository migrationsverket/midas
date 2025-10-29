/**
 * Create an object with disallowed keys
 */
export type ExcludeKeysFrom<
  T extends object,
  ToExlude extends PropertyKey,
> = Omit<T, ToExlude> & Partial<Record<ToExlude, never>>

/**
 * Get keys in B but not in A
 * ![img](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Relative_compliment.svg/50px-Relative_compliment.svg.png)
 */
export type Complement<A, B> = Omit<B, keyof A & keyof B>
