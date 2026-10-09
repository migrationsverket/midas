"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["1036"], {
27412(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_components_tag_mdx_e49_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-tag-mdx-e49.json
var site_docs_components_tag_mdx_e49_namespaceObject = JSON.parse('{"id":"components/tag","title":"Tag","description":"Statusindikator","source":"@site/docs/components/tag.mdx","sourceDirName":"components","slug":"/components/tag","permalink":"/components/tag","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Tag","description":"Statusindikator"},"sidebar":"sideBar","previous":{"title":"Tabs","permalink":"/components/tabs"},"next":{"title":"Text","permalink":"/components/text"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(28247);
;// CONCATENATED MODULE: ./dist/api/components/Tag.json
var Tag_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"Tag","description":"","sourceFile":"packages/components/src/tag/Tag.tsx","props":{"color":{"defaultValue":null,"description":"Sets the background and border color of the tag","name":"color","required":false,"parent":{"fileName":"midas/packages/components/src/tag/Tag.tsx","name":"TagProps"},"declarations":[{"fileName":"midas/packages/components/src/tag/Tag.tsx","name":"TagProps"}],"type":{"name":"enum","raw":"\\"blue\\" | \\"cream\\" | \\"green\\" | \\"lagoon\\" | \\"lagoonblue\\" | \\"lavender\\" | \\"mint\\" | \\"orange\\" | \\"peach\\" | \\"pippin\\" | \\"purple\\" | \\"red\\" | \\"sky\\" | \\"teal\\" | \\"yellow\\"","value":[{"value":"\\"blue\\""},{"value":"\\"cream\\""},{"value":"\\"green\\""},{"value":"\\"lagoon\\""},{"value":"\\"lagoonblue\\""},{"value":"\\"lavender\\""},{"value":"\\"mint\\""},{"value":"\\"orange\\""},{"value":"\\"peach\\""},{"value":"\\"pippin\\""},{"value":"\\"purple\\""},{"value":"\\"red\\""},{"value":"\\"sky\\""},{"value":"\\"teal\\""},{"value":"\\"yellow\\""}]}},"dismissable":{"defaultValue":{"value":"false"},"description":"Add a button for dismissing the tab\\n@deprecated since v17.0.0 please use `isDismissable` instead","name":"dismissable","required":false,"parent":{"fileName":"midas/packages/components/src/tag/Tag.tsx","name":"TagProps"},"declarations":[{"fileName":"midas/packages/components/src/tag/Tag.tsx","name":"TagProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isDismissable":{"defaultValue":null,"description":"Add a button for dismissing the tab","name":"isDismissable","required":false,"parent":{"fileName":"midas/packages/components/src/tag/Tag.tsx","name":"TagProps"},"declarations":[{"fileName":"midas/packages/components/src/tag/Tag.tsx","name":"TagProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"type":{"defaultValue":null,"description":"@deprecated since v17.0.0 please use the prop `color` instead","name":"type","required":false,"parent":{"fileName":"midas/packages/components/src/tag/Tag.tsx","name":"TagProps"},"declarations":[{"fileName":"midas/packages/components/src/tag/Tag.tsx","name":"TagProps"}],"type":{"name":"enum","raw":"FeedbackStatus","value":[{"value":"\\"important\\""},{"value":"\\"info\\""},{"value":"\\"success\\""},{"value":"\\"warning\\""}]}},"className":{"defaultValue":{"value":"\'react-aria-Tag\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<TagRenderProps>","value":[{"value":"(values: TagRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"id":{"defaultValue":null,"description":"A unique id for the tag.","name":"id","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagProps"}],"type":{"name":"enum","raw":"Key","value":[{"value":"number"},{"value":"string"}]}},"textValue":{"defaultValue":null,"description":"A string representation of the tags\'s contents, used for accessibility.\\nRequired if children is not a plain text string.","name":"textValue","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagProps"}],"type":{"name":"string","raw":"string"}},"isDisabled":{"defaultValue":null,"description":"Whether the tag is disabled.","name":"isDisabled","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"onAction":{"defaultValue":null,"description":"Handler that is called when a user performs an action on the item. The exact user event depends\\non the collection\'s `selectionBehavior` prop and the interaction modality.","name":"onAction","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagProps"}],"type":{"name":"enum","raw":"(() => void)","value":[{"value":"() => void","description":"","fullComment":"","tags":{}}]}},"children":{"defaultValue":null,"description":"The children of the component. A function may be provided to alter the children based on\\ncomponent state.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"}],"type":{"name":"enum","raw":"ChildrenOrFunction<TagRenderProps>","value":[{"value":"(values: TagRenderProps & { defaultChildren: ReactNode; }) => ReactNode","description":"","fullComment":"","tags":{}},{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<TagRenderProps>","value":[{"value":"(values: TagRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\", TagRenderProps>","raw":"DOMRenderFunction<\\"div\\", TagRenderProps>"}},"onHoverStart":{"defaultValue":null,"description":"Handler that is called when a hover interaction starts.","name":"onHoverStart","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((e: HoverEvent) => void)","value":[{"value":"(e: HoverEvent) => void","description":"","fullComment":"","tags":{}}]}},"onHoverEnd":{"defaultValue":null,"description":"Handler that is called when a hover interaction ends.","name":"onHoverEnd","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((e: HoverEvent) => void)","value":[{"value":"(e: HoverEvent) => void","description":"","fullComment":"","tags":{}}]}},"onHoverChange":{"defaultValue":null,"description":"Handler that is called when the hover state changes.","name":"onHoverChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((isHovering: boolean) => void)","value":[{"value":"(isHovering: boolean) => void","description":"","fullComment":"","tags":{}}]}},"onFocus":{"defaultValue":null,"description":"Handler that is called when the element receives focus.","name":"onFocus","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"}],"type":{"name":"enum","raw":"((e: FocusEvent<Element, Element>) => void)","value":[{"value":"(e: FocusEvent<Element, Element>) => void","description":"","fullComment":"","tags":{}}]}},"onBlur":{"defaultValue":null,"description":"Handler that is called when the element loses focus.","name":"onBlur","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"}],"type":{"name":"enum","raw":"((e: FocusEvent<Element, Element>) => void)","value":[{"value":"(e: FocusEvent<Element, Element>) => void","description":"","fullComment":"","tags":{}}]}},"onFocusChange":{"defaultValue":null,"description":"Handler that is called when the element\'s focus status changes.","name":"onFocusChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"}],"type":{"name":"enum","raw":"((isFocused: boolean) => void)","value":[{"value":"(isFocused: boolean) => void","description":"","fullComment":"","tags":{}}]}},"onPress":{"defaultValue":null,"description":"Handler that is called when the press is released over the target.","name":"onPress","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onPressStart":{"defaultValue":null,"description":"Handler that is called when a press interaction starts.","name":"onPressStart","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onPressEnd":{"defaultValue":null,"description":"Handler that is called when a press interaction ends, either\\nover the target or when the pointer leaves the target.","name":"onPressEnd","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onPressChange":{"defaultValue":null,"description":"Handler that is called when the press state changes.","name":"onPressChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((isPressed: boolean) => void)","value":[{"value":"(isPressed: boolean) => void","description":"","fullComment":"","tags":{}}]}},"onPressUp":{"defaultValue":null,"description":"Handler that is called when a press is released over the target, regardless of\\nwhether it started on the target or not.","name":"onPressUp","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onClick":{"defaultValue":null,"description":"**Not recommended – use `onPress` instead.** `onClick` is an alias for `onPress`\\nprovided for compatibility with other libraries. `onPress` provides\\nadditional event details for non-mouse interactions.","name":"onClick","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: MouseEvent<FocusableElement, MouseEvent>) => void)","value":[{"value":"(e: MouseEvent<FocusableElement, MouseEvent>) => void","description":"","fullComment":"","tags":{}}]}}},"types":{}}')
;// CONCATENATED MODULE: ./dist/api/components/TagGroup.json
var TagGroup_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"TagGroup","description":"","sourceFile":"packages/components/src/tag/tag-group/TagGroup.tsx","props":{"className":{"defaultValue":{"value":"\'react-aria-TagGroup\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagGroupProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagGroupProps"}],"type":{"name":"string","raw":"string"}},"disabledKeys":{"defaultValue":null,"description":"The item keys that are disabled. These items cannot be selected, focused, or otherwise\\ninteracted with.","name":"disabledKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"CollectionBase"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"CollectionBase"}],"type":{"name":"Iterable<Key>","raw":"Iterable<Key>"}},"onAction":{"defaultValue":null,"description":"Handler that is called when a user performs an action on an item. The exact user event depends\\non the collection\'s `selectionBehavior` prop and the interaction modality.","name":"onAction","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/gridlist/useGridList.d.ts","name":"GridListProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/gridlist/useGridList.d.ts","name":"GridListProps"}],"type":{"name":"enum","raw":"((key: Key) => void)","value":[{"value":"(key: Key) => void","description":"","fullComment":"","tags":{}}]}},"selectionMode":{"defaultValue":null,"description":"The type of selection that is allowed in the collection.","name":"selectionMode","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"SelectionMode","value":[{"value":"\\"multiple\\""},{"value":"\\"none\\""},{"value":"\\"single\\""}]}},"onSelectionChange":{"defaultValue":null,"description":"Handler that is called when the selection changes.","name":"onSelectionChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"((keys: Selection) => void)","value":[{"value":"(keys: Selection) => void","description":"","fullComment":"","tags":{}}]}},"selectionBehavior":{"defaultValue":{"value":"\'toggle\'"},"description":"How multiple selection should behave in the collection.","name":"selectionBehavior","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/tag/useTagGroup.d.ts","name":"AriaTagGroupProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/tag/useTagGroup.d.ts","name":"AriaTagGroupProps"}],"type":{"name":"enum","raw":"SelectionBehavior","value":[{"value":"\\"replace\\""},{"value":"\\"toggle\\""}]}},"shouldSelectOnPressUp":{"defaultValue":null,"description":"Whether selection should occur on press up instead of press down.","name":"shouldSelectOnPressUp","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/tag/useTagGroup.d.ts","name":"AriaTagGroupProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/tag/useTagGroup.d.ts","name":"AriaTagGroupProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"escapeKeyBehavior":{"defaultValue":{"value":"\'clearSelection\'"},"description":"Whether pressing the escape key should clear selection in the TagGroup or not.\\n\\nMost experiences should not modify this option as it eliminates a keyboard user\'s ability to\\neasily clear selection. Only use if the escape key is being handled externally or should not\\ntrigger selection clearing contextually.","name":"escapeKeyBehavior","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/tag/useTagGroup.d.ts","name":"AriaTagGroupProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/tag/useTagGroup.d.ts","name":"AriaTagGroupProps"}],"type":{"name":"enum","raw":"\\"clearSelection\\" | \\"none\\"","value":[{"value":"\\"clearSelection\\""},{"value":"\\"none\\""}]}},"disallowEmptySelection":{"defaultValue":null,"description":"Whether the collection allows empty selection.","name":"disallowEmptySelection","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"selectedKeys":{"defaultValue":null,"description":"The currently selected keys in the collection (controlled).","name":"selectedKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"\\"all\\" | Iterable<Key>","value":[{"value":"\\"all\\""},{"value":"Iterable<Key>","description":"","fullComment":"","tags":{}}]}},"defaultSelectedKeys":{"defaultValue":null,"description":"The initial selected keys in the collection (uncontrolled).","name":"defaultSelectedKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/selection.d.ts","name":"MultipleSelection"}],"type":{"name":"enum","raw":"\\"all\\" | Iterable<Key>","value":[{"value":"\\"all\\""},{"value":"Iterable<Key>","description":"","fullComment":"","tags":{}}]}},"onRemove":{"defaultValue":null,"description":"Handler that is called when a user deletes a tag.","name":"onRemove","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/tag/useTagGroup.d.ts","name":"AriaTagGroupProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/tag/useTagGroup.d.ts","name":"AriaTagGroupProps"}],"type":{"name":"enum","raw":"((keys: Set<Key>) => void)","value":[{"value":"(keys: Set<Key>) => void","description":"","fullComment":"","tags":{}}]}},"children":{"defaultValue":null,"description":"The children of the component.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMProps"}],"type":{"name":"enum","raw":"ReactNode","value":[{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleProps"}],"type":{"name":"CSSProperties","raw":"CSSProperties"}},"slot":{"defaultValue":null,"description":"A slot name for the component. Slots allow the component to receive props from a parent\\ncomponent. An explicit `null` value indicates that the local props completely override all\\nprops received from a parent.","name":"slot","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"}],"type":{"name":"enum","raw":"string | null","value":[{"value":"null"},{"value":"string"}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\", undefined>","raw":"DOMRenderFunction<\\"div\\", undefined>"}}},"types":{}}')
;// CONCATENATED MODULE: ./dist/api/components/TagList.json
var TagList_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"TagList","description":"","sourceFile":"packages/components/src/tag/tag-list/TagList.tsx","props":{"className":{"defaultValue":{"value":"\'react-aria-TagList\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagListProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagListProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<TagListRenderProps>","value":[{"value":"(values: TagListRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"renderEmptyState":{"defaultValue":null,"description":"Provides content to display when there are no items in the tag list.","name":"renderEmptyState","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagListProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TagGroup.d.ts","name":"TagListProps"}],"type":{"name":"enum","raw":"((props: TagListRenderProps) => ReactNode)","value":[{"value":"(props: TagListRenderProps) => ReactNode","description":"","fullComment":"","tags":{}}]}},"children":{"defaultValue":null,"description":"The contents of the collection.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"CollectionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"CollectionProps"}],"type":{"name":"enum","raw":"((item: T) => ReactNode) | ReactNode","value":[{"value":"(item: T) => ReactNode","description":"","fullComment":"","tags":{}},{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"items":{"defaultValue":null,"description":"Item objects in the collection.","name":"items","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"CollectionBase"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"CollectionBase"}],"type":{"name":"Iterable<T>","raw":"Iterable<T>"}},"dependencies":{"defaultValue":null,"description":"Values that should invalidate the item cache when using dynamic collections.","name":"dependencies","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"CollectionProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Collection.d.ts","name":"CollectionProps"}],"type":{"name":"readonly any[]","raw":"readonly any[]"}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<TagListRenderProps>","value":[{"value":"(values: TagListRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\", TagListRenderProps>","raw":"DOMRenderFunction<\\"div\\", TagListRenderProps>"}}},"types":{}}')
// EXTERNAL MODULE: ./packages/components/src/tag/tag-group/TagGroup.tsx
var TagGroup = __webpack_require__(54473);
// EXTERNAL MODULE: ./packages/components/src/tag/tag-list/TagList.tsx + 1 modules
var TagList = __webpack_require__(50696);
// EXTERNAL MODULE: ./packages/components/src/tag/Tag.tsx + 1 modules
var Tag = __webpack_require__(80083);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/tag/TagExamples.tsx


const DynamicExample = ()=>{
    const items = [
        {
            id: 'sky',
            name: 'Sky'
        },
        {
            id: 'mint',
            name: 'Mint'
        },
        {
            id: 'cream',
            name: 'Cream'
        },
        {
            id: 'teal',
            name: 'Teal'
        },
        {
            id: 'lagoon',
            name: 'Lagoon'
        },
        {
            id: 'lavender',
            name: 'Lavender'
        },
        {
            id: 'peach',
            name: 'Peach'
        },
        {
            id: 'pippin',
            name: 'Pippin'
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TagGroup/* .TagGroup */.C, {
            "aria-label": "Taggar",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TagList/* .TagList */.L, {
                items: items,
                children: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
                        id: item.id,
                        color: item.id,
                        children: item.name
                    })
            })
        })
    });
};

// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(82737);
// EXTERNAL MODULE: ./packages/components/src/card/Card.tsx + 1 modules
var Card = __webpack_require__(32262);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.mjs + 11 modules
var createLucideIcon = __webpack_require__(18913);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/scooter.mjs
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "scooter",
  size: 24,
  node: [
    ["path", { d: "M21 4h-3.5l2 11.05", key: "1gktiw" }],
    [
      "path",
      { d: "M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009", key: "1bq3u3" }
    ],
    ["circle", { cx: "19.5", cy: "17.5", r: "2.5", key: "e4zhv9" }],
    ["circle", { cx: "4.5", cy: "17.5", r: "2.5", key: "50vk4p" }]
  ]
};
__iconData.node;
const Scooter = (0,createLucideIcon/* ["default"] */.A)(__iconData);


//# sourceMappingURL=scooter.mjs.map

;// CONCATENATED MODULE: ./apps/docs/docs/components/tag.mdx


const frontMatter = {
	title: 'Tag',
	description: 'Statusindikator'
};
const contentTitle = undefined;

const assets = {

};











const toc = [{
  "value": "Användning",
  "id": "användning",
  "level": 2
}, {
  "value": "Färger",
  "id": "färger",
  "level": 2
}, {
  "value": "Dismissable",
  "id": "dismissable",
  "level": 2
}, {
  "value": "Ikoner",
  "id": "ikoner",
  "level": 2
}, {
  "value": "Statiskt och dynamisk innehåll",
  "id": "statiskt-och-dynamisk-innehåll",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Tag",
  "id": "tag",
  "level": 3
}, {
  "value": "TagGroup",
  "id": "taggroup",
  "level": 3
}, {
  "value": "TagList",
  "id": "taglist",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* .ComponentHeader */.B, {
      name: "Tag",
      friendlyName: "Tagg, chip, statusindikator ",
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent för att visa beskrivande etiketter som kan användas för att kategorisera information."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Tag, TagGroup, TagList } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TagGroup aria-label='Taggar'>\n  <TagList>\n    <Tag>Tag med information</Tag>\n  </TagList>\n</TagGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(TagGroup/* .TagGroup */.C, {
        "aria-label": "Taggar",
        children: (0,jsx_runtime.jsx)(TagList/* .TagList */.L, {
          children: (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
            children: "Tag med information"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "användning",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tag används som en del av ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/select",
        children: "Select"
      }), " om ", (0,jsx_runtime.jsx)(_components.code, {
        children: "showTags"
      }), " är aktiverat men kan också användas fristående eller inuti andra komponenter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardContent>\n    <CardTitle>Köp frukt</CardTitle>\n    <Text>Vi behöver köpa frukt till fika</Text>\n    <TagGroup aria-label='Taggar'>\n      <TagList>\n        <Tag color='sky'>Inte påbörjat</Tag>\n      </TagList>\n    </TagGroup>\n    <CardActions>\n      <Button variant='tertiary'>Utför uppgift</Button>\n    </CardActions>\n  </CardContent>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Card/* .Card */.Zp, {
        children: (0,jsx_runtime.jsxs)(Card/* .CardContent */.Wu, {
          children: [(0,jsx_runtime.jsx)(Card/* .CardTitle */.ZB, {
            children: "Köp frukt"
          }), (0,jsx_runtime.jsx)(Text/* .Text */.E, {
            children: "Vi behöver köpa frukt till fika"
          }), (0,jsx_runtime.jsx)(TagGroup/* .TagGroup */.C, {
            "aria-label": "Taggar",
            children: (0,jsx_runtime.jsx)(TagList/* .TagList */.L, {
              children: (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
                color: "sky",
                children: "Inte påbörjat"
              })
            })
          }), (0,jsx_runtime.jsx)(Card/* .CardActions */.w, {
            children: (0,jsx_runtime.jsx)(Button/* .Button */.$, {
              variant: "tertiary",
              children: "Utför uppgift"
            })
          })]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "färger",
      children: "Färger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tag finns i nio färger."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TagGroup aria-label='Färger'>\n  <TagList>\n    <Tag>Default</Tag>\n    <Tag color='sky'>Sky</Tag>\n    <Tag color='mint'>Mint</Tag>\n    <Tag color='cream'>Cream</Tag>\n    <Tag color='teal'>Teal</Tag>\n    <Tag color='lagoon'>Lagoon</Tag>\n    <Tag color='lavender'>Lavender</Tag>\n    <Tag color='peach'>Peach</Tag>\n    <Tag color='pippin'>Pippin</Tag>\n  </TagList>\n</TagGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(TagGroup/* .TagGroup */.C, {
        "aria-label": "Färger",
        children: (0,jsx_runtime.jsxs)(TagList/* .TagList */.L, {
          children: [(0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
            color: "sky",
            children: "Sky"
          }), (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
            color: "mint",
            children: "Mint"
          }), (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
            color: "cream",
            children: "Cream"
          }), (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
            color: "teal",
            children: "Teal"
          }), (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
            color: "lagoon",
            children: "Lagoon"
          }), (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
            color: "lavender",
            children: "Lavender"
          }), (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
            color: "peach",
            children: "Peach"
          }), (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
            color: "pippin",
            children: "Pippin"
          })]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dismissable",
      children: "Dismissable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Det går att göra det möjligt för användaren att stänga tag via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isDismissable"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TagGroup aria-label='Taggar'>\n  <TagList>\n    <Tag isDismissable>Default</Tag>\n  </TagList>\n</TagGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(TagGroup/* .TagGroup */.C, {
        "aria-label": "Taggar",
        children: (0,jsx_runtime.jsx)(TagList/* .TagList */.L, {
          children: (0,jsx_runtime.jsx)(Tag/* .Tag */.v, {
            isDismissable: true,
            children: "Default"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ikoner",
      children: "Ikoner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ikoner kan användas inuti en tag."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TagGroup aria-label='Taggar'>\n  <TagList>\n    <Tag>\n      <ScooterIcon /> Scooters\n    </Tag>\n  </TagList>\n</TagGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(TagGroup/* .TagGroup */.C, {
        "aria-label": "Taggar",
        children: (0,jsx_runtime.jsx)(TagList/* .TagList */.L, {
          children: (0,jsx_runtime.jsxs)(Tag/* .Tag */.v, {
            children: [(0,jsx_runtime.jsx)(Scooter, {}), 'Scooters']
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statiskt-och-dynamisk-innehåll",
      children: "Statiskt och dynamisk innehåll"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TagList"
      }), " använder React arias API för ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-aria.adobe.com/collections",
        children: "Collections"
      }), " och kan användas dynamiskt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Tag, TagGroup, TagList, type TagProps } from '@midas-ds/components'\n\nconst DynamicExample = () => {\n  const items: { id: TagProps['color']; name: string }[] = [\n    { id: 'sky', name: 'Sky' },\n    { id: 'mint', name: 'Mint' },\n    { id: 'cream', name: 'Cream' },\n    { id: 'teal', name: 'Teal' },\n    { id: 'lagoon', name: 'Lagoon' },\n    { id: 'lavender', name: 'Lavender' },\n    { id: 'peach', name: 'Peach' },\n    { id: 'pippin', name: 'Pippin' },\n  ]\n\n  return (\n    <TagGroup aria-label='Taggar'>\n      <TagList items={items}>\n        {item => (\n          <Tag\n            id={item.id}\n            color={item.id}\n          >\n            {item.name}\n          </Tag>\n        )}\n      </TagList>\n    </TagGroup>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(DynamicExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tag",
      children: "Tag"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: Tag_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "taggroup",
      children: "TagGroup"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: TagGroup_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "taglist",
      children: "TagList"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: TagList_namespaceObject
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
/* import */ var lucide_react__rspack_import_6 = __webpack_require__(85304);
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var chevron_down = __webpack_require__(16749);
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
32262(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZB: () => (/* binding */ CardTitle),
  hB: () => (/* binding */ CardLink),
  s$: () => (/* binding */ CardActionArea),
  w: () => (/* binding */ CardActions),
  Wu: () => (/* binding */ CardContent),
  Zp: () => (/* binding */ Card),
  MH: () => (/* binding */ CardImage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/card/Card.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Card_module = ({"card":"card_Ssoo","horizontal":"horizontal_p4Mn","cardLink":"cardLink_gsBo","cardContent":"cardContent_JE5V","cardActions":"cardActions_HxzH","deprecated":"deprecated_Ibjw","cardActionArea":"cardActionArea_re2y","cardImage":"cardImage_BIZa","cardLinkIcon":"cardLinkIcon_av9l"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(72201);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Button.mjs
var Button = __webpack_require__(93426);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(10068);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.mjs
var arrow_right = __webpack_require__(25279);
;// CONCATENATED MODULE: ./packages/components/src/card/Card.tsx







const CardContext = /*#__PURE__*/ react.createContext({
    horizontal: undefined,
    titleId: undefined
});
const CardContentContext = /*#__PURE__*/ react.createContext(undefined);
const Card = (param)=>{
    let { horizontal, className, children, ...rest } = param;
    const id = react.useId();
    const titleId = `card-title-${id}`;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContext.Provider, {
        value: {
            horizontal,
            titleId
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ...rest,
            className: (0,clsx/* ["default"] */.A)(Card_module.card, horizontal && Card_module.horizontal, className),
            children: children
        })
    });
};
const CardContent = (param)=>{
    let { children, ...rest } = param;
    const { horizontal } = react.useContext(CardContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContentContext.Provider, {
        value: {},
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ...rest,
            className: (0,clsx/* ["default"] */.A)(Card_module.cardContent, horizontal && Card_module.horizontal),
            children: children
        })
    });
};
const CardTitle = (param)=>{
    let { elementType = 'h2', children, className, ...rest } = param;
    const { horizontal, titleId } = react.useContext(CardContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* .Heading */.D, {
        level: 3,
        elementType: elementType,
        className: (0,clsx/* ["default"] */.A)(className, Card_module.cardTitle, horizontal && Card_module.horizontal),
        id: titleId,
        ...rest,
        children: children
    });
};
const CardActions = (param)=>{
    let { children, ...rest } = param;
    const { horizontal } = react.useContext(CardContext);
    const isDeprecatedUsage = !!react.useContext(CardContentContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ...rest,
        className: (0,clsx/* ["default"] */.A)(Card_module.cardActions, horizontal && Card_module.horizontal, isDeprecatedUsage && Card_module.deprecated),
        children: children
    });
};
/**
 *
 * @deprecated since v17.14.0 please use `CardActions` instead
 */ const CardActionArea = (param)=>{
    let { children, className, ...rest } = param;
    const { titleId } = react.useContext(CardContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
        ...rest,
        "aria-labelledby": titleId,
        className: (0,clsx/* ["default"] */.A)(Card_module.cardActionArea, className),
        children: children
    });
};
const CardImage = (param)=>{
    let { as: ImageComponent = 'img', className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageComponent, {
        ...rest,
        "data-card-image": true,
        className: (0,clsx/* ["default"] */.A)(Card_module.cardImage, className)
    });
};
const CardLink = (param)=>{
    let { children, as, ...rest } = param;
    const Component = as || Link/* .Link */.N;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Component, {
        ...rest,
        className: (0,clsx/* ["default"] */.A)(Card_module.cardLink, rest.className),
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_right/* ["default"] */.A, {
                className: Card_module.cardLinkIcon,
                size: 24
            })
        ]
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(53729);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.mjs
var info = __webpack_require__(50643);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/flag.mjs
var flag = __webpack_require__(4329);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs
var triangle_alert = __webpack_require__(63626);
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.mjs
var square_arrow_out_up_right = __webpack_require__(38012);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.mjs
var arrow_left = __webpack_require__(8252);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.mjs
var arrow_right = __webpack_require__(25279);
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
80083(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/TagGroup.mjs + 40 modules
var TagGroup = __webpack_require__(34309);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(69237);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/tag/Tag.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Tag_module = ({"button":"button_Loby","tag":"tag_WAeO","sky":"sky_Fv7D","blue":"blue_rKeo","mint":"mint_BfGl","green":"green_ghV9","cream":"cream_Nthm","yellow":"yellow_rRIY","teal":"teal_vWkg","lagoon":"lagoon_zrBa","lagoonblue":"lagoonblue_AzAa","lavender":"lavender_ggmt","purple":"purple_zLjd","peach":"peach_oK0O","orange":"orange_w3br","pippin":"pippin_FnQ2","red":"red_orH2","tagText":"tagText_f_lx","dismissable":"dismissable_Tfml"});
;// CONCATENATED MODULE: ./packages/components/src/tag/Tag.tsx






const Tag = (param)=>{
    let { className, color, dismissable = false, isDismissable, type, ...props } = param;
    const isTagDismissable = isDismissable || typeof isDismissable === 'undefined' && dismissable;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TagGroup/* .Tag */.vw, {
        className: (0,clsx/* ["default"] */.A)(Tag_module.tag, isTagDismissable && Tag_module.dismissable, {
            [Tag_module.sky]: color === 'sky',
            [Tag_module.blue]: color === 'blue' || !color && type === 'info',
            [Tag_module.mint]: color === 'mint',
            [Tag_module.green]: color === 'green' || !color && type === 'success',
            [Tag_module.cream]: color === 'cream',
            [Tag_module.yellow]: color === 'yellow' || !color && type === 'important',
            [Tag_module.teal]: color === 'teal',
            [Tag_module.lagoon]: color === 'lagoon',
            [Tag_module.lagoonblue]: color === 'lagoonblue',
            [Tag_module.lavender]: color === 'lavender',
            [Tag_module.purple]: color === 'purple',
            [Tag_module.peach]: color === 'peach',
            [Tag_module.orange]: color === 'orange',
            [Tag_module.pippin]: color === 'pippin',
            [Tag_module.red]: color === 'red' || !color && type === 'warning'
        }, className),
        ...props,
        textValue: props.textValue || (typeof props.children === 'string' ? props.children : undefined),
        children: (0,utils/* .composeRenderProps */.HW)(props.children, (children)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: Tag_module.tagText,
                        children: children
                    }),
                    isTagDismissable && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                        variant: "icon",
                        size: "medium",
                        className: Tag_module.button,
                        slot: "remove",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
                            size: 20
                        })
                    })
                ]
            }))
    });
};


},
54473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  C: () => (TagGroup)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react_aria_components__rspack_import_2 = __webpack_require__(95841);
/* import */ var react_aria_components__rspack_import_3 = __webpack_require__(34309);
/* import */ var _utils_clsx__rspack_import_5 = __webpack_require__(18496);
/* import */ var _tag_list__rspack_import_4 = __webpack_require__(50696);





const TagGroup = /*#__PURE__*/ (0,react__rspack_import_1.forwardRef)((props, ref)=>{
    const [{ className, children, ...rest }, mergedRef] = (0,react_aria_components__rspack_import_2/* .useContextProps */.JT)(props, ref, react_aria_components__rspack_import_3/* .TagGroupContext */.TB);
    const providedTagList = react__rspack_import_1.Children.toArray(children).filter(react__rspack_import_1.isValidElement).find((child)=>child.type === _tag_list__rspack_import_4/* .TagList */.L);
    // @deprecated since v17.0.0
    if (!providedTagList && "production" === 'development') {}
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_3/* .TagGroup */.CR, {
        className: (0,_utils_clsx__rspack_import_5/* ["default"] */.A)(className),
        ref: mergedRef,
        ...rest,
        children: providedTagList ? children : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_tag_list__rspack_import_4/* .TagList */.L, {
            children: children
        })
    });
});
TagGroup.displayName = 'TagGroup';


},
50696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ TagList)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/TagGroup.mjs + 40 modules
var TagGroup = __webpack_require__(34309);
;// CONCATENATED MODULE: ./packages/components/src/tag/tag-list/TagList.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const TagList_module = ({"tagList":"tagList_t7eZ"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./packages/components/src/tag/tag-list/TagList.tsx





