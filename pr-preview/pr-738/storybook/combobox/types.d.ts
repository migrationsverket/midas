/**
 * @deprecated since v.10.1.0 please use `ListBoxItemElement` instead
 */
export type Item = {
    id: number;
    name: string;
};
/**
 * @deprecated since v10.1.0 please use `ListBoxSectionElement` instead
 */
export type Section<T> = Item & {
    children?: Iterable<T>;
};
