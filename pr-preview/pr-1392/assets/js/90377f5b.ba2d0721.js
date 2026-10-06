"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["2581"], {
8916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_components_table_mdx_903_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-table-mdx-903.json
var site_docs_components_table_mdx_903_namespaceObject = JSON.parse('{"id":"components/table","title":"Table","description":"En enkel tabell för att visualisera data.","source":"@site/docs/components/table.mdx","sourceDirName":"components","slug":"/components/table","permalink":"/pr-preview/pr-1392/components/table","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Table","description":"En enkel tabell för att visualisera data."},"sidebar":"sideBar","previous":{"title":"Stack","permalink":"/pr-preview/pr-1392/components/stack"},"next":{"title":"Tabs","permalink":"/pr-preview/pr-1392/components/tabs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(28247);
;// CONCATENATED MODULE: ./dist/api/components/Cell.json
var Cell_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"Cell","description":"","sourceFile":"packages/components/src/table/Table.tsx","props":{"className":{"defaultValue":{"value":"\'react-aria-Table\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<TableRenderProps>","value":[{"value":"(values: TableRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"id":{"defaultValue":null,"description":"The unique id of the row.","name":"id","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"}],"type":{"name":"enum","raw":"Key","value":[{"value":"number"},{"value":"string"}]}},"textValue":{"defaultValue":null,"description":"A string representation of the row\'s contents, used for features like typeahead.","name":"textValue","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"}],"type":{"name":"string","raw":"string"}},"colSpan":{"defaultValue":null,"description":"Indicates how many columns the data cell spans.","name":"colSpan","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"CellProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"CellProps"}],"type":{"name":"number","raw":"number"}},"focusMode":{"defaultValue":null,"description":"Whether the column header or its first focusable child element should be focused when the\\ncolumn header is focused. Defaults to \'child\' in arrow keyboard navigation mode and \'cell\' in\\ntab keyboard navigation mode.","name":"focusMode","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"}],"type":{"name":"enum","raw":"\\"cell\\" | \\"child\\"","value":[{"value":"\\"cell\\""},{"value":"\\"child\\""}]}},"allowsArrowNavigation":{"defaultValue":null,"description":"Whether the column should support arrow key navigation even when the containing table uses tab\\nkeyboard navigation. Allows users to navigate between columns and rows with arrow keys while\\nfocus is on an interactive child element within the column header.","name":"allowsArrowNavigation","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"children":{"defaultValue":null,"description":"The children of the component. A function may be provided to alter the children based on\\ncomponent state.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"}],"type":{"name":"enum","raw":"ChildrenOrFunction<ColumnRenderProps>","value":[{"value":"(values: ColumnRenderProps & { defaultChildren: ReactNode; }) => ReactNode","description":"","fullComment":"","tags":{}},{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<TableRenderProps>","value":[{"value":"(values: TableRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\" | \\"table\\", TableRenderProps>","raw":"DOMRenderFunction<\\"div\\" | \\"table\\", TableRenderProps>"}}},"types":{}}')
;// CONCATENATED MODULE: ./dist/api/components/Column.json
var Column_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"Column","description":"","sourceFile":"packages/components/src/table/Table.tsx","props":{"className":{"defaultValue":{"value":"\'react-aria-Table\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<TableRenderProps>","value":[{"value":"(values: TableRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"id":{"defaultValue":null,"description":"The unique id of the row.","name":"id","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"}],"type":{"name":"enum","raw":"Key","value":[{"value":"number"},{"value":"string"}]}},"allowsSorting":{"defaultValue":null,"description":"Whether the column allows sorting.","name":"allowsSorting","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isRowHeader":{"defaultValue":null,"description":"Whether a column is a [row header](https://www.w3.org/TR/wai-aria-1.1/#rowheader) and should be\\nannounced by assistive technology during row navigation.","name":"isRowHeader","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"textValue":{"defaultValue":null,"description":"A string representation of the row\'s contents, used for features like typeahead.","name":"textValue","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"}],"type":{"name":"string","raw":"string"}},"width":{"defaultValue":null,"description":"The width of the column. This prop only applies when the `<Table>` is wrapped in a\\n`<ResizableTableContainer>`.","name":"width","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"}],"type":{"name":"enum","raw":"ColumnSize | null","value":[{"value":"`${number}%`"},{"value":"`${number}`"},{"value":"`${number}fr`"},{"value":"null"},{"value":"number"}]}},"defaultWidth":{"defaultValue":null,"description":"The default width of the column. This prop only applies when the `<Table>` is wrapped in a\\n`<ResizableTableContainer>`.","name":"defaultWidth","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"}],"type":{"name":"enum","raw":"ColumnSize | null","value":[{"value":"`${number}%`"},{"value":"`${number}`"},{"value":"`${number}fr`"},{"value":"null"},{"value":"number"}]}},"minWidth":{"defaultValue":null,"description":"The minimum width of the column. This prop only applies when the `<Table>` is wrapped in a\\n`<ResizableTableContainer>`.","name":"minWidth","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"}],"type":{"name":"enum","raw":"ColumnStaticSize | null","value":[{"value":"`${number}%`"},{"value":"`${number}`"},{"value":"null"},{"value":"number"}]}},"maxWidth":{"defaultValue":null,"description":"The maximum width of the column. This prop only applies when the `<Table>` is wrapped in a\\n`<ResizableTableContainer>`.","name":"maxWidth","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"}],"type":{"name":"enum","raw":"ColumnStaticSize | null","value":[{"value":"`${number}%`"},{"value":"`${number}`"},{"value":"null"},{"value":"number"}]}},"focusMode":{"defaultValue":null,"description":"Whether the column header or its first focusable child element should be focused when the\\ncolumn header is focused. Defaults to \'child\' in arrow keyboard navigation mode and \'cell\' in\\ntab keyboard navigation mode.","name":"focusMode","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"}],"type":{"name":"enum","raw":"\\"cell\\" | \\"child\\"","value":[{"value":"\\"cell\\""},{"value":"\\"child\\""}]}},"allowsArrowNavigation":{"defaultValue":null,"description":"Whether the column should support arrow key navigation even when the containing table uses tab\\nkeyboard navigation. Allows users to navigate between columns and rows with arrow keys while\\nfocus is on an interactive child element within the column header.","name":"allowsArrowNavigation","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"ColumnProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"children":{"defaultValue":null,"description":"The children of the component. A function may be provided to alter the children based on\\ncomponent state.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"}],"type":{"name":"enum","raw":"ChildrenOrFunction<ColumnRenderProps>","value":[{"value":"(values: ColumnRenderProps & { defaultChildren: ReactNode; }) => ReactNode","description":"","fullComment":"","tags":{}},{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<TableRenderProps>","value":[{"value":"(values: TableRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\" | \\"table\\", TableRenderProps>","raw":"DOMRenderFunction<\\"div\\" | \\"table\\", TableRenderProps>"}}},"types":{}}')
;// CONCATENATED MODULE: ./dist/api/components/Row.json
var Row_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"Row","description":"","sourceFile":"packages/components/src/table/Table.tsx","props":{"className":{"defaultValue":{"value":"\'react-aria-Table\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<TableRenderProps>","value":[{"value":"(values: TableRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"columns":{"defaultValue":null,"description":"A list of table columns.","name":"columns","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableHeaderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableHeaderProps"}],"type":{"name":"Iterable<T>","raw":"Iterable<T>"}},"children":{"defaultValue":null,"description":"The elements that make up the table. Includes the TableHeader, TableBody, Columns, and Rows.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"ReactNode","value":[{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"value":{"defaultValue":null,"description":"The object value that this row represents. When using dynamic collections, this is set\\nautomatically.","name":"value","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"}],"type":{"name":"object","raw":"object"}},"dependencies":{"defaultValue":null,"description":"Values that should invalidate the column cache when using dynamic collections.","name":"dependencies","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableHeaderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableHeaderProps"}],"type":{"name":"readonly any[]","raw":"readonly any[]"}},"textValue":{"defaultValue":null,"description":"A string representation of the row\'s contents, used for features like typeahead.","name":"textValue","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"}],"type":{"name":"string","raw":"string"}},"isDisabled":{"defaultValue":null,"description":"Whether the row is disabled.","name":"isDisabled","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"disabledBehavior":{"defaultValue":{"value":"\'all\'"},"description":"Whether `disabledKeys` applies to all interactions, or only selection.","name":"disabledBehavior","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"DisabledBehavior","value":[{"value":"\\"all\\""},{"value":"\\"selection\\""}]}},"onAction":{"defaultValue":null,"description":"Handler that is called when a user performs an action on the row. The exact user event depends\\non the collection\'s `selectionBehavior` prop and the interaction modality.","name":"onAction","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"}],"type":{"name":"enum","raw":"(() => void)","value":[{"value":"() => void","description":"","fullComment":"","tags":{}}]}},"id":{"defaultValue":null,"description":"The unique id of the row.","name":"id","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"}],"type":{"name":"enum","raw":"Key","value":[{"value":"number"},{"value":"string"}]}},"hasChildItems":{"defaultValue":null,"description":"Whether this row has children, even if not loaded yet.","name":"hasChildItems","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"RowProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<TableRenderProps>","value":[{"value":"(values: TableRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\" | \\"table\\", TableRenderProps>","raw":"DOMRenderFunction<\\"div\\" | \\"table\\", TableRenderProps>"}},"onHoverStart":{"defaultValue":null,"description":"Handler that is called when a hover interaction starts.","name":"onHoverStart","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((e: HoverEvent) => void)","value":[{"value":"(e: HoverEvent) => void","description":"","fullComment":"","tags":{}}]}},"onHoverEnd":{"defaultValue":null,"description":"Handler that is called when a hover interaction ends.","name":"onHoverEnd","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((e: HoverEvent) => void)","value":[{"value":"(e: HoverEvent) => void","description":"","fullComment":"","tags":{}}]}},"onHoverChange":{"defaultValue":null,"description":"Handler that is called when the hover state changes.","name":"onHoverChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((isHovering: boolean) => void)","value":[{"value":"(isHovering: boolean) => void","description":"","fullComment":"","tags":{}}]}},"onPress":{"defaultValue":null,"description":"Handler that is called when the press is released over the target.","name":"onPress","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onPressStart":{"defaultValue":null,"description":"Handler that is called when a press interaction starts.","name":"onPressStart","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onPressEnd":{"defaultValue":null,"description":"Handler that is called when a press interaction ends, either\\nover the target or when the pointer leaves the target.","name":"onPressEnd","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onPressChange":{"defaultValue":null,"description":"Handler that is called when the press state changes.","name":"onPressChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((isPressed: boolean) => void)","value":[{"value":"(isPressed: boolean) => void","description":"","fullComment":"","tags":{}}]}},"onPressUp":{"defaultValue":null,"description":"Handler that is called when a press is released over the target, regardless of\\nwhether it started on the target or not.","name":"onPressUp","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onClick":{"defaultValue":null,"description":"**Not recommended – use `onPress` instead.** `onClick` is an alias for `onPress`\\nprovided for compatibility with other libraries. `onPress` provides\\nadditional event details for non-mouse interactions.","name":"onClick","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: MouseEvent<FocusableElement, MouseEvent>) => void)","value":[{"value":"(e: MouseEvent<FocusableElement, MouseEvent>) => void","description":"","fullComment":"","tags":{}}]}}},"types":{}}')
;// CONCATENATED MODULE: ./dist/api/components/Table.json
var Table_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"Table","description":"","sourceFile":"packages/components/src/table/Table.tsx","props":{"size":{"defaultValue":{"value":"large"},"description":"Row height (large: 48px, medium: 40px)","name":"size","required":false,"parent":{"fileName":"midas/packages/components/src/table/Table.tsx","name":"TableProps"},"declarations":[{"fileName":"midas/packages/components/src/table/Table.tsx","name":"TableProps"}],"type":{"name":"enum","raw":"Size","value":[{"value":"\\"large\\""},{"value":"\\"medium\\""}]}},"striped":{"defaultValue":{"value":"false"},"description":"Alternating colors for rows","name":"striped","required":false,"parent":{"fileName":"midas/packages/components/src/table/Table.tsx","name":"TableProps"},"declarations":[{"fileName":"midas/packages/components/src/table/Table.tsx","name":"TableProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"className":{"defaultValue":{"value":"\'react-aria-Table\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<TableRenderProps>","value":[{"value":"(values: TableRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"children":{"defaultValue":null,"description":"The elements that make up the table. Includes the TableHeader, TableBody, Columns, and Rows.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"ReactNode","value":[{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"selectionBehavior":{"defaultValue":{"value":"\'toggle\'"},"description":"How multiple selection should behave in the collection.","name":"selectionBehavior","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"SelectionBehavior","value":[{"value":"\\"replace\\""},{"value":"\\"toggle\\""}]}},"disabledBehavior":{"defaultValue":{"value":"\'all\'"},"description":"Whether `disabledKeys` applies to all interactions, or only selection.","name":"disabledBehavior","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"DisabledBehavior","value":[{"value":"\\"all\\""},{"value":"\\"selection\\""}]}},"onRowAction":{"defaultValue":null,"description":"Handler that is called when a user performs an action on the row.","name":"onRowAction","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"((key: Key) => void)","value":[{"value":"(key: Key) => void","description":"","fullComment":"","tags":{}}]}},"dragAndDropHooks":{"defaultValue":null,"description":"The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for\\nthe Table.","name":"dragAndDropHooks","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"DragAndDropHooks","raw":"DragAndDropHooks","membersRef":"cf1e6742ba4c"}},"onExpandedChange":{"defaultValue":null,"description":"Handler that is called when items are expanded or collapsed.","name":"onExpandedChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"Expandable"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"Expandable"}],"type":{"name":"enum","raw":"((keys: Set<Key>) => any)","value":[{"value":"(keys: Set<Key>) => any","description":"","fullComment":"","tags":{}}]}},"disabledKeys":{"defaultValue":null,"description":"A list of row keys to disable.","name":"disabledKeys","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/table/useTableState.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/table/useTableState.d.ts","name":"TableProps"}],"type":{"name":"Iterable<Key>","raw":"Iterable<Key>"}},"selectionMode":{"defaultValue":null,"description":"The type of selection that is allowed in the collection.","name":"selectionMode","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"SelectionMode","value":[{"value":"\\"multiple\\""},{"value":"\\"none\\""},{"value":"\\"single\\""}]}},"onSelectionChange":{"defaultValue":null,"description":"Handler that is called when the selection changes.","name":"onSelectionChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"((keys: Selection) => void)","value":[{"value":"(keys: Selection) => void","description":"","fullComment":"","tags":{}}]}},"shouldSelectOnPressUp":{"defaultValue":null,"description":"Whether selection should occur on press up instead of press down.","name":"shouldSelectOnPressUp","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/table/useTableState.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/table/useTableState.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"escapeKeyBehavior":{"defaultValue":{"value":"\'clearSelection\'"},"description":"Whether pressing the escape key should clear selection in the table or not.\\n\\nMost experiences should not modify this option as it eliminates a keyboard user\'s ability to\\neasily clear selection. Only use if the escape key is being handled externally or should not\\ntrigger selection clearing contextually.","name":"escapeKeyBehavior","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/table/useTableState.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/table/useTableState.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"\\"clearSelection\\" | \\"none\\"","value":[{"value":"\\"clearSelection\\""},{"value":"\\"none\\""}]}},"disallowEmptySelection":{"defaultValue":null,"description":"Whether the collection allows empty selection.","name":"disallowEmptySelection","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"selectedKeys":{"defaultValue":null,"description":"The currently selected keys in the collection (controlled).","name":"selectedKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"\\"all\\" | Iterable<Key>","value":[{"value":"\\"all\\""},{"value":"Iterable<Key>","description":"","fullComment":"","tags":{}}]}},"defaultSelectedKeys":{"defaultValue":null,"description":"The initial selected keys in the collection (uncontrolled).","name":"defaultSelectedKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"\\"all\\" | Iterable<Key>","value":[{"value":"\\"all\\""},{"value":"Iterable<Key>","description":"","fullComment":"","tags":{}}]}},"treeColumn":{"defaultValue":null,"description":"The id of the column that displays hierarchical data.","name":"treeColumn","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/table/useTableState.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/table/useTableState.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"Key","value":[{"value":"number"},{"value":"string"}]}},"keyboardNavigationBehavior":{"defaultValue":{"value":"\'arrow\'"},"description":"Whether keyboard navigation to focusable elements within the cells is\\nvia the left/right arrow keys or the tab key.","name":"keyboardNavigationBehavior","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/table/useTableState.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/table/useTableState.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"\\"arrow\\" | \\"tab\\"","value":[{"value":"\\"arrow\\""},{"value":"\\"tab\\""}]}},"sortDescriptor":{"defaultValue":null,"description":"The current sorted column and direction.","name":"sortDescriptor","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"Sortable"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"Sortable"}],"type":{"name":"SortDescriptor","raw":"SortDescriptor","membersRef":"6c9caed713a7"}},"onSortChange":{"defaultValue":null,"description":"Handler that is called when the sorted column or direction changes.","name":"onSortChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"Sortable"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"Sortable"}],"type":{"name":"enum","raw":"((descriptor: SortDescriptor) => any)","value":[{"value":"(descriptor: SortDescriptor) => any","description":"","fullComment":"","tags":{}}]}},"expandedKeys":{"defaultValue":null,"description":"The currently expanded keys in the collection (controlled).","name":"expandedKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"Expandable"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"Expandable"}],"type":{"name":"Iterable<Key>","raw":"Iterable<Key>"}},"defaultExpandedKeys":{"defaultValue":null,"description":"The initial expanded keys in the collection (uncontrolled).","name":"defaultExpandedKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"Expandable"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"Expandable"}],"type":{"name":"Iterable<Key>","raw":"Iterable<Key>"}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<TableRenderProps>","value":[{"value":"(values: TableRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\" | \\"table\\", TableRenderProps>","raw":"DOMRenderFunction<\\"div\\" | \\"table\\", TableRenderProps>"}},"slot":{"defaultValue":null,"description":"A slot name for the component. Slots allow the component to receive props from a parent\\ncomponent. An explicit `null` value indicates that the local props completely override all\\nprops received from a parent.","name":"slot","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"}],"type":{"name":"enum","raw":"string | null","value":[{"value":"null"},{"value":"string"}]}}},"types":{"070f221f75fc":[{"name":"collection","type":"any","description":"","required":true},{"name":"ref","type":"any","description":"","required":true},{"name":"layout","type":"any","description":"","required":true},{"name":"orientation","type":"any","description":"","required":true},{"name":"direction","type":"Direction","description":"","required":true},{"name":"getPrimaryStart","type":"any","description":"","required":true},{"name":"getPrimaryEnd","type":"any","description":"","required":true},{"name":"getSecondaryStart","type":"any","description":"","required":true},{"name":"getSecondaryEnd","type":"any","description":"","required":true},{"name":"getFlowStart","type":"any","description":"","required":true},{"name":"getFlowEnd","type":"any","description":"","required":true},{"name":"getFlowSize","type":"any","description":"","required":true},{"name":"getDropTargetFromPoint","type":"(x: number, y: number, isValidDropTarget: (target: DropTarget) => boolean) => DropTarget","description":"Returns a drop target within a collection for the given x and y coordinates. The point is\\nprovided relative to the top left corner of the collection container. A drop target can be\\nchecked to see if it is valid using the provided `isValidDropTarget` function.","required":true}],"1bebdcadbb60":[{"name":"prototype","type":"ListDropTargetDelegate","description":"","required":true,"membersRef":"070f221f75fc"}],"6c9caed713a7":[{"name":"column","type":"Key","description":"The key of the column to sort by.","required":true},{"name":"direction","type":"SortDirection","description":"The direction to sort by.","required":true}],"848a21c98f51":[{"name":"x","type":"number","description":"","required":true},{"name":"y","type":"number","description":"","required":true},{"name":"isValidDropTarget","type":"(target: DropTarget) => boolean","description":"","required":true}],"93d73d1851fd":[{"name":"getDropTargetFromPoint","type":"(x: number, y: number, isValidDropTarget: (target: DropTarget) => boolean) => DropTarget | null","description":"Returns a drop target within a collection for the given x and y coordinates. The point is\\nprovided relative to the top left corner of the collection container. A drop target can be\\nchecked to see if it is valid using the provided `isValidDropTarget` function.","required":true,"membersRef":"848a21c98f51"}],"cf1e6742ba4c":[{"name":"useDraggableCollectionState","type":"((props: DraggableCollectionStateOpts<object>) => DraggableCollectionState) | undefined","description":"","required":false},{"name":"useDraggableCollection","type":"((props: DraggableCollectionOptions, state: DraggableCollectionState, ref: RefObject<HTMLElement | null>) => void) | undefined","description":"","required":false},{"name":"useDraggableItem","type":"((props: DraggableItemProps, state: DraggableCollectionState) => DraggableItemResult) | undefined","description":"","required":false},{"name":"DragPreview","type":"ForwardRefExoticComponent<DragPreviewProps & RefAttributes<DragPreviewRenderer | null>> | undefined","description":"","required":false},{"name":"renderDragPreview","type":"((items: DragItem[]) => Element | { element: Element; x: number; y: number; }) | undefined","description":"","required":false},{"name":"isVirtualDragging","type":"(() => boolean) | undefined","description":"","required":false},{"name":"useDroppableCollectionState","type":"((props: DroppableCollectionStateOptions) => DroppableCollectionState) | undefined","description":"","required":false},{"name":"useDroppableCollection","type":"((props: DroppableCollectionOptions, state: DroppableCollectionState, ref: RefObject<HTMLElement | null>) => DroppableCollectionResult) | undefined","description":"","required":false},{"name":"useDroppableItem","type":"((options: DroppableItemOptions, state: DroppableCollectionState, ref: RefObject<HTMLElement | null>) => DroppableItemResult) | undefined","description":"","required":false},{"name":"useDropIndicator","type":"((props: DropIndicatorProps, state: DroppableCollectionState, ref: RefObject<HTMLElement | null>) => DropIndicatorAria) | undefined","description":"","required":false},{"name":"renderDropIndicator","type":"((target: DropTarget) => Element) | undefined","description":"","required":false},{"name":"dropTargetDelegate","type":"DropTargetDelegate | undefined","description":"","required":false,"membersRef":"93d73d1851fd"},{"name":"ListDropTargetDelegate","type":"typeof ListDropTargetDelegate","description":"","required":true,"membersRef":"1bebdcadbb60"}]}}')
;// CONCATENATED MODULE: ./dist/api/components/TableHeader.json
var TableHeader_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"TableHeader","description":"","sourceFile":"packages/components/src/table/Table.tsx","props":{"className":{"defaultValue":{"value":"\'react-aria-Table\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<TableRenderProps>","value":[{"value":"(values: TableRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"columns":{"defaultValue":null,"description":"A list of table columns.","name":"columns","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableHeaderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableHeaderProps"}],"type":{"name":"Iterable<T>","raw":"Iterable<T>"}},"children":{"defaultValue":null,"description":"The elements that make up the table. Includes the TableHeader, TableBody, Columns, and Rows.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableProps"}],"type":{"name":"enum","raw":"ReactNode","value":[{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"dependencies":{"defaultValue":null,"description":"Values that should invalidate the column cache when using dynamic collections.","name":"dependencies","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableHeaderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Table.d.ts","name":"TableHeaderProps"}],"type":{"name":"readonly any[]","raw":"readonly any[]"}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<TableRenderProps>","value":[{"value":"(values: TableRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\" | \\"table\\", TableRenderProps>","raw":"DOMRenderFunction<\\"div\\" | \\"table\\", TableRenderProps>"}},"onHoverStart":{"defaultValue":null,"description":"Handler that is called when a hover interaction starts.","name":"onHoverStart","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((e: HoverEvent) => void)","value":[{"value":"(e: HoverEvent) => void","description":"","fullComment":"","tags":{}}]}},"onHoverEnd":{"defaultValue":null,"description":"Handler that is called when a hover interaction ends.","name":"onHoverEnd","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((e: HoverEvent) => void)","value":[{"value":"(e: HoverEvent) => void","description":"","fullComment":"","tags":{}}]}},"onHoverChange":{"defaultValue":null,"description":"Handler that is called when the hover state changes.","name":"onHoverChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((isHovering: boolean) => void)","value":[{"value":"(isHovering: boolean) => void","description":"","fullComment":"","tags":{}}]}}},"types":{}}')
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(82737);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/table/Table.tsx + 1 modules
var Table = __webpack_require__(36795);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/table/TableExamples.tsx



const columns = [
    {
        name: 'Namn',
        id: 'name',
        isRowHeader: true
    },
    {
        name: 'Beskrivning',
        id: 'description',
        width: 'max-content'
    }
];
const rows = [
    {
        id: 'apple',
        name: 'Apple',
        description: 'Pink lady is a good one'
    },
    {
        id: 'banana',
        name: 'Banana',
        description: 'A yellow fruit'
    },
    {
        id: 'pear',
        name: 'Pear',
        description: 'Usually green'
    }
];
const BasicExample = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* .Table */.XI, {
            "aria-label": "Fruit",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* .TableHeader */.A0, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Column */.VP, {
                            isRowHeader: true,
                            children: "Name"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Column */.VP, {
                            children: "Description"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* .TableBody */.BF, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* .Row */.fI, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Cell */.fh, {
                                    children: "Banana"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Cell */.fh, {
                                    children: "A yellow fruit"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* .Row */.fI, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Cell */.fh, {
                                    children: "Pear"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Cell */.fh, {
                                    children: "Usually green"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
const FullExample = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* .Table */.XI, {
            "aria-label": "Fruit",
            ...props,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .TableHeader */.A0, {
                    columns: columns,
                    children: (column)=>{
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Column */.VP, {
                            isRowHeader: column.isRowHeader,
                            children: column.name
                        });
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .TableBody */.BF, {
                    items: rows,
                    children: (item)=>{
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Row */.fI, {
                            columns: columns,
                            children: (column)=>{
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Cell */.fh, {
                                    children: item[column.id]
                                });
                            }
                        });
                    }
                })
            ]
        })
    });
const ControlledExample = (props)=>{
    const [selectedKeys, setSelectedKeys] = react.useState(new Set([
        'apple'
    ]));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FullExample, {
                selectedKeys: selectedKeys,
                onSelectionChange: setSelectedKeys,
                selectionMode: "multiple",
                ...props
            }),
            "Valda rader: ",
            Array.from(selectedKeys).join(', ')
        ]
    });
};
const RowOnActionExample = ()=>{
    const [lastClicked, setLastClicked] = react.useState(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "card",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* .Table */.XI, {
                "aria-label": "Fruit",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .TableHeader */.A0, {
                        columns: columns,
                        children: (column)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Column */.VP, {
                                isRowHeader: column.isRowHeader,
                                children: column.name
                            })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .TableBody */.BF, {
                        items: rows,
                        children: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Row */.fI, {
                                columns: columns,
                                onAction: ()=>setLastClicked(item),
                                children: (column)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Cell */.fh, {
                                        children: item[column.id]
                                    })
                            })
                    })
                ]
            }),
            lastClicked && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                style: {
                    marginTop: '0.75rem'
                },
                children: [
                    "Klickad rad: ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        children: lastClicked.name
                    })
                ]
            })
        ]
    });
};
const TableOnRowActionExample = ()=>{
    const [lastKey, setLastKey] = react.useState(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "card",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* .Table */.XI, {
                "aria-label": "Fruit",
                onRowAction: setLastKey,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .TableHeader */.A0, {
                        columns: columns,
                        children: (column)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Column */.VP, {
                                isRowHeader: column.isRowHeader,
                                children: column.name
                            })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .TableBody */.BF, {
                        items: rows,
                        children: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Row */.fI, {
                                id: item.id,
                                columns: columns,
                                children: (column)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Cell */.fh, {
                                        children: item[column.id]
                                    })
                            })
                    })
                ]
            }),
            lastKey && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                style: {
                    marginTop: '0.75rem'
                },
                children: [
                    "Klickad nyckel: ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        children: String(lastKey)
                    })
                ]
            })
        ]
    });
};
const SortingExample = (props)=>{
    const [sortDescriptor, setSortDescriptor] = react.useState({
        column: 'name',
        direction: 'ascending'
    });
    const sortedRows = [
        ...rows
    ].sort((a, b)=>{
        const first = a[sortDescriptor.column];
        const second = b[sortDescriptor.column];
        let cmp = 0;
        if (typeof first === 'string' && typeof second === 'string') {
            cmp = first.localeCompare(second);
        } else if (typeof first === 'number' && typeof second === 'number') {
            cmp = first - second;
        }
        if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
        }
        return cmp;
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* .Table */.XI, {
            "aria-label": "Fruit",
            sortDescriptor: sortDescriptor,
            onSortChange: setSortDescriptor,
            ...props,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .TableHeader */.A0, {
                    columns: columns,
                    children: (column)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Column */.VP, {
                            isRowHeader: column.isRowHeader,
                            allowsSorting: true,
                            children: column.name
                        })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .TableBody */.BF, {
                    items: sortedRows,
                    children: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Row */.fI, {
                            columns: columns,
                            children: (column)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Cell */.fh, {
                                    children: item[column.id]
                                })
                        })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./apps/docs/docs/components/table.mdx


const frontMatter = {
	title: 'Table',
	description: 'En enkel tabell för att visualisera data.'
};
const contentTitle = undefined;

const assets = {

};











const toc = [{
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Standardtabell",
  "id": "standardtabell",
  "level": 3
}, {
  "value": "Zebrarandiga rader",
  "id": "zebrarandiga-rader",
  "level": 3
}, {
  "value": "Kompakt tabell",
  "id": "kompakt-tabell",
  "level": 3
}, {
  "value": "Valbara rader",
  "id": "valbara-rader",
  "level": 2
}, {
  "value": "Kontrollerade val",
  "id": "kontrollerade-val",
  "level": 4
}, {
  "value": "Radåtgärder",
  "id": "radåtgärder",
  "level": 2
}, {
  "value": "onAction på Row",
  "id": "onaction-på-row",
  "level": 3
}, {
  "value": "onRowAction på Table",
  "id": "onrowaction-på-table",
  "level": 3
}, {
  "value": "Sortering",
  "id": "sortering",
  "level": 2
}, {
  "value": "Virtuell tabell",
  "id": "virtuell-tabell",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Table",
  "id": "table",
  "level": 3
}, {
  "value": "TableHeader",
  "id": "tableheader",
  "level": 3
}, {
  "value": "Row",
  "id": "row",
  "level": 3
}, {
  "value": "Column",
  "id": "column",
  "level": 3
}, {
  "value": "Cell",
  "id": "cell",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* .ComponentHeader */.B, {
      name: "Table",
      friendlyName: "Tabell"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponent för att visualisera data. Kan kombineras med andra komponenter, till exempel ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/select",
        children: "Select"
      }), ",\nför att filtrera eller ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/search-field",
        children: "SearchField"
      }), " för att söka osv."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Denna komponent är utformad för att visa data på ett enkelt och okomplicerat sätt. Om dina behov är mer komplexa och kräver avancerade funktioner som paginering, sortering, filtrering eller omfattande anpassning, rekommenderar vi att du överväger ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://tanstack.com/table/v8",
          children: "Tanstack Table"
        }), ". För att få en Midas-liknande stil och känsla, se vår ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/dev/tanstack-table",
          children: "guide för Midas-tema för Tanstack Table"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Table, TableHeader, Column, TableBody, Row, Cell } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Table aria-label='Fruit'>\n  <TableHeader>\n    <Column>Name</Column>\n    <Column>Description</Column>\n  </TableHeader>\n  <TableBody>\n    <Row>\n      <Cell>Banana</Cell>\n      <Cell>A yellow fruit</Cell>\n    </Row>\n    <Row>\n      <Cell>Pear</Cell>\n      <Cell>Usually green</Cell>\n    </Row>\n  </TableBody>\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(BasicExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För en tabell behövs data för hur kolumnerna och raderna ska få sitt innehåll. Vi kommer basera samtliga tabeller på följande dataset.\nBörja med att sätta upp dina kolumner. Nycklarna på raderna ska sedan referera till värdet för kolumnernas ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), ", i det här fallet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "description"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const columns = [\n  { name: 'Namn', id: 'name', isRowHeader: true },\n  { name: 'Beskrivning', id: 'description', width: 'max-content' },\n]\n\nconst rows = [\n  {\n    id: 'apple',\n    name: 'Apple',\n    description: 'Pink lady is a good one',\n  },\n  {\n    id: 'banana',\n    name: 'Banana',\n    description: 'A yellow fruit',\n  },\n  {\n    id: 'pear',\n    name: 'Pear',\n    description: 'Usually green',\n  },\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standardtabell",
      children: "Standardtabell"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Table aria-label='Fruit'>\n  <TableHeader columns={columns}>\n    {column => {\n      return <Column isRowHeader={column.isRowHeader}>{column.name}</Column>\n    }}\n  </TableHeader>\n  <TableBody items={rows}>\n    {item => {\n      return (\n        <Row columns={columns}>\n          {column => {\n            return <Cell>{item[column.id]}</Cell>\n          }}\n        </Row>\n      )\n    }}\n  </TableBody>\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(FullExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zebrarandiga-rader",
      children: "Zebrarandiga rader"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "striped"
      }), " om du vill att raderna ska vara zebrarandiga. Det är särskilt användbart i breda tabeller med många kolumner, där det annars kan vara svårt för användaren att följa en enskild rad horisontellt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Table\n  aria-label='Fruit'\n  // highlight-start\n  striped\n  // highlight-end\n>\n  ...\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(FullExample, {
      striped: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kompakt-tabell",
      children: "Kompakt tabell"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "size='medium'"
      }), " om du vill ha en kompaktare tabell."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Table\n  aria-label='Fruit'\n  // highlight-start\n  size='medium'\n  // highlight-end\n>\n  ...\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(FullExample, {
      size: "medium"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "valbara-rader",
      children: "Valbara rader"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tabellen har inbyggd funktion för att kunna välja en eller flera rader med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selectionMode"
      }), " vilket kan vara antingen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "single"
      }), " eller ", (0,jsx_runtime.jsx)(_components.code, {
        children: "multiple"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"single\"",
        children: "<Table\n  aria-label='Fruit'\n  // highlight-start\n  selectionMode='single'\n  // highlight-end\n>\n  ...\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(FullExample, {
      selectionMode: "single"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"multiple\"",
        children: "<Table\n  aria-label='Fruit'\n  // highlight-start\n  selectionMode='multiple'\n  // highlight-end\n>\n  ...\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(FullExample, {
      selectionMode: "multiple"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kontrollerade-val",
      children: "Kontrollerade val"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om du själv vill ha kontroll över vilka eller vilken rad som är vald kan du använda ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useState"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import type React from 'react'\nimport type { Selection } from 'react-aria-components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(['apple']))\n\n<Table\n  aria-label='Fruit'\n  // highlight-start\n  selectedKeys={selectedKeys}\n  onSelectionChange={setSelectedKeys}\n  selectionMode='multiple'\n  // highlight-end\n>\n  ...\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(ControlledExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "radåtgärder",
      children: "Radåtgärder"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Det finns två sätt att hantera klick på en rad."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onaction-på-row",
      children: "onAction på Row"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sätt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onAction"
      }), " direkt på varje ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Row"
      }), ". Callbacken är ", (0,jsx_runtime.jsx)(_components.code, {
        children: "() => void"
      }), " — ingen nyckel behövs eftersom raddatan redan finns i scope via closure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TableBody items={rows}>\n  {item => (\n    // highlight-next-line\n    <Row columns={columns} onAction={() => console.log(item)}>\n      {column => <Cell>{item[column.id]}</Cell>}\n    </Row>\n  )}\n</TableBody>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(RowOnActionExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onrowaction-på-table",
      children: "onRowAction på Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onRowAction"
      }), " på ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Table"
      }), "-komponenten för en enda hanterare för hela tabellen. Den tar emot radens ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " som nyckel, så raderna måste ha ett explicit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), "-prop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// highlight-next-line\n<Table aria-label='Fruit' onRowAction={(key) => console.log(key)}>\n  <TableBody items={rows}>\n    {item => (\n      // highlight-next-line\n      <Row id={item.id} columns={columns}>\n        {column => <Cell>{item[column.id]}</Cell>}\n      </Row>\n    )}\n  </TableBody>\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(TableOnRowActionExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sortering",
      children: "Sortering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tabellen har inbyggd support för sortering. Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sortDescriptor"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onSortChange"
      }), " för att hantera sorteringen, och sätt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "allowsSorting"
      }), " på de kolumner som ska vara sorterbara."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import type { SortDescriptor } from 'react-aria-components'\n\nconst [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({\n  column: 'name',\n  direction: 'ascending',\n})\n\nconst sortedRows = [...rows].sort((a, b) => {\n  const first = a[sortDescriptor.column]\n  const second = b[sortDescriptor.column]\n  let cmp = 0\n\n  if (typeof first === 'string' && typeof second === 'string') {\n    cmp = first.localeCompare(second)\n  } else if (typeof first === 'number' && typeof second === 'number') {\n    cmp = first - second\n  }\n\n  if (sortDescriptor.direction === 'descending') {\n    cmp *= -1\n  }\n\n  return cmp\n})\n\n<Table\n  aria-label='Fruit'\n  // highlight-start\n  sortDescriptor={sortDescriptor}\n  onSortChange={setSortDescriptor}\n  // highlight-end\n>\n  <TableHeader columns={columns}>\n    {column => (\n      <Column\n        isRowHeader={column.isRowHeader}\n        // highlight-start\n        allowsSorting\n        // highlight-end\n      >\n        {column.name}\n      </Column>\n    )}\n  </TableHeader>\n  <TableBody items={sortedRows}>\n    {item => (\n      <Row columns={columns}>\n        {column => <Cell>{item[column.id]}</Cell>}\n      </Row>\n    )}\n  </TableBody>\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(SortingExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "virtuell-tabell",
      children: "Virtuell tabell"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För stora tabeller med mycket data kan en ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/Virtualizer.html",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Virtualizer"
        })
      }), " hjälpa till att reducera mängden renderade DOM-element, begränsat till vad användaren ser för tillfället."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Notera att tabellen behöver ange ett värde för höjd och overflow."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["För användning av randiga rader behöver ", (0,jsx_runtime.jsx)(_components.code, {
          children: "data-even"
        }), "-attributet anges för jämna rader."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Virtualizer, TableLayout } from 'react-aria-components'\nimport { Table, TableHeader, Column, TableBody, Row, Cell } from '@midas-ds/components'\n\nconst VirtualizedExample = () => {\n  const rows = [...Array.from(Array(5000).keys())].map(i => ({\n    id: i,\n    foo: `Foo: ${i}`,\n    bar: `Bar: ${i}`,\n    baz: `Baz: ${i}`,\n  }))\n\n  return (\n    <Virtualizer\n      layout={TableLayout}\n      layoutOptions={{\n        rowHeight: 48,\n        headingHeight: 48,\n      }}\n    >\n      <Table\n        aria-label='Virtualized Table'\n        selectionMode='multiple'\n        striped\n        style={{ height: 300, overflow: 'auto', scrollPaddingTop: 48 }}\n      >\n        <TableHeader>\n          <Column isRowHeader>Foo</Column>\n          <Column>Bar</Column>\n          <Column>Baz</Column>\n        </TableHeader>\n        <TableBody items={rows}>\n          {item => (\n            <Row data-even={item.id % 2 === 0}>\n              <Cell>{item.foo}</Cell>\n              <Cell>{item.bar}</Cell>\n              <Cell>{item.baz}</Cell>\n            </Row>\n          )}\n        </TableBody>\n      </Table>\n    </Virtualizer>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En demo av denna kod finns på vår Storybook."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "table",
      children: "Table"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: Table_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tableheader",
      children: "TableHeader"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: TableHeader_namespaceObject,
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "row",
      children: "Row"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: Row_namespaceObject,
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "column",
      children: "Column"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: Column_namespaceObject,
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cell",
      children: "Cell"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: Cell_namespaceObject,
      defaultOpen: false
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
71382(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"indicator":"indicator_51pB","checkboxButton":"checkboxButton_URXt","checkboxField":"checkboxField_Jg75","checkboxGroup":"checkboxGroup_iAq9","checkboxList":"checkboxList_R4Jt"});

},
52072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"container":"container_uCKZ","removeMargins":"removeMargins_rQ9U","contained":"contained_R9lB","flex":"flex_LQ20","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-quarter":"col-quarter_eUut","col-4":"col-4_Ovxr","col-third":"col-third_FUaF","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-half":"col-half_GzSn","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","col-full":"col-full_K_XT","col-auto":"col-auto_nMhH","col-grow":"col-grow_TBON","col-xs-1":"col-xs-1_Bg_O","col-xs-2":"col-xs-2_UhmL","col-xs-3":"col-xs-3_mEvh","col-xs-quarter":"col-xs-quarter_mtoI","col-xs-4":"col-xs-4_Uv5i","col-xs-third":"col-xs-third_AHrM","col-xs-5":"col-xs-5_Gdnm","col-xs-6":"col-xs-6_z366","col-xs-half":"col-xs-half_vH6m","col-xs-7":"col-xs-7_HNwO","col-xs-8":"col-xs-8_Vwih","col-xs-9":"col-xs-9_vfTc","col-xs-10":"col-xs-10_wJWt","col-xs-11":"col-xs-11_KTEA","col-xs-12":"col-xs-12_TaE_","col-xs-full":"col-xs-full_enWi","col-xs-auto":"col-xs-auto_G2jj","col-xs-grow":"col-xs-grow_kY1W","col-sm-1":"col-sm-1_YvIs","col-sm-2":"col-sm-2_NSCq","col-sm-3":"col-sm-3_cJ0H","col-sm-quarter":"col-sm-quarter_WWBJ","col-sm-4":"col-sm-4_dtZx","col-sm-third":"col-sm-third_g3dG","col-sm-5":"col-sm-5_C87q","col-sm-6":"col-sm-6_SkMd","col-sm-half":"col-sm-half_QX4f","col-sm-7":"col-sm-7_wa6s","col-sm-8":"col-sm-8_zH5I","col-sm-9":"col-sm-9_ym4Z","col-sm-10":"col-sm-10_jE4j","col-sm-11":"col-sm-11_Va2g","col-sm-12":"col-sm-12_BgjD","col-sm-full":"col-sm-full_Nb6O","col-sm-auto":"col-sm-auto_Qj4m","col-sm-grow":"col-sm-grow_mAH5","col-md-1":"col-md-1_Zeqd","col-md-2":"col-md-2_DR6K","col-md-3":"col-md-3_OZK7","col-md-quarter":"col-md-quarter_AmxM","col-md-4":"col-md-4_NxEu","col-md-third":"col-md-third_J4Ja","col-md-5":"col-md-5_cBkY","col-md-6":"col-md-6_it5t","col-md-half":"col-md-half_aEv_","col-md-7":"col-md-7__sAT","col-md-8":"col-md-8_WfW7","col-md-9":"col-md-9_orzQ","col-md-10":"col-md-10_wh5t","col-md-11":"col-md-11_Wsgq","col-md-12":"col-md-12_gZQg","col-md-full":"col-md-full_Ow4Z","col-md-auto":"col-md-auto_e67j","col-md-grow":"col-md-grow_quHq","col-lg-1":"col-lg-1_e1au","col-lg-2":"col-lg-2_fUsj","col-lg-3":"col-lg-3_EhhM","col-lg-quarter":"col-lg-quarter_SI9I","col-lg-4":"col-lg-4_VuKz","col-lg-third":"col-lg-third_Lf2A","col-lg-5":"col-lg-5_TF5r","col-lg-6":"col-lg-6_E93v","col-lg-half":"col-lg-half_ZdoE","col-lg-7":"col-lg-7_L5CO","col-lg-8":"col-lg-8_ZBHN","col-lg-9":"col-lg-9_TbUu","col-lg-10":"col-lg-10_Tsqu","col-lg-11":"col-lg-11_Eg8x","col-lg-12":"col-lg-12_eNvi","col-lg-full":"col-lg-full_SaRE","col-lg-auto":"col-lg-auto_fNRO","col-lg-grow":"col-lg-grow_XTrt","col-xl-1":"col-xl-1_BRna","col-xl-2":"col-xl-2_eGSK","col-xl-3":"col-xl-3_RrW2","col-xl-quarter":"col-xl-quarter_V_Yw","col-xl-4":"col-xl-4_R4AZ","col-xl-third":"col-xl-third_W3hT","col-xl-5":"col-xl-5_k7Gx","col-xl-6":"col-xl-6_xZyb","col-xl-half":"col-xl-half_V9xE","col-xl-7":"col-xl-7_lJfg","col-xl-8":"col-xl-8_zErQ","col-xl-9":"col-xl-9_oYwQ","col-xl-10":"col-xl-10_cLTa","col-xl-11":"col-xl-11_xqWK","col-xl-12":"col-xl-12_Vrsf","col-xl-full":"col-xl-full_vVSm","col-xl-auto":"col-xl-auto_YBap","col-xl-grow":"col-xl-grow_YMBn","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-quarter":"offset-quarter_ho5e","offset-4":"offset-4_L0XB","offset-third":"offset-third_dE8e","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-half":"offset-half_nGtc","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv","offset-auto":"offset-auto_ZBrI","offset-xs-1":"offset-xs-1__ZrT","offset-xs-2":"offset-xs-2_WySR","offset-xs-3":"offset-xs-3_u9Tb","offset-xs-quarter":"offset-xs-quarter_Pd1o","offset-xs-4":"offset-xs-4_Bibg","offset-xs-third":"offset-xs-third_CeeW","offset-xs-5":"offset-xs-5_OgED","offset-xs-6":"offset-xs-6_ihSu","offset-xs-half":"offset-xs-half_Vrdz","offset-xs-7":"offset-xs-7_TtZQ","offset-xs-8":"offset-xs-8_Ftc2","offset-xs-9":"offset-xs-9_HptZ","offset-xs-10":"offset-xs-10_umjb","offset-xs-11":"offset-xs-11_Suix","offset-xs-auto":"offset-xs-auto_fxe8","offset-sm-1":"offset-sm-1_knSM","offset-sm-2":"offset-sm-2_zWxo","offset-sm-3":"offset-sm-3_oqp6","offset-sm-quarter":"offset-sm-quarter_Nav1","offset-sm-4":"offset-sm-4_EvUX","offset-sm-third":"offset-sm-third_tGgh","offset-sm-5":"offset-sm-5_raNi","offset-sm-6":"offset-sm-6_KTA8","offset-sm-half":"offset-sm-half_ab81","offset-sm-7":"offset-sm-7_duQl","offset-sm-8":"offset-sm-8_uRxp","offset-sm-9":"offset-sm-9_AqYl","offset-sm-10":"offset-sm-10_Wt6J","offset-sm-11":"offset-sm-11_yAYq","offset-sm-auto":"offset-sm-auto_FAp6","offset-md-1":"offset-md-1_OpgB","offset-md-2":"offset-md-2_U24n","offset-md-3":"offset-md-3_YxnQ","offset-md-quarter":"offset-md-quarter_y53T","offset-md-4":"offset-md-4_ZaOC","offset-md-third":"offset-md-third_HZWP","offset-md-5":"offset-md-5_KVFL","offset-md-6":"offset-md-6_bZvL","offset-md-half":"offset-md-half_yilA","offset-md-7":"offset-md-7_fs04","offset-md-8":"offset-md-8_QmYF","offset-md-9":"offset-md-9_QoVc","offset-md-10":"offset-md-10_OrE0","offset-md-11":"offset-md-11_reKz","offset-md-auto":"offset-md-auto_ETdh","offset-lg-1":"offset-lg-1_zi3j","offset-lg-2":"offset-lg-2_YgjU","offset-lg-3":"offset-lg-3_CHdw","offset-lg-quarter":"offset-lg-quarter_Chor","offset-lg-4":"offset-lg-4_NOCF","offset-lg-third":"offset-lg-third_LTbL","offset-lg-5":"offset-lg-5_dGzM","offset-lg-6":"offset-lg-6_kXXi","offset-lg-half":"offset-lg-half_vFHN","offset-lg-7":"offset-lg-7_jIth","offset-lg-8":"offset-lg-8_T0Jx","offset-lg-9":"offset-lg-9_mYmL","offset-lg-10":"offset-lg-10_clJ6","offset-lg-11":"offset-lg-11_zFW2","offset-lg-auto":"offset-lg-auto_W3q4","offset-xl-1":"offset-xl-1_pRWH","offset-xl-2":"offset-xl-2_FX3q","offset-xl-3":"offset-xl-3_P8xx","offset-xl-quarter":"offset-xl-quarter_RLTy","offset-xl-4":"offset-xl-4_n7Vy","offset-xl-third":"offset-xl-third_w0fc","offset-xl-5":"offset-xl-5_vC_8","offset-xl-6":"offset-xl-6_BvQ2","offset-xl-half":"offset-xl-half_HQ16","offset-xl-7":"offset-xl-7_m1bv","offset-xl-8":"offset-xl-8_FJ1u","offset-xl-9":"offset-xl-9_oAbC","offset-xl-10":"offset-xl-10_wwaH","offset-xl-11":"offset-xl-11_HpDF","offset-xl-auto":"offset-xl-auto_Dv5P"});

},
28247(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// UNUSED EXPORTS: DisplayCompositeTypes

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(5245);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(11728);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx + 1 modules
var Accordion = __webpack_require__(18003);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx + 1 modules
var AccordionItem = __webpack_require__(69130);
;// CONCATENATED MODULE: ./apps/docs/src/css/propstable.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const propstable_module = ({"accordion":"accordion_M8EQ","propsGridTable":"propsGridTable_luj3","membersTable":"membersTable_K5oi","popover":"popover_gEf7","arrow":"arrow_kUCF"});
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/index.js + 137 modules
var lib = __webpack_require__(24649);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/Lowlight.js + 2 modules
var Lowlight = __webpack_require__(2268);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/common.js + 38 modules
var common = __webpack_require__(14788);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/Pressable.mjs
var Pressable = __webpack_require__(45210);
;// CONCATENATED MODULE: ./apps/docs/src/utils/jsdocLinkToMarkdown.ts
const jsdocLinkToMarkdown = (comment)=>// {@link URL|Text} or {@link URL Text} format (JSDoc style)
    comment.replace(/\{@link\s+([^|\s}]+)\s*\|?\s*([^}]+)\}/g, (match, url, text)=>`[${text.trim()}](${url})`)// Replace @see with "See " at the beginning of lines
    .replace(/^\s*@see\s+/gm, 'See ')// Remove @link tags from the beginning of lines (but keep the markdown link)
    .replace(/^\s*@link\s+/gm, '')// Remove any extra @link tags that might be inline
    .replace(/\s*@link\s+/g, ' ');

