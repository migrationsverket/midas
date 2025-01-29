export type TextElementTag = keyof Pick<JSX.IntrinsicElements, 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'em'>;
export declare const AccordionTagContext: import('../../../../node_modules/react').Context<"p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | "em">;
export declare const useAccordionTag: () => "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | "em";
