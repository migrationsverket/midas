export default function useObserveElement(element: HTMLElement | null, delay?: number, excludePadding?: boolean): {
    width: number;
    height: number;
};