;// CONCATENATED MODULE: ./apps/docs/src/components/PropsTable.tsx









/**
 * Generated docs store drill-down members once per file in `doc.types` and
 * refer to them by key. Resolves those references into nested `members`.
 */ function resolveProps(doc) {
    const tables = new Map();
    const resolve = (ref)=>{
        if (!ref) return undefined;
        if (!tables.has(ref)) {
            tables.set(ref, doc.types[ref].map((param)=>{
                let { membersRef, ...member } = param;
                return {
                    ...member,
                    members: resolve(membersRef)
                };
            }));
        }
        return tables.get(ref);
    };
    return Object.fromEntries(Object.entries(doc.props).map((param)=>{
        let [key, prop] = param;
        const { membersRef, value, ...type } = prop.type;
        return [
            key,
            {
                ...prop,
                type: {
                    ...type,
                    value: value?.map((param)=>{
                        let { membersRef, ...entry } = param;
                        return {
                            ...entry,
                            members: resolve(membersRef)
                        };
                    }),
                    members: resolve(membersRef)
                }
            }
        ];
    }));
}
function hasMembers(type) {
    return Array.isArray(type.members) && type.members.length > 0;
}
/** Renders a type name — clickable with drill-down popover if it has members */ const DrillableType = (param)=>{
    let { typeStr, members } = param;
    if (members && members.length > 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .DialogTrigger */.zM, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Pressable/* .Pressable */.o, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        role: "button",
                        style: {
                            cursor: 'pointer'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                            value: typeStr,
                            inline: true,
                            language: "typescript",
                            markers: []
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
                    style: {
                        maxWidth: 'min(90vw, 800px)'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MembersTable, {
                        members: members
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
        value: typeStr,
        inline: true,
        language: "typescript",
        markers: []
    });
};
const MembersTable = (param)=>{
    let { members } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: propstable_module.membersTable,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Name"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Type"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Description"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                    children: members.map((member)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                        value: `${member.name}${member.required ? '' : '?'}`,
                                        inline: true,
                                        language: "typescript",
                                        markers: []
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DrillableType, {
                                        typeStr: member.type,
                                        members: member.members
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: member.description || '-'
                                })
                            ]
                        }, member.name))
                })
            ]
        })
    });
};
const DisplayCompositeTypes = (param)=>{
    let { props } = param;
    if (hasMembers(props.type)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(DrillableType, {
            typeStr: props.type.name,
            members: props.type.members
        });
    }
    switch(props.type.name){
        case 'enum':
            {
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .DialogTrigger */.zM, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Pressable/* .Pressable */.o, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                role: "button",
                                style: {
                                    cursor: 'pointer'
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                    value: props.type.raw,
                                    inline: true,
                                    language: "typescript",
                                    markers: []
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "hljs-code",
                                children: props.type.value?.map((r, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            i === 0 ? ' ' : ' | ',
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(DrillableType, {
                                                typeStr: r.value.replace(/"/g, "'"),
                                                members: r.members
                                            })
                                        ]
                                    }, `${r.value}${i}`);
                                })
                            })
                        })
                    ]
                });
            }
        default:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                value: props.type.name,
                inline: true,
                language: "typescript",
                markers: []
            });
    }
};
/**
 * Props table for a component. Import the component's generated API doc in
 * the MDX file and pass it as `doc`:
 *
 * ```mdx
 * import ButtonApi from '@midas-ds/api/components/Button.json'
 *
 * <PropTable doc={ButtonApi} />
 * ```
 */ const PropTable = (param)=>{
    let { doc, defaultOpen = true } = param;
    const props = (0,react.useMemo)(()=>resolveProps(doc), [
        doc
    ]);
    const { events, accessibility, rest } = Object.entries(props).reduce((acc, param)=>{
        let [key, value] = param;
        if (key.startsWith('on')) {
            acc.events[key] = value;
        } else if (key.startsWith('aria-')) {
            acc.accessibility[key] = value;
        } else {
            acc.rest[key] = value;
        }
        return acc;
    }, {
        events: {},
        accessibility: {},
        rest: {}
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* .Accordion */.n, {
        className: propstable_module.accordion,
        allowsMultipleExpanded: true,
        defaultExpandedKeys: defaultOpen ? [
            'props'
        ] : [],
        children: [
            Object.getOwnPropertyNames(rest).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "props",
                title: "Props",
                className: propstable_module.accordionItem,
                hasBackground: false,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: rest,
                    props: props
                })
            }),
            Object.getOwnPropertyNames(events).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "events",
                title: "Events",
                className: propstable_module.accordionItem,
                hasBackground: false,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: events,
                    props: props,
                    showDefault: false
                })
            }),
            Object.getOwnPropertyNames(accessibility).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "accessibility",
                title: "Tillg\xe4nglighet",
                className: propstable_module.accordionItem,
                hasBackground: false,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: accessibility,
                    props: props,
                    showDefault: false
                })
            })
        ]
    });
};
const Grid = (param)=>{
    let { propGroup, props, showDefault = true } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: propstable_module.propsGridTable,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Name"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Type"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: showDefault && 'Default'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Description"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                    children: Object.keys(propGroup).map((key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                    "data-title": "Name",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                            value: key,
                                            inline: true,
                                            language: "typescript",
                                            markers: []
                                        }),
                                        props[key].required && ' *'
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    "data-title": "Type",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DisplayCompositeTypes, {
                                        props: props[key]
                                    })
                                }),
                                showDefault ? /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    "data-title": "Default",
                                    children: props[key].defaultValue ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                        value: props[key].defaultValue.value,
                                        inline: true,
                                        language: "typescript",
                                        markers: []
                                    }) : '-'
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    "data-title": "Description",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* .Markdown */.oz, {
                                        children: jsdocLinkToMarkdown(props[key].description)
                                    })
                                })
                            ]
                        }, key))
                })
            ]
        })
    });
};


},
82737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  B: () => (ComponentHeader)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _midas_ds_components__rspack_import_3 = __webpack_require__(25879);
/* import */ var _midas_ds_components__rspack_import_4 = __webpack_require__(80782);
/* import */ var _midas_ds_components__rspack_import_5 = __webpack_require__(35900);
/* import */ var lucide_react__rspack_import_6 = __webpack_require__(42350);
/* import */ var _site_src_components_icons__rspack_import_1 = __webpack_require__(95860);
/* import */ var _docusaurus_useBaseUrl__rspack_import_2 = __webpack_require__(66497);



/* eslint-disable @nx/enforce-module-boundaries */ 

const ComponentHeader = (param)=>{
    let { name, friendlyName, overrideHeadlessLink, overrideHeadlessLinkTitle, hideStorybookLink, overrideStorybookPath } = param;
    const baseUrl = _docusaurus_useBaseUrl__rspack_import_2/* ["default"] */.Ay;
    const componentPath = overrideStorybookPath ?? `?path=/docs/components-${name.toLowerCase()}--docs`;
    const storybookHost =  false ? 0 : baseUrl('/storybook');
    const storybookLink = `${storybookHost}/${componentPath}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "component-header",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_midas_ds_components__rspack_import_3/* .Grid */.x, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_midas_ds_components__rspack_import_4/* .GridItem */.E, {
                    size: "auto",
                    className: "friendlyName",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                        children: friendlyName
                    })
                }),
                !hideStorybookLink && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_midas_ds_components__rspack_import_4/* .GridItem */.E, {
                    size: "auto",
                    className: "headerLink",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_midas_ds_components__rspack_import_5/* .LinkButton */.z, {
                        href: storybookLink,
                        variant: "tertiary",
                        icon: _site_src_components_icons__rspack_import_1/* .EmptyIcon */.F,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_site_src_components_icons__rspack_import_1/* .StorybookIcon */.q, {
                                size: 24,
                                color: "#FF4785"
                            }),
                            "Storybook"
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_midas_ds_components__rspack_import_4/* .GridItem */.E, {
                    size: "auto",
                    className: "headerLink",
                    children: overrideHeadlessLink !== '' && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_midas_ds_components__rspack_import_5/* .LinkButton */.z, {
                        href: overrideHeadlessLink ? overrideHeadlessLink : `https://react-spectrum.adobe.com/react-aria/${name}.html`,
                        target: "_blank",
                        variant: "tertiary",
                        icon: lucide_react__rspack_import_6/* ["default"] */.A,
                        iconPlacement: "left",
                        children: overrideHeadlessLinkTitle ? overrideHeadlessLinkTitle : 'React Aria'
                    })
                })
            ]
        })
    });
};


},
95860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ EmptyIcon),
  q: () => (/* reexport */ StorybookIcon)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./apps/docs/src/components/icons/Storybook.tsx


const StorybookIcon = /* @__PURE__ */ /*#__PURE__*/ react.forwardRef((param, forwardedRef)=>{
    let { color = 'currentColor', size = 20, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        viewBox: "-31.5 0 319 319",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        fill: "#000000",
        width: size,
        height: size,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                id: "SVGRepo_bgCarrier",
                strokeWidth: "0"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                id: "SVGRepo_tracerCarrier",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                id: "SVGRepo_iconCarrier",
                children: [
                    ' ',
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                        children: [
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z",
                                id: "path-1",
                                children: ' '
                            }),
                            ' '
                        ]
                    }),
                    ' ',
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                        children: [
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("mask", {
                                id: "mask-2",
                                fill: "white",
                                children: [
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                                        href: "#path-1",
                                        children: " "
                                    }),
                                    ' '
                                ]
                            }),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                                fill: color,
                                fillRule: "nonzero",
                                href: "#path-1",
                                children: ' '
                            }),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z",
                                fill: "#FFFFFF",
                                fillRule: "nonzero",
                                mask: "url(#mask-2)",
                                children: ' '
                            }),
                            ' '
                        ]
                    }),
                    ' '
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./apps/docs/src/components/icons/Empty.tsx

const EmptyIcon = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        height: 0,
        width: 0
    });

;// CONCATENATED MODULE: ./apps/docs/src/components/icons/index.ts




},
18003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ Accordion)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// CONCATENATED MODULE: ./packages/components/src/accordion/Accordion.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Accordion_module = ({"root":"root_dwc1","contained":"contained_snuo","triggerButton":"triggerButton_v7ly"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(13827);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(52436);
;// CONCATENATED MODULE: ./packages/components/src/accordion/Accordion.tsx
'use client';






/**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */ const Accordion = (param)=>{
    let { children, className, isContained, size = 'large', ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionContext/* .AccordionContext.Provider */.C.Provider, {
        value: {
            isContained,
            size
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Disclosure/* .DisclosureGroup */.Tw, {
            className: (0,clsx/* ["default"] */.A)(Accordion_module.root, isContained ? Accordion_module.contained : Accordion_module.uncontained, className),
            ...props,
            children: children
        })
    });
};


},
52436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  C: () => (AccordionContext)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);

const AccordionContext = (0,react__rspack_import_0.createContext)(undefined);


},
69130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(13827);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/accordion/AccordionItem.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const AccordionItem_module = ({"item":"item_VttG","contained":"contained_ub98","medium":"medium_WM8r","success":"success_cpFV","warning":"warning_NxFE","info":"info_suK1","important":"important_n_K6","triggerButton":"triggerButton_En7k","triggerText":"triggerText_VvwO","trigger":"trigger_dCCq","triggerMainContent":"triggerMainContent_WoSV","\t":"\t_YXX_","chevronIcon":"chevronIcon_kSND","statusIcon":"statusIcon_DtWQ","panel":"panel_RCRU","content":"content_EuZw","hasBackground":"hasBackground_E4qK","header":"header_kp5y"});
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(72201);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(52436);
// EXTERNAL MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(19573);
;// CONCATENATED MODULE: ./packages/components/src/accordion/AccordionItem.tsx











