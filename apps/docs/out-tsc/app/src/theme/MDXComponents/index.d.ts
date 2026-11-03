import React from 'react';
import Head from '@docusaurus/Head';
import MDXA from '@theme/MDXComponents/A';
import MDXPre from '@theme/MDXComponents/Pre';
import MDXDetails from '@theme/MDXComponents/Details';
import MDXUl from '@theme/MDXComponents/Ul';
import MDXImg from '@theme/MDXComponents/Img';
import Admonition from '@theme/Admonition';
import Mermaid from '@theme/Mermaid';
declare const MDXComponents: {
    Head: typeof Head;
    details: typeof MDXDetails;
    Details: typeof MDXDetails;
    code: (props: any) => any;
    a: typeof MDXA;
    pre: typeof MDXPre;
    ul: typeof MDXUl;
    img: typeof MDXImg;
    h1: (props: any) => React.JSX.Element;
    h2: (props: any) => React.JSX.Element;
    h3: (props: any) => React.JSX.Element;
    h4: (props: any) => React.JSX.Element;
    h5: (props: any) => React.JSX.Element;
    h6: (props: any) => React.JSX.Element;
    admonition: typeof Admonition;
    mermaid: typeof Mermaid;
};
export default MDXComponents;
//# sourceMappingURL=index.d.ts.map