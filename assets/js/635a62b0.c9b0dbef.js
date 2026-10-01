"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["5723"], {
98553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_components_menu_mdx_635_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  Example: () => (/* binding */ Example),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc)
});

;// CONCATENATED MODULE: ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-menu-mdx-635.json
var site_docs_components_menu_mdx_635_namespaceObject = JSON.parse('{"id":"components/menu","title":"Menu","description":"En meny kan användas för att samla ihop funktioner som sällan används eller som kompletterar nuvarande funktion.","source":"@site/docs/components/menu.mdx","sourceDirName":"components","slug":"/components/menu","permalink":"/components/menu","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Menu","description":"En meny kan användas för att samla ihop funktioner som sällan används eller som kompletterar nuvarande funktion."},"sidebar":"sideBar","previous":{"title":"Logo","permalink":"/components/logo"},"next":{"title":"Modal","permalink":"/components/modal"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(82737);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(28247);
;// CONCATENATED MODULE: ./dist/api/components/Menu.json
var Menu_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"Menu","description":"","sourceFile":"packages/components/src/menu/Menu.tsx","props":{"size":{"defaultValue":{"value":"large"},"description":"Component size (large: height 40px, medium: height 32px)","name":"size","required":false,"parent":{"fileName":"midas/packages/components/src/menu/Menu.tsx","name":"MenuProps"},"declarations":[{"fileName":"midas/packages/components/src/menu/Menu.tsx","name":"MenuProps"}],"type":{"name":"enum","raw":"Size","value":[{"value":"\\"large\\""},{"value":"\\"medium\\""}]}},"className":{"defaultValue":{"value":"\'react-aria-Menu\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<MenuRenderProps>","value":[{"value":"(values: MenuRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"renderEmptyState":{"defaultValue":null,"description":"Provides content to display when there are no items in the menu.","name":"renderEmptyState","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuProps"}],"type":{"name":"enum","raw":"(() => ReactNode)","value":[{"value":"() => ReactNode","description":"","fullComment":"","tags":{}}]}},"shouldCloseOnSelect":{"defaultValue":null,"description":"Whether the menu should close when the menu item is selected.","name":"shouldCloseOnSelect","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"disabledKeys":{"defaultValue":null,"description":"The item keys that are disabled. These items cannot be selected, focused, or otherwise\\ninteracted with.","name":"disabledKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"CollectionBase"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"CollectionBase"}],"type":{"name":"Iterable<Key>","raw":"Iterable<Key>"}},"items":{"defaultValue":null,"description":"Item objects in the collection.","name":"items","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"CollectionBase"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"CollectionBase"}],"type":{"name":"Iterable<T>","raw":"Iterable<T>"}},"onAction":{"defaultValue":null,"description":"Handler that is called when an item is selected.","name":"onAction","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/menu/useMenu.d.ts","name":"MenuProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/menu/useMenu.d.ts","name":"MenuProps"}],"type":{"name":"enum","raw":"((key: Key, value: T) => void)","value":[{"value":"(key: Key, value: T) => void","description":"","fullComment":"","tags":{}}]}},"autoFocus":{"defaultValue":null,"description":"Where the focus should be set.","name":"autoFocus","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/menu/useMenu.d.ts","name":"MenuProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/menu/useMenu.d.ts","name":"MenuProps"}],"type":{"name":"enum","raw":"FocusStrategy | boolean","value":[{"value":"\\"first\\""},{"value":"\\"last\\""},{"value":"false"},{"value":"true"}]}},"selectionMode":{"defaultValue":null,"description":"The type of selection that is allowed in the collection.","name":"selectionMode","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"SelectionMode","value":[{"value":"\\"multiple\\""},{"value":"\\"none\\""},{"value":"\\"single\\""}]}},"onSelectionChange":{"defaultValue":null,"description":"Handler that is called when the selection changes.","name":"onSelectionChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"((keys: Selection) => void)","value":[{"value":"(keys: Selection) => void","description":"","fullComment":"","tags":{}}]}},"shouldFocusWrap":{"defaultValue":null,"description":"Whether keyboard navigation is circular.","name":"shouldFocusWrap","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/menu/useMenu.d.ts","name":"MenuProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/menu/useMenu.d.ts","name":"MenuProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"escapeKeyBehavior":{"defaultValue":{"value":"\'clearSelection\'"},"description":"Whether pressing the escape key should clear selection in the menu or not.\\n\\nMost experiences should not modify this option as it eliminates a keyboard user\'s ability to\\neasily clear selection. Only use if the escape key is being handled externally or should not\\ntrigger selection clearing contextually.","name":"escapeKeyBehavior","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/menu/useMenu.d.ts","name":"AriaMenuProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/menu/useMenu.d.ts","name":"AriaMenuProps"}],"type":{"name":"enum","raw":"\\"clearSelection\\" | \\"none\\"","value":[{"value":"\\"clearSelection\\""},{"value":"\\"none\\""}]}},"disallowEmptySelection":{"defaultValue":null,"description":"Whether the collection allows empty selection.","name":"disallowEmptySelection","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"selectedKeys":{"defaultValue":null,"description":"The currently selected keys in the collection (controlled).","name":"selectedKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"\\"all\\" | Iterable<Key>","value":[{"value":"\\"all\\""},{"value":"Iterable<Key>","description":"","fullComment":"","tags":{}}]}},"defaultSelectedKeys":{"defaultValue":null,"description":"The initial selected keys in the collection (uncontrolled).","name":"defaultSelectedKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"\\"all\\" | Iterable<Key>","value":[{"value":"\\"all\\""},{"value":"Iterable<Key>","description":"","fullComment":"","tags":{}}]}},"onClose":{"defaultValue":null,"description":"Handler that is called when the menu should close after selecting an item.","name":"onClose","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/menu/useMenu.d.ts","name":"MenuProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/menu/useMenu.d.ts","name":"MenuProps"}],"type":{"name":"enum","raw":"(() => void)","value":[{"value":"() => void","description":"","fullComment":"","tags":{}}]}},"children":{"defaultValue":null,"description":"The contents of the collection.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"CollectionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"CollectionProps"}],"type":{"name":"enum","raw":"((item: T) => ReactNode) | ReactNode","value":[{"value":"(item: T) => ReactNode","description":"","fullComment":"","tags":{}},{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"dependencies":{"defaultValue":null,"description":"Values that should invalidate the item cache when using dynamic collections.","name":"dependencies","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"CollectionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"CollectionProps"}],"type":{"name":"readonly any[]","raw":"readonly any[]"}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<MenuRenderProps>","value":[{"value":"(values: MenuRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\", MenuRenderProps>","raw":"DOMRenderFunction<\\"div\\", MenuRenderProps>"}},"slot":{"defaultValue":null,"description":"A slot name for the component. Slots allow the component to receive props from a parent\\ncomponent. An explicit `null` value indicates that the local props completely override all\\nprops received from a parent.","name":"slot","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"}],"type":{"name":"enum","raw":"string | null","value":[{"value":"null"},{"value":"string"}]}}},"types":{}}')
;// CONCATENATED MODULE: ./dist/api/components/MenuItem.json
var MenuItem_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"MenuItem","description":"","sourceFile":"packages/components/src/menu/MenuItem.tsx","props":{"className":{"defaultValue":{"value":"\'react-aria-MenuItem\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<MenuItemRenderProps>","value":[{"value":"(values: MenuItemRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"id":{"defaultValue":null,"description":"The unique id of the item.","name":"id","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"}],"type":{"name":"enum","raw":"Key","value":[{"value":"number"},{"value":"string"}]}},"value":{"defaultValue":null,"description":"The object value that this item represents. When using dynamic collections, this is set\\nautomatically.","name":"value","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"}],"type":{"name":"object","raw":"object"}},"textValue":{"defaultValue":null,"description":"A string representation of the item\'s contents, used for features like typeahead.","name":"textValue","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"}],"type":{"name":"string","raw":"string"}},"aria-label":{"defaultValue":null,"description":"An accessibility label for this item.","name":"aria-label","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"}],"type":{"name":"string","raw":"string"}},"isDisabled":{"defaultValue":null,"description":"Whether the item is disabled.","name":"isDisabled","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"onAction":{"defaultValue":null,"description":"Handler that is called when the item is selected.","name":"onAction","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"}],"type":{"name":"enum","raw":"(() => void)","value":[{"value":"() => void","description":"","fullComment":"","tags":{}}]}},"shouldCloseOnSelect":{"defaultValue":null,"description":"Whether the menu should close when the menu item is selected.","name":"shouldCloseOnSelect","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuItemProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"children":{"defaultValue":null,"description":"The children of the component. A function may be provided to alter the children based on\\ncomponent state.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"}],"type":{"name":"enum","raw":"ChildrenOrFunction<MenuItemRenderProps>","value":[{"value":"(values: MenuItemRenderProps & { defaultChildren: ReactNode; }) => ReactNode","description":"","fullComment":"","tags":{}},{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<MenuItemRenderProps>","value":[{"value":"(values: MenuItemRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nNote: You can check if `\'href\' in props` in order to tell whether to render an `<a>` element.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<a>` is expected, you cannot render a\\n  `<button>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"PossibleLinkDOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"PossibleLinkDOMRenderProps"}],"type":{"name":"enum","raw":"((props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> | DetailedHTMLProps<LinkWithRequiredHref, HTMLAnchorElement>, renderProps: MenuItemRenderProps) => ReactElement<...>)","value":[{"value":"(props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> | DetailedHTMLProps<LinkWithRequiredHref, HTMLAnchorElement>, renderProps: MenuItemRenderProps) => ReactElement<...>","description":"","fullComment":"","tags":{}}]}},"onHoverStart":{"defaultValue":null,"description":"Handler that is called when a hover interaction starts.","name":"onHoverStart","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((e: HoverEvent) => void)","value":[{"value":"(e: HoverEvent) => void","description":"","fullComment":"","tags":{}}]}},"onHoverEnd":{"defaultValue":null,"description":"Handler that is called when a hover interaction ends.","name":"onHoverEnd","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((e: HoverEvent) => void)","value":[{"value":"(e: HoverEvent) => void","description":"","fullComment":"","tags":{}}]}},"onHoverChange":{"defaultValue":null,"description":"Handler that is called when the hover state changes.","name":"onHoverChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((isHovering: boolean) => void)","value":[{"value":"(isHovering: boolean) => void","description":"","fullComment":"","tags":{}}]}},"onFocus":{"defaultValue":null,"description":"Handler that is called when the element receives focus.","name":"onFocus","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"}],"type":{"name":"enum","raw":"((e: FocusEvent<Element, Element>) => void)","value":[{"value":"(e: FocusEvent<Element, Element>) => void","description":"","fullComment":"","tags":{}}]}},"onBlur":{"defaultValue":null,"description":"Handler that is called when the element loses focus.","name":"onBlur","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"}],"type":{"name":"enum","raw":"((e: FocusEvent<Element, Element>) => void)","value":[{"value":"(e: FocusEvent<Element, Element>) => void","description":"","fullComment":"","tags":{}}]}},"onFocusChange":{"defaultValue":null,"description":"Handler that is called when the element\'s focus status changes.","name":"onFocusChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"}],"type":{"name":"enum","raw":"((isFocused: boolean) => void)","value":[{"value":"(isFocused: boolean) => void","description":"","fullComment":"","tags":{}}]}},"onPress":{"defaultValue":null,"description":"Handler that is called when the press is released over the target.","name":"onPress","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onPressStart":{"defaultValue":null,"description":"Handler that is called when a press interaction starts.","name":"onPressStart","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onPressEnd":{"defaultValue":null,"description":"Handler that is called when a press interaction ends, either\\nover the target or when the pointer leaves the target.","name":"onPressEnd","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onPressChange":{"defaultValue":null,"description":"Handler that is called when the press state changes.","name":"onPressChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((isPressed: boolean) => void)","value":[{"value":"(isPressed: boolean) => void","description":"","fullComment":"","tags":{}}]}},"onPressUp":{"defaultValue":null,"description":"Handler that is called when a press is released over the target, regardless of\\nwhether it started on the target or not.","name":"onPressUp","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onClick":{"defaultValue":null,"description":"**Not recommended – use `onPress` instead.** `onClick` is an alias for `onPress`\\nprovided for compatibility with other libraries. `onPress` provides\\nadditional event details for non-mouse interactions.","name":"onClick","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: MouseEvent<FocusableElement, MouseEvent>) => void)","value":[{"value":"(e: MouseEvent<FocusableElement, MouseEvent>) => void","description":"","fullComment":"","tags":{}}]}}},"types":{}}')
;// CONCATENATED MODULE: ./dist/api/components/MenuPopover.json
var MenuPopover_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"MenuPopover","description":"","sourceFile":"packages/components/src/menu/MenuPopover.tsx","props":{"className":{"defaultValue":{"value":"\'react-aria-Popover\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<PopoverRenderProps>","value":[{"value":"(values: PopoverRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"trigger":{"defaultValue":null,"description":"The name of the component that triggered the popover. This is reflected on the element\\nas the `data-trigger` attribute, and can be used to provide specific\\nstyles for the popover depending on which element triggered it.","name":"trigger","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"}],"type":{"name":"string","raw":"string"}},"triggerRef":{"defaultValue":null,"description":"The ref for the element which the popover positions itself with respect to.\\n\\nWhen used within a trigger component such as DialogTrigger, MenuTrigger, Select, etc.,\\nthis is set automatically. It is only required when used standalone.","name":"triggerRef","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"}],"type":{"name":"RefObject<Element | null>","raw":"RefObject<Element | null>","membersRef":"f1f2bdeb9e2c"}},"isEntering":{"defaultValue":null,"description":"Whether the popover is currently performing an entry animation.","name":"isEntering","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isExiting":{"defaultValue":null,"description":"Whether the popover is currently performing an exit animation.","name":"isExiting","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"shouldSkipAnimation":{"defaultValue":null,"description":"Whether the popover should appear and disappear without an entry or exit animation. This is\\nused by components such as PreviewTrigger to skip animations when quickly swapping between\\noverlays.","name":"shouldSkipAnimation","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"UNSTABLE_portalContainer":{"defaultValue":{"value":"document.body"},"description":"The container element in which the overlay portal will be placed. This may have unknown\\nbehavior depending on where it is portalled to.\\n@deprecated - Use a parent UNSAFE_PortalProvider to set your portal container instead.","name":"UNSTABLE_portalContainer","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"}],"type":{"name":"Element","raw":"Element"}},"offset":{"defaultValue":{"value":"8"},"description":"The additional offset applied along the main axis between the element and its\\nanchor element.","name":"offset","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Popover.d.ts","name":"PopoverProps"}],"type":{"name":"number","raw":"number"}},"placement":{"defaultValue":{"value":"\'bottom\'"},"description":"The placement of the element with respect to its anchor element.","name":"placement","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"PositionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"PositionProps"}],"type":{"name":"enum","raw":"Placement","value":[{"value":"\\"bottom end\\""},{"value":"\\"bottom left\\""},{"value":"\\"bottom right\\""},{"value":"\\"bottom start\\""},{"value":"\\"bottom\\""},{"value":"\\"end bottom\\""},{"value":"\\"end top\\""},{"value":"\\"end\\""},{"value":"\\"left bottom\\""},{"value":"\\"left top\\""},{"value":"\\"left\\""},{"value":"\\"right bottom\\""},{"value":"\\"right top\\""},{"value":"\\"right\\""},{"value":"\\"start bottom\\""},{"value":"\\"start top\\""},{"value":"\\"start\\""},{"value":"\\"top end\\""},{"value":"\\"top left\\""},{"value":"\\"top right\\""},{"value":"\\"top start\\""},{"value":"\\"top\\""}]}},"containerPadding":{"defaultValue":{"value":"12"},"description":"The placement padding that should be applied between the element and its\\nsurrounding container.","name":"containerPadding","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"PositionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"PositionProps"}],"type":{"name":"number","raw":"number"}},"crossOffset":{"defaultValue":{"value":"0"},"description":"The additional offset applied along the cross axis between the element and its\\nanchor element.","name":"crossOffset","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"PositionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"PositionProps"}],"type":{"name":"number","raw":"number"}},"shouldFlip":{"defaultValue":{"value":"true"},"description":"Whether the element should flip its orientation (e.g. top to bottom or left to right) when\\nthere is insufficient room for it to render completely.","name":"shouldFlip","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"PositionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"PositionProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"boundaryElement":{"defaultValue":{"value":"document.body"},"description":"Element that that serves as the positioning boundary.","name":"boundaryElement","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"AriaPositionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"AriaPositionProps"}],"type":{"name":"Element","raw":"Element"}},"arrowRef":{"defaultValue":null,"description":"A ref for the popover arrow element.","name":"arrowRef","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/usePopover.d.ts","name":"AriaPopoverProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/usePopover.d.ts","name":"AriaPopoverProps"}],"type":{"name":"RefObject<Element | null>","raw":"RefObject<Element | null>","membersRef":"f1f2bdeb9e2c"}},"scrollRef":{"defaultValue":{"value":"overlayRef"},"description":"A ref for the scrollable region within the overlay.","name":"scrollRef","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"AriaPositionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"AriaPositionProps"}],"type":{"name":"RefObject<Element | null>","raw":"RefObject<Element | null>","membersRef":"f1f2bdeb9e2c"}},"shouldUpdatePosition":{"defaultValue":{"value":"true"},"description":"Whether the overlay should update its position automatically.","name":"shouldUpdatePosition","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"AriaPositionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"AriaPositionProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"maxHeight":{"defaultValue":null,"description":"The maxHeight specified for the overlay element.\\nBy default, it will take all space up to the current viewport height.","name":"maxHeight","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"AriaPositionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"AriaPositionProps"}],"type":{"name":"number","raw":"number"}},"arrowBoundaryOffset":{"defaultValue":{"value":"0"},"description":"The minimum distance the arrow\'s edge should be from the edge of the overlay element.","name":"arrowBoundaryOffset","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"AriaPositionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"AriaPositionProps"}],"type":{"name":"number","raw":"number"}},"getTargetRect":{"defaultValue":{"value":"target.getBoundingClientRect()"},"description":"Overrides the target element\'s bounding rectangle. Useful for positioning relative to\\na specific point such as the mouse cursor (e.g. context menus) or text selection.\\n@param target - The target element.","name":"getTargetRect","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"AriaPositionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/useOverlayPosition.d.ts","name":"AriaPositionProps"}],"type":{"name":"enum","raw":"((target: Element) => DOMRect | null)","value":[{"value":"(target: Element) => DOMRect | null | undefined","description":"","fullComment":"","tags":{}}]}},"onFocusWithin":{"defaultValue":null,"description":"Handler that is called when the target element or a descendant receives focus.","name":"onFocusWithin","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/interactions/useFocusWithin.d.ts","name":"FocusWithinProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/interactions/useFocusWithin.d.ts","name":"FocusWithinProps"}],"type":{"name":"enum","raw":"((e: FocusEvent<Element, Element>) => void)","value":[{"value":"(e: FocusEvent<Element, Element>) => void","description":"","fullComment":"","tags":{}}]}},"onBlurWithin":{"defaultValue":null,"description":"Handler that is called when the target element and all descendants lose focus.","name":"onBlurWithin","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/interactions/useFocusWithin.d.ts","name":"FocusWithinProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/interactions/useFocusWithin.d.ts","name":"FocusWithinProps"}],"type":{"name":"enum","raw":"((e: FocusEvent<Element, Element>) => void)","value":[{"value":"(e: FocusEvent<Element, Element>) => void","description":"","fullComment":"","tags":{}}]}},"onFocusWithinChange":{"defaultValue":null,"description":"Handler that is called when the the focus within state changes.","name":"onFocusWithinChange","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/interactions/useFocusWithin.d.ts","name":"FocusWithinProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/interactions/useFocusWithin.d.ts","name":"FocusWithinProps"}],"type":{"name":"enum","raw":"((isFocusWithin: boolean) => void)","value":[{"value":"(isFocusWithin: boolean) => void","description":"","fullComment":"","tags":{}}]}},"isNonModal":{"defaultValue":null,"description":"Whether the popover is non-modal, i.e. elements outside the popover may be\\ninteracted with by assistive technologies.\\n\\nMost popovers should not use this option as it may negatively impact the screen\\nreader experience. Only use with components such as combobox, which are designed\\nto handle this situation carefully.","name":"isNonModal","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/usePopover.d.ts","name":"AriaPopoverProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/usePopover.d.ts","name":"AriaPopoverProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isKeyboardDismissDisabled":{"defaultValue":{"value":"false"},"description":"Whether pressing the escape key to close the popover should be disabled.\\n\\nMost popovers should not use this option. When set to true, an alternative\\nway to close the popover with a keyboard must be provided.","name":"isKeyboardDismissDisabled","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/usePopover.d.ts","name":"AriaPopoverProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/usePopover.d.ts","name":"AriaPopoverProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"shouldCloseOnInteractOutside":{"defaultValue":null,"description":"When user interacts with the argument element outside of the popover ref,\\nreturn true if onClose should be called. This gives you a chance to filter\\nout interaction with elements that should not dismiss the popover.\\nBy default, onClose will always be called on interaction outside the popover ref.","name":"shouldCloseOnInteractOutside","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/usePopover.d.ts","name":"AriaPopoverProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/overlays/usePopover.d.ts","name":"AriaPopoverProps"}],"type":{"name":"enum","raw":"((element: Element) => boolean)","value":[{"value":"(element: Element) => boolean","description":"","fullComment":"","tags":{}}]}},"isOpen":{"defaultValue":null,"description":"Whether the overlay is open by default (controlled).","name":"isOpen","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/overlays/useOverlayTriggerState.d.ts","name":"OverlayTriggerProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/overlays/useOverlayTriggerState.d.ts","name":"OverlayTriggerProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"defaultOpen":{"defaultValue":null,"description":"Whether the overlay is open by default (uncontrolled).","name":"defaultOpen","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/overlays/useOverlayTriggerState.d.ts","name":"OverlayTriggerProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/overlays/useOverlayTriggerState.d.ts","name":"OverlayTriggerProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"onOpenChange":{"defaultValue":null,"description":"Handler that is called when the overlay\'s open state changes.","name":"onOpenChange","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/overlays/useOverlayTriggerState.d.ts","name":"OverlayTriggerProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/overlays/useOverlayTriggerState.d.ts","name":"OverlayTriggerProps"}],"type":{"name":"enum","raw":"((isOpen: boolean) => void)","value":[{"value":"(isOpen: boolean) => void","description":"","fullComment":"","tags":{}}]}},"children":{"defaultValue":null,"description":"The children of the component. A function may be provided to alter the children based on\\ncomponent state.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"}],"type":{"name":"enum","raw":"ChildrenOrFunction<PopoverRenderProps>","value":[{"value":"(values: PopoverRenderProps & { defaultChildren: ReactNode; }) => ReactNode","description":"","fullComment":"","tags":{}},{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<PopoverRenderProps>","value":[{"value":"(values: PopoverRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\", PopoverRenderProps>","raw":"DOMRenderFunction<\\"div\\", PopoverRenderProps>"}},"slot":{"defaultValue":null,"description":"A slot name for the component. Slots allow the component to receive props from a parent\\ncomponent. An explicit `null` value indicates that the local props completely override all\\nprops received from a parent.","name":"slot","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"}],"type":{"name":"enum","raw":"string | null","value":[{"value":"null"},{"value":"string"}]}}},"types":{"f1f2bdeb9e2c":[{"name":"current","type":"Element | null","description":"","required":true}]}}')
;// CONCATENATED MODULE: ./dist/api/components/MenuSection.json
var MenuSection_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"MenuSection","description":"","sourceFile":"packages/components/src/menu/MenuSection.tsx","props":{"className":{"defaultValue":{"value":"\'react-aria-MenuSection\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuSectionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuSectionProps"}],"type":{"name":"string","raw":"string"}},"shouldCloseOnSelect":{"defaultValue":null,"description":"Whether the menu should close when the menu item is selected.","name":"shouldCloseOnSelect","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuSectionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Menu.d.ts","name":"MenuSectionProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"id":{"defaultValue":null,"description":"The unique id of the section.","name":"id","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"SectionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"SectionProps"}],"type":{"name":"enum","raw":"Key","value":[{"value":"number"},{"value":"string"}]}},"value":{"defaultValue":null,"description":"The object value that this section represents. When using dynamic collections, this is set\\nautomatically.","name":"value","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"SectionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"SectionProps"}],"type":{"name":"object","raw":"object"}},"children":{"defaultValue":null,"description":"Static child items or a function to render children.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"SectionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"SectionProps"}],"type":{"name":"enum","raw":"((item: T) => ReactElement<unknown, string | JSXElementConstructor<any>>) | ReactNode","value":[{"value":"(item: T) => ReactElement<unknown, string | JSXElementConstructor<any>>","description":"","fullComment":"","tags":{}},{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"dependencies":{"defaultValue":null,"description":"Values that should invalidate the item cache when using dynamic collections.","name":"dependencies","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"SectionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"SectionProps"}],"type":{"name":"readonly any[]","raw":"readonly any[]"}},"aria-label":{"defaultValue":null,"description":"An accessibility label for the section.","name":"aria-label","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"SectionProps"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"SectionProps"}],"type":{"name":"string","raw":"string"}},"items":{"defaultValue":null,"description":"Item objects in the section.","name":"items","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"SectionProps"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"SectionProps"}],"type":{"name":"Iterable<T>","raw":"Iterable<T>"}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleProps"}],"type":{"name":"CSSProperties","raw":"CSSProperties"}},"selectionMode":{"defaultValue":null,"description":"The type of selection that is allowed in the collection.","name":"selectionMode","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"SelectionMode","value":[{"value":"\\"multiple\\""},{"value":"\\"none\\""},{"value":"\\"single\\""}]}},"onSelectionChange":{"defaultValue":null,"description":"Handler that is called when the selection changes.","name":"onSelectionChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"((keys: Selection) => void)","value":[{"value":"(keys: Selection) => void","description":"","fullComment":"","tags":{}}]}},"disallowEmptySelection":{"defaultValue":null,"description":"Whether the collection allows empty selection.","name":"disallowEmptySelection","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"selectedKeys":{"defaultValue":null,"description":"The currently selected keys in the collection (controlled).","name":"selectedKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"\\"all\\" | Iterable<Key>","value":[{"value":"\\"all\\""},{"value":"Iterable<Key>","description":"","fullComment":"","tags":{}}]}},"defaultSelectedKeys":{"defaultValue":null,"description":"The initial selected keys in the collection (uncontrolled).","name":"defaultSelectedKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"\\"all\\" | Iterable<Key>","value":[{"value":"\\"all\\""},{"value":"Iterable<Key>","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"section\\", undefined>","raw":"DOMRenderFunction<\\"section\\", undefined>"}}},"types":{}}')
;// CONCATENATED MODULE: ./dist/api/components/MenuTrigger.json
var MenuTrigger_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"MenuTrigger","description":"","sourceFile":"packages/components/src/menu/Menu.tsx","props":{"trigger":{"defaultValue":{"value":"\'press\'"},"description":"How the menu is triggered.","name":"trigger","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/menu/useMenuTriggerState.d.ts","name":"MenuTriggerProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/menu/useMenuTriggerState.d.ts","name":"MenuTriggerProps"}],"type":{"name":"enum","raw":"MenuTriggerType","value":[{"value":"\\"contextMenu\\""},{"value":"\\"longPress\\""},{"value":"\\"press\\""}]}},"isOpen":{"defaultValue":null,"description":"Whether the overlay is open by default (controlled).","name":"isOpen","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/overlays/useOverlayTriggerState.d.ts","name":"OverlayTriggerProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/overlays/useOverlayTriggerState.d.ts","name":"OverlayTriggerProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"defaultOpen":{"defaultValue":null,"description":"Whether the overlay is open by default (uncontrolled).","name":"defaultOpen","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/overlays/useOverlayTriggerState.d.ts","name":"OverlayTriggerProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/overlays/useOverlayTriggerState.d.ts","name":"OverlayTriggerProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"onOpenChange":{"defaultValue":null,"description":"Handler that is called when the overlay\'s open state changes.","name":"onOpenChange","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/overlays/useOverlayTriggerState.d.ts","name":"OverlayTriggerProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/overlays/useOverlayTriggerState.d.ts","name":"OverlayTriggerProps"}],"type":{"name":"enum","raw":"((isOpen: boolean) => void)","value":[{"value":"(isOpen: boolean) => void","description":"","fullComment":"","tags":{}}]}}},"types":{}}')
;// CONCATENATED MODULE: ./dist/api/components/Separator.json
var Separator_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"Separator","description":"","sourceFile":"packages/components/src/menu/Separator.tsx","props":{"className":{"defaultValue":{"value":"\'react-aria-Separator\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Separator.d.ts","name":"SeparatorProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Separator.d.ts","name":"SeparatorProps"}],"type":{"name":"string","raw":"string"}},"orientation":{"defaultValue":{"value":"\'horizontal\'"},"description":"The orientation of the separator.","name":"orientation","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/separator/useSeparator.d.ts","name":"SeparatorProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/separator/useSeparator.d.ts","name":"SeparatorProps"}],"type":{"name":"enum","raw":"Orientation","value":[{"value":"\\"horizontal\\""},{"value":"\\"vertical\\""}]}},"elementType":{"defaultValue":null,"description":"The HTML element type that will be used to render the separator.","name":"elementType","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/separator/useSeparator.d.ts","name":"SeparatorProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/separator/useSeparator.d.ts","name":"SeparatorProps"}],"type":{"name":"string","raw":"string"}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleProps"}],"type":{"name":"CSSProperties","raw":"CSSProperties"}},"slot":{"defaultValue":null,"description":"A slot name for the component. Slots allow the component to receive props from a parent\\ncomponent. An explicit `null` value indicates that the local props completely override all\\nprops received from a parent.","name":"slot","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"}],"type":{"name":"enum","raw":"string | null","value":[{"value":"null"},{"value":"string"}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\" | \\"hr\\", undefined>","raw":"DOMRenderFunction<\\"div\\" | \\"hr\\", undefined>"}}},"types":{}}')
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Menu.mjs + 7 modules
var Menu = __webpack_require__(21233);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./packages/components/src/menu/MenuPopover.tsx
var MenuPopover = __webpack_require__(44838);
// EXTERNAL MODULE: ./packages/components/src/menu/Menu.tsx
var menu_Menu = __webpack_require__(22505);
// EXTERNAL MODULE: ./packages/components/src/menu/MenuItem.tsx
var MenuItem = __webpack_require__(69048);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/menu.js
var menu = __webpack_require__(89230);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/menu/MenuExamples.tsx