const AccordionItem = (param)=>{
    let { title, children, className, headingLevel = 'h2', type, hasBackground = true, size = 'large', isContained: isContainedFromProp, iconAriaLabel, ...props } = param;
    const context = (0,react.useContext)(AccordionContext/* .AccordionContext */.C);
    const isContained = isContainedFromProp ?? context?.isContained ?? false;
    const titleIsReactNode = typeof title === 'object';
    (0,react.useEffect)(()=>{
        if (type && !isContained) {
            console.warn(`AccordionItem: When 'type' is set, it is recommended to also set 'isContained' to true for visual consistency.`);
        }
    }, [
        type,
        isContained
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Disclosure/* .Disclosure */.EN, {
        ...props,
        className: (0,clsx/* ["default"] */.A)(AccordionItem_module.item, type && isContained && AccordionItem_module[type], (size === 'medium' || context?.size === 'medium') && AccordionItem_module.medium, isContained && AccordionItem_module.contained, className),
        children: (0,utils/* .composeRenderProps */.HW)(children, (children)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: AccordionItem_module.trigger,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* .Button */.$, {
                            className: AccordionItem_module.triggerButton,
                            slot: "trigger",
                            variant: "icon",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* ["default"] */.A, {
                                    size: 20,
                                    className: AccordionItem_module.chevronIcon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: AccordionItem_module.triggerMainContent,
                                    children: titleIsReactNode ? title : /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* .Heading */.D, {
                                        level: 3,
                                        elementType: headingLevel,
                                        className: AccordionItem_module.triggerText,
                                        children: title
                                    })
                                }),
                                type && isContained && /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedbackStatusIcon/* .FeedbackStatusIcon */.$, {
                                    "aria-label": iconAriaLabel,
                                    className: AccordionItem_module.statusIcon,
                                    status: type
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Disclosure/* .DisclosurePanel */.kS, {
                        className: AccordionItem_module.panel,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (0,clsx/* ["default"] */.A)(AccordionItem_module.content, hasBackground && AccordionItem_module.hasBackground),
                            children: children
                        })
                    })
                ]
            }))
    });
};


},
78959(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ Checkbox_Checkbox)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/minus.js
var minus = __webpack_require__(86241);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./packages/theme/src/index.ts + 3 modules
var src = __webpack_require__(10734);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(47135);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.module.css
var Checkbox_module = __webpack_require__(71382);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Checkbox.mjs + 6 modules
var Checkbox = __webpack_require__(42657);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/checkbox/CheckboxField.tsx
'use client';




const CheckboxField = (param)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* .CheckboxField */.Yh, {
        className: (0,clsx/* ["default"] */.A)(Checkbox_module/* ["default"].checkboxField */.A.checkboxField, className),
        ...rest
    });
};

;// CONCATENATED MODULE: ./packages/components/src/checkbox/CheckboxButton.tsx
'use client';





const CheckboxButton = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* .CheckboxButton */.aE, {
        className: (0,clsx/* ["default"] */.A)(Checkbox_module/* ["default"].checkboxButton */.A.checkboxButton, className),
        ref: ref,
        ...rest
    });
});

;// CONCATENATED MODULE: ./packages/components/src/checkbox/Checkbox.tsx









const Checkbox_Checkbox = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { className, description, errorMessage, errorPosition = 'top', children, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CheckboxField, {
        ...props,
        children: [
            description && /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                slot: "description",
                children: description
            }),
            errorPosition === 'top' && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                children: errorMessage
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxButton, {
                ref: ref,
                className: className,
                children: (param)=>{
                    let { isIndeterminate } = param;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: Checkbox_module/* ["default"].indicator */.A.indicator,
                                children: isIndeterminate ? /*#__PURE__*/ (0,jsx_runtime.jsx)(minus/* ["default"] */.A, {
                                    size: 14,
                                    color: src/* .variables.iconOnColor */.E.w1t
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* ["default"] */.A, {
                                    size: 14,
                                    color: src/* .variables.iconOnColor */.E.w1t
                                })
                            }),
                            children
                        ]
                    });
                }
            }),
            errorPosition === 'bottom' && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                children: errorMessage
            })
        ]
    });
});
Checkbox_Checkbox.displayName = 'Checkbox';


},
19573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ FeedbackStatusIcon)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(97213);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/flag.js
var flag = __webpack_require__(59155);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(418);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/common/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"ok":"okay","information":"information","importantInformation":"important information","warning":"warning"},"sv":{"ok":"okej","information":"information","importantInformation":"viktig information","warning":"varning"}}')
;// CONCATENATED MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx




const icons = {
    success: check/* ["default"] */.A,
    info: info/* ["default"] */.A,
    important: flag/* ["default"] */.A,
    warning: triangle_alert/* ["default"] */.A
};
const labels = {
    success: 'ok',
    info: 'information',
    important: 'importantInformation',
    warning: 'warning'
};
const FeedbackStatusIcon = (param)=>{
    let { status, 'aria-label': ariaLabel, size = 20, ...rest } = param;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const Icon = icons[status];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
        "aria-label": ariaLabel || strings.format(labels[status]),
        size: size,
        ...rest
    });
};


},
47135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ FieldError_FieldError)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/FieldError.mjs
var FieldError = __webpack_require__(3728);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
;// CONCATENATED MODULE: ./packages/components/src/field-error/FieldError.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const FieldError_module = ({"fieldError":"fieldError_K9VX"});
;// CONCATENATED MODULE: ./packages/components/src/field-error/FieldError.tsx






const FieldError_FieldError = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { children, isInvalid } = props;
    const className = (0,clsx/* ["default"] */.A)(FieldError_module.fieldError, props.className);
    const context = (0,react.useContext)(FieldError/* .FieldErrorContext */.C);
    if (!context && isInvalid && typeof children !== 'function') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
            className: className,
            children: children
        });
    }
    if (!context?.isInvalid) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
        ...props,
        ref: ref,
        className: className
    });
});
FieldError_FieldError.displayName = 'FieldError';


},
25879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  x: () => (Grid)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(52072);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);




/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */ const Grid = (param)=>{
    let { children, isContained = false, removeMargins = false, ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        ...rest,
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(_Grid_module_css__rspack_import_2/* ["default"].container */.A.container, isContained && _Grid_module_css__rspack_import_2/* ["default"].contained */.A.contained, removeMargins && _Grid_module_css__rspack_import_2/* ["default"].removeMargins */.A.removeMargins, rest.className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: _Grid_module_css__rspack_import_2/* ["default"].flex */.A.flex,
            children: children
        })
    });
};


},
80782(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  E: () => (GridItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(52072);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);




/**
 * Columns based on display: flex;
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */ const GridItem = (param)=>{
    let { children, size, offset, ...props } = param;
    const offsetClass = offset ? `offset-${offset}` : '';
    const sizeClasses = getSizeClasses(size);
    const offsetClasses = getOffsetClasses(offset);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        ...props,
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(_Grid_module_css__rspack_import_2/* ["default"].col */.A.col, _Grid_module_css__rspack_import_2/* ["default"] */.A[offsetClass], sizeClasses.map((cls)=>_Grid_module_css__rspack_import_2/* ["default"] */.A[cls]), offsetClasses.map((cls)=>_Grid_module_css__rspack_import_2/* ["default"] */.A[cls]), props.className),
        children: children
    });
};
const getSizeClasses = (size)=>{
    if (!size) return [];
    if (typeof size === 'object') {
        return Object.entries(size).map((param)=>{
            let [breakpoint, value] = param;
            return breakpoint === 'xs' ? `col-${value}` : `col-${breakpoint}-${value}`;
        });
    }
    return [
        `col-${size}`
    ];
};
const getOffsetClasses = (offset)=>{
    if (!offset) return [];
    if (typeof offset === 'object') {
        return Object.entries(offset).map((param)=>{
            let [breakpoint, value] = param;
            return breakpoint === 'xs' ? `offset-${value}` : `offset-${breakpoint}-${value}`;
        });
    }
    return [
        `offset-${offset}`
    ];
};


},
72201(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ Heading_Heading)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Heading.mjs
var Heading = __webpack_require__(91820);
;// CONCATENATED MODULE: ./packages/components/src/heading/Heading.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Heading_module = ({"h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
;// CONCATENATED MODULE: ./packages/components/src/heading/Heading.tsx





const Heading_Heading = (param)=>{
    let { children, className, enableMargins = false, isExpressive = false, level = 3, elementType, ...rest } = param;
    const semanticLevel = elementType && parseInt(elementType.split('h')[1]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* .Heading */.D, {
        level: semanticLevel || level,
        className: (0,clsx/* ["default"] */.A)([
            Heading_module.h1,
            Heading_module.h2,
            Heading_module.h3,
            Heading_module.h4,
            Heading_module.h5,
            Heading_module.h6
        ][level - 1], className),
        ...isExpressive && {
            'data-expressive': true
        },
        ...enableMargins && {
            'data-margin': true
        },
        ...rest,
        children: children
    });
};


},
35900(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(10068);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(81013);
;// CONCATENATED MODULE: ./packages/components/src/link-button/LinkButton.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const LinkButton_module = ({"linkButton":"linkButton_DlJV","secondary":"secondary_aNB6","icon":"icon_g3pu","tertiary":"tertiary_tl3f","danger":"danger_qkvT","iconBtn":"iconBtn_Ngss","medium":"medium_St93","iconLeft":"iconLeft_r90N","fullwidth":"fullwidth_yUSG","button":"button_CzNs"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.js
var arrow_left = __webpack_require__(90232);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/link-button/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"opensInNewTab":"Opens in new tab"},"sv":{"opensInNewTab":"Öppnas i ny flik"}}')
;// CONCATENATED MODULE: ./packages/components/src/link-button/LinkButton.tsx
'use client';









/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */ const LinkButton = (param)=>{
    let { children, variant, fullwidth, icon: customIcon, iconPlacement, className, as, size = 'large', ...rest } = param;
    const Component = as || Link/* .Link */.N;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const getIcon = ()=>{
        if (customIcon) return {
            icon: customIcon
        };
        if (rest.target === '_blank') return {
            icon: square_arrow_out_up_right/* ["default"] */.A,
            label: strings.format('opensInNewTab')
        };
        if (iconPlacement === 'left') return {
            icon: arrow_left/* ["default"] */.A
        };
        return {
            icon: arrow_right/* ["default"] */.A
        };
    };
    const iconConfig = getIcon();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Component, {
        className: (0,clsx/* ["default"] */.A)(LinkButton_module.linkButton, variant === 'primary' && LinkButton_module.primary, variant === 'secondary' && LinkButton_module.secondary, variant === 'tertiary' && LinkButton_module.tertiary, variant === 'danger' && LinkButton_module.danger, variant === 'icon' && LinkButton_module.iconBtn, size === 'medium' && LinkButton_module.medium, fullwidth && LinkButton_module.fullwidth, iconPlacement === 'left' && LinkButton_module.iconLeft, className),
        ...rest,
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                className: LinkButton_module.icon,
                icon: iconConfig.icon,
                size: 20,
                "aria-hidden": true
            }),
            iconConfig.label && /*#__PURE__*/ (0,jsx_runtime.jsx)(VisuallyHidden/* .VisuallyHidden */.s, {
                children: iconConfig.label
            })
        ]
    });
};
const Icon = (param)=>{
    let { icon: IconComponent, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
        ...rest
    });
};



},
11728(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(30900);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(57653);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/popover/Popover.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Popover_module = ({"popover":"popover_qr_p","arrow":"arrow_bhQK"});
;// CONCATENATED MODULE: ./packages/components/src/popover/Popover.tsx





const Popover_Popover = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [mergedProps, mergedRef] = (0,utils/* .useContextProps */.JT)(props, ref, Popover/* .PopoverContext */.n);
    const { className, hideArrow = false, offset = 4, ...rest } = mergedProps;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
        className: (0,clsx/* ["default"] */.A)(Popover_module.popover, className),
        offset: offset,
        ref: mergedRef,
        ...rest,
        children: (0,utils/* .composeRenderProps */.HW)(mergedProps.children, (children)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    !hideArrow && /*#__PURE__*/ (0,jsx_runtime.jsx)(OverlayArrow/* .OverlayArrow */.k, {
                        className: Popover_module.arrow,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                            height: 16,
                            viewBox: "0 0 16 16",
                            width: 16,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M0 0 L8 8 L16 0"
                            })
                        })
                    }),
                    children
                ]
            }))
    });
});


},
36795(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  XI: () => (/* binding */ Table_Table),
  VP: () => (/* binding */ Column),
  fI: () => (/* binding */ Row),
  fh: () => (/* binding */ Cell),
  BF: () => (/* binding */ TableBody),
  A0: () => (/* binding */ TableHeader)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// CONCATENATED MODULE: ./packages/components/src/table/Table.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Table_module = ({"table":"table_nvoM","tableHeader":"tableHeader_BmsY","column":"column_NPIT","sortIndicator":"sortIndicator_uz10","sortIconNeutral":"sortIconNeutral_sR1M","selection":"selection_ckia","row":"row_o3yW","cell":"cell_BlIu","narrow":"narrow_Jh7A","medium":"medium_q_Iz","striped":"striped_wp0e"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Table.mjs + 56 modules
var Table = __webpack_require__(97079);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(7079);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Button.mjs
var Button = __webpack_require__(93426);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 2 modules
var Checkbox = __webpack_require__(78959);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/grip-vertical.js
var grip_vertical = __webpack_require__(21436);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up.js
var arrow_up = __webpack_require__(6632);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down.js
var arrow_down = __webpack_require__(43241);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up-down.js
var arrow_up_down = __webpack_require__(98645);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/table/Table.tsx
'use client';






const Table_Table = (param)=>{
    let { size = 'large', striped = false, className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Table */.XI, {
        className: (0,clsx/* ["default"] */.A)(Table_module.table, className, {
            [Table_module.medium]: size === 'medium',
            [Table_module.striped]: striped
        }),
        ...rest
    });
};
const TableHeader = (param)=>{
    let { columns, children, className } = param;
    const { selectionBehavior, selectionMode, allowsDragging } = (0,Table/* .useTableOptions */.mz)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* .TableHeader */.A0, {
        className: (0,clsx/* ["default"] */.A)(className, Table_module.tableHeader),
        children: [
            allowsDragging && /*#__PURE__*/ (0,jsx_runtime.jsx)(Column, {}),
            selectionBehavior === 'toggle' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Column, {
                width: 50,
                children: selectionMode === 'multiple' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* .Checkbox */.S, {
                    className: Table_module.selection,
                    slot: "selection"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionBuilder/* .Collection */.pM, {
                items: columns,
                children: children
            })
        ]
    });
};
const Row = (param)=>{
    let { id, columns, children, className, ...rest } = param;
    const { selectionBehavior, allowsDragging } = (0,Table/* .useTableOptions */.mz)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* .Row */.fI, {
        id: id,
        className: (0,clsx/* ["default"] */.A)(className, Table_module.row),
        ...rest,
        children: [
            allowsDragging && /*#__PURE__*/ (0,jsx_runtime.jsx)(Cell, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                    slot: "drag",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(grip_vertical/* ["default"] */.A, {
                        size: 20
                    })
                })
            }),
            selectionBehavior === 'toggle' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Cell, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* .Checkbox */.S, {
                    className: Table_module.selection,
                    slot: "selection"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionBuilder/* .Collection */.pM, {
                items: columns,
                children: children
            })
        ]
    });
};
const Column = (param)=>{
    let { children, className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Column */.VP, {
        className: (0,clsx/* ["default"] */.A)(className, Table_module.column),
        ...rest,
        children: (param)=>{
            let { allowsSorting, sortDirection } = param;
            const getSortIcon = ()=>{
                if (sortDirection === 'ascending') {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up/* ["default"] */.A, {
                        size: 16
                    });
                }
                if (sortDirection === 'descending') {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* ["default"] */.A, {
                        size: 16
                    });
                }
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_up_down/* ["default"] */.A, {
                    size: 16,
                    className: Table_module.sortIconNeutral
                });
            };
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    children,
                    allowsSorting && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        "aria-hidden": "true",
                        className: Table_module.sortIndicator,
                        children: getSortIcon()
                    })
                ]
            });
        }
    });
};
const Cell = (param)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .Cell */.fh, {
        className: (0,clsx/* ["default"] */.A)(className, Table_module.cell),
        ...rest
    });
};
const TableBody = (param)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* .TableBody */.BF, {
        className: (0,clsx/* ["default"] */.A)(className, Table_module.tableBody),
        ...rest
    });
};


},
20883(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text_Text)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Text.mjs
var Text = __webpack_require__(20987);
;// CONCATENATED MODULE: ./packages/components/src/text/Text.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Text_module = ({"body":"body_Vxmv","body-small":"body-small_JwBE","description":"description_XYgX","description-small":"description-small_tno4","bold":"bold_YLmd","italic":"italic_CnUx"});
;// CONCATENATED MODULE: ./packages/components/src/text/Text.tsx





const DEFAULT_ELEMENT = 'span';
const Text_Text = (param)=>{
    let { children, className, size, isExpressive = false, elementType = DEFAULT_ELEMENT, ...rest } = param;
    const getClassName = ()=>{
        const isDescription = rest.slot === 'description';
        if (isDescription) {
            return size === 'small' ? Text_module["description-small"] : Text_module.description;
        }
        return size === 'small' ? Text_module["body-small"] : Text_module.body;
    };
    const textProps = {
        className: (0,clsx/* ["default"] */.A)(getClassName(), {
            [Text_module.bold]: [
                'b',
                'strong'
            ].includes(elementType),
            [Text_module.italic]: [
                'i',
                'em'
            ].includes(elementType)
        }, className),
        elementType: elementType || DEFAULT_ELEMENT,
        ...isExpressive && {
            'data-expressive': true
        },
        ...rest
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
        ...textProps,
        children: children
    });
};


},
10734(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* reexport */ variables_namespaceObject),
  S: () => (/* reexport */ token_dictionary)
});
// NAMESPACE OBJECT: ./packages/theme/src/lib/style-dictionary-dist/variables.js
var variables_namespaceObject = {};
__webpack_require__.r(variables_namespaceObject);
__webpack_require__.d(variables_namespaceObject, { 
  w$9: () => (backgroundBase),
  _2e: () => (borderColorPrimary),
  l9i: () => (borderColorSubtle),
  A1M: () => (brandPrimary),
  Qni: () => (buttonBackgroundPrimaryBase),
  jc5: () => (colorGray200),
  tK4: () => (field01Base),
  w1t: () => (iconOnColor),
  ak9: () => (layer01Base),
  JI6: () => (layer02Base),
  EWd: () => (stateFocus),
  Q0Q: () => (textOnColor),
  eku: () => (textPrimary) });


