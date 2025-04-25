interface Options {
    /**
     * Get the observed elements size with or without padding
     * @default false
     */
    includePadding?: boolean;
    /**
     * Time in ms between each size measure
     * @default 500
     */
    delay?: number;
}
/**
 * Observe an elements size change on resize
 */
export default function useObserveElement(element: HTMLElement | null, options?: Options): {
    width: number;
    height: number;
};
export {};