const OnActionExample = ()=>{
    const [actions, setActions] = (0,react.useState)([]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1rem'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Menu/* .MenuTrigger */.cQ, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                        "aria-label": "Menu",
                        variant: "icon",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(menu/* ["default"] */.A, {
                            size: 20
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuPopover/* .MenuPopover */.b, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(menu_Menu/* .Menu */.W, {
                            onAction: (key)=>setActions((prev)=>[
                                        ...prev,
                                        key
                                    ]),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* .MenuItem */.D, {
                                    id: "open",
                                    children: "Open"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* .MenuItem */.D, {
                                    id: "rename",
                                    children: "Rename..."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* .MenuItem */.D, {
                                    id: "duplicate",
                                    children: "Duplicate"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* .MenuItem */.D, {
                                    id: "share",
                                    children: "Share..."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* .MenuItem */.D, {
                                    id: "delete",
                                    children: "Delete..."
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        children: "onAction"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        style: {
                            margin: '0.25rem 0 0',
                            paddingLeft: '1.25rem'
                        },
                        children: [
                            actions.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                style: {
                                    color: 'var(--midas-text-secondary)'
                                },
                                children: "–"
                            }),
                            actions.map((action, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: action
                                }, i))
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./apps/docs/docs/components/menu.mdx


const frontMatter = {
	title: 'Menu',
	description: 'En meny kan användas för att samla ihop funktioner som sällan används eller som kompletterar nuvarande funktion.'
};
const contentTitle = undefined;

const assets = {

};














const Example = () => {
  return (0,jsx_runtime.jsxs)(Menu/* .MenuTrigger */.cQ, {
    children: [(0,jsx_runtime.jsx)(Button/* .Button */.$, {
      "aria-label": "Menu",
      variant: "icon",
      children: (0,jsx_runtime.jsx)(menu/* ["default"] */.A, {
        size: 20
      })
    }), (0,jsx_runtime.jsx)(MenuPopover/* .MenuPopover */.b, {
      children: (0,jsx_runtime.jsxs)(menu_Menu/* .Menu */.W, {
        children: [(0,jsx_runtime.jsx)(MenuItem/* .MenuItem */.D, {
          id: "open",
          children: "Open"
        }), (0,jsx_runtime.jsx)(MenuItem/* .MenuItem */.D, {
          id: "rename",
          children: "Rename..."
        }), (0,jsx_runtime.jsx)(MenuItem/* .MenuItem */.D, {
          id: "duplicate",
          children: " Duplicate"
        }), (0,jsx_runtime.jsx)(MenuItem/* .MenuItem */.D, {
          id: "share",
          children: "Share..."
        }), (0,jsx_runtime.jsx)(MenuItem/* .MenuItem */.D, {
          id: "delete",
          children: "Delete..."
        })]
      })
    })]
  });
};
const toc = [{
  "value": "Beskrivning",
  "id": "beskrivning",
  "level": 2
}, {
  "value": "Hantera handlingar",
  "id": "hantera-handlingar",
  "level": 3
}, {
  "value": "Länkar",
  "id": "länkar",
  "level": 3
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Menu",
  "id": "menu",
  "level": 3
}, {
  "value": "MenuItem",
  "id": "menuitem",
  "level": 3
}, {
  "value": "MenuPopover",
  "id": "menupopover",
  "level": 3
}, {
  "value": "MenuSection",
  "id": "menusection",
  "level": 3
}, {
  "value": "MenuTrigger",
  "id": "menutrigger",
  "level": 3
}, {
  "value": "Separator",
  "id": "separator",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* .ComponentHeader */.B, {
      name: "Menu",
      friendlyName: "Meny, menylist, kontextmeny"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En meny kan användas för att samla ihop funktioner som sällan används eller som kompletterar nuvarande funktion."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Button, Menu, MenuItem, MenuPopover, MenuTrigger } from '@midas-ds/components'\nimport { MenuIcon } from 'lucide-react'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<MenuTrigger>\n  <Button\n    aria-label='Menu'\n    variant='icon'\n  >\n    <MenuIcon size={20} />\n  </Button>\n  <MenuPopover>\n    <Menu>\n      <MenuItem>Open</MenuItem>\n      <MenuItem>Rename...</MenuItem>\n      <MenuItem>Duplicate</MenuItem>\n      <MenuItem>Share...</MenuItem>\n      <MenuItem>Delete...</MenuItem>\n    </Menu>\n  </MenuPopover>\n</MenuTrigger>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(Example, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "beskrivning",
      children: "Beskrivning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponenten bygger på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/Menu.html",
        children: "React Aria Menu"
      }), ", kodexempel i React Arias dokumentation är applicerbara genom att importera komponeterna från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Midas exporterar följande komponenter och typer:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Menu"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MenuProps"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MenuItem"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MenuItemProps"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MenuPopover"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MenuPopoverProps"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MenuSection"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MenuSectionProps"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Separator"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SeparatorProps"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MenuTrigger"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MenuTriggerProps"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hantera-handlingar",
      children: "Hantera handlingar"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(OnActionExample, {})
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onAction"
      }), " på ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Menu"
      }), " för att lyssna på vilket menyval användaren väljer. Callbacken tar emot ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), "-värdet från det valda ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MenuItem"
      }), "-elementet — se till att sätta ett ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " på varje ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MenuItem"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Menu onAction={key => console.log(key)}>\n  <MenuItem id='open'>Open</MenuItem>\n  <MenuItem id='rename'>Rename...</MenuItem>\n</Menu>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "onAction"
      }), " kan också sättas direkt på ett enskilt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MenuItem"
      }), " om du vill koppla specifik logik till ett alternativ:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Menu>\n  <MenuItem id='open' onAction={() => openFile()}>Open</MenuItem>\n  <MenuItem id='delete' onAction={() => deleteFile()}>Delete...</MenuItem>\n</Menu>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "länkar",
      children: "Länkar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["React Arias dokumentation visar ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/Menu.html#links",
        children: "exempel på hur menyn kan innehålla länkar"
      }), ". Länkar i en meny är tillåtna så länge menyns syfte är tydligt för användaren, exempelvis en meny som blandar handlingar med kontextuella länkar som \"Öppna i nytt fönster\" eller \"Gå till inställningar\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Om menyn enbart består av navigationslänkar bör du istället använda en dedikerad navigationskomponent, då ", (0,jsx_runtime.jsx)(_components.code, {
          children: "menu"
        }), "-rollen i ARIA är avsedd för handlingar och kan vara missvisande för skärmläsare."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Använd endast till sekundära handlingar som inte är högt prioriterade."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knappen ska helst ha en titel, annars bör en aria-label användas."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "menu",
      children: "Menu"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: Menu_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "menuitem",
      children: "MenuItem"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: MenuItem_namespaceObject,
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "menupopover",
      children: "MenuPopover"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: MenuPopover_namespaceObject,
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "menusection",
      children: "MenuSection"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: MenuSection_namespaceObject,
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "menutrigger",
      children: "MenuTrigger"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: MenuTrigger_namespaceObject,
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "separator",
      children: "Separator"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: Separator_namespaceObject,
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
52072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"container":"container_uCKZ","removeMargins":"removeMargins_rQ9U","contained":"contained_R9lB","flex":"flex_LQ20","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-quarter":"col-quarter_eUut","col-4":"col-4_Ovxr","col-third":"col-third_FUaF","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-half":"col-half_GzSn","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","col-full":"col-full_K_XT","col-auto":"col-auto_nMhH","col-grow":"col-grow_TBON","col-xs-1":"col-xs-1_Bg_O","col-xs-2":"col-xs-2_UhmL","col-xs-3":"col-xs-3_mEvh","col-xs-quarter":"col-xs-quarter_mtoI","col-xs-4":"col-xs-4_Uv5i","col-xs-third":"col-xs-third_AHrM","col-xs-5":"col-xs-5_Gdnm","col-xs-6":"col-xs-6_z366","col-xs-half":"col-xs-half_vH6m","col-xs-7":"col-xs-7_HNwO","col-xs-8":"col-xs-8_Vwih","col-xs-9":"col-xs-9_vfTc","col-xs-10":"col-xs-10_wJWt","col-xs-11":"col-xs-11_KTEA","col-xs-12":"col-xs-12_TaE_","col-xs-full":"col-xs-full_enWi","col-xs-auto":"col-xs-auto_G2jj","col-xs-grow":"col-xs-grow_kY1W","col-sm-1":"col-sm-1_YvIs","col-sm-2":"col-sm-2_NSCq","col-sm-3":"col-sm-3_cJ0H","col-sm-quarter":"col-sm-quarter_WWBJ","col-sm-4":"col-sm-4_dtZx","col-sm-third":"col-sm-third_g3dG","col-sm-5":"col-sm-5_C87q","col-sm-6":"col-sm-6_SkMd","col-sm-half":"col-sm-half_QX4f","col-sm-7":"col-sm-7_wa6s","col-sm-8":"col-sm-8_zH5I","col-sm-9":"col-sm-9_ym4Z","col-sm-10":"col-sm-10_jE4j","col-sm-11":"col-sm-11_Va2g","col-sm-12":"col-sm-12_BgjD","col-sm-full":"col-sm-full_Nb6O","col-sm-auto":"col-sm-auto_Qj4m","col-sm-grow":"col-sm-grow_mAH5","col-md-1":"col-md-1_Zeqd","col-md-2":"col-md-2_DR6K","col-md-3":"col-md-3_OZK7","col-md-quarter":"col-md-quarter_AmxM","col-md-4":"col-md-4_NxEu","col-md-third":"col-md-third_J4Ja","col-md-5":"col-md-5_cBkY","col-md-6":"col-md-6_it5t","col-md-half":"col-md-half_aEv_","col-md-7":"col-md-7__sAT","col-md-8":"col-md-8_WfW7","col-md-9":"col-md-9_orzQ","col-md-10":"col-md-10_wh5t","col-md-11":"col-md-11_Wsgq","col-md-12":"col-md-12_gZQg","col-md-full":"col-md-full_Ow4Z","col-md-auto":"col-md-auto_e67j","col-md-grow":"col-md-grow_quHq","col-lg-1":"col-lg-1_e1au","col-lg-2":"col-lg-2_fUsj","col-lg-3":"col-lg-3_EhhM","col-lg-quarter":"col-lg-quarter_SI9I","col-lg-4":"col-lg-4_VuKz","col-lg-third":"col-lg-third_Lf2A","col-lg-5":"col-lg-5_TF5r","col-lg-6":"col-lg-6_E93v","col-lg-half":"col-lg-half_ZdoE","col-lg-7":"col-lg-7_L5CO","col-lg-8":"col-lg-8_ZBHN","col-lg-9":"col-lg-9_TbUu","col-lg-10":"col-lg-10_Tsqu","col-lg-11":"col-lg-11_Eg8x","col-lg-12":"col-lg-12_eNvi","col-lg-full":"col-lg-full_SaRE","col-lg-auto":"col-lg-auto_fNRO","col-lg-grow":"col-lg-grow_XTrt","col-xl-1":"col-xl-1_BRna","col-xl-2":"col-xl-2_eGSK","col-xl-3":"col-xl-3_RrW2","col-xl-quarter":"col-xl-quarter_V_Yw","col-xl-4":"col-xl-4_R4AZ","col-xl-third":"col-xl-third_W3hT","col-xl-5":"col-xl-5_k7Gx","col-xl-6":"col-xl-6_xZyb","col-xl-half":"col-xl-half_V9xE","col-xl-7":"col-xl-7_lJfg","col-xl-8":"col-xl-8_zErQ","col-xl-9":"col-xl-9_oYwQ","col-xl-10":"col-xl-10_cLTa","col-xl-11":"col-xl-11_xqWK","col-xl-12":"col-xl-12_Vrsf","col-xl-full":"col-xl-full_vVSm","col-xl-auto":"col-xl-auto_YBap","col-xl-grow":"col-xl-grow_YMBn","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-quarter":"offset-quarter_ho5e","offset-4":"offset-4_L0XB","offset-third":"offset-third_dE8e","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-half":"offset-half_nGtc","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv","offset-auto":"offset-auto_ZBrI","offset-xs-1":"offset-xs-1__ZrT","offset-xs-2":"offset-xs-2_WySR","offset-xs-3":"offset-xs-3_u9Tb","offset-xs-quarter":"offset-xs-quarter_Pd1o","offset-xs-4":"offset-xs-4_Bibg","offset-xs-third":"offset-xs-third_CeeW","offset-xs-5":"offset-xs-5_OgED","offset-xs-6":"offset-xs-6_ihSu","offset-xs-half":"offset-xs-half_Vrdz","offset-xs-7":"offset-xs-7_TtZQ","offset-xs-8":"offset-xs-8_Ftc2","offset-xs-9":"offset-xs-9_HptZ","offset-xs-10":"offset-xs-10_umjb","offset-xs-11":"offset-xs-11_Suix","offset-xs-auto":"offset-xs-auto_fxe8","offset-sm-1":"offset-sm-1_knSM","offset-sm-2":"offset-sm-2_zWxo","offset-sm-3":"offset-sm-3_oqp6","offset-sm-quarter":"offset-sm-quarter_Nav1","offset-sm-4":"offset-sm-4_EvUX","offset-sm-third":"offset-sm-third_tGgh","offset-sm-5":"offset-sm-5_raNi","offset-sm-6":"offset-sm-6_KTA8","offset-sm-half":"offset-sm-half_ab81","offset-sm-7":"offset-sm-7_duQl","offset-sm-8":"offset-sm-8_uRxp","offset-sm-9":"offset-sm-9_AqYl","offset-sm-10":"offset-sm-10_Wt6J","offset-sm-11":"offset-sm-11_yAYq","offset-sm-auto":"offset-sm-auto_FAp6","offset-md-1":"offset-md-1_OpgB","offset-md-2":"offset-md-2_U24n","offset-md-3":"offset-md-3_YxnQ","offset-md-quarter":"offset-md-quarter_y53T","offset-md-4":"offset-md-4_ZaOC","offset-md-third":"offset-md-third_HZWP","offset-md-5":"offset-md-5_KVFL","offset-md-6":"offset-md-6_bZvL","offset-md-half":"offset-md-half_yilA","offset-md-7":"offset-md-7_fs04","offset-md-8":"offset-md-8_QmYF","offset-md-9":"offset-md-9_QoVc","offset-md-10":"offset-md-10_OrE0","offset-md-11":"offset-md-11_reKz","offset-md-auto":"offset-md-auto_ETdh","offset-lg-1":"offset-lg-1_zi3j","offset-lg-2":"offset-lg-2_YgjU","offset-lg-3":"offset-lg-3_CHdw","offset-lg-quarter":"offset-lg-quarter_Chor","offset-lg-4":"offset-lg-4_NOCF","offset-lg-third":"offset-lg-third_LTbL","offset-lg-5":"offset-lg-5_dGzM","offset-lg-6":"offset-lg-6_kXXi","offset-lg-half":"offset-lg-half_vFHN","offset-lg-7":"offset-lg-7_jIth","offset-lg-8":"offset-lg-8_T0Jx","offset-lg-9":"offset-lg-9_mYmL","offset-lg-10":"offset-lg-10_clJ6","offset-lg-11":"offset-lg-11_zFW2","offset-lg-auto":"offset-lg-auto_W3q4","offset-xl-1":"offset-xl-1_pRWH","offset-xl-2":"offset-xl-2_FX3q","offset-xl-3":"offset-xl-3_P8xx","offset-xl-quarter":"offset-xl-quarter_RLTy","offset-xl-4":"offset-xl-4_n7Vy","offset-xl-third":"offset-xl-third_w0fc","offset-xl-5":"offset-xl-5_vC_8","offset-xl-6":"offset-xl-6_BvQ2","offset-xl-half":"offset-xl-half_HQ16","offset-xl-7":"offset-xl-7_m1bv","offset-xl-8":"offset-xl-8_FJ1u","offset-xl-9":"offset-xl-9_oAbC","offset-xl-10":"offset-xl-10_wwaH","offset-xl-11":"offset-xl-11_HpDF","offset-xl-auto":"offset-xl-auto_Dv5P"});

},
66881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"menu":"menu_V22E","menuSection":"menuSection_CHG7","medium":"medium_Ooqg","menuItem":"menuItem_xt3h","mainContent":"mainContent_GA8r","checkMark":"checkMark_KYFR","separator":"separator_YUxq","menuPopover":"menuPopover_c4Km dropdownAnimation_MaN2"});

},
87677(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (ChevronRight)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("chevron-right", __iconNode);


//# sourceMappingURL=chevron-right.js.map


},
89230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (Menu)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("menu", __iconNode);


