export type Item = {
    id: number;
    name: string;
};
export type Section<T> = Item & {
    children?: Iterable<T>;
};