;// CONCATENATED MODULE: ./packages/theme/src/lib/style-dictionary-dist/token-dictionary.js
/**
 * Do not edit directly, this file was auto-generated.
 */ /* export default */ const token_dictionary = ({
    base: {
        10: {
            key: "{base.10}",
            $value: "0.125rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.125,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.10}"
            },
            name: "base10",
            attributes: {},
            path: [
                "base",
                "10"
            ]
        },
        15: {
            key: "{base.15}",
            $value: "0.188rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.188,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.15}"
            },
            name: "base15",
            attributes: {},
            path: [
                "base",
                "15"
            ]
        },
        20: {
            key: "{base.20}",
            $value: "0.25rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.25,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.20}"
            },
            name: "base20",
            attributes: {},
            path: [
                "base",
                "20"
            ]
        },
        30: {
            key: "{base.30}",
            $value: "0.375rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.375,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.30}"
            },
            name: "base30",
            attributes: {},
            path: [
                "base",
                "30"
            ]
        },
        40: {
            key: "{base.40}",
            $value: "0.5rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.5,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.40}"
            },
            name: "base40",
            attributes: {},
            path: [
                "base",
                "40"
            ]
        },
        50: {
            key: "{base.50}",
            $value: "0.625rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.625,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.50}"
            },
            name: "base50",
            attributes: {},
            path: [
                "base",
                "50"
            ]
        },
        60: {
            key: "{base.60}",
            $value: "0.75rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.75,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.60}"
            },
            name: "base60",
            attributes: {},
            path: [
                "base",
                "60"
            ]
        },
        70: {
            key: "{base.70}",
            $value: "0.875rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.875,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.70}"
            },
            name: "base70",
            attributes: {},
            path: [
                "base",
                "70"
            ]
        },
        75: {
            key: "{base.75}",
            $value: "0.938rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.938,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.75}"
            },
            name: "base75",
            attributes: {},
            path: [
                "base",
                "75"
            ]
        },
        80: {
            key: "{base.80}",
            $value: "1rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 1,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.80}"
            },
            name: "base80",
            attributes: {},
            path: [
                "base",
                "80"
            ]
        },
        90: {
            key: "{base.90}",
            $value: "1.25rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 1.25,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.90}"
            },
            name: "base90",
            attributes: {},
            path: [
                "base",
                "90"
            ]
        },
        100: {
            key: "{base.100}",
            $value: "1.5rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 1.5,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.100}"
            },
            name: "base100",
            attributes: {},
            path: [
                "base",
                "100"
            ]
        },
        110: {
            key: "{base.110}",
            $value: "1.75rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 1.75,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.110}"
            },
            name: "base110",
            attributes: {},
            path: [
                "base",
                "110"
            ]
        },
        120: {
            key: "{base.120}",
            $value: "2rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 2,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.120}"
            },
            name: "base120",
            attributes: {},
            path: [
                "base",
                "120"
            ]
        },
        130: {
            key: "{base.130}",
            $value: "2.5rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 2.5,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.130}"
            },
            name: "base130",
            attributes: {},
            path: [
                "base",
                "130"
            ]
        },
        140: {
            key: "{base.140}",
            $value: "2.75rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 2.75,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.140}"
            },
            name: "base140",
            attributes: {},
            path: [
                "base",
                "140"
            ]
        },
        150: {
            key: "{base.150}",
            $value: "3rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 3,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.150}"
            },
            name: "base150",
            attributes: {},
            path: [
                "base",
                "150"
            ]
        },
        "00": {
            key: "{base.00}",
            $type: "dimension",
            $value: "0rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            original: {
                $type: "dimension",
                $value: {
                    value: 0,
                    unit: "rem"
                },
                key: "{base.00}"
            },
            name: "base00",
            attributes: {},
            path: [
                "base",
                "00"
            ]
        },
        "05": {
            key: "{base.05}",
            $value: "0.063rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.063,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.05}"
            },
            name: "base05",
            attributes: {},
            path: [
                "base",
                "05"
            ]
        }
    },
    windowSizes: {
        sm: {
            key: "{windowSizes.sm}",
            $value: "480px",
            $description: "Liten skärmstorlek. 480px.",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "480px",
                $description: "Liten skärmstorlek. 480px.",
                $type: "dimension",
                key: "{windowSizes.sm}"
            },
            name: "windowSizesSm",
            attributes: {},
            path: [
                "windowSizes",
                "sm"
            ]
        },
        md: {
            key: "{windowSizes.md}",
            $value: "768px",
            $description: "Mellanstor skärmstorlek. 768px.",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "768px",
                $description: "Mellanstor skärmstorlek. 768px.",
                $type: "dimension",
                key: "{windowSizes.md}"
            },
            name: "windowSizesMd",
            attributes: {},
            path: [
                "windowSizes",
                "md"
            ]
        },
        lg: {
            key: "{windowSizes.lg}",
            $value: "1024px",
            $description: "Stor skärmstorlek. 1024px.",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "1024px",
                $description: "Stor skärmstorlek. 1024px.",
                $type: "dimension",
                key: "{windowSizes.lg}"
            },
            name: "windowSizesLg",
            attributes: {},
            path: [
                "windowSizes",
                "lg"
            ]
        },
        xl: {
            key: "{windowSizes.xl}",
            $value: "1280px",
            $description: "Extra stor skärmstorlek. 1280px.",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "1280px",
                $description: "Extra stor skärmstorlek. 1280px.",
                $type: "dimension",
                key: "{windowSizes.xl}"
            },
            name: "windowSizesXl",
            attributes: {},
            path: [
                "windowSizes",
                "xl"
            ]
        }
    },
    breakpoints: {
        xs: {
            key: "{breakpoints.xs}",
            $value: "(max-width: calc(480px - 1px))",
            $description: "Extra liten skärm. Upp till 479px (max-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(max-width: calc({windowSizes.sm} - 1px))",
                $description: "Extra liten skärm. Upp till 479px (max-width).",
                $type: "string",
                key: "{breakpoints.xs}"
            },
            name: "breakpointsXs",
            attributes: {},
            path: [
                "breakpoints",
                "xs"
            ]
        },
        sm: {
            key: "{breakpoints.sm}",
            $value: "(min-width: 480px)",
            $description: "Liten skärm och uppåt. Från 480px (min-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(min-width: {windowSizes.sm})",
                $description: "Liten skärm och uppåt. Från 480px (min-width).",
                $type: "string",
                key: "{breakpoints.sm}"
            },
            name: "breakpointsSm",
            attributes: {},
            path: [
                "breakpoints",
                "sm"
            ]
        },
        md: {
            key: "{breakpoints.md}",
            $value: "(min-width: 768px)",
            $description: "Mellanstor skärm och uppåt. Från 768px (min-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(min-width: {windowSizes.md})",
                $description: "Mellanstor skärm och uppåt. Från 768px (min-width).",
                $type: "string",
                key: "{breakpoints.md}"
            },
            name: "breakpointsMd",
            attributes: {},
            path: [
                "breakpoints",
                "md"
            ]
        },
        lg: {
            key: "{breakpoints.lg}",
            $value: "(min-width: 1024px)",
            $description: "Stor skärm och uppåt. Från 1024px (min-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(min-width: {windowSizes.lg})",
                $description: "Stor skärm och uppåt. Från 1024px (min-width).",
                $type: "string",
                key: "{breakpoints.lg}"
            },
            name: "breakpointsLg",
            attributes: {},
            path: [
                "breakpoints",
                "lg"
            ]
        },
        xl: {
            key: "{breakpoints.xl}",
            $value: "(min-width: 1280px)",
            $description: "Extra stor skärm och uppåt. Från 1280px (min-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(min-width: {windowSizes.xl})",
                $description: "Extra stor skärm och uppåt. Från 1280px (min-width).",
                $type: "string",
                key: "{breakpoints.xl}"
            },
            name: "breakpointsXl",
            attributes: {},
            path: [
                "breakpoints",
                "xl"
            ]
        }
    },
    button: {
        background: {
            primary: {
                base: {
                    key: "{button.background.primary.base}",
                    $value: "light-dark(#143c50, #2e7ca5)",
                    $description: "Färg på primärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.150}, {color.blue.100})",
                        $description: "Färg på primärknapp",
                        $type: "string",
                        key: "{button.background.primary.base}"
                    },
                    name: "buttonBackgroundPrimaryBase",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "primary",
                        "base"
                    ]
                },
                hover: {
                    key: "{button.background.primary.hover}",
                    $value: "light-dark(#25607f, #25607f)",
                    $description: "Hover state på primärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.130}, {color.blue.130})",
                        $description: "Hover state på primärknapp",
                        $type: "string",
                        key: "{button.background.primary.hover}"
                    },
                    name: "buttonBackgroundPrimaryHover",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "primary",
                        "hover"
                    ]
                },
                active: {
                    key: "{button.background.primary.active}",
                    $value: "light-dark(#2e7ca5, #143c50)",
                    $description: "Active state för primärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.100}, {color.blue.150})",
                        $description: "Active state för primärknapp",
                        $type: "string",
                        key: "{button.background.primary.active}"
                    },
                    name: "buttonBackgroundPrimaryActive",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "primary",
                        "active"
                    ]
                }
            },
            secondary: {
                base: {
                    key: "{button.background.secondary.base}",
                    $value: "transparent",
                    $description: "Färg på sekundärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "transparent",
                        $description: "Färg på sekundärknapp",
                        $type: "string",
                        key: "{button.background.secondary.base}"
                    },
                    name: "buttonBackgroundSecondaryBase",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "secondary",
                        "base"
                    ]
                },
                hover: {
                    key: "{button.background.secondary.hover}",
                    $value: "light-dark(#0000000d, #ffffff21)",
                    $description: "Hover state på sekundärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.black.opacity5}, {color.white.opacity13})",
                        $description: "Hover state på sekundärknapp",
                        $type: "string",
                        key: "{button.background.secondary.hover}"
                    },
                    name: "buttonBackgroundSecondaryHover",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "secondary",
                        "hover"
                    ]
                },
                active: {
                    key: "{button.background.secondary.active}",
                    $value: "light-dark(#0000001a, #ffffff26)",
                    $description: "Active state för sekundärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.black.opacity10}, {color.white.opacity15})",
                        $description: "Active state för sekundärknapp",
                        $type: "string",
                        key: "{button.background.secondary.active}"
                    },
                    name: "buttonBackgroundSecondaryActive",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "secondary",
                        "active"
                    ]
                }
            },
            tertiary: {
                hover: {
                    key: "{button.background.tertiary.hover}",
                    $value: "light-dark(#0000000d, #ffffff21)",
                    $description: "Hover state för tertiär knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.black.opacity5}, {color.white.opacity13})",
                        $description: "Hover state för tertiär knapp",
                        $type: "string",
                        key: "{button.background.tertiary.hover}"
                    },
                    name: "buttonBackgroundTertiaryHover",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "tertiary",
                        "hover"
                    ]
                },
                active: {
                    key: "{button.background.tertiary.active}",
                    $value: "light-dark(#0000001a, #ffffff26)",
                    $description: "Active state för tertiär knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.black.opacity10}, {color.white.opacity15})",
                        $description: "Active state för tertiär knapp",
                        $type: "string",
                        key: "{button.background.tertiary.active}"
                    },
                    name: "buttonBackgroundTertiaryActive",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "tertiary",
                        "active"
                    ]
                }
            },
            danger: {
                base: {
                    key: "{button.background.danger.base}",
                    $value: "light-dark(#e62323, #e62323)",
                    $description: "Färg på danger knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.signalRed.100}, {color.signalRed.100})",
                        $description: "Färg på danger knapp",
                        $type: "string",
                        key: "{button.background.danger.base}"
                    },
                    name: "buttonBackgroundDangerBase",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "danger",
                        "base"
                    ]
                },
                hover: {
                    key: "{button.background.danger.hover}",
                    $value: "light-dark(#bc1d1d, #bc1d1d)",
                    $description: "Hover state för danger knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.signalRed.120}, {color.signalRed.120})",
                        $description: "Hover state för danger knapp",
                        $type: "string",
                        key: "{button.background.danger.hover}"
                    },
                    name: "buttonBackgroundDangerHover",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "danger",
                        "hover"
                    ]
                },
                active: {
                    key: "{button.background.danger.active}",
                    $value: "light-dark(#7d1313, #7d1313)",
                    $description: "Active state för danger knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.signalRed.150}, {color.signalRed.150})",
                        $description: "Active state för danger knapp",
                        $type: "string",
                        key: "{button.background.danger.active}"
                    },
                    name: "buttonBackgroundDangerActive",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "danger",
                        "active"
                    ]
                }
            },
            disabled: {
                key: "{button.background.disabled}",
                $value: "light-dark(#0000000d,#ffffff21)",
                $description: "Disabled state för knappar",
                filePath: "packages/theme/tokens/buttons.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.black.opacity5},{color.white.opacity13})",
                    $description: "Disabled state för knappar",
                    $type: "string",
                    key: "{button.background.disabled}"
                },
                name: "buttonBackgroundDisabled",
                attributes: {},
                path: [
                    "button",
                    "background",
                    "disabled"
                ]
            }
        },
        border: {
            secondary: {
                key: "{button.border.secondary}",
                $value: "light-dark(#143c50, #f2f2f2)",
                $description: "Kantfärg för sekundärknapp",
                filePath: "packages/theme/tokens/buttons.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.blue.150}, {color.gray.10})",
                    $description: "Kantfärg för sekundärknapp",
                    $type: "string",
                    key: "{button.border.secondary}"
                },
                name: "buttonBorderSecondary",
                attributes: {},
                path: [
                    "button",
                    "border",
                    "secondary"
                ]
            }
        },
        icon: {
            hover: {
                key: "{button.icon.hover}",
                $value: "light-dark(#0000000d, #ffffff21)",
                $description: "Hover state för ikonknappar",
                filePath: "packages/theme/tokens/buttons.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.black.opacity5}, {color.white.opacity13})",
                    $description: "Hover state för ikonknappar",
                    $type: "string",
                    key: "{button.icon.hover}"
                },
                name: "buttonIconHover",
                attributes: {},
                path: [
                    "button",
                    "icon",
                    "hover"
                ]
            },
            active: {
                key: "{button.icon.active}",
                $value: "light-dark(#00000033, #ffffff33)",
                $description: "Active state för ikoner",
                filePath: "packages/theme/tokens/buttons.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark(#00000033, #ffffff33)",
                    $description: "Active state för ikoner",
                    $type: "string",
                    key: "{button.icon.active}"
                },
                name: "buttonIconActive",
                attributes: {},
                path: [
                    "button",
                    "icon",
                    "active"
                ]
            }
        }
    },
    color: {
        black: {
            base: {
                key: "{color.black.base}",
                $value: "#000",
                $description: "Black",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#000",
                    $description: "Black",
                    $type: "color",
                    key: "{color.black.base}"
                },
                name: "colorBlackBase",
                attributes: {},
                path: [
                    "color",
                    "black",
                    "base"
                ]
            },
            hover: {
                key: "{color.black.hover}",
                $value: "#0d0d0d",
                $description: "Black hover",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0d0d0d",
                    $description: "Black hover",
                    $type: "color",
                    key: "{color.black.hover}"
                },
                name: "colorBlackHover",
                attributes: {},
                path: [
                    "color",
                    "black",
                    "hover"
                ]
            },
            opacity5: {
                key: "{color.black.opacity5}",
                $value: "#0000000d",
                $description: "Black with 5% opacity",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0000000d",
                    $description: "Black with 5% opacity",
                    $type: "color",
                    key: "{color.black.opacity5}"
                },
                name: "colorBlackOpacity5",
                attributes: {},
                path: [
                    "color",
                    "black",
                    "opacity5"
                ]
            },
            opacity10: {
                key: "{color.black.opacity10}",
                $value: "#0000001a",
                $description: "Black with 10% opacity",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0000001a",
                    $description: "Black with 10% opacity",
                    $type: "color",
                    key: "{color.black.opacity10}"
                },
                name: "colorBlackOpacity10",
                attributes: {},
                path: [
                    "color",
                    "black",
                    "opacity10"
                ]
            }
        },
        white: {
            base: {
                key: "{color.white.base}",
                $value: "#fff",
                $description: "White",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fff",
                    $description: "White",
                    $type: "color",
                    key: "{color.white.base}"
                },
                name: "colorWhiteBase",
                attributes: {},
                path: [
                    "color",
                    "white",
                    "base"
                ]
            },
            hover: {
                key: "{color.white.hover}",
                $value: "#e6e6e6",
                $description: "White hover",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e6e6e6",
                    $description: "White hover",
                    $type: "color",
                    key: "{color.white.hover}"
                },
                name: "colorWhiteHover",
                attributes: {},
                path: [
                    "color",
                    "white",
                    "hover"
                ]
            },
            opacity13: {
                key: "{color.white.opacity13}",
                $value: "#ffffff21",
                $description: "White with 13% opacity",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffffff21",
                    $description: "White with 13% opacity",
                    $type: "color",
                    key: "{color.white.opacity13}"
                },
                name: "colorWhiteOpacity13",
                attributes: {},
                path: [
                    "color",
                    "white",
                    "opacity13"
                ]
            },
            opacity15: {
                key: "{color.white.opacity15}",
                $value: "#ffffff26",
                $description: "White with 15% opacity",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffffff26",
                    $description: "White with 15% opacity",
                    $type: "color",
                    key: "{color.white.opacity15}"
                },
                name: "colorWhiteOpacity15",
                attributes: {},
                path: [
                    "color",
                    "white",
                    "opacity15"
                ]
            }
        },
        gray: {
            10: {
                key: "{color.gray.10}",
                $value: "#f2f2f2",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f2f2f2",
                    $type: "color",
                    key: "{color.gray.10}"
                },
                name: "colorGray10",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "10"
                ]
            },
            20: {
                key: "{color.gray.20}",
                $value: "#e6e6e6",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e6e6e6",
                    $type: "color",
                    key: "{color.gray.20}"
                },
                name: "colorGray20",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "20"
                ]
            },
            30: {
                key: "{color.gray.30}",
                $value: "#d9d9d9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d9d9d9",
                    $type: "color",
                    key: "{color.gray.30}"
                },
                name: "colorGray30",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "30"
                ]
            },
            40: {
                key: "{color.gray.40}",
                $value: "#ccc",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ccc",
                    $type: "color",
                    key: "{color.gray.40}"
                },
                name: "colorGray40",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "40"
                ]
            },
            50: {
                key: "{color.gray.50}",
                $value: "#bfbfbf",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#bfbfbf",
                    $type: "color",
                    key: "{color.gray.50}"
                },
                name: "colorGray50",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "50"
                ]
            },
            60: {
                key: "{color.gray.60}",
                $value: "#b3b3b3",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#b3b3b3",
                    $type: "color",
                    key: "{color.gray.60}"
                },
                name: "colorGray60",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "60"
                ]
            },
            70: {
                key: "{color.gray.70}",
                $value: "#a6a6a6",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#a6a6a6",
                    $type: "color",
                    key: "{color.gray.70}"
                },
                name: "colorGray70",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "70"
                ]
            },
            80: {
                key: "{color.gray.80}",
                $value: "#999",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#999",
                    $type: "color",
                    key: "{color.gray.80}"
                },
                name: "colorGray80",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "80"
                ]
            },
            90: {
                key: "{color.gray.90}",
                $value: "#8c8c8c",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#8c8c8c",
                    $type: "color",
                    key: "{color.gray.90}"
                },
                name: "colorGray90",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "90"
                ]
            },
            100: {
                key: "{color.gray.100}",
                $value: "#808080",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#808080",
                    $type: "color",
                    key: "{color.gray.100}"
                },
                name: "colorGray100",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "100"
                ]
            },
            110: {
                key: "{color.gray.110}",
                $value: "#737373",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#737373",
                    $type: "color",
                    key: "{color.gray.110}"
                },
                name: "colorGray110",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "110"
                ]
            },
            120: {
                key: "{color.gray.120}",
                $value: "#666",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#666",
                    $type: "color",
                    key: "{color.gray.120}"
                },
                name: "colorGray120",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "120"
                ]
            },
            130: {
                key: "{color.gray.130}",
                $value: "#5d5d5d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#5d5d5d",
                    $type: "color",
                    key: "{color.gray.130}"
                },
                name: "colorGray130",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "130"
                ]
            },
            140: {
                key: "{color.gray.140}",
                $value: "#525252",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#525252",
                    $type: "color",
                    key: "{color.gray.140}"
                },
                name: "colorGray140",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "140"
                ]
            },
            150: {
                key: "{color.gray.150}",
                $value: "#474747",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#474747",
                    $type: "color",
                    key: "{color.gray.150}"
                },
                name: "colorGray150",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "150"
                ]
            },
            160: {
                key: "{color.gray.160}",
                $value: "#383838",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#383838",
                    $type: "color",
                    key: "{color.gray.160}"
                },
                name: "colorGray160",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "160"
                ]
            },
            170: {
                key: "{color.gray.170}",
                $value: "#333",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#333",
                    $type: "color",
                    key: "{color.gray.170}"
                },
                name: "colorGray170",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "170"
                ]
            },
            180: {
                key: "{color.gray.180}",
                $value: "#262626",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#262626",
                    $type: "color",
                    key: "{color.gray.180}"
                },
                name: "colorGray180",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "180"
                ]
            },
            190: {
                key: "{color.gray.190}",
                $value: "#212121",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#212121",
                    $type: "color",
                    key: "{color.gray.190}"
                },
                name: "colorGray190",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "190"
                ]
            },
            200: {
                key: "{color.gray.200}",
                $value: "#171717",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#171717",
                    $type: "color",
                    key: "{color.gray.200}"
                },
                name: "colorGray200",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "200"
                ]
            }
        },
        blue: {
            10: {
                key: "{color.blue.10}",
                $value: "#eaf2f6",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#eaf2f6",
                    $type: "color",
                    key: "{color.blue.10}"
                },
                name: "colorBlue10",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "10"
                ]
            },
            20: {
                key: "{color.blue.20}",
                $value: "#d5e5ed",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d5e5ed",
                    $type: "color",
                    key: "{color.blue.20}"
                },
                name: "colorBlue20",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "20"
                ]
            },
            40: {
                key: "{color.blue.40}",
                $value: "#abcbdb",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#abcbdb",
                    $type: "color",
                    key: "{color.blue.40}"
                },
                name: "colorBlue40",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "40"
                ]
            },
            50: {
                key: "{color.blue.50}",
                $value: "#94BCD1",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#94BCD1",
                    $type: "color",
                    key: "{color.blue.50}"
                },
                name: "colorBlue50",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "50"
                ]
            },
            60: {
                key: "{color.blue.60}",
                $value: "#82b0c9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#82b0c9",
                    $type: "color",
                    key: "{color.blue.60}"
                },
                name: "colorBlue60",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "60"
                ]
            },
            70: {
                key: "{color.blue.70}",
                $value: "#6CA3C0",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#6CA3C0",
                    $type: "color",
                    key: "{color.blue.70}"
                },
                name: "colorBlue70",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "70"
                ]
            },
            80: {
                key: "{color.blue.80}",
                $value: "#5897b8",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#5897b8",
                    $type: "color",
                    key: "{color.blue.80}"
                },
                name: "colorBlue80",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "80"
                ]
            },
            90: {
                key: "{color.blue.90}",
                $value: "#4289ad",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#4289ad",
                    $type: "color",
                    key: "{color.blue.90}"
                },
                name: "colorBlue90",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "90"
                ]
            },
            100: {
                key: "{color.blue.100}",
                $value: "#2e7ca5",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#2e7ca5",
                    $type: "color",
                    key: "{color.blue.100}"
                },
                name: "colorBlue100",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "100"
                ]
            },
            110: {
                key: "{color.blue.110}",
                $value: "#2C7399",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#2C7399",
                    $type: "color",
                    key: "{color.blue.110}"
                },
                name: "colorBlue110",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "110"
                ]
            },
            120: {
                key: "{color.blue.120}",
                $value: "#29698C",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#29698C",
                    $type: "color",
                    key: "{color.blue.120}"
                },
                name: "colorBlue120",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "120"
                ]
            },
            130: {
                key: "{color.blue.130}",
                $value: "#25607f",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#25607f",
                    $type: "color",
                    key: "{color.blue.130}"
                },
                name: "colorBlue130",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "130"
                ]
            },
            150: {
                key: "{color.blue.150}",
                $value: "#143c50",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#143c50",
                    $type: "color",
                    key: "{color.blue.150}"
                },
                name: "colorBlue150",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "150"
                ]
            }
        },
        purple: {
            80: {
                key: "{color.purple.80}",
                $value: "#b46ab4",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#b46ab4",
                    $type: "color",
                    key: "{color.purple.80}"
                },
                name: "colorPurple80",
                attributes: {},
                path: [
                    "color",
                    "purple",
                    "80"
                ]
            },
            110: {
                key: "{color.purple.110}",
                $value: "#954b95",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#954b95",
                    $type: "color",
                    key: "{color.purple.110}"
                },
                name: "colorPurple110",
                attributes: {},
                path: [
                    "color",
                    "purple",
                    "110"
                ]
            }
        },
        red: {
            100: {
                key: "{color.red.100}",
                $value: "#b90835",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#b90835",
                    $type: "color",
                    key: "{color.red.100}"
                },
                name: "colorRed100",
                attributes: {},
                path: [
                    "color",
                    "red",
                    "100"
                ]
            }
        },
        orange: {
            100: {
                key: "{color.orange.100}",
                $value: "oklch(0.66 0.18 45)",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "oklch(0.66 0.18 45)",
                    $type: "color",
                    key: "{color.orange.100}"
                },
                name: "colorOrange100",
                attributes: {},
                path: [
                    "color",
                    "orange",
                    "100"
                ]
            }
        },
        signalBlue: {
            10: {
                key: "{color.signalBlue.10}",
                $value: "#eaf2f6",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#eaf2f6",
                    $type: "color",
                    key: "{color.signalBlue.10}"
                },
                name: "colorSignalBlue10",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "10"
                ]
            },
            20: {
                key: "{color.signalBlue.20}",
                $value: "#d5e5ed",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d5e5ed",
                    $type: "color",
                    key: "{color.signalBlue.20}"
                },
                name: "colorSignalBlue20",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "20"
                ]
            },
            100: {
                key: "{color.signalBlue.100}",
                $value: "#06c",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#06c",
                    $type: "color",
                    key: "{color.signalBlue.100}"
                },
                name: "colorSignalBlue100",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "100"
                ]
            },
            170: {
                key: "{color.signalBlue.170}",
                $value: "#162b33",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#162b33",
                    $type: "color",
                    key: "{color.signalBlue.170}"
                },
                name: "colorSignalBlue170",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "170"
                ]
            },
            180: {
                key: "{color.signalBlue.180}",
                $value: "#112127",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#112127",
                    $type: "color",
                    key: "{color.signalBlue.180}"
                },
                name: "colorSignalBlue180",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "180"
                ]
            }
        },
        signalGreen: {
            20: {
                key: "{color.signalGreen.20}",
                $value: "#d5f2d9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d5f2d9",
                    $type: "color",
                    key: "{color.signalGreen.20}"
                },
                name: "colorSignalGreen20",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "20"
                ]
            },
            30: {
                key: "{color.signalGreen.30}",
                $value: "#bae5c5",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#bae5c5",
                    $type: "color",
                    key: "{color.signalGreen.30}"
                },
                name: "colorSignalGreen30",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "30"
                ]
            },
            100: {
                key: "{color.signalGreen.100}",
                $value: "#008d3c",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#008d3c",
                    $type: "color",
                    key: "{color.signalGreen.100}"
                },
                name: "colorSignalGreen100",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "100"
                ]
            },
            150: {
                key: "{color.signalGreen.150}",
                $value: "#194B33",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#194B33",
                    $type: "color",
                    key: "{color.signalGreen.150}"
                },
                name: "colorSignalGreen150",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "150"
                ]
            },
            170: {
                key: "{color.signalGreen.170}",
                $value: "#163328",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#163328",
                    $type: "color",
                    key: "{color.signalGreen.170}"
                },
                name: "colorSignalGreen170",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "170"
                ]
            },
            180: {
                key: "{color.signalGreen.180}",
                $value: "#112722",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#112722",
                    $type: "color",
                    key: "{color.signalGreen.180}"
                },
                name: "colorSignalGreen180",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "180"
                ]
            }
        },
        signalYellow: {
            10: {
                key: "{color.signalYellow.10}",
                $value: "#fff8e2",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fff8e2",
                    $type: "color",
                    key: "{color.signalYellow.10}"
                },
                name: "colorSignalYellow10",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "10"
                ]
            },
            20: {
                key: "{color.signalYellow.20}",
                $value: "#fff1cd",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fff1cd",
                    $type: "color",
                    key: "{color.signalYellow.20}"
                },
                name: "colorSignalYellow20",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "20"
                ]
            },
            30: {
                key: "{color.signalYellow.30}",
                $value: "#ffeab8",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffeab8",
                    $type: "color",
                    key: "{color.signalYellow.30}"
                },
                name: "colorSignalYellow30",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "30"
                ]
            },
            40: {
                key: "{color.signalYellow.40}",
                $value: "#ffe3a3",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffe3a3",
                    $type: "color",
                    key: "{color.signalYellow.40}"
                },
                name: "colorSignalYellow40",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "40"
                ]
            },
            50: {
                key: "{color.signalYellow.50}",
                $value: "#ffdc8b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffdc8b",
                    $type: "color",
                    key: "{color.signalYellow.50}"
                },
                name: "colorSignalYellow50",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "50"
                ]
            },
            60: {
                key: "{color.signalYellow.60}",
                $value: "#ffd47b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffd47b",
                    $type: "color",
                    key: "{color.signalYellow.60}"
                },
                name: "colorSignalYellow60",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "60"
                ]
            },
            70: {
                key: "{color.signalYellow.70}",
                $value: "#fdcd5d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fdcd5d",
                    $type: "color",
                    key: "{color.signalYellow.70}"
                },
                name: "colorSignalYellow70",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "70"
                ]
            },
            80: {
                key: "{color.signalYellow.80}",
                $value: "#fbc640",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fbc640",
                    $type: "color",
                    key: "{color.signalYellow.80}"
                },
                name: "colorSignalYellow80",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "80"
                ]
            },
            90: {
                key: "{color.signalYellow.90}",
                $value: "#fabf1b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fabf1b",
                    $type: "color",
                    key: "{color.signalYellow.90}"
                },
                name: "colorSignalYellow90",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "90"
                ]
            },
            100: {
                key: "{color.signalYellow.100}",
                $value: "#fab900",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fab900",
                    $type: "color",
                    key: "{color.signalYellow.100}"
                },
                name: "colorSignalYellow100",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "100"
                ]
            },
            110: {
                key: "{color.signalYellow.110}",
                $value: "#daa105",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#daa105",
                    $type: "color",
                    key: "{color.signalYellow.110}"
                },
                name: "colorSignalYellow110",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "110"
                ]
            },
            120: {
                key: "{color.signalYellow.120}",
                $value: "#bd8c1e",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#bd8c1e",
                    $type: "color",
                    key: "{color.signalYellow.120}"
                },
                name: "colorSignalYellow120",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "120"
                ]
            },
            130: {
                key: "{color.signalYellow.130}",
                $value: "#a17927",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#a17927",
                    $type: "color",
                    key: "{color.signalYellow.130}"
                },
                name: "colorSignalYellow130",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "130"
                ]
            },
            140: {
                key: "{color.signalYellow.140}",
                $value: "#88672a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#88672a",
                    $type: "color",
                    key: "{color.signalYellow.140}"
                },
                name: "colorSignalYellow140",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "140"
                ]
            },
            150: {
                key: "{color.signalYellow.150}",
                $value: "#70562b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#70562b",
                    $type: "color",
                    key: "{color.signalYellow.150}"
                },
                name: "colorSignalYellow150",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "150"
                ]
            },
            160: {
                key: "{color.signalYellow.160}",
                $value: "#5a4629",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#5a4629",
                    $type: "color",
                    key: "{color.signalYellow.160}"
                },
                name: "colorSignalYellow160",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "160"
                ]
            },
            170: {
                key: "{color.signalYellow.170}",
                $value: "#453826",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#453826",
                    $type: "color",
                    key: "{color.signalYellow.170}"
                },
                name: "colorSignalYellow170",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "170"
                ]
            },
            180: {
                key: "{color.signalYellow.180}",
                $value: "#322a20",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#322a20",
                    $type: "color",
                    key: "{color.signalYellow.180}"
                },
                name: "colorSignalYellow180",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "180"
                ]
            },
            190: {
                key: "{color.signalYellow.190}",
                $value: "#201c18",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#201c18",
                    $type: "color",
                    key: "{color.signalYellow.190}"
                },
                name: "colorSignalYellow190",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "190"
                ]
            },
            200: {
                key: "{color.signalYellow.200}",
                $value: "#0f0e0e",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0f0e0e",
                    $type: "color",
                    key: "{color.signalYellow.200}"
                },
                name: "colorSignalYellow200",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "200"
                ]
            }
        },
        signalRed: {
            10: {
                key: "{color.signalRed.10}",
                $value: "#ffefef",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffefef",
                    $type: "color",
                    key: "{color.signalRed.10}"
                },
                name: "colorSignalRed10",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "10"
                ]
            },
            20: {
                key: "{color.signalRed.20}",
                $value: "#ffdfdf",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffdfdf",
                    $type: "color",
                    key: "{color.signalRed.20}"
                },
                name: "colorSignalRed20",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "20"
                ]
            },
            30: {
                key: "{color.signalRed.30}",
                $value: "#fcc8c8",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fcc8c8",
                    $type: "color",
                    key: "{color.signalRed.30}"
                },
                name: "colorSignalRed30",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "30"
                ]
            },
            40: {
                key: "{color.signalRed.40}",
                $value: "#f9b0b0",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f9b0b0",
                    $type: "color",
                    key: "{color.signalRed.40}"
                },
                name: "colorSignalRed40",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "40"
                ]
            },
            50: {
                key: "{color.signalRed.50}",
                $value: "#f69999",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f69999",
                    $type: "color",
                    key: "{color.signalRed.50}"
                },
                name: "colorSignalRed50",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "50"
                ]
            },
            60: {
                key: "{color.signalRed.60}",
                $value: "#f38181",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f38181",
                    $type: "color",
                    key: "{color.signalRed.60}"
                },
                name: "colorSignalRed60",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "60"
                ]
            },
            70: {
                key: "{color.signalRed.70}",
                $value: "#ef6a6a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ef6a6a",
                    $type: "color",
                    key: "{color.signalRed.70}"
                },
                name: "colorSignalRed70",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "70"
                ]
            },
            80: {
                key: "{color.signalRed.80}",
                $value: "#EC5252",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#EC5252",
                    $type: "color",
                    key: "{color.signalRed.80}"
                },
                name: "colorSignalRed80",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "80"
                ]
            },
            90: {
                key: "{color.signalRed.90}",
                $value: "#e93b3b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e93b3b",
                    $type: "color",
                    key: "{color.signalRed.90}"
                },
                name: "colorSignalRed90",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "90"
                ]
            },
            100: {
                key: "{color.signalRed.100}",
                $value: "#e62323",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e62323",
                    $type: "color",
                    key: "{color.signalRed.100}"
                },
                name: "colorSignalRed100",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "100"
                ]
            },
            110: {
                key: "{color.signalRed.110}",
                $value: "#d12020",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d12020",
                    $type: "color",
                    key: "{color.signalRed.110}"
                },
                name: "colorSignalRed110",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "110"
                ]
            },
            120: {
                key: "{color.signalRed.120}",
                $value: "#bc1d1d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#bc1d1d",
                    $type: "color",
                    key: "{color.signalRed.120}"
                },
                name: "colorSignalRed120",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "120"
                ]
            },
            130: {
                key: "{color.signalRed.130}",
                $value: "#a71919",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#a71919",
                    $type: "color",
                    key: "{color.signalRed.130}"
                },
                name: "colorSignalRed130",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "130"
                ]
            },
            140: {
                key: "{color.signalRed.140}",
                $value: "#921616",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#921616",
                    $type: "color",
                    key: "{color.signalRed.140}"
                },
                name: "colorSignalRed140",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "140"
                ]
            },
            150: {
                key: "{color.signalRed.150}",
                $value: "#7d1313",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#7d1313",
                    $type: "color",
                    key: "{color.signalRed.150}"
                },
                name: "colorSignalRed150",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "150"
                ]
            },
            160: {
                key: "{color.signalRed.160}",
                $value: "#691010",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#691010",
                    $type: "color",
                    key: "{color.signalRed.160}"
                },
                name: "colorSignalRed160",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "160"
                ]
            },
            170: {
                key: "{color.signalRed.170}",
                $value: "#540d0d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#540d0d",
                    $type: "color",
                    key: "{color.signalRed.170}"
                },
                name: "colorSignalRed170",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "170"
                ]
            },
            180: {
                key: "{color.signalRed.180}",
                $value: "#3f0a0a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#3f0a0a",
                    $type: "color",
                    key: "{color.signalRed.180}"
                },
                name: "colorSignalRed180",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "180"
                ]
            },
            190: {
                key: "{color.signalRed.190}",
                $value: "#2a0606",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#2a0606",
                    $type: "color",
                    key: "{color.signalRed.190}"
                },
                name: "colorSignalRed190",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "190"
                ]
            },
            200: {
                key: "{color.signalRed.200}",
                $value: "#150303",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#150303",
                    $type: "color",
                    key: "{color.signalRed.200}"
                },
                name: "colorSignalRed200",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "200"
                ]
            }
        },
        sky: {
            20: {
                key: "{color.sky.20}",
                $value: "#cde6f3",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#cde6f3",
                    $type: "color",
                    key: "{color.sky.20}"
                },
                name: "colorSky20",
                attributes: {},
                path: [
                    "color",
                    "sky",
                    "20"
                ]
            },
            60: {
                key: "{color.sky.60}",
                $value: "#4a95df",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#4a95df",
                    $type: "color",
                    key: "{color.sky.60}"
                },
                name: "colorSky60",
                attributes: {},
                path: [
                    "color",
                    "sky",
                    "60"
                ]
            },
            180: {
                key: "{color.sky.180}",
                $value: "#101037",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#101037",
                    $type: "color",
                    key: "{color.sky.180}"
                },
                name: "colorSky180",
                attributes: {},
                path: [
                    "color",
                    "sky",
                    "180"
                ]
            }
        },
        mint: {
            20: {
                key: "{color.mint.20}",
                $value: "#d5f2d9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d5f2d9",
                    $type: "color",
                    key: "{color.mint.20}"
                },
                name: "colorMint20",
                attributes: {},
                path: [
                    "color",
                    "mint",
                    "20"
                ]
            },
            60: {
                key: "{color.mint.60}",
                $value: "#75b47d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#75b47d",
                    $type: "color",
                    key: "{color.mint.60}"
                },
                name: "colorMint60",
                attributes: {},
                path: [
                    "color",
                    "mint",
                    "60"
                ]
            },
            180: {
                key: "{color.mint.180}",
                $value: "#07270b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#07270b",
                    $type: "color",
                    key: "{color.mint.180}"
                },
                name: "colorMint180",
                attributes: {},
                path: [
                    "color",
                    "mint",
                    "180"
                ]
            }
        },
        cream: {
            20: {
                key: "{color.cream.20}",
                $value: "#fff5db",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fff5db",
                    $type: "color",
                    key: "{color.cream.20}"
                },
                name: "colorCream20",
                attributes: {},
                path: [
                    "color",
                    "cream",
                    "20"
                ]
            },
            60: {
                key: "{color.cream.60}",
                $value: "#ecbe4a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ecbe4a",
                    $type: "color",
                    key: "{color.cream.60}"
                },
                name: "colorCream60",
                attributes: {},
                path: [
                    "color",
                    "cream",
                    "60"
                ]
            },
            180: {
                key: "{color.cream.180}",
                $value: "#2c2719",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#2c2719",
                    $type: "color",
                    key: "{color.cream.180}"
                },
                name: "colorCream180",
                attributes: {},
                path: [
                    "color",
                    "cream",
                    "180"
                ]
            }
        },
        teal: {
            20: {
                key: "{color.teal.20}",
                $value: "#cdf2f2",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#cdf2f2",
                    $type: "color",
                    key: "{color.teal.20}"
                },
                name: "colorTeal20",
                attributes: {},
                path: [
                    "color",
                    "teal",
                    "20"
                ]
            },
            60: {
                key: "{color.teal.60}",
                $value: "#43bcbc",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#43bcbc",
                    $type: "color",
                    key: "{color.teal.60}"
                },
                name: "colorTeal60",
                attributes: {},
                path: [
                    "color",
                    "teal",
                    "60"
                ]
            },
            180: {
                key: "{color.teal.180}",
                $value: "#0d2c2c",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0d2c2c",
                    $type: "color",
                    key: "{color.teal.180}"
                },
                name: "colorTeal180",
                attributes: {},
                path: [
                    "color",
                    "teal",
                    "180"
                ]
            }
        },
        lagoon: {
            20: {
                key: "{color.lagoon.20}",
                $value: "#d2daf9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d2daf9",
                    $type: "color",
                    key: "{color.lagoon.20}"
                },
                name: "colorLagoon20",
                attributes: {},
                path: [
                    "color",
                    "lagoon",
                    "20"
                ]
            },
            60: {
                key: "{color.lagoon.60}",
                $value: "#7088e0",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#7088e0",
                    $type: "color",
                    key: "{color.lagoon.60}"
                },
                name: "colorLagoon60",
                attributes: {},
                path: [
                    "color",
                    "lagoon",
                    "60"
                ]
            },
            180: {
                key: "{color.lagoon.180}",
                $value: "#0a1332",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0a1332",
                    $type: "color",
                    key: "{color.lagoon.180}"
                },
                name: "colorLagoon180",
                attributes: {},
                path: [
                    "color",
                    "lagoon",
                    "180"
                ]
            }
        },
        lavender: {
            20: {
                key: "{color.lavender.20}",
                $value: "#f6d0f9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f6d0f9",
                    $type: "color",
                    key: "{color.lavender.20}"
                },
                name: "colorLavender20",
                attributes: {},
                path: [
                    "color",
                    "lavender",
                    "20"
                ]
            },
            60: {
                key: "{color.lavender.60}",
                $value: "#b77dbc",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#b77dbc",
                    $type: "color",
                    key: "{color.lavender.60}"
                },
                name: "colorLavender60",
                attributes: {},
                path: [
                    "color",
                    "lavender",
                    "60"
                ]
            },
            180: {
                key: "{color.lavender.180}",
                $value: "#391c3b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#391c3b",
                    $type: "color",
                    key: "{color.lavender.180}"
                },
                name: "colorLavender180",
                attributes: {},
                path: [
                    "color",
                    "lavender",
                    "180"
                ]
            }
        },
        peach: {
            20: {
                key: "{color.peach.20}",
                $value: "#ffe6d9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffe6d9",
                    $type: "color",
                    key: "{color.peach.20}"
                },
                name: "colorPeach20",
                attributes: {},
                path: [
                    "color",
                    "peach",
                    "20"
                ]
            },
            60: {
                key: "{color.peach.60}",
                $value: "#e87031",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e87031",
                    $type: "color",
                    key: "{color.peach.60}"
                },
                name: "colorPeach60",
                attributes: {},
                path: [
                    "color",
                    "peach",
                    "60"
                ]
            },
            180: {
                key: "{color.peach.180}",
                $value: "#421d0a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#421d0a",
                    $type: "color",
                    key: "{color.peach.180}"
                },
                name: "colorPeach180",
                attributes: {},
                path: [
                    "color",
                    "peach",
                    "180"
                ]
            }
        },
        pippin: {
            20: {
                key: "{color.pippin.20}",
                $value: "#ffe0e0",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffe0e0",
                    $type: "color",
                    key: "{color.pippin.20}"
                },
                name: "colorPippin20",
                attributes: {},
                path: [
                    "color",
                    "pippin",
                    "20"
                ]
            },
            60: {
                key: "{color.pippin.60}",
                $value: "#f17575",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f17575",
                    $type: "color",
                    key: "{color.pippin.60}"
                },
                name: "colorPippin60",
                attributes: {},
                path: [
                    "color",
                    "pippin",
                    "60"
                ]
            },
            180: {
                key: "{color.pippin.180}",
                $value: "#431919",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#431919",
                    $type: "color",
                    key: "{color.pippin.180}"
                },
                name: "colorPippin180",
                attributes: {},
                path: [
                    "color",
                    "pippin",
                    "180"
                ]
            }
        }
    },
    spacing: {
        10: {
            key: "{spacing.10}",
            $value: "0.125rem",
            $description: "@deprecated Use space.10 (--midas-space-10) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.10}",
                $description: "@deprecated Use space.10 (--midas-space-10) instead",
                $type: "dimension",
                key: "{spacing.10}"
            },
            name: "spacing10",
            attributes: {},
            path: [
                "spacing",
                "10"
            ]
        },
        20: {
            key: "{spacing.20}",
            $value: "0.25rem",
            $description: "@deprecated Use space.xsmall (--midas-space-xsmall) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.xsmall}",
                $description: "@deprecated Use space.xsmall (--midas-space-xsmall) instead",
                $type: "dimension",
                key: "{spacing.20}"
            },
            name: "spacing20",
            attributes: {},
            path: [
                "spacing",
                "20"
            ]
        },
        30: {
            key: "{spacing.30}",
            $value: "0.5rem",
            $description: "@deprecated Use space.small (--midas-space-small) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.small}",
                $description: "@deprecated Use space.small (--midas-space-small) instead",
                $type: "dimension",
                key: "{spacing.30}"
            },
            name: "spacing30",
            attributes: {},
            path: [
                "spacing",
                "30"
            ]
        },
        40: {
            key: "{spacing.40}",
            $value: "0.75rem",
            $description: "@deprecated Use space.60 (--midas-space-60) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.60}",
                $description: "@deprecated Use space.60 (--midas-space-60) instead",
                $type: "dimension",
                key: "{spacing.40}"
            },
            name: "spacing40",
            attributes: {},
            path: [
                "spacing",
                "40"
            ]
        },
        50: {
            key: "{spacing.50}",
            $value: "1rem",
            $description: "@deprecated Use space.medium (--midas-space-medium) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.medium}",
                $description: "@deprecated Use space.medium (--midas-space-medium) instead",
                $type: "dimension",
                key: "{spacing.50}"
            },
            name: "spacing50",
            attributes: {},
            path: [
                "spacing",
                "50"
            ]
        },
        60: {
            key: "{spacing.60}",
            $value: "1.5rem",
            $description: "@deprecated Use space.large (--midas-space-large) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.large}",
                $description: "@deprecated Use space.large (--midas-space-large) instead",
                $type: "dimension",
                key: "{spacing.60}"
            },
            name: "spacing60",
            attributes: {},
            path: [
                "spacing",
                "60"
            ]
        },
        70: {
            key: "{spacing.70}",
            $value: "2rem",
            $description: "@deprecated Use space.xlarge (--midas-space-xlarge) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.xlarge}",
                $description: "@deprecated Use space.xlarge (--midas-space-xlarge) instead",
                $type: "dimension",
                key: "{spacing.70}"
            },
            name: "spacing70",
            attributes: {},
            path: [
                "spacing",
                "70"
            ]
        },
        80: {
            key: "{spacing.80}",
            $value: "2.5rem",
            $description: "@deprecated Use space.130 (--midas-space-130) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.130}",
                $description: "@deprecated Use space.130 (--midas-space-130) instead",
                $type: "dimension",
                key: "{spacing.80}"
            },
            name: "spacing80",
            attributes: {},
            path: [
                "spacing",
                "80"
            ]
        },
        90: {
            key: "{spacing.90}",
            $value: "3rem",
            $description: "@deprecated Use space.150 (--midas-space-150) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.150}",
                $description: "@deprecated Use space.150 (--midas-space-150) instead",
                $type: "dimension",
                key: "{spacing.90}"
            },
            name: "spacing90",
            attributes: {},
            path: [
                "spacing",
                "90"
            ]
        },
        xsmall: {
            key: "{spacing.xsmall}",
            $value: "0.25rem",
            $description: "@deprecated Use space.xsmall (--midas-space-xsmall) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.xsmall}",
                $description: "@deprecated Use space.xsmall (--midas-space-xsmall) instead",
                $type: "dimension",
                key: "{spacing.xsmall}"
            },
            name: "spacingXsmall",
            attributes: {},
            path: [
                "spacing",
                "xsmall"
            ]
        },
        small: {
            key: "{spacing.small}",
            $value: "0.5rem",
            $description: "@deprecated Use space.small (--midas-space-small) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.small}",
                $description: "@deprecated Use space.small (--midas-space-small) instead",
                $type: "dimension",
                key: "{spacing.small}"
            },
            name: "spacingSmall",
            attributes: {},
            path: [
                "spacing",
                "small"
            ]
        },
        medium: {
            key: "{spacing.medium}",
            $value: "1rem",
            $description: "@deprecated Use space.medium (--midas-space-medium) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.medium}",
                $description: "@deprecated Use space.medium (--midas-space-medium) instead",
                $type: "dimension",
                key: "{spacing.medium}"
            },
            name: "spacingMedium",
            attributes: {},
            path: [
                "spacing",
                "medium"
            ]
        },
        large: {
            key: "{spacing.large}",
            $value: "1.5rem",
            $description: "@deprecated Use space.large (--midas-space-large) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.large}",
                $description: "@deprecated Use space.large (--midas-space-large) instead",
                $type: "dimension",
                key: "{spacing.large}"
            },
            name: "spacingLarge",
            attributes: {},
            path: [
                "spacing",
                "large"
            ]
        },
        xlarge: {
            key: "{spacing.xlarge}",
            $value: "2rem",
            $description: "@deprecated Use space.xlarge (--midas-space-xlarge) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.xlarge}",
                $description: "@deprecated Use space.xlarge (--midas-space-xlarge) instead",
                $type: "dimension",
                key: "{spacing.xlarge}"
            },
            name: "spacingXlarge",
            attributes: {},
            path: [
                "spacing",
                "xlarge"
            ]
        }
    },
    size: {
        10: {
            key: "{size.10}",
            $value: "0.125rem",
            $description: "@deprecated Use base.10 (--midas-base-10) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.10}",
                $description: "@deprecated Use base.10 (--midas-base-10) instead",
                $type: "dimension",
                key: "{size.10}"
            },
            name: "size10",
            attributes: {},
            path: [
                "size",
                "10"
            ]
        },
        15: {
            key: "{size.15}",
            $value: "0.188rem",
            $description: "@deprecated Use base.15 (--midas-base-15) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.15}",
                $description: "@deprecated Use base.15 (--midas-base-15) instead",
                $type: "dimension",
                key: "{size.15}"
            },
            name: "size15",
            attributes: {},
            path: [
                "size",
                "15"
            ]
        },
        20: {
            key: "{size.20}",
            $value: "0.25rem",
            $description: "@deprecated Use base.20 (--midas-base-20) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.20}",
                $description: "@deprecated Use base.20 (--midas-base-20) instead",
                $type: "dimension",
                key: "{size.20}"
            },
            name: "size20",
            attributes: {},
            path: [
                "size",
                "20"
            ]
        },
        30: {
            key: "{size.30}",
            $value: "0.375rem",
            $description: "@deprecated Use base.30 (--midas-base-30) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.30}",
                $description: "@deprecated Use base.30 (--midas-base-30) instead",
                $type: "dimension",
                key: "{size.30}"
            },
            name: "size30",
            attributes: {},
            path: [
                "size",
                "30"
            ]
        },
        40: {
            key: "{size.40}",
            $value: "0.5rem",
            $description: "@deprecated Use base.40 (--midas-base-40) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.40}",
                $description: "@deprecated Use base.40 (--midas-base-40) instead",
                $type: "dimension",
                key: "{size.40}"
            },
            name: "size40",
            attributes: {},
            path: [
                "size",
                "40"
            ]
        },
        50: {
            key: "{size.50}",
            $value: "0.625rem",
            $description: "@deprecated Use base.50 (--midas-base-50) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.50}",
                $description: "@deprecated Use base.50 (--midas-base-50) instead",
                $type: "dimension",
                key: "{size.50}"
            },
            name: "size50",
            attributes: {},
            path: [
                "size",
                "50"
            ]
        },
        60: {
            key: "{size.60}",
            $value: "0.75rem",
            $description: "@deprecated Use base.60 (--midas-base-60) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.60}",
                $description: "@deprecated Use base.60 (--midas-base-60) instead",
                $type: "dimension",
                key: "{size.60}"
            },
            name: "size60",
            attributes: {},
            path: [
                "size",
                "60"
            ]
        },
        70: {
            key: "{size.70}",
            $value: "0.875rem",
            $description: "@deprecated Use base.70 (--midas-base-70) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.70}",
                $description: "@deprecated Use base.70 (--midas-base-70) instead",
                $type: "dimension",
                key: "{size.70}"
            },
            name: "size70",
            attributes: {},
            path: [
                "size",
                "70"
            ]
        },
        75: {
            key: "{size.75}",
            $value: "0.938rem",
            $description: "@deprecated Use base.75 (--midas-base-75) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.75}",
                $description: "@deprecated Use base.75 (--midas-base-75) instead",
                $type: "dimension",
                key: "{size.75}"
            },
            name: "size75",
            attributes: {},
            path: [
                "size",
                "75"
            ]
        },
        80: {
            key: "{size.80}",
            $value: "1rem",
            $description: "@deprecated Use base.80 (--midas-base-80) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.80}",
                $description: "@deprecated Use base.80 (--midas-base-80) instead",
                $type: "dimension",
                key: "{size.80}"
            },
            name: "size80",
            attributes: {},
            path: [
                "size",
                "80"
            ]
        },
        90: {
            key: "{size.90}",
            $value: "1.25rem",
            $description: "@deprecated Use base.90 (--midas-base-90) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.90}",
                $description: "@deprecated Use base.90 (--midas-base-90) instead",
                $type: "dimension",
                key: "{size.90}"
            },
            name: "size90",
            attributes: {},
            path: [
                "size",
                "90"
            ]
        },
        100: {
            key: "{size.100}",
            $value: "1.5rem",
            $description: "@deprecated Use base.100 (--midas-base-100) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.100}",
                $description: "@deprecated Use base.100 (--midas-base-100) instead",
                $type: "dimension",
                key: "{size.100}"
            },
            name: "size100",
            attributes: {},
            path: [
                "size",
                "100"
            ]
        },
        110: {
            key: "{size.110}",
            $value: "1.75rem",
            $description: "@deprecated Use base.110 (--midas-base-110) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.110}",
                $description: "@deprecated Use base.110 (--midas-base-110) instead",
                $type: "dimension",
                key: "{size.110}"
            },
            name: "size110",
            attributes: {},
            path: [
                "size",
                "110"
            ]
        },
        120: {
            key: "{size.120}",
            $value: "2rem",
            $description: "@deprecated Use base.120 (--midas-base-120) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.120}",
                $description: "@deprecated Use base.120 (--midas-base-120) instead",
                $type: "dimension",
                key: "{size.120}"
            },
            name: "size120",
            attributes: {},
            path: [
                "size",
                "120"
            ]
        },
        130: {
            key: "{size.130}",
            $value: "2.5rem",
            $description: "@deprecated Use base.130 (--midas-base-130) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.130}",
                $description: "@deprecated Use base.130 (--midas-base-130) instead",
                $type: "dimension",
                key: "{size.130}"
            },
            name: "size130",
            attributes: {},
            path: [
                "size",
                "130"
            ]
        },
        140: {
            key: "{size.140}",
            $value: "2.75rem",
            $description: "@deprecated Use base.140 (--midas-base-140) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.140}",
                $description: "@deprecated Use base.140 (--midas-base-140) instead",
                $type: "dimension",
                key: "{size.140}"
            },
            name: "size140",
            attributes: {},
            path: [
                "size",
                "140"
            ]
        },
        150: {
            key: "{size.150}",
            $value: "3rem",
            $description: "@deprecated Use base.150 (--midas-base-150) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.150}",
                $description: "@deprecated Use base.150 (--midas-base-150) instead",
                $type: "dimension",
                key: "{size.150}"
            },
            name: "size150",
            attributes: {},
            path: [
                "size",
                "150"
            ]
        },
        "00": {
            key: "{size.00}",
            $value: "0rem",
            $description: "@deprecated Use base.00 (--midas-base-00) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.00}",
                $description: "@deprecated Use base.00 (--midas-base-00) instead",
                $type: "dimension",
                key: "{size.00}"
            },
            name: "size00",
            attributes: {},
            path: [
                "size",
                "00"
            ]
        },
        "05": {
            key: "{size.05}",
            $value: "0.063rem",
            $description: "@deprecated Use base.05 (--midas-base-05) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.05}",
                $description: "@deprecated Use base.05 (--midas-base-05) instead",
                $type: "dimension",
                key: "{size.05}"
            },
            name: "size05",
            attributes: {},
            path: [
                "size",
                "05"
            ]
        },
        "control-sm": {
            key: "{size.control-sm}",
            $value: "2.5rem",
            $description: "@deprecated Use size.control-md (--midas-size-control-md) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{size.control-md}",
                $description: "@deprecated Use size.control-md (--midas-size-control-md) instead",
                $type: "dimension",
                key: "{size.control-sm}"
            },
            name: "sizeControlSm",
            attributes: {},
            path: [
                "size",
                "control-sm"
            ]
        },
        icon: {
            key: "{size.icon}",
            $value: "1.25rem",
            $description: "Standardstorlek för ikoner. 1.25rem / 20px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.90}",
                $description: "Standardstorlek för ikoner. 1.25rem / 20px.",
                $type: "dimension",
                key: "{size.icon}"
            },
            name: "sizeIcon",
            attributes: {},
            path: [
                "size",
                "icon"
            ]
        },
        "icon-sm": {
            key: "{size.icon-sm}",
            $value: "1rem",
            $description: "Liten ikonstorlek för kompakta kontexter. 1rem / 16px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.80}",
                $description: "Liten ikonstorlek för kompakta kontexter. 1rem / 16px.",
                $type: "dimension",
                key: "{size.icon-sm}"
            },
            name: "sizeIconSm",
            attributes: {},
            path: [
                "size",
                "icon-sm"
            ]
        },
        option: {
            key: "{size.option}",
            $value: "2rem",
            $description: "Höjd för alternativ i dropdown-listor, t.ex. Select och Combobox. 2rem / 32px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.120}",
                $description: "Höjd för alternativ i dropdown-listor, t.ex. Select och Combobox. 2rem / 32px.",
                $type: "dimension",
                key: "{size.option}"
            },
            name: "sizeOption",
            attributes: {},
            path: [
                "size",
                "option"
            ]
        },
        "control-md": {
            key: "{size.control-md}",
            $value: "2.5rem",
            $description: "Medelstor interaktiv kontrollhöjd. 2.5rem / 40px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.130}",
                $description: "Medelstor interaktiv kontrollhöjd. 2.5rem / 40px.",
                $type: "dimension",
                key: "{size.control-md}"
            },
            name: "sizeControlMd",
            attributes: {},
            path: [
                "size",
                "control-md"
            ]
        },
        control: {
            key: "{size.control}",
            $value: "3rem",
            $description: "Standardhöjd för interaktiva kontroller, t.ex. TextField och Button. 3rem / 48px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.150}",
                $description: "Standardhöjd för interaktiva kontroller, t.ex. TextField och Button. 3rem / 48px.",
                $type: "dimension",
                key: "{size.control}"
            },
            name: "sizeControl",
            attributes: {},
            path: [
                "size",
                "control"
            ]
        }
    },
    background: {
        base: {
            key: "{background.base}",
            $value: "light-dark(#fff, #171717)",
            $description: "Standardbakgrund för våra applikationer",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.base}, {color.gray.200})",
                $description: "Standardbakgrund för våra applikationer",
                $type: "string",
                key: "{background.base}"
            },
            name: "backgroundBase",
            attributes: {},
            path: [
                "background",
                "base"
            ]
        },
        hover: {
            key: "{background.hover}",
            $value: "light-dark(#e6e6e6, #212121)",
            $description: "Hoverfärg för bakgrund",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.hover}, {color.gray.190})",
                $description: "Hoverfärg för bakgrund",
                $type: "string",
                key: "{background.hover}"
            },
            name: "backgroundHover",
            attributes: {},
            path: [
                "background",
                "hover"
            ]
        },
        inverse: {
            key: "{background.inverse}",
            $value: "light-dark(#171717, #f2f2f2)",
            $description: "Bakgrund med inverterade färger",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.200}, {color.gray.10})",
                $description: "Bakgrund med inverterade färger",
                $type: "string",
                key: "{background.inverse}"
            },
            name: "backgroundInverse",
            attributes: {},
            path: [
                "background",
                "inverse"
            ]
        }
    },
    layer: {
        "01": {
            base: {
                key: "{layer.01.base}",
                $value: "light-dark(#f2f2f2, #262626)",
                $description: "Färg för lager som läggs på Background.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.10}, {color.gray.180})",
                    $description: "Färg för lager som läggs på Background.",
                    $type: "string",
                    key: "{layer.01.base}"
                },
                name: "layer01Base",
                attributes: {},
                path: [
                    "layer",
                    "01",
                    "base"
                ]
            },
            hover: {
                key: "{layer.01.hover}",
                $value: "light-dark(#e6e6e6, #333)",
                $description: "Hover state för layer01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.20}, {color.gray.170})",
                    $description: "Hover state för layer01",
                    $type: "string",
                    key: "{layer.01.hover}"
                },
                name: "layer01Hover",
                attributes: {},
                path: [
                    "layer",
                    "01",
                    "hover"
                ]
            },
            selected: {
                key: "{layer.01.selected}",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Selected state för layer01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Selected state för layer01",
                    $type: "string",
                    key: "{layer.01.selected}"
                },
                name: "layer01Selected",
                attributes: {},
                path: [
                    "layer",
                    "01",
                    "selected"
                ]
            },
            selectedHover: {
                key: "{layer.01.selectedHover}",
                $value: "light-dark(#ccc, #474747)",
                $description: "Hover state för layerSelected01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.40}, {color.gray.150})",
                    $description: "Hover state för layerSelected01",
                    $type: "string",
                    key: "{layer.01.selectedHover}"
                },
                name: "layer01SelectedHover",
                attributes: {},
                path: [
                    "layer",
                    "01",
                    "selectedHover"
                ]
            }
        },
        "02": {
            base: {
                key: "{layer.02.base}",
                $value: "light-dark(#fff, #383838)",
                $description: "Färg för lager som läggs på layer 01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.base}, {color.gray.160})",
                    $description: "Färg för lager som läggs på layer 01",
                    $type: "string",
                    key: "{layer.02.base}"
                },
                name: "layer02Base",
                attributes: {},
                path: [
                    "layer",
                    "02",
                    "base"
                ]
            },
            hover: {
                key: "{layer.02.hover}",
                $value: "light-dark(#e6e6e6, #474747)",
                $description: "Hover state för layer02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.hover}, {color.gray.150})",
                    $description: "Hover state för layer02",
                    $type: "string",
                    key: "{layer.02.hover}"
                },
                name: "layer02Hover",
                attributes: {},
                path: [
                    "layer",
                    "02",
                    "hover"
                ]
            },
            selected: {
                key: "{layer.02.selected}",
                $value: "light-dark(#d9d9d9, #525252)",
                $description: "Selected state för layer02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.140})",
                    $description: "Selected state för layer02",
                    $type: "string",
                    key: "{layer.02.selected}"
                },
                name: "layer02Selected",
                attributes: {},
                path: [
                    "layer",
                    "02",
                    "selected"
                ]
            },
            selectedHover: {
                key: "{layer.02.selectedHover}",
                $value: "light-dark(#ccc, #5d5d5d)",
                $description: "Hover state för layerSelected02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.40}, {color.gray.130})",
                    $description: "Hover state för layerSelected02",
                    $type: "string",
                    key: "{layer.02.selectedHover}"
                },
                name: "layer02SelectedHover",
                attributes: {},
                path: [
                    "layer",
                    "02",
                    "selectedHover"
                ]
            }
        }
    },
    layerAccent: {
        "01": {
            base: {
                key: "{layerAccent.01.base}",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Accentfärg som används tillsammans med layer 01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Accentfärg som används tillsammans med layer 01",
                    $type: "string",
                    key: "{layerAccent.01.base}"
                },
                name: "layerAccent01Base",
                attributes: {},
                path: [
                    "layerAccent",
                    "01",
                    "base"
                ]
            },
            hover: {
                key: "{layerAccent.01.hover}",
                $value: "light-dark(#ccc, #474747)",
                $description: "Hover state för layerAccent01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.40}, {color.gray.150})",
                    $description: "Hover state för layerAccent01",
                    $type: "string",
                    key: "{layerAccent.01.hover}"
                },
                name: "layerAccent01Hover",
                attributes: {},
                path: [
                    "layerAccent",
                    "01",
                    "hover"
                ]
            },
            selected: {
                key: "{layerAccent.01.selected}",
                $value: "light-dark(#bfbfbf, #525252)",
                $description: "Selected state för layerAccent01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.50}, {color.gray.140})",
                    $description: "Selected state för layerAccent01",
                    $type: "string",
                    key: "{layerAccent.01.selected}"
                },
                name: "layerAccent01Selected",
                attributes: {},
                path: [
                    "layerAccent",
                    "01",
                    "selected"
                ]
            }
        },
        "02": {
            base: {
                key: "{layerAccent.02.base}",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Accentfärg som används tillsammans med layer 02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Accentfärg som används tillsammans med layer 02",
                    $type: "string",
                    key: "{layerAccent.02.base}"
                },
                name: "layerAccent02Base",
                attributes: {},
                path: [
                    "layerAccent",
                    "02",
                    "base"
                ]
            },
            hover: {
                key: "{layerAccent.02.hover}",
                $value: "light-dark(#ccc, #474747)",
                $description: "Hover state för layerAccent02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.40}, {color.gray.150})",
                    $description: "Hover state för layerAccent02",
                    $type: "string",
                    key: "{layerAccent.02.hover}"
                },
                name: "layerAccent02Hover",
                attributes: {},
                path: [
                    "layerAccent",
                    "02",
                    "hover"
                ]
            },
            selected: {
                key: "{layerAccent.02.selected}",
                $value: "light-dark(#bfbfbf, #525252)",
                $description: "Selected state för layerAccent02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.50}, {color.gray.140})",
                    $description: "Selected state för layerAccent02",
                    $type: "string",
                    key: "{layerAccent.02.selected}"
                },
                name: "layerAccent02Selected",
                attributes: {},
                path: [
                    "layerAccent",
                    "02",
                    "selected"
                ]
            }
        }
    },
    brand: {
        primary: {
            key: "{brand.primary}",
            $value: "light-dark(#b90835, #b90835)",
            $description: "Migrationsverkets primära röda färg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.red.100}, {color.red.100})",
                $description: "Migrationsverkets primära röda färg",
                $type: "string",
                key: "{brand.primary}"
            },
            name: "brandPrimary",
            attributes: {},
            path: [
                "brand",
                "primary"
            ]
        }
    },
    border: {
        color: {
            primary: {
                key: "{border.color.primary}",
                $value: "light-dark(#171717, #f2f2f2)",
                $description: "Kantlinje med hög kontrast",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.200}, {color.gray.10})",
                    $description: "Kantlinje med hög kontrast",
                    $type: "string",
                    key: "{border.color.primary}"
                },
                name: "borderColorPrimary",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "primary"
                ]
            },
            secondary: {
                key: "{border.color.secondary}",
                $value: "light-dark(#737373, #8c8c8c)",
                $description: "Kantlinje med medelhög kontrast",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.110}, {color.gray.90})",
                    $description: "Kantlinje med medelhög kontrast",
                    $type: "string",
                    key: "{border.color.secondary}"
                },
                name: "borderColorSecondary",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "secondary"
                ]
            },
            subtle: {
                key: "{border.color.subtle}",
                $value: "light-dark(#bfbfbf, #525252)",
                $description: "Kantlinje med låg kontrast",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.50}, {color.gray.140})",
                    $description: "Kantlinje med låg kontrast",
                    $type: "string",
                    key: "{border.color.subtle}"
                },
                name: "borderColorSubtle",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "subtle"
                ]
            },
            tertiary: {
                key: "{border.color.tertiary}",
                $value: "light-dark(#143c50, #2e7ca5)",
                $description: "Primärblå kantlinje",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.blue.150}, {color.blue.100})",
                    $description: "Primärblå kantlinje",
                    $type: "string",
                    key: "{border.color.tertiary}"
                },
                name: "borderColorTertiary",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "tertiary"
                ]
            },
            disabled: {
                key: "{border.color.disabled}",
                $value: "light-dark(#bfbfbf, #525252)",
                $description: "Kantlinje för disabled state",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.50}, {color.gray.140})",
                    $description: "Kantlinje för disabled state",
                    $type: "string",
                    key: "{border.color.disabled}"
                },
                name: "borderColorDisabled",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "disabled"
                ]
            }
        },
        width: {
            key: "{border.width}",
            $value: "1px",
            $type: "dimension",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $value: {
                    value: 1,
                    unit: "px"
                },
                $type: "dimension",
                key: "{border.width}"
            },
            name: "borderWidth",
            attributes: {},
            path: [
                "border",
                "width"
            ]
        }
    },
    field: {
        "01": {
            base: {
                key: "{field.01.base}",
                $value: "light-dark(#f2f2f2, #262626)",
                $description: "färg för fält som ligger på Background",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.10}, {color.gray.180})",
                    $description: "färg för fält som ligger på Background",
                    $type: "string",
                    key: "{field.01.base}"
                },
                name: "field01Base",
                attributes: {},
                path: [
                    "field",
                    "01",
                    "base"
                ]
            },
            hover: {
                key: "{field.01.hover}",
                $value: "light-dark(#e6e6e6, #333)",
                $description: "Hover state för field01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.20}, {color.gray.170})",
                    $description: "Hover state för field01",
                    $type: "string",
                    key: "{field.01.hover}"
                },
                name: "field01Hover",
                attributes: {},
                path: [
                    "field",
                    "01",
                    "hover"
                ]
            },
            active: {
                key: "{field.01.active}",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Active state för field01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Active state för field01",
                    $type: "string",
                    key: "{field.01.active}"
                },
                name: "field01Active",
                attributes: {},
                path: [
                    "field",
                    "01",
                    "active"
                ]
            },
            disabled: {
                key: "{field.01.disabled}",
                $value: "light-dark(#f2f2f2, #262626)",
                $description: "Disabled state för fält som ligger på Background",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.10}, {color.gray.180})",
                    $description: "Disabled state för fält som ligger på Background",
                    $type: "string",
                    key: "{field.01.disabled}"
                },
                name: "field01Disabled",
                attributes: {},
                path: [
                    "field",
                    "01",
                    "disabled"
                ]
            }
        },
        "02": {
            base: {
                key: "{field.02.base}",
                $value: "light-dark(#fff, #383838)",
                $description: "Färg för fält som ligger på layer 01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.base}, {color.gray.160})",
                    $description: "Färg för fält som ligger på layer 01",
                    $type: "string",
                    key: "{field.02.base}"
                },
                name: "field02Base",
                attributes: {},
                path: [
                    "field",
                    "02",
                    "base"
                ]
            },
            hover: {
                key: "{field.02.hover}",
                $value: "light-dark(#e6e6e6, #474747)",
                $description: "Hover state för field02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.hover}, {color.gray.150})",
                    $description: "Hover state för field02",
                    $type: "string",
                    key: "{field.02.hover}"
                },
                name: "field02Hover",
                attributes: {},
                path: [
                    "field",
                    "02",
                    "hover"
                ]
            },
            active: {
                key: "{field.02.active}",
                $value: "light-dark(#d9d9d9, #525252)",
                $description: "Active state för field02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.140})",
                    $description: "Active state för field02",
                    $type: "string",
                    key: "{field.02.active}"
                },
                name: "field02Active",
                attributes: {},
                path: [
                    "field",
                    "02",
                    "active"
                ]
            },
            disabled: {
                key: "{field.02.disabled}",
                $value: "light-dark(#fff, #383838)",
                $description: "Disabled state för fält som ligger på layer 01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.base}, {color.gray.160})",
                    $description: "Disabled state för fält som ligger på layer 01",
                    $type: "string",
                    key: "{field.02.disabled}"
                },
                name: "field02Disabled",
                attributes: {},
                path: [
                    "field",
                    "02",
                    "disabled"
                ]
            }
        }
    },
    skeleton: {
        "01": {
            key: "{skeleton.01}",
            $value: "light-dark(#f2f2f2, #262626)",
            $description: "Färg som används när Skeleton ligger på Background",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.10}, {color.gray.180})",
                $description: "Färg som används när Skeleton ligger på Background",
                $type: "string",
                key: "{skeleton.01}"
            },
            name: "skeleton01",
            attributes: {},
            path: [
                "skeleton",
                "01"
            ]
        },
        "02": {
            key: "{skeleton.02}",
            $value: "light-dark(#d9d9d9, #383838)",
            $description: "Färg som används när Skeleton ligger på Layer 01",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.30}, {color.gray.160})",
                $description: "Färg som används när Skeleton ligger på Layer 01",
                $type: "string",
                key: "{skeleton.02}"
            },
            name: "skeleton02",
            attributes: {},
            path: [
                "skeleton",
                "02"
            ]
        }
    },
    icon: {
        primary: {
            key: "{icon.primary}",
            $value: "light-dark(#171717, #f2f2f2)",
            $description: "Primär ikonfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.200}, {color.gray.10})",
                $description: "Primär ikonfärg",
                $type: "string",
                key: "{icon.primary}"
            },
            name: "iconPrimary",
            attributes: {},
            path: [
                "icon",
                "primary"
            ]
        },
        secondary: {
            key: "{icon.secondary}",
            $value: "light-dark(#525252, #a6a6a6)",
            $description: "Sekundär ikonfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.140}, {color.gray.70})",
                $description: "Sekundär ikonfärg",
                $type: "string",
                key: "{icon.secondary}"
            },
            name: "iconSecondary",
            attributes: {},
            path: [
                "icon",
                "secondary"
            ]
        },
        tertiary: {
            key: "{icon.tertiary}",
            $value: "light-dark(#143c50, #f2f2f2)",
            $description: "Tertiär ikonfärg, används för ikoner i tertiary-knappar",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.blue.150}, {color.gray.10})",
                $description: "Tertiär ikonfärg, används för ikoner i tertiary-knappar",
                $type: "string",
                key: "{icon.tertiary}"
            },
            name: "iconTertiary",
            attributes: {},
            path: [
                "icon",
                "tertiary"
            ]
        },
        inverse: {
            key: "{icon.inverse}",
            $value: "light-dark(#fff, #171717)",
            $description: "Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.base}, {color.gray.200})",
                $description: "Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",
                $type: "string",
                key: "{icon.inverse}"
            },
            name: "iconInverse",
            attributes: {},
            path: [
                "icon",
                "inverse"
            ]
        },
        onColor: {
            key: "{icon.onColor}",
            $value: "light-dark(#fff, #fff)",
            $description: "Ikonfärg på färgade ytor som inte är lager",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.base}, {color.white.base})",
                $description: "Ikonfärg på färgade ytor som inte är lager",
                $type: "string",
                key: "{icon.onColor}"
            },
            name: "iconOnColor",
            attributes: {},
            path: [
                "icon",
                "onColor"
            ]
        },
        disabled: {
            key: "{icon.disabled}",
            $value: "light-dark(#bfbfbf, #525252)",
            $description: "Färg för ikoner som är disabled",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.50}, {color.gray.140})",
                $description: "Färg för ikoner som är disabled",
                $type: "string",
                key: "{icon.disabled}"
            },
            name: "iconDisabled",
            attributes: {},
            path: [
                "icon",
                "disabled"
            ]
        },
        success: {
            key: "{icon.success}",
            $value: "light-dark(#008d3c, #008d3c)",
            $description: "Ikonfärg för success state",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalGreen.100}, {color.signalGreen.100})",
                $description: "Ikonfärg för success state",
                $type: "string",
                key: "{icon.success}"
            },
            name: "iconSuccess",
            attributes: {},
            path: [
                "icon",
                "success"
            ]
        },
        info: {
            key: "{icon.info}",
            $value: "light-dark(#06c, #06c)",
            $description: "Ikonfärg för informationsikoner",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalBlue.100}, {color.signalBlue.100})",
                $description: "Ikonfärg för informationsikoner",
                $type: "string",
                key: "{icon.info}"
            },
            name: "iconInfo",
            attributes: {},
            path: [
                "icon",
                "info"
            ]
        },
        warning: {
            key: "{icon.warning}",
            $value: "light-dark(#e62323, #e62323)",
            $description: "Ikonfärg för varningsikoner och invalid state",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalRed.100}, {color.signalRed.100})",
                $description: "Ikonfärg för varningsikoner och invalid state",
                $type: "string",
                key: "{icon.warning}"
            },
            name: "iconWarning",
            attributes: {},
            path: [
                "icon",
                "warning"
            ]
        },
        important: {
            key: "{icon.important}",
            $type: "color",
            $value: "oklch(0.66 0.18 45)",
            $description: "Ikonfärg för viktig information",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "color",
                $value: "{color.orange.100}",
                $description: "Ikonfärg för viktig information",
                key: "{icon.important}"
            },
            name: "iconImportant",
            attributes: {},
            path: [
                "icon",
                "important"
            ]
        },
        readOnly: {
            key: "{icon.readOnly}",
            $value: "light-dark(#bfbfbf, #383838)",
            $description: "Färg för ikoner som är read-only",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.50}, {color.gray.160})",
                $description: "Färg för ikoner som är read-only",
                $type: "string",
                key: "{icon.readOnly}"
            },
            name: "iconReadOnly",
            attributes: {},
            path: [
                "icon",
                "readOnly"
            ]
        }
    },
    link: {
        enabled: {
            key: "{link.enabled}",
            $value: "light-dark(#29698C, #6CA3C0)",
            $description: "Primär länkfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.blue.120}, {color.blue.70})",
                $description: "Primär länkfärg",
                $type: "string",
                key: "{link.enabled}"
            },
            name: "linkEnabled",
            attributes: {},
            path: [
                "link",
                "enabled"
            ]
        },
        hover: {
            key: "{link.hover}",
            $value: "light-dark(#143c50, #94BCD1)",
            $description: "Hover state för länkar",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.blue.150}, {color.blue.50})",
                $description: "Hover state för länkar",
                $type: "string",
                key: "{link.hover}"
            },
            name: "linkHover",
            attributes: {},
            path: [
                "link",
                "hover"
            ]
        },
        pressed: {
            key: "{link.pressed}",
            $value: "light-dark(#171717, #abcbdb)",
            $description: "Active/pressed state för länkar",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.200}, {color.blue.40})",
                $description: "Active/pressed state för länkar",
                $type: "string",
                key: "{link.pressed}"
            },
            name: "linkPressed",
            attributes: {},
            path: [
                "link",
                "pressed"
            ]
        },
        visited: {
            key: "{link.visited}",
            $value: "light-dark(#954b95, #b46ab4)",
            $description: "Färg för besökta länkar",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.purple.110}, {color.purple.80})",
                $description: "Färg för besökta länkar",
                $type: "string",
                key: "{link.visited}"
            },
            name: "linkVisited",
            attributes: {},
            path: [
                "link",
                "visited"
            ]
        }
    },
    progressBar: {
        track: {
            background: {
                key: "{progressBar.track.background}",
                $type: "string",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Bakgrundsfärg för progress bar track",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "string",
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Bakgrundsfärg för progress bar track",
                    key: "{progressBar.track.background}"
                },
                name: "progressBarTrackBackground",
                attributes: {},
                path: [
                    "progressBar",
                    "track",
                    "background"
                ]
            }
        },
        indicator: {
            background: {
                key: "{progressBar.indicator.background}",
                $type: "color",
                $value: "#008d3c",
                $description: "Bakgrundsfärg för progress bar indicator",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.signalGreen.100}",
                    $description: "Bakgrundsfärg för progress bar indicator",
                    key: "{progressBar.indicator.background}"
                },
                name: "progressBarIndicatorBackground",
                attributes: {},
                path: [
                    "progressBar",
                    "indicator",
                    "background"
                ]
            }
        }
    },
    support: {
        border: {
            success: {
                key: "{support.border.success}",
                $value: "light-dark(#008d3c, #008d3c)",
                $description: "Kantlinje för success-notifikationer",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalGreen.100}, {color.signalGreen.100})",
                    $description: "Kantlinje för success-notifikationer",
                    $type: "string",
                    key: "{support.border.success}"
                },
                name: "supportBorderSuccess",
                attributes: {},
                path: [
                    "support",
                    "border",
                    "success"
                ]
            },
            info: {
                key: "{support.border.info}",
                $value: "light-dark(#06c, #06c)",
                $description: "Kantlinje för notifikationer med information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalBlue.100}, {color.signalBlue.100})",
                    $description: "Kantlinje för notifikationer med information",
                    $type: "string",
                    key: "{support.border.info}"
                },
                name: "supportBorderInfo",
                attributes: {},
                path: [
                    "support",
                    "border",
                    "info"
                ]
            },
            important: {
                key: "{support.border.important}",
                $type: "color",
                $value: "oklch(0.66 0.18 45)",
                $description: "Kantlinje för notifikationer med viktig information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.orange.100}",
                    $description: "Kantlinje för notifikationer med viktig information",
                    key: "{support.border.important}"
                },
                name: "supportBorderImportant",
                attributes: {},
                path: [
                    "support",
                    "border",
                    "important"
                ]
            },
            warning: {
                key: "{support.border.warning}",
                $value: "light-dark(#e62323, #e62323)",
                $description: "Kantlinje för notifikationer med varningar",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalRed.100}, {color.signalRed.100})",
                    $description: "Kantlinje för notifikationer med varningar",
                    $type: "string",
                    key: "{support.border.warning}"
                },
                name: "supportBorderWarning",
                attributes: {},
                path: [
                    "support",
                    "border",
                    "warning"
                ]
            }
        },
        background: {
            success: {
                key: "{support.background.success}",
                $value: "light-dark(#d5f2d9, #112722)",
                $description: "Bakgrund för success-notifikationer",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalGreen.20}, {color.signalGreen.180})",
                    $description: "Bakgrund för success-notifikationer",
                    $type: "string",
                    key: "{support.background.success}"
                },
                name: "supportBackgroundSuccess",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "success"
                ]
            },
            successHover: {
                key: "{support.background.successHover}",
                $value: "light-dark(#bae5c5, #163328)",
                $description: "Hoverbakgrund för success-notifikationer",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalGreen.30}, {color.signalGreen.170})",
                    $description: "Hoverbakgrund för success-notifikationer",
                    $type: "string",
                    key: "{support.background.successHover}"
                },
                name: "supportBackgroundSuccessHover",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "successHover"
                ]
            },
            info: {
                key: "{support.background.info}",
                $value: "light-dark(#eaf2f6, #112127)",
                $description: "Bakgrund för notifikationer med information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalBlue.10}, {color.signalBlue.180})",
                    $description: "Bakgrund för notifikationer med information",
                    $type: "string",
                    key: "{support.background.info}"
                },
                name: "supportBackgroundInfo",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "info"
                ]
            },
            infoHover: {
                key: "{support.background.infoHover}",
                $value: "light-dark(#d5e5ed, #162b33)",
                $description: "Hoverbakgrund för notifikationer med information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalBlue.20}, {color.signalBlue.170})",
                    $description: "Hoverbakgrund för notifikationer med information",
                    $type: "string",
                    key: "{support.background.infoHover}"
                },
                name: "supportBackgroundInfoHover",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "infoHover"
                ]
            },
            important: {
                key: "{support.background.important}",
                $value: "light-dark(#fff8e2, #322a20)",
                $description: "Bakgrund för notifikationer med viktig information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalYellow.10}, {color.signalYellow.180})",
                    $description: "Bakgrund för notifikationer med viktig information",
                    $type: "string",
                    key: "{support.background.important}"
                },
                name: "supportBackgroundImportant",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "important"
                ]
            },
            importantHover: {
                key: "{support.background.importantHover}",
                $value: "light-dark(#fff1cd, #453826)",
                $description: "Hoverbakgrund för notifikationer med viktig information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalYellow.20}, {color.signalYellow.170})",
                    $description: "Hoverbakgrund för notifikationer med viktig information",
                    $type: "string",
                    key: "{support.background.importantHover}"
                },
                name: "supportBackgroundImportantHover",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "importantHover"
                ]
            },
            warning: {
                key: "{support.background.warning}",
                $value: "light-dark(#ffdfdf, #3f0a0a)",
                $description: "Bakgrund för notifikationer med varningar",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalRed.20}, {color.signalRed.180})",
                    $description: "Bakgrund för notifikationer med varningar",
                    $type: "string",
                    key: "{support.background.warning}"
                },
                name: "supportBackgroundWarning",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "warning"
                ]
            },
            warningHover: {
                key: "{support.background.warningHover}",
                $value: "light-dark(#fcc8c8, #540d0d)",
                $description: "Hoverbakgrund för notifikationer med varningar",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalRed.30}, {color.signalRed.170})",
                    $description: "Hoverbakgrund för notifikationer med varningar",
                    $type: "string",
                    key: "{support.background.warningHover}"
                },
                name: "supportBackgroundWarningHover",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "warningHover"
                ]
            }
        }
    },
    tag: {
        sky: {
            background: {
                key: "{tag.sky.background}",
                $value: "light-dark(#cde6f3, #101037)",
                $description: "Tag bakgrund blå",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.sky.20}, {color.sky.180})",
                    $description: "Tag bakgrund blå",
                    $type: "string",
                    key: "{tag.sky.background}"
                },
                name: "tagSkyBackground",
                attributes: {},
                path: [
                    "tag",
                    "sky",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.sky.borderColor}",
                $type: "color",
                $value: "#4a95df",
                $description: "Tag kantlinje blå",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.sky.60}",
                    $description: "Tag kantlinje blå",
                    key: "{tag.sky.borderColor}"
                },
                name: "tagSkyBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "sky",
                    "borderColor"
                ]
            }
        },
        blue: {
            background: {
                key: "{tag.blue.background}",
                $value: "light-dark(#cde6f3, #101037)",
                $description: "@deprecated Använd tag.sky istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.sky.20}, {color.sky.180})",
                    $description: "@deprecated Använd tag.sky istället.",
                    $type: "string",
                    key: "{tag.blue.background}"
                },
                name: "tagBlueBackground",
                attributes: {},
                path: [
                    "tag",
                    "blue",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.blue.borderColor}",
                $type: "color",
                $value: "#4a95df",
                $description: "@deprecated Använd tag.sky istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.sky.60}",
                    $description: "@deprecated Använd tag.sky istället.",
                    key: "{tag.blue.borderColor}"
                },
                name: "tagBlueBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "blue",
                    "borderColor"
                ]
            }
        },
        mint: {
            background: {
                key: "{tag.mint.background}",
                $value: "light-dark(#d5f2d9, #07270b)",
                $description: "Tag bakgrund grön",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.mint.20}, {color.mint.180})",
                    $description: "Tag bakgrund grön",
                    $type: "string",
                    key: "{tag.mint.background}"
                },
                name: "tagMintBackground",
                attributes: {},
                path: [
                    "tag",
                    "mint",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.mint.borderColor}",
                $type: "color",
                $value: "#75b47d",
                $description: "Tag kantlinje grön",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.mint.60}",
                    $description: "Tag kantlinje grön",
                    key: "{tag.mint.borderColor}"
                },
                name: "tagMintBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "mint",
                    "borderColor"
                ]
            }
        },
        green: {
            background: {
                key: "{tag.green.background}",
                $value: "light-dark(#d5f2d9, #07270b)",
                $description: "@deprecated Använd tag.mint istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.mint.20}, {color.mint.180})",
                    $description: "@deprecated Använd tag.mint istället.",
                    $type: "string",
                    key: "{tag.green.background}"
                },
                name: "tagGreenBackground",
                attributes: {},
                path: [
                    "tag",
                    "green",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.green.borderColor}",
                $type: "color",
                $value: "#75b47d",
                $description: "@deprecated Använd tag.mint istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.mint.60}",
                    $description: "@deprecated Använd tag.mint istället.",
                    key: "{tag.green.borderColor}"
                },
                name: "tagGreenBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "green",
                    "borderColor"
                ]
            }
        },
        cream: {
            background: {
                key: "{tag.cream.background}",
                $value: "light-dark(#fff5db, #2c2719)",
                $description: "Tag bakgrund gul",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.cream.20}, {color.cream.180})",
                    $description: "Tag bakgrund gul",
                    $type: "string",
                    key: "{tag.cream.background}"
                },
                name: "tagCreamBackground",
                attributes: {},
                path: [
                    "tag",
                    "cream",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.cream.borderColor}",
                $type: "color",
                $value: "#ecbe4a",
                $description: "Tag kantlinje gul",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.cream.60}",
                    $description: "Tag kantlinje gul",
                    key: "{tag.cream.borderColor}"
                },
                name: "tagCreamBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "cream",
                    "borderColor"
                ]
            }
        },
        yellow: {
            background: {
                key: "{tag.yellow.background}",
                $value: "light-dark(#fff5db, #2c2719)",
                $description: "@deprecated Använd tag.cream istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.cream.20}, {color.cream.180})",
                    $description: "@deprecated Använd tag.cream istället.",
                    $type: "string",
                    key: "{tag.yellow.background}"
                },
                name: "tagYellowBackground",
                attributes: {},
                path: [
                    "tag",
                    "yellow",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.yellow.borderColor}",
                $type: "color",
                $value: "#ecbe4a",
                $description: "@deprecated Använd tag.cream istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.cream.60}",
                    $description: "@deprecated Använd tag.cream istället.",
                    key: "{tag.yellow.borderColor}"
                },
                name: "tagYellowBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "yellow",
                    "borderColor"
                ]
            }
        },
        teal: {
            background: {
                key: "{tag.teal.background}",
                $value: "light-dark(#cdf2f2, #0d2c2c)",
                $description: "Tag bakgrund blågrön",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.teal.20}, {color.teal.180})",
                    $description: "Tag bakgrund blågrön",
                    $type: "string",
                    key: "{tag.teal.background}"
                },
                name: "tagTealBackground",
                attributes: {},
                path: [
                    "tag",
                    "teal",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.teal.borderColor}",
                $type: "color",
                $value: "#43bcbc",
                $description: "Tag kantlinje blågrön",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.teal.60}",
                    $description: "Tag kantlinje blågrön",
                    key: "{tag.teal.borderColor}"
                },
                name: "tagTealBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "teal",
                    "borderColor"
                ]
            }
        },
        lagoon: {
            background: {
                key: "{tag.lagoon.background}",
                $value: "light-dark(#d2daf9, #0a1332)",
                $description: "Tag bakgrund lagunblå",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.lagoon.20}, {color.lagoon.180})",
                    $description: "Tag bakgrund lagunblå",
                    $type: "string",
                    key: "{tag.lagoon.background}"
                },
                name: "tagLagoonBackground",
                attributes: {},
                path: [
                    "tag",
                    "lagoon",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.lagoon.borderColor}",
                $type: "color",
                $value: "#7088e0",
                $description: "Tag kantlinje lagunblå",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.lagoon.60}",
                    $description: "Tag kantlinje lagunblå",
                    key: "{tag.lagoon.borderColor}"
                },
                name: "tagLagoonBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "lagoon",
                    "borderColor"
                ]
            }
        },
        lagoonblue: {
            background: {
                key: "{tag.lagoonblue.background}",
                $value: "light-dark(#d2daf9, #0a1332)",
                $description: "@deprecated Använd tag.lagoon istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.lagoon.20}, {color.lagoon.180})",
                    $description: "@deprecated Använd tag.lagoon istället.",
                    $type: "string",
                    key: "{tag.lagoonblue.background}"
                },
                name: "tagLagoonblueBackground",
                attributes: {},
                path: [
                    "tag",
                    "lagoonblue",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.lagoonblue.borderColor}",
                $type: "color",
                $value: "#7088e0",
                $description: "@deprecated Använd tag.lagoon istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.lagoon.60}",
                    $description: "@deprecated Använd tag.lagoon istället.",
                    key: "{tag.lagoonblue.borderColor}"
                },
                name: "tagLagoonblueBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "lagoonblue",
                    "borderColor"
                ]
            }
        },
        lavender: {
            background: {
                key: "{tag.lavender.background}",
                $value: "light-dark(#f6d0f9, #391c3b)",
                $description: "Tag bakgrund lila",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.lavender.20}, {color.lavender.180})",
                    $description: "Tag bakgrund lila",
                    $type: "string",
                    key: "{tag.lavender.background}"
                },
                name: "tagLavenderBackground",
                attributes: {},
                path: [
                    "tag",
                    "lavender",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.lavender.borderColor}",
                $type: "color",
                $value: "#b77dbc",
                $description: "Tag kantlinje lila",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.lavender.60}",
                    $description: "Tag kantlinje lila",
                    key: "{tag.lavender.borderColor}"
                },
                name: "tagLavenderBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "lavender",
                    "borderColor"
                ]
            }
        },
        purple: {
            background: {
                key: "{tag.purple.background}",
                $value: "light-dark(#f6d0f9, #391c3b)",
                $description: "@deprecated Använd tag.lavender istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.lavender.20}, {color.lavender.180})",
                    $description: "@deprecated Använd tag.lavender istället.",
                    $type: "string",
                    key: "{tag.purple.background}"
                },
                name: "tagPurpleBackground",
                attributes: {},
                path: [
                    "tag",
                    "purple",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.purple.borderColor}",
                $type: "color",
                $value: "#b77dbc",
                $description: "@deprecated Använd tag.lavender istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.lavender.60}",
                    $description: "@deprecated Använd tag.lavender istället.",
                    key: "{tag.purple.borderColor}"
                },
                name: "tagPurpleBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "purple",
                    "borderColor"
                ]
            }
        },
        peach: {
            background: {
                key: "{tag.peach.background}",
                $value: "light-dark(#ffe6d9, #421d0a)",
                $description: "Tag bakgrund orange",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.peach.20}, {color.peach.180})",
                    $description: "Tag bakgrund orange",
                    $type: "string",
                    key: "{tag.peach.background}"
                },
                name: "tagPeachBackground",
                attributes: {},
                path: [
                    "tag",
                    "peach",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.peach.borderColor}",
                $type: "color",
                $value: "#e87031",
                $description: "Tag kantlinje orange",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.peach.60}",
                    $description: "Tag kantlinje orange",
                    key: "{tag.peach.borderColor}"
                },
                name: "tagPeachBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "peach",
                    "borderColor"
                ]
            }
        },
        orange: {
            background: {
                key: "{tag.orange.background}",
                $value: "light-dark(#ffe6d9, #421d0a)",
                $description: "@deprecated Använd tag.peach istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.peach.20}, {color.peach.180})",
                    $description: "@deprecated Använd tag.peach istället.",
                    $type: "string",
                    key: "{tag.orange.background}"
                },
                name: "tagOrangeBackground",
                attributes: {},
                path: [
                    "tag",
                    "orange",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.orange.borderColor}",
                $type: "color",
                $value: "#e87031",
                $description: "@deprecated Använd tag.peach istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.peach.60}",
                    $description: "@deprecated Använd tag.peach istället.",
                    key: "{tag.orange.borderColor}"
                },
                name: "tagOrangeBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "orange",
                    "borderColor"
                ]
            }
        },
        pippin: {
            background: {
                key: "{tag.pippin.background}",
                $value: "light-dark(#ffe0e0, #431919)",
                $description: "Tag bakgrund röd",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.pippin.20}, {color.pippin.180})",
                    $description: "Tag bakgrund röd",
                    $type: "string",
                    key: "{tag.pippin.background}"
                },
                name: "tagPippinBackground",
                attributes: {},
                path: [
                    "tag",
                    "pippin",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.pippin.borderColor}",
                $type: "color",
                $value: "#f17575",
                $description: "Tag kantlinje röd",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.pippin.60}",
                    $description: "Tag kantlinje röd",
                    key: "{tag.pippin.borderColor}"
                },
                name: "tagPippinBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "pippin",
                    "borderColor"
                ]
            }
        },
        red: {
            background: {
                key: "{tag.red.background}",
                $value: "light-dark(#ffe0e0, #431919)",
                $description: "@deprecated Använd tag.pippin istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.pippin.20}, {color.pippin.180})",
                    $description: "@deprecated Använd tag.pippin istället.",
                    $type: "string",
                    key: "{tag.red.background}"
                },
                name: "tagRedBackground",
                attributes: {},
                path: [
                    "tag",
                    "red",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.red.borderColor}",
                $type: "color",
                $value: "#f17575",
                $description: "@deprecated Använd tag.pippin istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.pippin.60}",
                    $description: "@deprecated Använd tag.pippin istället.",
                    key: "{tag.red.borderColor}"
                },
                name: "tagRedBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "red",
                    "borderColor"
                ]
            }
        }
    },
    text: {
        primary: {
            key: "{text.primary}",
            $value: "light-dark(#171717, #f2f2f2)",
            $description: "Primär textfärg.",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.200}, {color.gray.10})",
                $description: "Primär textfärg.",
                $type: "string",
                key: "{text.primary}"
            },
            name: "textPrimary",
            attributes: {},
            path: [
                "text",
                "primary"
            ]
        },
        secondary: {
            key: "{text.secondary}",
            $value: "light-dark(#525252, #a6a6a6)",
            $description: "Sekundär textfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.140}, {color.gray.70})",
                $description: "Sekundär textfärg",
                $type: "string",
                key: "{text.secondary}"
            },
            name: "textSecondary",
            attributes: {},
            path: [
                "text",
                "secondary"
            ]
        },
        tertiary: {
            key: "{text.tertiary}",
            $value: "light-dark(#143c50, #f2f2f2)",
            $description: "Textfärg på tertiär knapp",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.blue.150}, {color.gray.10})",
                $description: "Textfärg på tertiär knapp",
                $type: "string",
                key: "{text.tertiary}"
            },
            name: "textTertiary",
            attributes: {},
            path: [
                "text",
                "tertiary"
            ]
        },
        onColor: {
            key: "{text.onColor}",
            $value: "light-dark(#fff, #fff)",
            $description: "Textfärg på färgade bakgrunder som inte är lager",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.base}, {color.white.base})",
                $description: "Textfärg på färgade bakgrunder som inte är lager",
                $type: "string",
                key: "{text.onColor}"
            },
            name: "textOnColor",
            attributes: {},
            path: [
                "text",
                "onColor"
            ]
        },
        inverse: {
            key: "{text.inverse}",
            $value: "light-dark(#f2f2f2, #171717)",
            $description: "Inverterad textfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.10}, {color.gray.200})",
                $description: "Inverterad textfärg",
                $type: "string",
                key: "{text.inverse}"
            },
            name: "textInverse",
            attributes: {},
            path: [
                "text",
                "inverse"
            ]
        },
        disabled: {
            key: "{text.disabled}",
            $value: "light-dark(#bfbfbf, #525252)",
            $description: "Färg för disabled text",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.50}, {color.gray.140})",
                $description: "Färg för disabled text",
                $type: "string",
                key: "{text.disabled}"
            },
            name: "textDisabled",
            attributes: {},
            path: [
                "text",
                "disabled"
            ]
        },
        warning: {
            key: "{text.warning}",
            $value: "light-dark(#e62323, #EC5252)",
            $description: "Färg för felmeddelanden",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalRed.100}, {color.signalRed.80})",
                $description: "Färg för felmeddelanden",
                $type: "string",
                key: "{text.warning}"
            },
            name: "textWarning",
            attributes: {},
            path: [
                "text",
                "warning"
            ]
        },
        placeholder: {
            key: "{text.placeholder}",
            $value: "light-dark(#a6a6a6, #525252)",
            $description: "Färg för platshållare",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.70}, {color.gray.140})",
                $description: "Färg för platshållare",
                $type: "string",
                key: "{text.placeholder}"
            },
            name: "textPlaceholder",
            attributes: {},
            path: [
                "text",
                "placeholder"
            ]
        },
        readOnly: {
            key: "{text.readOnly}",
            $value: "light-dark(#737373, #999)",
            $description: "Färg för read-only state",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.110}, {color.gray.80})",
                $description: "Färg för read-only state",
                $type: "string",
                key: "{text.readOnly}"
            },
            name: "textReadOnly",
            attributes: {},
            path: [
                "text",
                "readOnly"
            ]
        }
    },
    badge: {
        background: {
            key: "{badge.background}",
            $value: "light-dark(#e62323, #e62323)",
            $description: "Bakgrundsfärg för badge",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalRed.100}, {color.signalRed.100})",
                $description: "Bakgrundsfärg för badge",
                $type: "string",
                key: "{badge.background}"
            },
            name: "badgeBackground",
            attributes: {},
            path: [
                "badge",
                "background"
            ]
        }
    },
    calendar: {
        date: {
            background: {
                hover: {
                    key: "{calendar.date.background.hover}",
                    $value: "light-dark(#0000001a, #ffffff1a)",
                    $description: "Hover-bakgrund för datumcell",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark(#0000001a, #ffffff1a)",
                        $description: "Hover-bakgrund för datumcell",
                        $type: "string",
                        key: "{calendar.date.background.hover}"
                    },
                    name: "calendarDateBackgroundHover",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "hover"
                    ]
                },
                selected: {
                    key: "{calendar.date.background.selected}",
                    $value: "light-dark(#143c50, #5897b8)",
                    $description: "Bakgrund för ett valt datum",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.150}, {color.blue.80})",
                        $description: "Bakgrund för ett valt datum",
                        $type: "string",
                        key: "{calendar.date.background.selected}"
                    },
                    name: "calendarDateBackgroundSelected",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "selected"
                    ]
                },
                startRange: {
                    key: "{calendar.date.background.startRange}",
                    $value: "light-dark(#143c50, #5897b8)",
                    $description: "Bakgrund för det första datumet i ett intervallval",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.150}, {color.blue.80})",
                        $description: "Bakgrund för det första datumet i ett intervallval",
                        $type: "string",
                        key: "{calendar.date.background.startRange}"
                    },
                    name: "calendarDateBackgroundStartRange",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "startRange"
                    ]
                },
                inRange: {
                    key: "{calendar.date.background.inRange}",
                    $value: "light-dark(#d5e5ed, #143c50)",
                    $description: "Bakgrund för datum som ligger inom ett valt intervall",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.20}, {color.blue.150})",
                        $description: "Bakgrund för datum som ligger inom ett valt intervall",
                        $type: "string",
                        key: "{calendar.date.background.inRange}"
                    },
                    name: "calendarDateBackgroundInRange",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "inRange"
                    ]
                },
                endRange: {
                    key: "{calendar.date.background.endRange}",
                    $value: "light-dark(#143c50, #5897b8)",
                    $description: "Bakgrund för det sista datumet i ett intervallval",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.150}, {color.blue.80})",
                        $description: "Bakgrund för det sista datumet i ett intervallval",
                        $type: "string",
                        key: "{calendar.date.background.endRange}"
                    },
                    name: "calendarDateBackgroundEndRange",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "endRange"
                    ]
                }
            }
        }
    },
    logo: {
        primary: {
            key: "{logo.primary}",
            $value: "light-dark(#b90835, #fff)",
            $description: "Färg på logotypen",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.red.100}, {color.white.base})",
                $description: "Färg på logotypen",
                $type: "string",
                key: "{logo.primary}"
            },
            name: "logoPrimary",
            attributes: {},
            path: [
                "logo",
                "primary"
            ]
        }
    },
    menu: {
        item: {
            background: {
                hover: {
                    key: "{menu.item.background.hover}",
                    $value: "light-dark(#e6e6e6, #212121)",
                    $description: "Bakgrundsfärg för menu vid hover",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.gray.20}, {color.gray.190})",
                        $description: "Bakgrundsfärg för menu vid hover",
                        $type: "string",
                        key: "{menu.item.background.hover}"
                    },
                    name: "menuItemBackgroundHover",
                    attributes: {},
                    path: [
                        "menu",
                        "item",
                        "background",
                        "hover"
                    ]
                },
                selected: {
                    key: "{menu.item.background.selected}",
                    $value: "light-dark(#f2f2f2, #262626)",
                    $description: "Bakgrundsfärg för aktiv menu",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.gray.10}, {color.gray.180})",
                        $description: "Bakgrundsfärg för aktiv menu",
                        $type: "string",
                        key: "{menu.item.background.selected}"
                    },
                    name: "menuItemBackgroundSelected",
                    attributes: {},
                    path: [
                        "menu",
                        "item",
                        "background",
                        "selected"
                    ]
                }
            }
        },
        text: {
            sectionHeader: {
                key: "{menu.text.sectionHeader}",
                $value: "light-dark(#525252, #a6a6a6)",
                $description: "Textfärg för sektionsrubriker i navigationsmenyn",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.140}, {color.gray.70})",
                    $description: "Textfärg för sektionsrubriker i navigationsmenyn",
                    $type: "string",
                    key: "{menu.text.sectionHeader}"
                },
                name: "menuTextSectionHeader",
                attributes: {},
                path: [
                    "menu",
                    "text",
                    "sectionHeader"
                ]
            }
        }
    },
    navigationLink: {
        background: {
            hover: {
                key: "{navigationLink.background.hover}",
                $value: "light-dark(#e6e6e6, #212121)",
                $description: "Bakgrundsfärg vid hover",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.20}, {color.gray.190})",
                    $description: "Bakgrundsfärg vid hover",
                    $type: "string",
                    key: "{navigationLink.background.hover}"
                },
                name: "navigationLinkBackgroundHover",
                attributes: {},
                path: [
                    "navigationLink",
                    "background",
                    "hover"
                ]
            },
            selected: {
                key: "{navigationLink.background.selected}",
                $value: "light-dark(#f2f2f2, #262626)",
                $description: "Bakgrundsfärg för aktiv länk",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.10}, {color.gray.180})",
                    $description: "Bakgrundsfärg för aktiv länk",
                    $type: "string",
                    key: "{navigationLink.background.selected}"
                },
                name: "navigationLinkBackgroundSelected",
                attributes: {},
                path: [
                    "navigationLink",
                    "background",
                    "selected"
                ]
            },
            selectedHover: {
                key: "{navigationLink.background.selectedHover}",
                $value: "light-dark(#e6e6e6, #212121)",
                $description: "Bakgrundsfärg vid hover på aktiv länk",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.20}, {color.gray.190})",
                    $description: "Bakgrundsfärg vid hover på aktiv länk",
                    $type: "string",
                    key: "{navigationLink.background.selectedHover}"
                },
                name: "navigationLinkBackgroundSelectedHover",
                attributes: {},
                path: [
                    "navigationLink",
                    "background",
                    "selectedHover"
                ]
            }
        }
    },
    overlay: {
        background: {
            key: "{overlay.background}",
            $type: "color",
            $value: "rgba(0 0 0 / 30%)",
            $description: "Bakrundsfärg för overlays",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "color",
                $value: "rgba(0 0 0 / 30%)",
                $description: "Bakrundsfärg för overlays",
                key: "{overlay.background}"
            },
            name: "overlayBackground",
            attributes: {},
            path: [
                "overlay",
                "background"
            ]
        },
        blur: {
            key: "{overlay.blur}",
            $type: "string",
            $value: "blur(2px)",
            $description: "Blur för overlays",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "blur(2px)",
                $description: "Blur för overlays",
                key: "{overlay.blur}"
            },
            name: "overlayBlur",
            attributes: {},
            path: [
                "overlay",
                "blur"
            ]
        }
    },
    card: {
        background: {
            base: {
                key: "{card.background.base}",
                $value: "light-dark(#fff, #262626)",
                $description: "Bakrundsfärg för Card",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.base}, {color.gray.180})",
                    $description: "Bakrundsfärg för Card",
                    $type: "string",
                    key: "{card.background.base}"
                },
                name: "cardBackgroundBase",
                attributes: {},
                path: [
                    "card",
                    "background",
                    "base"
                ]
            }
        },
        shadow: {
            key: "{card.shadow}",
            $type: "string",
            $value: "0 3px 5px 0 rgba(0, 0, 0, 0.30)",
            $description: "Skugga för Card",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "0 3px 5px 0 rgba(0, 0, 0, 0.30)",
                $description: "Skugga för Card",
                key: "{card.shadow}"
            },
            name: "cardShadow",
            attributes: {},
            path: [
                "card",
                "shadow"
            ]
        }
    },
    panel: {
        shadow: {
            key: "{panel.shadow}",
            $type: "string",
            $value: "-2px 0px 12px -2px rgba(0, 0, 0, 0.10)",
            $description: "Skugga för Panel",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "-2px 0px 12px -2px rgba(0, 0, 0, 0.10)",
                $description: "Skugga för Panel",
                key: "{panel.shadow}"
            },
            name: "panelShadow",
            attributes: {},
            path: [
                "panel",
                "shadow"
            ]
        }
    },
    space: {
        10: {
            key: "{space.10}",
            $value: "0.125rem",
            $description: "0.125rem / 2px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.10}",
                $description: "0.125rem / 2px.",
                $type: "dimension",
                key: "{space.10}"
            },
            name: "space10",
            attributes: {},
            path: [
                "space",
                "10"
            ]
        },
        30: {
            key: "{space.30}",
            $value: "0.375rem",
            $description: "0.375rem / 6px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.30}",
                $description: "0.375rem / 6px.",
                $type: "dimension",
                key: "{space.30}"
            },
            name: "space30",
            attributes: {},
            path: [
                "space",
                "30"
            ]
        },
        50: {
            key: "{space.50}",
            $value: "0.625rem",
            $description: "0.625rem / 10px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.50}",
                $description: "0.625rem / 10px.",
                $type: "dimension",
                key: "{space.50}"
            },
            name: "space50",
            attributes: {},
            path: [
                "space",
                "50"
            ]
        },
        60: {
            key: "{space.60}",
            $value: "0.75rem",
            $description: "0.75rem / 12px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.60}",
                $description: "0.75rem / 12px.",
                $type: "dimension",
                key: "{space.60}"
            },
            name: "space60",
            attributes: {},
            path: [
                "space",
                "60"
            ]
        },
        70: {
            key: "{space.70}",
            $value: "0.875rem",
            $description: "0.875rem / 14px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.70}",
                $description: "0.875rem / 14px.",
                $type: "dimension",
                key: "{space.70}"
            },
            name: "space70",
            attributes: {},
            path: [
                "space",
                "70"
            ]
        },
        75: {
            key: "{space.75}",
            $value: "0.938rem",
            $description: "0.938rem / 15px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.75}",
                $description: "0.938rem / 15px.",
                $type: "dimension",
                key: "{space.75}"
            },
            name: "space75",
            attributes: {},
            path: [
                "space",
                "75"
            ]
        },
        90: {
            key: "{space.90}",
            $value: "1.25rem",
            $description: "1.25rem / 20px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.90}",
                $description: "1.25rem / 20px.",
                $type: "dimension",
                key: "{space.90}"
            },
            name: "space90",
            attributes: {},
            path: [
                "space",
                "90"
            ]
        },
        130: {
            key: "{space.130}",
            $value: "2.5rem",
            $description: "2.5rem / 40px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.130}",
                $description: "2.5rem / 40px.",
                $type: "dimension",
                key: "{space.130}"
            },
            name: "space130",
            attributes: {},
            path: [
                "space",
                "130"
            ]
        },
        150: {
            key: "{space.150}",
            $value: "3rem",
            $description: "3rem / 48px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.150}",
                $description: "3rem / 48px.",
                $type: "dimension",
                key: "{space.150}"
            },
            name: "space150",
            attributes: {},
            path: [
                "space",
                "150"
            ]
        },
        xsmall: {
            key: "{space.xsmall}",
            $value: "0.25rem",
            $description: "Extra litet avstånd. 0.25rem / 4px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.20}",
                $description: "Extra litet avstånd. 0.25rem / 4px.",
                $type: "dimension",
                key: "{space.xsmall}"
            },
            name: "spaceXsmall",
            attributes: {},
            path: [
                "space",
                "xsmall"
            ]
        },
        small: {
            key: "{space.small}",
            $value: "0.5rem",
            $description: "Litet avstånd. 0.5rem / 8px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.40}",
                $description: "Litet avstånd. 0.5rem / 8px.",
                $type: "dimension",
                key: "{space.small}"
            },
            name: "spaceSmall",
            attributes: {},
            path: [
                "space",
                "small"
            ]
        },
        medium: {
            key: "{space.medium}",
            $value: "1rem",
            $description: "Medelstort avstånd. 1rem / 16px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.80}",
                $description: "Medelstort avstånd. 1rem / 16px.",
                $type: "dimension",
                key: "{space.medium}"
            },
            name: "spaceMedium",
            attributes: {},
            path: [
                "space",
                "medium"
            ]
        },
        large: {
            key: "{space.large}",
            $value: "1.5rem",
            $description: "Stort avstånd. 1.5rem / 24px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.100}",
                $description: "Stort avstånd. 1.5rem / 24px.",
                $type: "dimension",
                key: "{space.large}"
            },
            name: "spaceLarge",
            attributes: {},
            path: [
                "space",
                "large"
            ]
        },
        xlarge: {
            key: "{space.xlarge}",
            $value: "2rem",
            $description: "Extra stort avstånd. 2rem / 32px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.120}",
                $description: "Extra stort avstånd. 2rem / 32px.",
                $type: "dimension",
                key: "{space.xlarge}"
            },
            name: "spaceXlarge",
            attributes: {},
            path: [
                "space",
                "xlarge"
            ]
        },
        "05": {
            key: "{space.05}",
            $value: "0.063rem",
            $description: "0.063rem / 1px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.05}",
                $description: "0.063rem / 1px.",
                $type: "dimension",
                key: "{space.05}"
            },
            name: "space05",
            attributes: {},
            path: [
                "space",
                "05"
            ]
        }
    },
    state: {
        focus: {
            key: "{state.focus}",
            $type: "string",
            $value: "0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",
            $description: "Focus style used when the component is focused (box-shadow).",
            filePath: "packages/theme/tokens/states.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",
                $description: "Focus style used when the component is focused (box-shadow).",
                key: "{state.focus}"
            },
            name: "stateFocus",
            attributes: {},
            path: [
                "state",
                "focus"
            ]
        },
        focusInset: {
            key: "{state.focusInset}",
            $type: "string",
            $value: "inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",
            $description: "Inset variant of the focus ring (box-shadow inset).",
            filePath: "packages/theme/tokens/states.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",
                $description: "Inset variant of the focus ring (box-shadow inset).",
                key: "{state.focusInset}"
            },
            name: "stateFocusInset",
            attributes: {},
            path: [
                "state",
                "focusInset"
            ]
        },
        focusContrastMode: {
            outline: {
                key: "{state.focusContrastMode.outline}",
                $value: "2px",
                $description: "Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.",
                filePath: "packages/theme/tokens/states.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: "2px",
                    $description: "Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.",
                    $type: "dimension",
                    key: "{state.focusContrastMode.outline}"
                },
                name: "stateFocusContrastModeOutline",
                attributes: {},
                path: [
                    "state",
                    "focusContrastMode",
                    "outline"
                ]
            },
            offset: {
                key: "{state.focusContrastMode.offset}",
                $value: "2px",
                $description: "Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active.",
                filePath: "packages/theme/tokens/states.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: "2px",
                    $description: "Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active.",
                    $type: "dimension",
                    key: "{state.focusContrastMode.offset}"
                },
                name: "stateFocusContrastModeOffset",
                attributes: {},
                path: [
                    "state",
                    "focusContrastMode",
                    "offset"
                ]
            }
        },
        invalid: {
            key: "{state.invalid}",
            $type: "string",
            $value: "inset 0 0 0 2px light-dark(#e62323, #e62323)",
            $description: "Invalid state style for form fields (box-shadow).",
            filePath: "packages/theme/tokens/states.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "inset 0 0 0 2px {support.border.warning}",
                $description: "Invalid state style for form fields (box-shadow).",
                key: "{state.invalid}"
            },
            name: "stateInvalid",
            attributes: {},
            path: [
                "state",
                "invalid"
            ]
        }
    },
    transition: {
        duration: {
            slow: {
                key: "{transition.duration.slow}",
                $value: "400ms",
                $type: "duration",
                $description: "Långsam övergång. 400ms. Används för större layoutförändringar som sidopaneler och expanderbara sektioner.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "400ms",
                    $type: "duration",
                    $description: "Långsam övergång. 400ms. Används för större layoutförändringar som sidopaneler och expanderbara sektioner.",
                    key: "{transition.duration.slow}"
                },
                name: "transitionDurationSlow",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "slow"
                ]
            },
            normal: {
                key: "{transition.duration.normal}",
                $value: "300ms",
                $type: "duration",
                $description: "Normal övergångshastighet. 300ms. Standardval för de flesta animationer.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "300ms",
                    $type: "duration",
                    $description: "Normal övergångshastighet. 300ms. Standardval för de flesta animationer.",
                    key: "{transition.duration.normal}"
                },
                name: "transitionDurationNormal",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "normal"
                ]
            },
            fast: {
                key: "{transition.duration.fast}",
                $value: "250ms",
                $type: "duration",
                $description: "Snabb övergång. 250ms. Används för kortlivade övergångar som tooltips och dropdowns — inte hover.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "250ms",
                    $type: "duration",
                    $description: "Snabb övergång. 250ms. Används för kortlivade övergångar som tooltips och dropdowns — inte hover.",
                    key: "{transition.duration.fast}"
                },
                name: "transitionDurationFast",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "fast"
                ]
            },
            quick: {
                key: "{transition.duration.quick}",
                $value: "150ms",
                $type: "duration",
                $description: "Kort mikroanimation. 150ms. Används för snabba overlay-rörelser som modaler och select-öppningar som är perceptibelt animerade men ändå snabba.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "150ms",
                    $type: "duration",
                    $description: "Kort mikroanimation. 150ms. Används för snabba overlay-rörelser som modaler och select-öppningar som är perceptibelt animerade men ändå snabba.",
                    key: "{transition.duration.quick}"
                },
                name: "transitionDurationQuick",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "quick"
                ]
            },
            instant: {
                key: "{transition.duration.instant}",
                $value: "100ms",
                $type: "duration",
                $description: "Omedelbar återkoppling. 100ms. Används för direkta tillståndsförändringar som hover-bakgrunder och färgövergångar — allt längre upplevs som tröghet.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "100ms",
                    $type: "duration",
                    $description: "Omedelbar återkoppling. 100ms. Används för direkta tillståndsförändringar som hover-bakgrunder och färgövergångar — allt längre upplevs som tröghet.",
                    key: "{transition.duration.instant}"
                },
                name: "transitionDurationInstant",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "instant"
                ]
            }
        },
        timing: {
            easeOut: {
                key: "{transition.timing.easeOut}",
                $value: [
                    0,
                    0,
                    0.58,
                    1
                ],
                $type: "cubicBezier",
                $description: "Decelererar mot slutet. Används för element som glider in i vyn.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: [
                        0,
                        0,
                        0.58,
                        1
                    ],
                    $type: "cubicBezier",
                    $description: "Decelererar mot slutet. Används för element som glider in i vyn.",
                    key: "{transition.timing.easeOut}"
                },
                name: "transitionTimingEaseOut",
                attributes: {},
                path: [
                    "transition",
                    "timing",
                    "easeOut"
                ]
            },
            easeIn: {
                key: "{transition.timing.easeIn}",
                $value: [
                    0.42,
                    0,
                    1,
                    1
                ],
                $type: "cubicBezier",
                $description: "Accelererar mot slutet. Används för element som lämnar vyn.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: [
                        0.42,
                        0,
                        1,
                        1
                    ],
                    $type: "cubicBezier",
                    $description: "Accelererar mot slutet. Används för element som lämnar vyn.",
                    key: "{transition.timing.easeIn}"
                },
                name: "transitionTimingEaseIn",
                attributes: {},
                path: [
                    "transition",
                    "timing",
                    "easeIn"
                ]
            },
            easeInOut: {
                key: "{transition.timing.easeInOut}",
                $value: [
                    0.42,
                    0,
                    0.58,
                    1
                ],
                $type: "cubicBezier",
                $description: "Accelererar sedan decelererar symmetriskt. Används för element som rör sig mellan två positioner på skärmen.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: [
                        0.42,
                        0,
                        0.58,
                        1
                    ],
                    $type: "cubicBezier",
                    $description: "Accelererar sedan decelererar symmetriskt. Används för element som rör sig mellan två positioner på skärmen.",
                    key: "{transition.timing.easeInOut}"
                },
                name: "transitionTimingEaseInOut",
                attributes: {},
                path: [
                    "transition",
                    "timing",
                    "easeInOut"
                ]
            }
        },
        panel: {
            collapse: {
                key: "{transition.panel.collapse}",
                $value: {
                    delay: "0ms",
                    duration: "300ms",
                    timingFunction: [
                        0,
                        0,
                        0.58,
                        1
                    ]
                },
                $type: "transition",
                $description: "Komprimerar en panel med easeOut-timing. Används i Accordion och expanderbara ytor.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: {
                        delay: "0ms",
                        duration: "{transition.duration.normal}",
                        timingFunction: "{transition.timing.easeOut}"
                    },
                    $type: "transition",
                    $description: "Komprimerar en panel med easeOut-timing. Används i Accordion och expanderbara ytor.",
                    key: "{transition.panel.collapse}"
                },
                name: "transitionPanelCollapse",
                attributes: {},
                path: [
                    "transition",
                    "panel",
                    "collapse"
                ]
            },
            expand: {
                key: "{transition.panel.expand}",
                $value: {
                    delay: "0ms",
                    duration: "300ms",
                    timingFunction: [
                        0.42,
                        0,
                        1,
                        1
                    ]
                },
                $type: "transition",
                $description: "Expanderar en panel med easeIn-timing. Används i Accordion och expanderbara ytor.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: {
                        delay: "0ms",
                        duration: "{transition.duration.normal}",
                        timingFunction: "{transition.timing.easeIn}"
                    },
                    $type: "transition",
                    $description: "Expanderar en panel med easeIn-timing. Används i Accordion och expanderbara ytor.",
                    key: "{transition.panel.expand}"
                },
                name: "transitionPanelExpand",
                attributes: {},
                path: [
                    "transition",
                    "panel",
                    "expand"
                ]
            }
        }
    },
    typography: {
        font: {
            family: {
                key: "{typography.font.family}",
                $type: "fontFamily",
                $value: "Inter, sans-serif",
                $description: "Primär typsnittsfamilj för hela design systemet.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                original: {
                    $type: "fontFamily",
                    $value: "Inter, sans-serif",
                    $description: "Primär typsnittsfamilj för hela design systemet.",
                    key: "{typography.font.family}"
                },
                name: "typographyFontFamily",
                attributes: {},
                path: [
                    "typography",
                    "font",
                    "family"
                ]
            },
            size: {
                10: {
                    key: "{typography.font.size.10}",
                    $value: "0.75rem",
                    $description: "0.75rem / 12px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 0.75,
                            unit: "rem"
                        },
                        $description: "0.75rem / 12px.",
                        $type: "dimension",
                        key: "{typography.font.size.10}"
                    },
                    name: "typographyFontSize10",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "10"
                    ]
                },
                20: {
                    key: "{typography.font.size.20}",
                    $value: "0.875rem",
                    $description: "0.875rem / 14px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 0.875,
                            unit: "rem"
                        },
                        $description: "0.875rem / 14px.",
                        $type: "dimension",
                        key: "{typography.font.size.20}"
                    },
                    name: "typographyFontSize20",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "20"
                    ]
                },
                30: {
                    key: "{typography.font.size.30}",
                    $value: "1rem",
                    $description: "1rem / 16px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1,
                            unit: "rem"
                        },
                        $description: "1rem / 16px.",
                        $type: "dimension",
                        key: "{typography.font.size.30}"
                    },
                    name: "typographyFontSize30",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "30"
                    ]
                },
                40: {
                    key: "{typography.font.size.40}",
                    $value: "1.125rem",
                    $description: "1.125rem / 18px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1.125,
                            unit: "rem"
                        },
                        $description: "1.125rem / 18px.",
                        $type: "dimension",
                        key: "{typography.font.size.40}"
                    },
                    name: "typographyFontSize40",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "40"
                    ]
                },
                50: {
                    key: "{typography.font.size.50}",
                    $value: "1.25rem",
                    $description: "1.25rem / 20px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1.25,
                            unit: "rem"
                        },
                        $description: "1.25rem / 20px.",
                        $type: "dimension",
                        key: "{typography.font.size.50}"
                    },
                    name: "typographyFontSize50",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "50"
                    ]
                },
                60: {
                    key: "{typography.font.size.60}",
                    $value: "1.5rem",
                    $description: "1.5rem / 24px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1.5,
                            unit: "rem"
                        },
                        $description: "1.5rem / 24px.",
                        $type: "dimension",
                        key: "{typography.font.size.60}"
                    },
                    name: "typographyFontSize60",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "60"
                    ]
                },
                70: {
                    key: "{typography.font.size.70}",
                    $value: "1.625rem",
                    $description: "1.625rem / 26px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1.625,
                            unit: "rem"
                        },
                        $description: "1.625rem / 26px.",
                        $type: "dimension",
                        key: "{typography.font.size.70}"
                    },
                    name: "typographyFontSize70",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "70"
                    ]
                },
                80: {
                    key: "{typography.font.size.80}",
                    $value: "2rem",
                    $description: "2rem / 32px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 2,
                            unit: "rem"
                        },
                        $description: "2rem / 32px.",
                        $type: "dimension",
                        key: "{typography.font.size.80}"
                    },
                    name: "typographyFontSize80",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "80"
                    ]
                },
                90: {
                    key: "{typography.font.size.90}",
                    $value: "2.25rem",
                    $description: "2.25rem / 36px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 2.25,
                            unit: "rem"
                        },
                        $description: "2.25rem / 36px.",
                        $type: "dimension",
                        key: "{typography.font.size.90}"
                    },
                    name: "typographyFontSize90",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "90"
                    ]
                },
                100: {
                    key: "{typography.font.size.100}",
                    $value: "2.625rem",
                    $description: "2.625rem / 42px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 2.625,
                            unit: "rem"
                        },
                        $description: "2.625rem / 42px.",
                        $type: "dimension",
                        key: "{typography.font.size.100}"
                    },
                    name: "typographyFontSize100",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "100"
                    ]
                }
            }
        },
        lineHeight: {
            10: {
                key: "{typography.lineHeight.10}",
                $value: "1rem",
                $description: "1rem / 16px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1,
                        unit: "rem"
                    },
                    $description: "1rem / 16px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.10}"
                },
                name: "typographyLineHeight10",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "10"
                ]
            },
            20: {
                key: "{typography.lineHeight.20}",
                $value: "1.125rem",
                $description: "1.125rem / 18px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.125,
                        unit: "rem"
                    },
                    $description: "1.125rem / 18px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.20}"
                },
                name: "typographyLineHeight20",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "20"
                ]
            },
            30: {
                key: "{typography.lineHeight.30}",
                $value: "1.25rem",
                $description: "1.25rem / 20px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.25,
                        unit: "rem"
                    },
                    $description: "1.25rem / 20px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.30}"
                },
                name: "typographyLineHeight30",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "30"
                ]
            },
            40: {
                key: "{typography.lineHeight.40}",
                $value: "1.375rem",
                $description: "1.375rem / 22px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.375,
                        unit: "rem"
                    },
                    $description: "1.375rem / 22px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.40}"
                },
                name: "typographyLineHeight40",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "40"
                ]
            },
            50: {
                key: "{typography.lineHeight.50}",
                $value: "1.5rem",
                $description: "1.5rem / 24px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.5,
                        unit: "rem"
                    },
                    $description: "1.5rem / 24px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.50}"
                },
                name: "typographyLineHeight50",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "50"
                ]
            },
            60: {
                key: "{typography.lineHeight.60}",
                $value: "1.75rem",
                $description: "1.75rem / 28px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.75,
                        unit: "rem"
                    },
                    $description: "1.75rem / 28px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.60}"
                },
                name: "typographyLineHeight60",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "60"
                ]
            },
            70: {
                key: "{typography.lineHeight.70}",
                $value: "2rem",
                $description: "2rem / 32px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 2,
                        unit: "rem"
                    },
                    $description: "2rem / 32px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.70}"
                },
                name: "typographyLineHeight70",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "70"
                ]
            },
            80: {
                key: "{typography.lineHeight.80}",
                $value: "2.25rem",
                $description: "2.25rem / 36px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 2.25,
                        unit: "rem"
                    },
                    $description: "2.25rem / 36px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.80}"
                },
                name: "typographyLineHeight80",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "80"
                ]
            },
            90: {
                key: "{typography.lineHeight.90}",
                $value: "2.5rem",
                $description: "2.5rem / 40px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 2.5,
                        unit: "rem"
                    },
                    $description: "2.5rem / 40px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.90}"
                },
                name: "typographyLineHeight90",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "90"
                ]
            },
            100: {
                key: "{typography.lineHeight.100}",
                $value: "3rem",
                $description: "3rem / 48px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 3,
                        unit: "rem"
                    },
                    $description: "3rem / 48px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.100}"
                },
                name: "typographyLineHeight100",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "100"
                ]
            }
        },
        weight: {
            thin: {
                key: "{typography.weight.thin}",
                $value: 100,
                $description: "100 – Tunnast möjliga vikt.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 100,
                    $description: "100 – Tunnast möjliga vikt.",
                    $type: "fontWeight",
                    key: "{typography.weight.thin}"
                },
                name: "typographyWeightThin",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "thin"
                ]
            },
            extraLight: {
                key: "{typography.weight.extraLight}",
                $value: 200,
                $description: "200 – Extra tunn.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 200,
                    $description: "200 – Extra tunn.",
                    $type: "fontWeight",
                    key: "{typography.weight.extraLight}"
                },
                name: "typographyWeightExtraLight",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "extraLight"
                ]
            },
            light: {
                key: "{typography.weight.light}",
                $value: 300,
                $description: "300 – Tunn.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 300,
                    $description: "300 – Tunn.",
                    $type: "fontWeight",
                    key: "{typography.weight.light}"
                },
                name: "typographyWeightLight",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "light"
                ]
            },
            regular: {
                key: "{typography.weight.regular}",
                $value: 400,
                $description: "400 – Standardvikt för brödtext.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 400,
                    $description: "400 – Standardvikt för brödtext.",
                    $type: "fontWeight",
                    key: "{typography.weight.regular}"
                },
                name: "typographyWeightRegular",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "regular"
                ]
            },
            medium: {
                key: "{typography.weight.medium}",
                $value: 500,
                $description: "500 – Mellantung, för betoning utan fet stil.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 500,
                    $description: "500 – Mellantung, för betoning utan fet stil.",
                    $type: "fontWeight",
                    key: "{typography.weight.medium}"
                },
                name: "typographyWeightMedium",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "medium"
                ]
            },
            semiBold: {
                key: "{typography.weight.semiBold}",
                $value: 600,
                $description: "600 – Halvfet, för underrubriker och etiketter.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 600,
                    $description: "600 – Halvfet, för underrubriker och etiketter.",
                    $type: "fontWeight",
                    key: "{typography.weight.semiBold}"
                },
                name: "typographyWeightSemiBold",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "semiBold"
                ]
            },
            bold: {
                key: "{typography.weight.bold}",
                $value: 700,
                $description: "700 – Fet, för rubriker och framhävning.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 700,
                    $description: "700 – Fet, för rubriker och framhävning.",
                    $type: "fontWeight",
                    key: "{typography.weight.bold}"
                },
                name: "typographyWeightBold",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "bold"
                ]
            },
            extraBold: {
                key: "{typography.weight.extraBold}",
                $value: 800,
                $description: "800 – Extra fet.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 800,
                    $description: "800 – Extra fet.",
                    $type: "fontWeight",
                    key: "{typography.weight.extraBold}"
                },
                name: "typographyWeightExtraBold",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "extraBold"
                ]
            },
            black: {
                key: "{typography.weight.black}",
                $value: 900,
                $description: "900 – Tyngsta möjliga vikt.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 900,
                    $description: "900 – Tyngsta möjliga vikt.",
                    $type: "fontWeight",
                    key: "{typography.weight.black}"
                },
                name: "typographyWeightBlack",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "black"
                ]
            }
        },
        body: {
            key: "{typography.body}",
            $type: "typography",
            $description: "Standardtypografi för brödtext. Används i löptext, listor och stycken.",
            $value: {
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: "1.25rem"
            },
            filePath: "packages/theme/tokens/typography.json",
            isSource: true,
            original: {
                $type: "typography",
                $description: "Standardtypografi för brödtext. Används i löptext, listor och stycken.",
                $value: {
                    fontFamily: "{typography.font.family}",
                    fontSize: "{typography.font.size.30}",
                    fontWeight: "{typography.weight.regular}",
                    lineHeight: "{typography.lineHeight.30}"
                },
                key: "{typography.body}"
            },
            name: "typographyBody",
            attributes: {},
            path: [
                "typography",
                "body"
            ]
        },
        "body-small": {
            key: "{typography.body-small}",
            $type: "typography",
            $description: "Liten brödtextstil. Används för kompakt text i t.ex. tabeller och listor.",
            $value: {
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 400,
                lineHeight: "1.125rem"
            },
            filePath: "packages/theme/tokens/typography.json",
            isSource: true,
            original: {
                $type: "typography",
                $description: "Liten brödtextstil. Används för kompakt text i t.ex. tabeller och listor.",
                $value: {
                    fontFamily: "{typography.font.family}",
                    fontSize: "{typography.font.size.20}",
                    fontWeight: "{typography.weight.regular}",
                    lineHeight: "{typography.lineHeight.20}"
                },
                key: "{typography.body-small}"
            },
            name: "typographyBodySmall",
            attributes: {},
            path: [
                "typography",
                "body-small"
            ]
        },
        description: {
            key: "{typography.description}",
            $type: "typography",
            $description: "Beskrivningstext, t.ex. för hjälptexter och ledtexter i formulär.",
            $value: {
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 400,
                lineHeight: "1.125rem"
            },
            filePath: "packages/theme/tokens/typography.json",
            isSource: true,
            original: {
                $type: "typography",
                $description: "Beskrivningstext, t.ex. för hjälptexter och ledtexter i formulär.",
                $value: {
                    fontFamily: "{typography.font.family}",
                    fontSize: "{typography.font.size.20}",
                    fontWeight: "{typography.weight.regular}",
                    lineHeight: "{typography.lineHeight.20}"
                },
                key: "{typography.description}"
            },
            name: "typographyDescription",
            attributes: {},
            path: [
                "typography",
                "description"
            ]
        },
        "description-small": {
            key: "{typography.description-small}",
            $type: "typography",
            $description: "Liten beskrivningstext, t.ex. för felmeddelanden och teckenräknare i formulär.",
            $value: {
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 400,
                lineHeight: "1rem"
            },
            filePath: "packages/theme/tokens/typography.json",
            isSource: true,
            original: {
                $type: "typography",
                $description: "Liten beskrivningstext, t.ex. för felmeddelanden och teckenräknare i formulär.",
                $value: {
                    fontFamily: "{typography.font.family}",
                    fontSize: "{typography.font.size.10}",
                    fontWeight: "{typography.weight.regular}",
                    lineHeight: "{typography.lineHeight.10}"
                },
                key: "{typography.description-small}"
            },
            name: "typographyDescriptionSmall",
            attributes: {},
            path: [
                "typography",
                "description-small"
            ]
        }
    },
    zIndex: {
        base: {
            key: "{zIndex.base}",
            $value: 1,
            $description: "Basnivå för normala element. z-index: 1.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 1,
                $description: "Basnivå för normala element. z-index: 1.",
                $type: "number",
                key: "{zIndex.base}"
            },
            name: "zIndexBase",
            attributes: {},
            path: [
                "zIndex",
                "base"
            ]
        },
        above: {
            key: "{zIndex.above}",
            $value: 10,
            $description: "Placerar element ovanför normala element, t.ex. tooltips i flödet. z-index: 10.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 10,
                $description: "Placerar element ovanför normala element, t.ex. tooltips i flödet. z-index: 10.",
                $type: "number",
                key: "{zIndex.above}"
            },
            name: "zIndexAbove",
            attributes: {},
            path: [
                "zIndex",
                "above"
            ]
        },
        sidebar: {
            key: "{zIndex.sidebar}",
            $value: 500,
            $description: "Z-index för sidopaneler och navigationsdrawers. z-index: 500.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 500,
                $description: "Z-index för sidopaneler och navigationsdrawers. z-index: 500.",
                $type: "number",
                key: "{zIndex.sidebar}"
            },
            name: "zIndexSidebar",
            attributes: {},
            path: [
                "zIndex",
                "sidebar"
            ]
        },
        modal: {
            key: "{zIndex.modal}",
            $value: 1000,
            $description: "Z-index för modaler och dialoger. z-index: 1000.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 1000,
                $description: "Z-index för modaler och dialoger. z-index: 1000.",
                $type: "number",
                key: "{zIndex.modal}"
            },
            name: "zIndexModal",
            attributes: {},
            path: [
                "zIndex",
                "modal"
            ]
        },
        toast: {
            key: "{zIndex.toast}",
            $value: 1100,
            $description: "Z-index för toast-notifikationer, ovanför modaler. z-index: 1100.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 1100,
                $description: "Z-index för toast-notifikationer, ovanför modaler. z-index: 1100.",
                $type: "number",
                key: "{zIndex.toast}"
            },
            name: "zIndexToast",
            attributes: {},
            path: [
                "zIndex",
                "toast"
            ]
        },
        skipToContent: {
            key: "{zIndex.skipToContent}",
            $value: 1200,
            $description: "Z-index för 'hoppa till innehåll'-länken för tillgänglighet, alltid överst. z-index: 1200.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 1200,
                $description: "Z-index för 'hoppa till innehåll'-länken för tillgänglighet, alltid överst. z-index: 1200.",
                $type: "number",
                key: "{zIndex.skipToContent}"
            },
            name: "zIndexSkipToContent",
            attributes: {},
            path: [
                "zIndex",
                "skipToContent"
            ]
        }
    }
});

