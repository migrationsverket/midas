/**
 * Create an object with disallowed keys
 */
export type ExcludeKeysFrom<T extends object, ToExlude extends PropertyKey> = Omit<T, ToExlude> & Partial<Record<ToExlude, never>>;
