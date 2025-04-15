import { Item } from './types';
export declare function generateMockOptions(count: number): Iterable<Item>;
export declare const optionsWithSections: {
    name: string;
    id: number;
    children: {
        name: string;
        id: number;
    }[];
}[];
