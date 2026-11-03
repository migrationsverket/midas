import type { ApiDoc, ApiProp } from '@midas-ds/docgen';
import 'react-lowlight/common';
interface TypeMember {
    name: string;
    type: string;
    description: string;
    required: boolean;
    members?: TypeMember[];
}
interface PropItem extends Omit<ApiProp, 'type'> {
    type: {
        name: string;
        raw?: string;
        value?: {
            value: string;
            members?: TypeMember[];
        }[];
        members?: TypeMember[];
    };
}
export declare const DisplayCompositeTypes: ({ props }: {
    props: PropItem;
}) => import("react").JSX.Element;
/**
 * Props table for a component. Import the component's generated API doc in
 * the MDX file and pass it as `doc`:
 *
 * ```mdx
 * import ButtonApi from '@midas-ds/api/components/Button.json'
 *
 * <PropTable doc={ButtonApi} />
 * ```
 */
export declare const PropTable: ({ doc, defaultOpen, }: {
    doc: ApiDoc;
    defaultOpen?: boolean;
}) => import("react").JSX.Element;
export {};
//# sourceMappingURL=PropsTable.d.ts.map