const TagListInner = (props, ref)=>{
    const [{ className, ...rest }, mergedRef] = (0,utils/* .useContextProps */.JT)(props, ref, TagGroup/* .TagListContext */.sM);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TagGroup/* .TagList */.LY, {
        className: (0,clsx/* ["default"] */.A)(className, TagList_module.tagList),
        ref: mergedRef,
        ...rest
    });
};
const TagList = /*#__PURE__*/ (0,react.forwardRef)(TagListInner);


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
80439(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  M: () => ($191c9b6d48a0a4e2$export$294aa081a6c6f55d)
});
/* import */ var _useLabel_mjs__rspack_import_0 = __webpack_require__(60741);
/* import */ var _utils_mergeProps_mjs__rspack_import_2 = __webpack_require__(47425);
/* import */ var _utils_useId_mjs__rspack_import_1 = __webpack_require__(78778);




/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $191c9b6d48a0a4e2$export$294aa081a6c6f55d(props) {
    let { description: description, errorMessage: errorMessage, isInvalid: isInvalid, validationState: validationState } = props;
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, _useLabel_mjs__rspack_import_0/* .useLabel */.M)(props);
    let descriptionId = (0, _utils_useId_mjs__rspack_import_1/* .useSlotId */.X1)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = (0, _utils_useId_mjs__rspack_import_1/* .useSlotId */.X1)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = (0, _utils_mergeProps_mjs__rspack_import_2/* .mergeProps */.v)(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}



//# sourceMappingURL=useField.mjs.map


},

}]);