//# sourceMappingURL=menu.js.map


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
22505(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  W: () => (Menu)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react_aria_components__rspack_import_2 = __webpack_require__(21233);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);
/* import */ var _Menu_module_css__rspack_import_1 = __webpack_require__(66881);





const Menu = (param)=>{
    let { className, size = 'large', ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_2/* .Menu */.W1, {
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(className, _Menu_module_css__rspack_import_1/* ["default"].menu */.A.menu, size === 'medium' && _Menu_module_css__rspack_import_1/* ["default"].medium */.A.medium),
        ...rest
    });
};


},
69048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  D: () => (MenuItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);
/* import */ var react_aria_components__rspack_import_2 = __webpack_require__(21233);
/* import */ var lucide_react__rspack_import_4 = __webpack_require__(45773);
/* import */ var lucide_react__rspack_import_5 = __webpack_require__(87677);
/* import */ var _Menu_module_css__rspack_import_1 = __webpack_require__(66881);





const MenuItem = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_2/* .MenuItem */.Dr, {
        ...props,
        textValue: props.textValue || (typeof props.children === 'string' ? props.children : undefined),
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(_Menu_module_css__rspack_import_1/* ["default"].menuItem */.A.menuItem, props.className),
        children: (renderProps)=>{
            const { children } = props;
            const { selectionMode, isSelected, hasSubmenu } = renderProps;
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    selectionMode !== 'none' && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_4/* ["default"] */.A, {
                        size: 16,
                        className: _Menu_module_css__rspack_import_1/* ["default"].checkMark */.A.checkMark,
                        "data-selected": isSelected || undefined
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: _Menu_module_css__rspack_import_1/* ["default"].mainContent */.A.mainContent,
                        children: typeof children === 'function' ? children(renderProps) : children
                    }),
                    hasSubmenu && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_5/* ["default"] */.A, {
                        size: 20
                    })
                ]
            });
        }
    });


},
44838(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  b: () => (MenuPopover)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);
/* import */ var react_aria_components__rspack_import_2 = __webpack_require__(30900);
/* import */ var _Menu_module_css__rspack_import_1 = __webpack_require__(66881);




const MenuPopover = (param)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_2/* .Popover */.A, {
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(className, _Menu_module_css__rspack_import_1/* ["default"].menuPopover */.A.menuPopover),
        offset: 4,
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

}]);