;// CONCATENATED MODULE: ./packages/theme/src/lib/style-dictionary-dist/variables.js
/**
 * Do not edit directly, this file was auto-generated.
 */ const base10 = "0.125rem";
const base15 = "0.188rem";
const base20 = "0.25rem";
const base30 = "0.375rem";
const base40 = "0.5rem";
const base50 = "0.625rem";
const base60 = "0.75rem";
const base70 = "0.875rem";
const base75 = "0.938rem";
const base80 = "1rem";
const base90 = "1.25rem";
const base100 = "1.5rem";
const base110 = "1.75rem";
const base120 = "2rem";
const base130 = "2.5rem";
const base140 = "2.75rem";
const base150 = "3rem";
const base00 = "0rem";
const base05 = "0.063rem";
const windowSizesSm = "480px"; // Liten skärmstorlek. 480px.
const windowSizesMd = "768px"; // Mellanstor skärmstorlek. 768px.
const windowSizesLg = "1024px"; // Stor skärmstorlek. 1024px.
const windowSizesXl = "1280px"; // Extra stor skärmstorlek. 1280px.
const breakpointsXs = "(max-width: calc(480px - 1px))"; // Extra liten skärm. Upp till 479px (max-width).
const breakpointsSm = "(min-width: 480px)"; // Liten skärm och uppåt. Från 480px (min-width).
const breakpointsMd = "(min-width: 768px)"; // Mellanstor skärm och uppåt. Från 768px (min-width).
const breakpointsLg = "(min-width: 1024px)"; // Stor skärm och uppåt. Från 1024px (min-width).
const breakpointsXl = "(min-width: 1280px)"; // Extra stor skärm och uppåt. Från 1280px (min-width).
const buttonBackgroundPrimaryBase = "light-dark(#143c50, #2e7ca5)"; // Färg på primärknapp
const buttonBackgroundPrimaryHover = "light-dark(#25607f, #25607f)"; // Hover state på primärknapp
const buttonBackgroundPrimaryActive = "light-dark(#2e7ca5, #143c50)"; // Active state för primärknapp
const buttonBackgroundSecondaryBase = "transparent"; // Färg på sekundärknapp
const buttonBackgroundSecondaryHover = "light-dark(#0000000d, #ffffff21)"; // Hover state på sekundärknapp
const buttonBackgroundSecondaryActive = "light-dark(#0000001a, #ffffff26)"; // Active state för sekundärknapp
const buttonBackgroundTertiaryHover = "light-dark(#0000000d, #ffffff21)"; // Hover state för tertiär knapp
const buttonBackgroundTertiaryActive = "light-dark(#0000001a, #ffffff26)"; // Active state för tertiär knapp
const buttonBackgroundDangerBase = "light-dark(#e62323, #e62323)"; // Färg på danger knapp
const buttonBackgroundDangerHover = "light-dark(#bc1d1d, #bc1d1d)"; // Hover state för danger knapp
const buttonBackgroundDangerActive = "light-dark(#7d1313, #7d1313)"; // Active state för danger knapp
const buttonBackgroundDisabled = "light-dark(#0000000d,#ffffff21)"; // Disabled state för knappar
const buttonBorderSecondary = "light-dark(#143c50, #f2f2f2)"; // Kantfärg för sekundärknapp
const buttonIconHover = "light-dark(#0000000d, #ffffff21)"; // Hover state för ikonknappar
const buttonIconActive = "light-dark(#00000033, #ffffff33)"; // Active state för ikoner
const colorBlackBase = "#000"; // Black
const colorBlackHover = "#0d0d0d"; // Black hover
const colorBlackOpacity5 = "#0000000d"; // Black with 5% opacity
const colorBlackOpacity10 = "#0000001a"; // Black with 10% opacity
const colorWhiteBase = "#fff"; // White
const colorWhiteHover = "#e6e6e6"; // White hover
const colorWhiteOpacity13 = "#ffffff21"; // White with 13% opacity
const colorWhiteOpacity15 = "#ffffff26"; // White with 15% opacity
const colorGray10 = "#f2f2f2";
const colorGray20 = "#e6e6e6";
const colorGray30 = "#d9d9d9";
const colorGray40 = "#ccc";
const colorGray50 = "#bfbfbf";
const colorGray60 = "#b3b3b3";
const colorGray70 = "#a6a6a6";
const colorGray80 = "#999";
const colorGray90 = "#8c8c8c";
const colorGray100 = "#808080";
const colorGray110 = "#737373";
const colorGray120 = "#666";
const colorGray130 = "#5d5d5d";
const colorGray140 = "#525252";
const colorGray150 = "#474747";
const colorGray160 = "#383838";
const colorGray170 = "#333";
const colorGray180 = "#262626";
const colorGray190 = "#212121";
const colorGray200 = "#171717";
const colorBlue10 = "#eaf2f6";
const colorBlue20 = "#d5e5ed";
const colorBlue40 = "#abcbdb";
const colorBlue50 = "#94BCD1";
const colorBlue60 = "#82b0c9";
const colorBlue70 = "#6CA3C0";
const colorBlue80 = "#5897b8";
const colorBlue90 = "#4289ad";
const colorBlue100 = "#2e7ca5";
const colorBlue110 = "#2C7399";
const colorBlue120 = "#29698C";
const colorBlue130 = "#25607f";
const colorBlue150 = "#143c50";
const colorPurple80 = "#b46ab4";
const colorPurple110 = "#954b95";
const colorRed100 = "#b90835";
const colorOrange100 = "oklch(0.66 0.18 45)";
const colorSignalBlue10 = "#eaf2f6";
const colorSignalBlue20 = "#d5e5ed";
const colorSignalBlue100 = "#06c";
const colorSignalBlue170 = "#162b33";
const colorSignalBlue180 = "#112127";
const colorSignalGreen20 = "#d5f2d9";
const colorSignalGreen30 = "#bae5c5";
const colorSignalGreen100 = "#008d3c";
const colorSignalGreen150 = "#194B33";
const colorSignalGreen170 = "#163328";
const colorSignalGreen180 = "#112722";
const colorSignalYellow10 = "#fff8e2";
const colorSignalYellow20 = "#fff1cd";
const colorSignalYellow30 = "#ffeab8";
const colorSignalYellow40 = "#ffe3a3";
const colorSignalYellow50 = "#ffdc8b";
const colorSignalYellow60 = "#ffd47b";
const colorSignalYellow70 = "#fdcd5d";
const colorSignalYellow80 = "#fbc640";
const colorSignalYellow90 = "#fabf1b";
const colorSignalYellow100 = "#fab900";
const colorSignalYellow110 = "#daa105";
const colorSignalYellow120 = "#bd8c1e";
const colorSignalYellow130 = "#a17927";
const colorSignalYellow140 = "#88672a";
const colorSignalYellow150 = "#70562b";
const colorSignalYellow160 = "#5a4629";
const colorSignalYellow170 = "#453826";
const colorSignalYellow180 = "#322a20";
const colorSignalYellow190 = "#201c18";
const colorSignalYellow200 = "#0f0e0e";
const colorSignalRed10 = "#ffefef";
const colorSignalRed20 = "#ffdfdf";
const colorSignalRed30 = "#fcc8c8";
const colorSignalRed40 = "#f9b0b0";
const colorSignalRed50 = "#f69999";
const colorSignalRed60 = "#f38181";
const colorSignalRed70 = "#ef6a6a";
const colorSignalRed80 = "#EC5252";
const colorSignalRed90 = "#e93b3b";
const colorSignalRed100 = "#e62323";
const colorSignalRed110 = "#d12020";
const colorSignalRed120 = "#bc1d1d";
const colorSignalRed130 = "#a71919";
const colorSignalRed140 = "#921616";
const colorSignalRed150 = "#7d1313";
const colorSignalRed160 = "#691010";
const colorSignalRed170 = "#540d0d";
const colorSignalRed180 = "#3f0a0a";
const colorSignalRed190 = "#2a0606";
const colorSignalRed200 = "#150303";
const colorSky20 = "#cde6f3";
const colorSky60 = "#4a95df";
const colorSky180 = "#101037";
const colorMint20 = "#d5f2d9";
const colorMint60 = "#75b47d";
const colorMint180 = "#07270b";
const colorCream20 = "#fff5db";
const colorCream60 = "#ecbe4a";
const colorCream180 = "#2c2719";
const colorTeal20 = "#cdf2f2";
const colorTeal60 = "#43bcbc";
const colorTeal180 = "#0d2c2c";
const colorLagoon20 = "#d2daf9";
const colorLagoon60 = "#7088e0";
const colorLagoon180 = "#0a1332";
const colorLavender20 = "#f6d0f9";
const colorLavender60 = "#b77dbc";
const colorLavender180 = "#391c3b";
const colorPeach20 = "#ffe6d9";
const colorPeach60 = "#e87031";
const colorPeach180 = "#421d0a";
const colorPippin20 = "#ffe0e0";
const colorPippin60 = "#f17575";
const colorPippin180 = "#431919";
const spacing10 = "0.125rem"; // @deprecated Use space.10 (--midas-space-10) instead
const spacing20 = "0.25rem"; // @deprecated Use space.xsmall (--midas-space-xsmall) instead
const spacing30 = "0.5rem"; // @deprecated Use space.small (--midas-space-small) instead
const spacing40 = "0.75rem"; // @deprecated Use space.60 (--midas-space-60) instead
const spacing50 = "1rem"; // @deprecated Use space.medium (--midas-space-medium) instead
const spacing60 = "1.5rem"; // @deprecated Use space.large (--midas-space-large) instead
const spacing70 = "2rem"; // @deprecated Use space.xlarge (--midas-space-xlarge) instead
const spacing80 = "2.5rem"; // @deprecated Use space.130 (--midas-space-130) instead
const spacing90 = "3rem"; // @deprecated Use space.150 (--midas-space-150) instead
const spacingXsmall = "0.25rem"; // @deprecated Use space.xsmall (--midas-space-xsmall) instead
const spacingSmall = "0.5rem"; // @deprecated Use space.small (--midas-space-small) instead
const spacingMedium = "1rem"; // @deprecated Use space.medium (--midas-space-medium) instead
const spacingLarge = "1.5rem"; // @deprecated Use space.large (--midas-space-large) instead
const spacingXlarge = "2rem"; // @deprecated Use space.xlarge (--midas-space-xlarge) instead
const size10 = "0.125rem"; // @deprecated Use base.10 (--midas-base-10) instead
const size15 = "0.188rem"; // @deprecated Use base.15 (--midas-base-15) instead
const size20 = "0.25rem"; // @deprecated Use base.20 (--midas-base-20) instead
const size30 = "0.375rem"; // @deprecated Use base.30 (--midas-base-30) instead
const size40 = "0.5rem"; // @deprecated Use base.40 (--midas-base-40) instead
const size50 = "0.625rem"; // @deprecated Use base.50 (--midas-base-50) instead
const size60 = "0.75rem"; // @deprecated Use base.60 (--midas-base-60) instead
const size70 = "0.875rem"; // @deprecated Use base.70 (--midas-base-70) instead
const size75 = "0.938rem"; // @deprecated Use base.75 (--midas-base-75) instead
const size80 = "1rem"; // @deprecated Use base.80 (--midas-base-80) instead
const size90 = "1.25rem"; // @deprecated Use base.90 (--midas-base-90) instead
const size100 = "1.5rem"; // @deprecated Use base.100 (--midas-base-100) instead
const size110 = "1.75rem"; // @deprecated Use base.110 (--midas-base-110) instead
const size120 = "2rem"; // @deprecated Use base.120 (--midas-base-120) instead
const size130 = "2.5rem"; // @deprecated Use base.130 (--midas-base-130) instead
const size140 = "2.75rem"; // @deprecated Use base.140 (--midas-base-140) instead
const size150 = "3rem"; // @deprecated Use base.150 (--midas-base-150) instead
const size00 = "0rem"; // @deprecated Use base.00 (--midas-base-00) instead
const size05 = "0.063rem"; // @deprecated Use base.05 (--midas-base-05) instead
const sizeControlSm = "2.5rem"; // @deprecated Use size.control-md (--midas-size-control-md) instead
const sizeIcon = "1.25rem"; // Standardstorlek för ikoner. 1.25rem / 20px.
const sizeIconSm = "1rem"; // Liten ikonstorlek för kompakta kontexter. 1rem / 16px.
const sizeOption = "2rem"; // Höjd för alternativ i dropdown-listor, t.ex. Select och Combobox. 2rem / 32px.
const sizeControlMd = "2.5rem"; // Medelstor interaktiv kontrollhöjd. 2.5rem / 40px.
const sizeControl = "3rem"; // Standardhöjd för interaktiva kontroller, t.ex. TextField och Button. 3rem / 48px.
const backgroundBase = "light-dark(#fff, #171717)"; // Standardbakgrund för våra applikationer
const backgroundHover = "light-dark(#e6e6e6, #212121)"; // Hoverfärg för bakgrund
const backgroundInverse = "light-dark(#171717, #f2f2f2)"; // Bakgrund med inverterade färger
const layer01Base = "light-dark(#f2f2f2, #262626)"; // Färg för lager som läggs på Background.
const layer01Hover = "light-dark(#e6e6e6, #333)"; // Hover state för layer01
const layer01Selected = "light-dark(#d9d9d9, #383838)"; // Selected state för layer01
const layer01SelectedHover = "light-dark(#ccc, #474747)"; // Hover state för layerSelected01
const layer02Base = "light-dark(#fff, #383838)"; // Färg för lager som läggs på layer 01
const layer02Hover = "light-dark(#e6e6e6, #474747)"; // Hover state för layer02
const layer02Selected = "light-dark(#d9d9d9, #525252)"; // Selected state för layer02
const layer02SelectedHover = "light-dark(#ccc, #5d5d5d)"; // Hover state för layerSelected02
const layerAccent01Base = "light-dark(#d9d9d9, #383838)"; // Accentfärg som används tillsammans med layer 01
const layerAccent01Hover = "light-dark(#ccc, #474747)"; // Hover state för layerAccent01
const layerAccent01Selected = "light-dark(#bfbfbf, #525252)"; // Selected state för layerAccent01
const layerAccent02Base = "light-dark(#d9d9d9, #383838)"; // Accentfärg som används tillsammans med layer 02
const layerAccent02Hover = "light-dark(#ccc, #474747)"; // Hover state för layerAccent02
const layerAccent02Selected = "light-dark(#bfbfbf, #525252)"; // Selected state för layerAccent02
const brandPrimary = "light-dark(#b90835, #b90835)"; // Migrationsverkets primära röda färg
const borderColorPrimary = "light-dark(#171717, #f2f2f2)"; // Kantlinje med hög kontrast
const borderColorSecondary = "light-dark(#737373, #8c8c8c)"; // Kantlinje med medelhög kontrast
const borderColorSubtle = "light-dark(#bfbfbf, #525252)"; // Kantlinje med låg kontrast
const borderColorTertiary = "light-dark(#143c50, #2e7ca5)"; // Primärblå kantlinje
const borderColorDisabled = "light-dark(#bfbfbf, #525252)"; // Kantlinje för disabled state
const borderWidth = "1px";
const field01Base = "light-dark(#f2f2f2, #262626)"; // färg för fält som ligger på Background
const field01Hover = "light-dark(#e6e6e6, #333)"; // Hover state för field01
const field01Active = "light-dark(#d9d9d9, #383838)"; // Active state för field01
const field01Disabled = "light-dark(#f2f2f2, #262626)"; // Disabled state för fält som ligger på Background
const field02Base = "light-dark(#fff, #383838)"; // Färg för fält som ligger på layer 01
const field02Hover = "light-dark(#e6e6e6, #474747)"; // Hover state för field02
const field02Active = "light-dark(#d9d9d9, #525252)"; // Active state för field02
const field02Disabled = "light-dark(#fff, #383838)"; // Disabled state för fält som ligger på layer 01
const skeleton01 = "light-dark(#f2f2f2, #262626)"; // Färg som används när Skeleton ligger på Background
const skeleton02 = "light-dark(#d9d9d9, #383838)"; // Färg som används när Skeleton ligger på Layer 01
const iconPrimary = "light-dark(#171717, #f2f2f2)"; // Primär ikonfärg
const iconSecondary = "light-dark(#525252, #a6a6a6)"; // Sekundär ikonfärg
const iconTertiary = "light-dark(#143c50, #f2f2f2)"; // Tertiär ikonfärg, används för ikoner i tertiary-knappar
const iconInverse = "light-dark(#fff, #171717)"; // Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge
const iconOnColor = "light-dark(#fff, #fff)"; // Ikonfärg på färgade ytor som inte är lager
const iconDisabled = "light-dark(#bfbfbf, #525252)"; // Färg för ikoner som är disabled
const iconSuccess = "light-dark(#008d3c, #008d3c)"; // Ikonfärg för success state
const iconInfo = "light-dark(#06c, #06c)"; // Ikonfärg för informationsikoner
const iconWarning = "light-dark(#e62323, #e62323)"; // Ikonfärg för varningsikoner och invalid state
const iconImportant = "oklch(0.66 0.18 45)"; // Ikonfärg för viktig information
const iconReadOnly = "light-dark(#bfbfbf, #383838)"; // Färg för ikoner som är read-only
const linkEnabled = "light-dark(#29698C, #6CA3C0)"; // Primär länkfärg
const linkHover = "light-dark(#143c50, #94BCD1)"; // Hover state för länkar
const linkPressed = "light-dark(#171717, #abcbdb)"; // Active/pressed state för länkar
const linkVisited = "light-dark(#954b95, #b46ab4)"; // Färg för besökta länkar
const progressBarTrackBackground = "light-dark(#d9d9d9, #383838)"; // Bakgrundsfärg för progress bar track
const progressBarIndicatorBackground = "#008d3c"; // Bakgrundsfärg för progress bar indicator
const supportBorderSuccess = "light-dark(#008d3c, #008d3c)"; // Kantlinje för success-notifikationer
const supportBorderInfo = "light-dark(#06c, #06c)"; // Kantlinje för notifikationer med information
const supportBorderImportant = "oklch(0.66 0.18 45)"; // Kantlinje för notifikationer med viktig information
const supportBorderWarning = "light-dark(#e62323, #e62323)"; // Kantlinje för notifikationer med varningar
const supportBackgroundSuccess = "light-dark(#d5f2d9, #112722)"; // Bakgrund för success-notifikationer
const supportBackgroundSuccessHover = "light-dark(#bae5c5, #163328)"; // Hoverbakgrund för success-notifikationer
const supportBackgroundInfo = "light-dark(#eaf2f6, #112127)"; // Bakgrund för notifikationer med information
const supportBackgroundInfoHover = "light-dark(#d5e5ed, #162b33)"; // Hoverbakgrund för notifikationer med information
const supportBackgroundImportant = "light-dark(#fff8e2, #322a20)"; // Bakgrund för notifikationer med viktig information
const supportBackgroundImportantHover = "light-dark(#fff1cd, #453826)"; // Hoverbakgrund för notifikationer med viktig information
const supportBackgroundWarning = "light-dark(#ffdfdf, #3f0a0a)"; // Bakgrund för notifikationer med varningar
const supportBackgroundWarningHover = "light-dark(#fcc8c8, #540d0d)"; // Hoverbakgrund för notifikationer med varningar
const tagSkyBackground = "light-dark(#cde6f3, #101037)"; // Tag bakgrund blå
const tagSkyBorderColor = "#4a95df"; // Tag kantlinje blå
const tagBlueBackground = "light-dark(#cde6f3, #101037)"; // @deprecated Använd tag.sky istället.
const tagBlueBorderColor = "#4a95df"; // @deprecated Använd tag.sky istället.
const tagMintBackground = "light-dark(#d5f2d9, #07270b)"; // Tag bakgrund grön
const tagMintBorderColor = "#75b47d"; // Tag kantlinje grön
const tagGreenBackground = "light-dark(#d5f2d9, #07270b)"; // @deprecated Använd tag.mint istället.
const tagGreenBorderColor = "#75b47d"; // @deprecated Använd tag.mint istället.
const tagCreamBackground = "light-dark(#fff5db, #2c2719)"; // Tag bakgrund gul
const tagCreamBorderColor = "#ecbe4a"; // Tag kantlinje gul
const tagYellowBackground = "light-dark(#fff5db, #2c2719)"; // @deprecated Använd tag.cream istället.
const tagYellowBorderColor = "#ecbe4a"; // @deprecated Använd tag.cream istället.
const tagTealBackground = "light-dark(#cdf2f2, #0d2c2c)"; // Tag bakgrund blågrön
const tagTealBorderColor = "#43bcbc"; // Tag kantlinje blågrön
const tagLagoonBackground = "light-dark(#d2daf9, #0a1332)"; // Tag bakgrund lagunblå
const tagLagoonBorderColor = "#7088e0"; // Tag kantlinje lagunblå
const tagLagoonblueBackground = "light-dark(#d2daf9, #0a1332)"; // @deprecated Använd tag.lagoon istället.
const tagLagoonblueBorderColor = "#7088e0"; // @deprecated Använd tag.lagoon istället.
const tagLavenderBackground = "light-dark(#f6d0f9, #391c3b)"; // Tag bakgrund lila
const tagLavenderBorderColor = "#b77dbc"; // Tag kantlinje lila
const tagPurpleBackground = "light-dark(#f6d0f9, #391c3b)"; // @deprecated Använd tag.lavender istället.
const tagPurpleBorderColor = "#b77dbc"; // @deprecated Använd tag.lavender istället.
const tagPeachBackground = "light-dark(#ffe6d9, #421d0a)"; // Tag bakgrund orange
const tagPeachBorderColor = "#e87031"; // Tag kantlinje orange
const tagOrangeBackground = "light-dark(#ffe6d9, #421d0a)"; // @deprecated Använd tag.peach istället.
const tagOrangeBorderColor = "#e87031"; // @deprecated Använd tag.peach istället.
const tagPippinBackground = "light-dark(#ffe0e0, #431919)"; // Tag bakgrund röd
const tagPippinBorderColor = "#f17575"; // Tag kantlinje röd
const tagRedBackground = "light-dark(#ffe0e0, #431919)"; // @deprecated Använd tag.pippin istället.
const tagRedBorderColor = "#f17575"; // @deprecated Använd tag.pippin istället.
const textPrimary = "light-dark(#171717, #f2f2f2)"; // Primär textfärg.
const textSecondary = "light-dark(#525252, #a6a6a6)"; // Sekundär textfärg
const textTertiary = "light-dark(#143c50, #f2f2f2)"; // Textfärg på tertiär knapp
const textOnColor = "light-dark(#fff, #fff)"; // Textfärg på färgade bakgrunder som inte är lager
const textInverse = "light-dark(#f2f2f2, #171717)"; // Inverterad textfärg
const textDisabled = "light-dark(#bfbfbf, #525252)"; // Färg för disabled text
const textWarning = "light-dark(#e62323, #EC5252)"; // Färg för felmeddelanden
const textPlaceholder = "light-dark(#a6a6a6, #525252)"; // Färg för platshållare
const textReadOnly = "light-dark(#737373, #999)"; // Färg för read-only state
const badgeBackground = "light-dark(#e62323, #e62323)"; // Bakgrundsfärg för badge
const calendarDateBackgroundHover = "light-dark(#0000001a, #ffffff1a)"; // Hover-bakgrund för datumcell
const calendarDateBackgroundSelected = "light-dark(#143c50, #5897b8)"; // Bakgrund för ett valt datum
const calendarDateBackgroundStartRange = "light-dark(#143c50, #5897b8)"; // Bakgrund för det första datumet i ett intervallval
const calendarDateBackgroundInRange = "light-dark(#d5e5ed, #143c50)"; // Bakgrund för datum som ligger inom ett valt intervall
const calendarDateBackgroundEndRange = "light-dark(#143c50, #5897b8)"; // Bakgrund för det sista datumet i ett intervallval
const logoPrimary = "light-dark(#b90835, #fff)"; // Färg på logotypen
const menuItemBackgroundHover = "light-dark(#e6e6e6, #212121)"; // Bakgrundsfärg för menu vid hover
const menuItemBackgroundSelected = "light-dark(#f2f2f2, #262626)"; // Bakgrundsfärg för aktiv menu
const menuTextSectionHeader = "light-dark(#525252, #a6a6a6)"; // Textfärg för sektionsrubriker i navigationsmenyn
const navigationLinkBackgroundHover = "light-dark(#e6e6e6, #212121)"; // Bakgrundsfärg vid hover
const navigationLinkBackgroundSelected = "light-dark(#f2f2f2, #262626)"; // Bakgrundsfärg för aktiv länk
const navigationLinkBackgroundSelectedHover = "light-dark(#e6e6e6, #212121)"; // Bakgrundsfärg vid hover på aktiv länk
const overlayBackground = "rgba(0 0 0 / 30%)"; // Bakrundsfärg för overlays
const overlayBlur = "blur(2px)"; // Blur för overlays
const cardBackgroundBase = "light-dark(#fff, #262626)"; // Bakrundsfärg för Card
const cardShadow = "0 3px 5px 0 rgba(0, 0, 0, 0.30)"; // Skugga för Card
const panelShadow = "-2px 0px 12px -2px rgba(0, 0, 0, 0.10)"; // Skugga för Panel
const space10 = "0.125rem"; // 0.125rem / 2px.
const space30 = "0.375rem"; // 0.375rem / 6px.
const space50 = "0.625rem"; // 0.625rem / 10px.
const space60 = "0.75rem"; // 0.75rem / 12px.
const space70 = "0.875rem"; // 0.875rem / 14px.
const space75 = "0.938rem"; // 0.938rem / 15px.
const space90 = "1.25rem"; // 1.25rem / 20px.
const space130 = "2.5rem"; // 2.5rem / 40px.
const space150 = "3rem"; // 3rem / 48px.
const spaceXsmall = "0.25rem"; // Extra litet avstånd. 0.25rem / 4px.
const spaceSmall = "0.5rem"; // Litet avstånd. 0.5rem / 8px.
const spaceMedium = "1rem"; // Medelstort avstånd. 1rem / 16px.
const spaceLarge = "1.5rem"; // Stort avstånd. 1.5rem / 24px.
const spaceXlarge = "2rem"; // Extra stort avstånd. 2rem / 32px.
const space05 = "0.063rem"; // 0.063rem / 1px.
const stateFocus = "0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)"; // Focus style used when the component is focused (box-shadow).
const stateFocusInset = "inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)"; // Inset variant of the focus ring (box-shadow inset).
const stateFocusContrastModeOutline = "2px"; // Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.
const stateFocusContrastModeOffset = "2px"; // Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active.
const stateInvalid = "inset 0 0 0 2px light-dark(#e62323, #e62323)"; // Invalid state style for form fields (box-shadow).
const transitionDurationSlow = "400ms"; // Långsam övergång. 400ms. Används för större layoutförändringar som sidopaneler och expanderbara sektioner.
const transitionDurationNormal = "300ms"; // Normal övergångshastighet. 300ms. Standardval för de flesta animationer.
const transitionDurationFast = "250ms"; // Snabb övergång. 250ms. Används för kortlivade övergångar som tooltips och dropdowns — inte hover.
const transitionDurationQuick = "150ms"; // Kort mikroanimation. 150ms. Används för snabba overlay-rörelser som modaler och select-öppningar som är perceptibelt animerade men ändå snabba.
const transitionDurationInstant = "100ms"; // Omedelbar återkoppling. 100ms. Används för direkta tillståndsförändringar som hover-bakgrunder och färgövergångar — allt längre upplevs som tröghet.
const transitionTimingEaseOut = (/* unused pure expression or super */ null && ([
    0,
    0,
    0.58,
    1
])); // Decelererar mot slutet. Används för element som glider in i vyn.
const transitionTimingEaseIn = (/* unused pure expression or super */ null && ([
    0.42,
    0,
    1,
    1
])); // Accelererar mot slutet. Används för element som lämnar vyn.
const transitionTimingEaseInOut = (/* unused pure expression or super */ null && ([
    0.42,
    0,
    0.58,
    1
])); // Accelererar sedan decelererar symmetriskt. Används för element som rör sig mellan två positioner på skärmen.
const transitionPanelCollapse = (/* unused pure expression or super */ null && ({
    delay: "0ms",
    duration: "300ms",
    timingFunction: [
        0,
        0,
        0.58,
        1
    ]
})); // Komprimerar en panel med easeOut-timing. Används i Accordion och expanderbara ytor.
const transitionPanelExpand = (/* unused pure expression or super */ null && ({
    delay: "0ms",
    duration: "300ms",
    timingFunction: [
        0.42,
        0,
        1,
        1
    ]
})); // Expanderar en panel med easeIn-timing. Används i Accordion och expanderbara ytor.
const typographyFontFamily = "Inter, sans-serif"; // Primär typsnittsfamilj för hela design systemet.
const typographyFontSize10 = "0.75rem"; // 0.75rem / 12px.
const typographyFontSize20 = "0.875rem"; // 0.875rem / 14px.
const typographyFontSize30 = "1rem"; // 1rem / 16px.
const typographyFontSize40 = "1.125rem"; // 1.125rem / 18px.
const typographyFontSize50 = "1.25rem"; // 1.25rem / 20px.
const typographyFontSize60 = "1.5rem"; // 1.5rem / 24px.
const typographyFontSize70 = "1.625rem"; // 1.625rem / 26px.
const typographyFontSize80 = "2rem"; // 2rem / 32px.
const typographyFontSize90 = "2.25rem"; // 2.25rem / 36px.
const typographyFontSize100 = "2.625rem"; // 2.625rem / 42px.
const typographyLineHeight10 = "1rem"; // 1rem / 16px.
const typographyLineHeight20 = "1.125rem"; // 1.125rem / 18px.
const typographyLineHeight30 = "1.25rem"; // 1.25rem / 20px.
const typographyLineHeight40 = "1.375rem"; // 1.375rem / 22px.
const typographyLineHeight50 = "1.5rem"; // 1.5rem / 24px.
const typographyLineHeight60 = "1.75rem"; // 1.75rem / 28px.
const typographyLineHeight70 = "2rem"; // 2rem / 32px.
const typographyLineHeight80 = "2.25rem"; // 2.25rem / 36px.
const typographyLineHeight90 = "2.5rem"; // 2.5rem / 40px.
const typographyLineHeight100 = "3rem"; // 3rem / 48px.
const typographyWeightThin = 100; // 100 – Tunnast möjliga vikt.
const typographyWeightExtraLight = 200; // 200 – Extra tunn.
const typographyWeightLight = 300; // 300 – Tunn.
const typographyWeightRegular = 400; // 400 – Standardvikt för brödtext.
const typographyWeightMedium = 500; // 500 – Mellantung, för betoning utan fet stil.
const typographyWeightSemiBold = 600; // 600 – Halvfet, för underrubriker och etiketter.
const typographyWeightBold = 700; // 700 – Fet, för rubriker och framhävning.
const typographyWeightExtraBold = 800; // 800 – Extra fet.
const typographyWeightBlack = 900; // 900 – Tyngsta möjliga vikt.
const typographyBody = (/* unused pure expression or super */ null && ({
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "1.25rem"
})); // Standardtypografi för brödtext. Används i löptext, listor och stycken.
const typographyBodySmall = (/* unused pure expression or super */ null && ({
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.125rem"
})); // Liten brödtextstil. Används för kompakt text i t.ex. tabeller och listor.
const typographyDescription = (/* unused pure expression or super */ null && ({
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.125rem"
})); // Beskrivningstext, t.ex. för hjälptexter och ledtexter i formulär.
const typographyDescriptionSmall = (/* unused pure expression or super */ null && ({
    fontFamily: "Inter, sans-serif",
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: "1rem"
})); // Liten beskrivningstext, t.ex. för felmeddelanden och teckenräknare i formulär.
const zIndexBase = 1; // Basnivå för normala element. z-index: 1.
const zIndexAbove = 10; // Placerar element ovanför normala element, t.ex. tooltips i flödet. z-index: 10.
const zIndexSidebar = 500; // Z-index för sidopaneler och navigationsdrawers. z-index: 500.
const zIndexModal = 1000; // Z-index för modaler och dialoger. z-index: 1000.
const zIndexToast = 1100; // Z-index för toast-notifikationer, ovanför modaler. z-index: 1100.
const zIndexSkipToContent = 1200; // Z-index för 'hoppa till innehåll'-länken för tillgänglighet, alltid överst. z-index: 1200.

;// CONCATENATED MODULE: ./packages/theme/src/lib/index.ts





;// CONCATENATED MODULE: ./packages/theme/src/index.ts



},

}]);