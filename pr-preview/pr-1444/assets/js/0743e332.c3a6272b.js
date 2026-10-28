"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([["4701"], {
4972(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_components_button_mdx_074_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-button-mdx-074.json
var site_docs_components_button_mdx_074_namespaceObject = JSON.parse('{"id":"components/button","title":"Button","description":"Knappar används när användaren vill utföra en handling t.ex. spara ifylld information eller öppna ett formulär.","source":"@site/docs/components/button.mdx","sourceDirName":"components","slug":"/components/button","permalink":"/pr-preview/pr-1444/components/button","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Button","description":"Knappar används när användaren vill utföra en handling t.ex. spara ifylld information eller öppna ett formulär."},"sidebar":"sideBar","previous":{"title":"Breadcrumbs","permalink":"/pr-preview/pr-1444/components/breadcrumbs"},"next":{"title":"Calendar","permalink":"/pr-preview/pr-1444/components/calendar"}}')
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(71184);
// EXTERNAL MODULE: ./src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(67793);
;// CONCATENATED MODULE: ../../dist/api/components/Button.json
var Button_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"Button","description":"","sourceFile":"packages/components/src/button/Button.tsx","props":{"variant":{"defaultValue":{"value":"\'primary\'"},"description":"Primary button is used as a positive action in a flow. Always use one primary button and never a seconday button on it\'s own. When using just an icon you must pass an aria-label","name":"variant","required":false,"parent":{"fileName":"midas/packages/components/src/button/Button.tsx","name":"ButtonProps"},"declarations":[{"fileName":"midas/packages/components/src/button/Button.tsx","name":"ButtonProps"}],"type":{"name":"enum","raw":"\\"danger\\" | \\"icon\\" | \\"primary\\" | \\"secondary\\" | \\"tertiary\\"","value":[{"value":"\\"danger\\""},{"value":"\\"icon\\""},{"value":"\\"primary\\""},{"value":"\\"secondary\\""},{"value":"\\"tertiary\\""}]}},"fullwidth":{"defaultValue":{"value":"false"},"description":"Adds width: 100%; for the button to span entire width of parent","name":"fullwidth","required":false,"parent":{"fileName":"midas/packages/components/src/button/Button.tsx","name":"ButtonProps"},"declarations":[{"fileName":"midas/packages/components/src/button/Button.tsx","name":"ButtonProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"size":{"defaultValue":{"value":"\'large\'"},"description":"Component size (large: height 48px, medium: height 40px)","name":"size","required":false,"parent":{"fileName":"midas/packages/components/src/button/Button.tsx","name":"ButtonProps"},"declarations":[{"fileName":"midas/packages/components/src/button/Button.tsx","name":"ButtonProps"}],"type":{"name":"enum","raw":"Size","value":[{"value":"\\"large\\""},{"value":"\\"medium\\""}]}},"icon":{"defaultValue":null,"description":"Add an icon from lucide-react\\n@see {@link https://lucide.dev/icons/ Lucide}","name":"icon","required":false,"parent":{"fileName":"midas/packages/components/src/button/Button.tsx","name":"ButtonProps"},"declarations":[{"fileName":"midas/packages/components/src/button/Button.tsx","name":"ButtonProps"}],"type":{"name":"LucideIcon","raw":"LucideIcon"}},"iconSize":{"defaultValue":{"value":"20"},"description":"Adjust icon size","name":"iconSize","required":false,"parent":{"fileName":"midas/packages/components/src/button/Button.tsx","name":"ButtonProps"},"declarations":[{"fileName":"midas/packages/components/src/button/Button.tsx","name":"ButtonProps"}],"type":{"name":"number","raw":"number","membersRef":"fd6011e8ade1"}},"iconPlacement":{"defaultValue":null,"description":"Display the icon on the left or right side of the button text","name":"iconPlacement","required":false,"parent":{"fileName":"midas/packages/components/src/button/Button.tsx","name":"ButtonProps"},"declarations":[{"fileName":"midas/packages/components/src/button/Button.tsx","name":"ButtonProps"}],"type":{"name":"enum","raw":"\\"left\\" | \\"right\\"","value":[{"value":"\\"left\\""},{"value":"\\"right\\""}]}},"className":{"defaultValue":{"value":"\'react-aria-Button\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Button.d.ts","name":"ButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Button.d.ts","name":"ButtonProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<ButtonRenderProps>","value":[{"value":"(values: ButtonRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string","membersRef":"a37b4426d16c"}]}},"isPending":{"defaultValue":null,"description":"Whether the button is in a pending state. This disables press and hover events\\nwhile retaining focusability, and announces the pending state to screen readers.","name":"isPending","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Button.d.ts","name":"ButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Button.d.ts","name":"ButtonProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isDisabled":{"defaultValue":null,"description":"Whether the button is disabled.","name":"isDisabled","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"ButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"ButtonProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"type":{"defaultValue":{"value":"\'button\'"},"description":"The behavior of the button when used in an HTML form.","name":"type","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"enum","raw":"\\"button\\" | \\"reset\\" | \\"submit\\"","value":[{"value":"\\"button\\""},{"value":"\\"reset\\""},{"value":"\\"submit\\""}]}},"name":{"defaultValue":null,"description":"Submitted as a pair with the button\'s value as part of the form data.","name":"name","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"string","raw":"string","membersRef":"8fe69696fdef"}},"aria-controls":{"defaultValue":null,"description":"Identifies the element (or elements) whose contents or presence are controlled by the current\\nelement.","name":"aria-controls","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"string","raw":"string","membersRef":"8fe69696fdef"}},"aria-current":{"defaultValue":null,"description":"Indicates whether this element represents the current item within a container or set of related\\nelements.","name":"aria-current","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"enum","raw":"\\"date\\" | \\"false\\" | \\"location\\" | \\"page\\" | \\"step\\" | \\"time\\" | \\"true\\" | boolean","value":[{"value":"\\"date\\""},{"value":"\\"false\\""},{"value":"\\"location\\""},{"value":"\\"page\\""},{"value":"\\"step\\""},{"value":"\\"time\\""},{"value":"\\"true\\""},{"value":"false"},{"value":"true"}]}},"aria-disabled":{"defaultValue":null,"description":"Indicates whether the element is disabled to users of assistive technology.","name":"aria-disabled","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"enum","raw":"\\"false\\" | \\"true\\" | boolean","value":[{"value":"\\"false\\""},{"value":"\\"true\\""},{"value":"false"},{"value":"true"}]}},"aria-expanded":{"defaultValue":null,"description":"Indicates whether the element, or another grouping element it controls, is currently expanded\\nor collapsed.","name":"aria-expanded","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"enum","raw":"\\"false\\" | \\"true\\" | boolean","value":[{"value":"\\"false\\""},{"value":"\\"true\\""},{"value":"false"},{"value":"true"}]}},"aria-haspopup":{"defaultValue":null,"description":"Indicates the availability and type of interactive popup element, such as menu or dialog, that\\ncan be triggered by an element.","name":"aria-haspopup","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"enum","raw":"\\"dialog\\" | \\"false\\" | \\"grid\\" | \\"listbox\\" | \\"menu\\" | \\"tree\\" | \\"true\\" | boolean","value":[{"value":"\\"dialog\\""},{"value":"\\"false\\""},{"value":"\\"grid\\""},{"value":"\\"listbox\\""},{"value":"\\"menu\\""},{"value":"\\"tree\\""},{"value":"\\"true\\""},{"value":"false"},{"value":"true"}]}},"aria-pressed":{"defaultValue":null,"description":"Indicates the current \\"pressed\\" state of toggle buttons.","name":"aria-pressed","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"enum","raw":"\\"false\\" | \\"mixed\\" | \\"true\\" | boolean","value":[{"value":"\\"false\\""},{"value":"\\"mixed\\""},{"value":"\\"true\\""},{"value":"false"},{"value":"true"}]}},"onFocus":{"defaultValue":null,"description":"Handler that is called when the element receives focus.","name":"onFocus","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"}],"type":{"name":"enum","raw":"((e: FocusEvent<Element, Element>) => void)","value":[{"value":"(e: FocusEvent<Element, Element>) => void","description":"","fullComment":"","tags":{}}]}},"onBlur":{"defaultValue":null,"description":"Handler that is called when the element loses focus.","name":"onBlur","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"}],"type":{"name":"enum","raw":"((e: FocusEvent<Element, Element>) => void)","value":[{"value":"(e: FocusEvent<Element, Element>) => void","description":"","fullComment":"","tags":{}}]}},"onKeyDown":{"defaultValue":null,"description":"Handler that is called when a key is pressed.","name":"onKeyDown","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"KeyboardEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"KeyboardEvents"}],"type":{"name":"enum","raw":"((e: KeyboardEvent) => void)","value":[{"value":"(e: KeyboardEvent) => void","description":"","fullComment":"","tags":{}}]}},"onKeyUp":{"defaultValue":null,"description":"Handler that is called when a key is released.","name":"onKeyUp","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"KeyboardEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"KeyboardEvents"}],"type":{"name":"enum","raw":"((e: KeyboardEvent) => void)","value":[{"value":"(e: KeyboardEvent) => void","description":"","fullComment":"","tags":{}}]}},"onClick":{"defaultValue":null,"description":"**Not recommended – use `onPress` instead.** `onClick` is an alias for `onPress`\\nprovided for compatibility with other libraries. `onPress` provides\\nadditional event details for non-mouse interactions.","name":"onClick","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: MouseEvent<FocusableElement, MouseEvent>) => void)","value":[{"value":"(e: MouseEvent<FocusableElement, MouseEvent>) => void","description":"","fullComment":"","tags":{}}]}},"form":{"defaultValue":null,"description":"The `<form>` element to associate the button with.\\nThe value of this attribute must be the id of a `<form>` in the same document.\\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#form).","name":"form","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"string","raw":"string","membersRef":"8fe69696fdef"}},"onPress":{"defaultValue":null,"description":"Handler that is called when the press is released over the target.","name":"onPress","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onPressStart":{"defaultValue":null,"description":"Handler that is called when a press interaction starts.","name":"onPressStart","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onPressEnd":{"defaultValue":null,"description":"Handler that is called when a press interaction ends, either\\nover the target or when the pointer leaves the target.","name":"onPressEnd","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"onPressChange":{"defaultValue":null,"description":"Handler that is called when the press state changes.","name":"onPressChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((isPressed: boolean) => void)","value":[{"value":"(isPressed: boolean) => void","description":"","fullComment":"","tags":{}}]}},"onPressUp":{"defaultValue":null,"description":"Handler that is called when a press is released over the target, regardless of\\nwhether it started on the target or not.","name":"onPressUp","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"PressEvents"}],"type":{"name":"enum","raw":"((e: PressEvent) => void)","value":[{"value":"(e: PressEvent) => void","description":"","fullComment":"","tags":{}}]}},"autoFocus":{"defaultValue":null,"description":"Whether the element should receive focus on render.","name":"autoFocus","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusableProps"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusableProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"onFocusChange":{"defaultValue":null,"description":"Handler that is called when the element\'s focus status changes.","name":"onFocusChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"}],"type":{"name":"enum","raw":"((isFocused: boolean) => void)","value":[{"value":"(isFocused: boolean) => void","description":"","fullComment":"","tags":{}}]}},"preventFocusOnPress":{"defaultValue":null,"description":"Whether to prevent focus from moving to the button when pressing it.\\n\\nCaution, this can make the button inaccessible and should only be used when alternative\\nkeyboard interaction is provided, such as ComboBox\'s MenuTrigger or a NumberField\'s\\nincrement/decrement control.","name":"preventFocusOnPress","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"formAction":{"defaultValue":null,"description":"The URL that processes the information submitted by the button.\\nOverrides the action attribute of the button\'s form owner.","name":"formAction","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"enum","raw":"((formData: FormData) => void | Promise<void>) | string","value":[{"value":"(formData: FormData) => void | Promise<void>","description":"","fullComment":"","tags":{}},{"value":"string","membersRef":"a37b4426d16c"}]}},"formEncType":{"defaultValue":null,"description":"Indicates how to encode the form data that is submitted.","name":"formEncType","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"string","raw":"string","membersRef":"8fe69696fdef"}},"formMethod":{"defaultValue":null,"description":"Indicates the HTTP method used to submit the form.","name":"formMethod","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"string","raw":"string","membersRef":"8fe69696fdef"}},"formNoValidate":{"defaultValue":null,"description":"Indicates that the form is not to be validated when it is submitted.","name":"formNoValidate","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"formTarget":{"defaultValue":null,"description":"Overrides the target attribute of the button\'s form owner.","name":"formTarget","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"string","raw":"string","membersRef":"8fe69696fdef"}},"value":{"defaultValue":null,"description":"The value associated with the button\'s name when it\'s submitted with the form data.","name":"value","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/button/useButton.d.ts","name":"AriaBaseButtonProps"}],"type":{"name":"string","raw":"string","membersRef":"8fe69696fdef"}},"onHoverStart":{"defaultValue":null,"description":"Handler that is called when a hover interaction starts.","name":"onHoverStart","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((e: HoverEvent) => void)","value":[{"value":"(e: HoverEvent) => void","description":"","fullComment":"","tags":{}}]}},"onHoverEnd":{"defaultValue":null,"description":"Handler that is called when a hover interaction ends.","name":"onHoverEnd","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((e: HoverEvent) => void)","value":[{"value":"(e: HoverEvent) => void","description":"","fullComment":"","tags":{}}]}},"onHoverChange":{"defaultValue":null,"description":"Handler that is called when the hover state changes.","name":"onHoverChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((isHovering: boolean) => void)","value":[{"value":"(isHovering: boolean) => void","description":"","fullComment":"","tags":{}}]}},"slot":{"defaultValue":null,"description":"A slot name for the component. Slots allow the component to receive props from a parent\\ncomponent. An explicit `null` value indicates that the local props completely override all\\nprops received from a parent.","name":"slot","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"}],"type":{"name":"enum","raw":"string | null","value":[{"value":"null"},{"value":"string","membersRef":"a37b4426d16c"}]}},"children":{"defaultValue":null,"description":"The children of the component. A function may be provided to alter the children based on\\ncomponent state.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"}],"type":{"name":"enum","raw":"ChildrenOrFunction<ButtonRenderProps>","value":[{"value":"(values: ButtonRenderProps & { defaultChildren: ReactNode; }) => ReactNode","description":"","fullComment":"","tags":{}},{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{},"membersRef":"bc30f28a4db2"},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint","membersRef":"1effde887a16"},{"value":"false"},{"value":"null"},{"value":"number","membersRef":"21cee1dc460f"},{"value":"string","membersRef":"a37b4426d16c"},{"value":"true"}]}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<ButtonRenderProps>","value":[{"value":"(values: ButtonRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"button\\", ButtonRenderProps>","raw":"DOMRenderFunction<\\"button\\", ButtonRenderProps>"}}},"types":{"01d77d4df9d7":[{"name":"locales","type":"string | string[] | undefined","description":"","required":true}],"044423aaef36":[{"name":"locales","type":"string | string[] | undefined","description":"A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.","required":true},{"name":"options","type":"NumberFormatOptions | undefined","description":"An object that contains one or more properties that specify comparison options.","required":true}],"086f86bbeb0d":[{"name":"locales","type":"string | string[] | undefined","description":"A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.","required":true},{"name":"options","type":"NumberFormatOptions | undefined","description":"An object that contains one or more properties that specify comparison options.","required":true,"membersRef":"9e9c787dd813"}],"0893409af856":[{"name":"form","type":"\\"NFC\\" | \\"NFD\\" | \\"NFKC\\" | \\"NFKD\\"","description":"Applicable values: \\"NFC\\", \\"NFD\\", \\"NFKC\\", or \\"NFKD\\", If not specified default\\nis \\"NFC\\"","required":true}],"1462b4fa6c1e":[{"name":"searchString","type":"string","description":"","required":true},{"name":"endPosition","type":"number | undefined","description":"","required":true}],"1effde887a16":[{"name":"toString","type":"(radix?: number | undefined) => string","description":"Returns a string representation of an object.","required":true,"membersRef":"c3aa62ce4c4f"},{"name":"toLocaleString","type":"(locales?: LocalesArgument, options?: BigIntToLocaleStringOptions | undefined) => string","description":"Returns a string representation appropriate to the host environment\'s current locale.","required":true,"membersRef":"accc6b80d33f"},{"name":"valueOf","type":"() => bigint","description":"Returns the primitive value of the specified object.","required":true}],"21cee1dc460f":[{"name":"toString","type":"(radix?: number | undefined) => string","description":"Returns a string representation of an object.","required":true,"membersRef":"f2cc3e3d5a99"},{"name":"toFixed","type":"(fractionDigits?: number | undefined) => string","description":"Returns a string representing a number in fixed-point notation.","required":true,"membersRef":"bbffa5aff06f"},{"name":"toExponential","type":"(fractionDigits?: number | undefined) => string","description":"Returns a string containing a number represented in exponential notation.","required":true,"membersRef":"bbffa5aff06f"},{"name":"toPrecision","type":"(precision?: number | undefined) => string","description":"Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.","required":true,"membersRef":"cc7181a546b9"},{"name":"valueOf","type":"() => number","description":"Returns the primitive value of the specified object.","required":true},{"name":"toLocaleString","type":"{ (locales?: string | string[] | undefined, options?: NumberFormatOptions | undefined): string; (locales?: LocalesArgument, options?: NumberFormatOptions | undefined): string; }","description":"Converts a number to a string by using the current or specified locale.","required":true,"membersRef":"044423aaef36"}],"2a360c425eaf":[{"name":"pos","type":"number","description":"","required":true}],"35e9426b05b6":[{"name":"maxLength","type":"number","description":"The length of the resulting string once the current string has been padded.\\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.","required":true},{"name":"fillString","type":"string | undefined","description":"The string to pad the current string with.\\nIf this string is too long, it will be truncated and the left-most part will be applied.\\nThe default value for this parameter is \\" \\" (U+0020).","required":true}],"377260011cd5":[{"name":"searchString","type":"string","description":"","required":true},{"name":"position","type":"number | undefined","description":"","required":true}],"4bb35b6c951e":[{"name":"size","type":"number","description":"","required":true}],"4be40676f323":[{"name":"searchValue","type":"RegExp | string","description":"A string or regular expression to search for.","required":true},{"name":"replaceValue","type":"string","description":"A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.","required":true}],"5f5ec91a71ae":[{"name":"onfulfilled","type":"((value: AwaitedReactNode) => TResult1 | PromiseLike<TResult1>) | null | undefined","description":"The callback to execute when the Promise is resolved.","required":true},{"name":"onrejected","type":"((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined","description":"The callback to execute when the Promise is rejected.","required":true}],"60791cbf2bdf":[{"name":"regexp","type":"RegExp | string","description":"A variable name or string literal containing the regular expression pattern and flags.","required":true,"membersRef":"eae38bb2b61a"}],"6310e67d4fe7":[{"name":"color","type":"string","description":"","required":true}],"73ff6eee3307":[{"name":"searchString","type":"string","description":"The substring to search for.","required":true},{"name":"position","type":"number | undefined","description":"The index at which to begin searching. If omitted, the search begins at the end of the string.","required":true}],"7777f6fe3a61":[{"name":"start","type":"number","description":"The zero-based index number indicating the beginning of the substring.","required":true},{"name":"end","type":"number | undefined","description":"Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\\nIf end is omitted, the characters from start through the end of the original string are returned.","required":true}],"7991011384b2":[{"name":"separator","type":"RegExp | string","description":"A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.","required":true},{"name":"limit","type":"number | undefined","description":"A value used to limit the number of elements returned in the array.","required":true}],"7af7778b5273":[{"name":"strings","type":"string[]","description":"The strings to append to the end of the string.","required":true}],"8fe69696fdef":[{"name":"toString","type":"() => string","description":"Returns a string representation of a string.","required":true},{"name":"charAt","type":"(pos: number) => string","description":"Returns the character at the specified index.","required":true,"membersRef":"d5b2a246006d"},{"name":"charCodeAt","type":"(index: number) => number","description":"Returns the Unicode value of the character at the specified location.","required":true,"membersRef":"ca0c0224558f"},{"name":"concat","type":"(...strings: string[]) => string","description":"Returns a string that contains the concatenation of two or more strings.","required":true,"membersRef":"7af7778b5273"},{"name":"indexOf","type":"(searchString: string, position?: number | undefined) => number","description":"Returns the position of the first occurrence of a substring, or -1 if it is not present.","required":true,"membersRef":"ba38c2576cee"},{"name":"lastIndexOf","type":"(searchString: string, position?: number | undefined) => number","description":"Returns the last occurrence of a substring in the string, or -1 if it is not present.","required":true,"membersRef":"73ff6eee3307"},{"name":"localeCompare","type":"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; (that: string, locales?: LocalesArgument, options?: CollatorOptions | undefined): number; }","description":"Determines whether two strings are equivalent in the current locale.\\nDetermines whether two strings are equivalent in the current or specified locale.","required":true,"membersRef":"f9f8b34cda4b"},{"name":"match","type":"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }","description":"Matches a string with a regular expression, and returns an array containing the results of that search.\\nMatches a string or an object that supports being matched against, and returns an array\\ncontaining the results of that search, or null if no matches are found.","required":true,"membersRef":"60791cbf2bdf"},{"name":"replace","type":"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }","description":"Replaces text in a string, using a regular expression or search string.\\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\\nReplaces text in a string, using an object that supports replacement within a string.","required":true,"membersRef":"c3e867e53f9d"},{"name":"search","type":"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }","description":"Finds the first substring match in a regular expression search.","required":true,"membersRef":"c00770acccc4"},{"name":"slice","type":"(start?: number | undefined, end?: number | undefined) => string","description":"Returns a section of a string.","required":true,"membersRef":"c5ad11b6d4e3"},{"name":"split","type":"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }","description":"Split a string into substrings using the specified separator and return them as an array.","required":true,"membersRef":"942bf9d7e9b6"},{"name":"substring","type":"(start: number, end?: number | undefined) => string","description":"Returns the substring at the specified location within a String object.","required":true,"membersRef":"7777f6fe3a61"},{"name":"toLowerCase","type":"() => string","description":"Converts all the alphabetic characters in a string to lowercase.","required":true},{"name":"toLocaleLowerCase","type":"{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }","description":"Converts all alphabetic characters to lowercase, taking into account the host environment\'s current locale.","required":true,"membersRef":"01d77d4df9d7"},{"name":"toUpperCase","type":"() => string","description":"Converts all the alphabetic characters in a string to uppercase.","required":true},{"name":"toLocaleUpperCase","type":"{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }","description":"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment\'s current locale.","required":true,"membersRef":"01d77d4df9d7"},{"name":"trim","type":"() => string","description":"Removes the leading and trailing white space and line terminator characters from a string.","required":true},{"name":"length","type":"number","description":"Returns the length of a String object.","required":true},{"name":"substr","type":"(from: number, length?: number | undefined) => string","description":"Gets a substring beginning at the specified location and having the specified length.","required":true,"membersRef":"fbc5ffeb0a40"},{"name":"valueOf","type":"() => string","description":"Returns the primitive value of the specified object.","required":true},{"name":"codePointAt","type":"(pos: number) => number | undefined","description":"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\\nthe String resulting from converting this object to a String.\\nIf there is no element at that position, the result is undefined.\\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.","required":true,"membersRef":"2a360c425eaf"},{"name":"includes","type":"(searchString: string, position?: number | undefined) => boolean","description":"Returns true if searchString appears as a substring of the result of converting this\\nobject to a String, at one or more positions that are\\ngreater than or equal to position; otherwise, returns false.","required":true,"membersRef":"acd009e83d9c"},{"name":"endsWith","type":"(searchString: string, endPosition?: number | undefined) => boolean","description":"Returns true if the sequence of elements of searchString converted to a String is the\\nsame as the corresponding elements of this object (converted to a String) starting at\\nendPosition – length(this). Otherwise returns false.","required":true,"membersRef":"1462b4fa6c1e"},{"name":"normalize","type":"{ (form: \\"NFC\\" | \\"NFD\\" | \\"NFKC\\" | \\"NFKD\\"): string; (form?: string | undefined): string; }","description":"Returns the String value result of normalizing the string into the normalization form\\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.","required":true,"membersRef":"0893409af856"},{"name":"repeat","type":"(count: number) => string","description":"Returns a String value that is made from count copies appended together. If count is 0,\\nthe empty string is returned.","required":true,"membersRef":"a2cd9f067bdf"},{"name":"startsWith","type":"(searchString: string, position?: number | undefined) => boolean","description":"Returns true if the sequence of elements of searchString converted to a String is the\\nsame as the corresponding elements of this object (converted to a String) starting at\\nposition. Otherwise returns false.","required":true,"membersRef":"377260011cd5"},{"name":"anchor","type":"(name: string) => string","description":"Returns an `<a>` HTML anchor element and sets the name attribute to the text value","required":true,"membersRef":"e0f587ffe245"},{"name":"big","type":"() => string","description":"Returns a `<big>` HTML element","required":true},{"name":"blink","type":"() => string","description":"Returns a `<blink>` HTML element","required":true},{"name":"bold","type":"() => string","description":"Returns a `<b>` HTML element","required":true},{"name":"fixed","type":"() => string","description":"Returns a `<tt>` HTML element","required":true},{"name":"fontcolor","type":"(color: string) => string","description":"Returns a `<font>` HTML element and sets the color attribute value","required":true,"membersRef":"6310e67d4fe7"},{"name":"fontsize","type":"{ (size: number): string; (size: string): string; }","description":"Returns a `<font>` HTML element and sets the size attribute value","required":true,"membersRef":"4bb35b6c951e"},{"name":"italics","type":"() => string","description":"Returns an `<i>` HTML element","required":true},{"name":"link","type":"(url: string) => string","description":"Returns an `<a>` HTML element and sets the href attribute value","required":true,"membersRef":"dff8e7eb9471"},{"name":"small","type":"() => string","description":"Returns a `<small>` HTML element","required":true},{"name":"strike","type":"() => string","description":"Returns a `<strike>` HTML element","required":true},{"name":"sub","type":"() => string","description":"Returns a `<sub>` HTML element","required":true},{"name":"sup","type":"() => string","description":"Returns a `<sup>` HTML element","required":true},{"name":"padStart","type":"(maxLength: number, fillString?: string | undefined) => string","description":"Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\\nThe padding is applied from the start (left) of the current string.","required":true,"membersRef":"35e9426b05b6"},{"name":"padEnd","type":"(maxLength: number, fillString?: string | undefined) => string","description":"Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\\nThe padding is applied from the end (right) of the current string.","required":true,"membersRef":"35e9426b05b6"},{"name":"trimEnd","type":"() => string","description":"Removes the trailing white space and line terminator characters from a string.","required":true},{"name":"trimStart","type":"() => string","description":"Removes the leading white space and line terminator characters from a string.","required":true},{"name":"trimLeft","type":"() => string","description":"Removes the leading white space and line terminator characters from a string.","required":true},{"name":"trimRight","type":"() => string","description":"Removes the trailing white space and line terminator characters from a string.","required":true},{"name":"matchAll","type":"(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>","description":"Matches a string with a regular expression, and returns an iterable of matches\\ncontaining the results of that search.","required":true,"membersRef":"bc94faea80bc"}],"942bf9d7e9b6":[{"name":"separator","type":"RegExp | string","description":"A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.","required":true,"membersRef":"eae38bb2b61a"},{"name":"limit","type":"number | undefined","description":"A value used to limit the number of elements returned in the array.","required":true}],"9b1117d5b6e9":[{"name":"regexp","type":"RegExp","description":"A regular expression","required":true}],"9c697c4622f2":[{"name":"exec","type":"(string: string) => RegExpExecArray | null","description":"Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.","required":true},{"name":"test","type":"(string: string) => boolean","description":"Returns a Boolean value that indicates whether or not a pattern exists in a searched string.","required":true},{"name":"source","type":"string","description":"Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.","required":true},{"name":"global","type":"boolean","description":"Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.","required":true},{"name":"ignoreCase","type":"boolean","description":"Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.","required":true},{"name":"multiline","type":"boolean","description":"Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.","required":true},{"name":"lastIndex","type":"number","description":"","required":true},{"name":"compile","type":"(pattern: string, flags?: string | undefined) => RegExp","description":"","required":true},{"name":"flags","type":"string","description":"Returns a string indicating the flags of the regular expression in question. This field is read-only.\\nThe characters in this string are sequenced and concatenated in the following order:\\n\\n   - \\"g\\" for global\\n   - \\"i\\" for ignoreCase\\n   - \\"m\\" for multiline\\n   - \\"u\\" for unicode\\n   - \\"y\\" for sticky\\n\\nIf no flags are set, the value is the empty string.","required":true},{"name":"sticky","type":"boolean","description":"Returns a Boolean value indicating the state of the sticky flag (y) used with a regular\\nexpression. Default is false. Read-only.","required":true},{"name":"unicode","type":"boolean","description":"Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular\\nexpression. Default is false. Read-only.","required":true},{"name":"dotAll","type":"boolean","description":"Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression.\\nDefault is false. Read-only.","required":true}],"9e9c787dd813":[{"name":"localeMatcher","type":"\\"best fit\\" | \\"lookup\\" | undefined","description":"","required":false},{"name":"style","type":"keyof NumberFormatOptionsStyleRegistry | undefined","description":"","required":false},{"name":"currency","type":"string | undefined","description":"","required":false},{"name":"currencyDisplay","type":"keyof NumberFormatOptionsCurrencyDisplayRegistry | undefined","description":"","required":false},{"name":"useGrouping","type":"boolean | undefined","description":"","required":false},{"name":"minimumIntegerDigits","type":"number | undefined","description":"","required":false},{"name":"minimumFractionDigits","type":"number | undefined","description":"","required":false},{"name":"maximumFractionDigits","type":"number | undefined","description":"","required":false},{"name":"minimumSignificantDigits","type":"number | undefined","description":"","required":false},{"name":"maximumSignificantDigits","type":"number | undefined","description":"","required":false},{"name":"numberingSystem","type":"string | undefined","description":"","required":false},{"name":"compactDisplay","type":"\\"long\\" | \\"short\\" | undefined","description":"","required":false},{"name":"notation","type":"\\"compact\\" | \\"engineering\\" | \\"scientific\\" | \\"standard\\" | undefined","description":"","required":false},{"name":"signDisplay","type":"keyof NumberFormatOptionsSignDisplayRegistry | undefined","description":"","required":false},{"name":"unit","type":"string | undefined","description":"","required":false},{"name":"unitDisplay","type":"\\"long\\" | \\"narrow\\" | \\"short\\" | undefined","description":"","required":false},{"name":"currencySign","type":"\\"accounting\\" | \\"standard\\" | undefined","description":"","required":false}],"a2cd9f067bdf":[{"name":"count","type":"number","description":"number of copies to append","required":true}],"a37b4426d16c":[{"name":"toString","type":"() => string","description":"Returns a string representation of a string.","required":true},{"name":"charAt","type":"(pos: number) => string","description":"Returns the character at the specified index.","required":true,"membersRef":"d5b2a246006d"},{"name":"charCodeAt","type":"(index: number) => number","description":"Returns the Unicode value of the character at the specified location.","required":true,"membersRef":"ca0c0224558f"},{"name":"concat","type":"(...strings: string[]) => string","description":"Returns a string that contains the concatenation of two or more strings.","required":true,"membersRef":"7af7778b5273"},{"name":"indexOf","type":"(searchString: string, position?: number | undefined) => number","description":"Returns the position of the first occurrence of a substring, or -1 if it is not present.","required":true,"membersRef":"ba38c2576cee"},{"name":"lastIndexOf","type":"(searchString: string, position?: number | undefined) => number","description":"Returns the last occurrence of a substring in the string, or -1 if it is not present.","required":true,"membersRef":"73ff6eee3307"},{"name":"localeCompare","type":"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; (that: string, locales?: LocalesArgument, options?: CollatorOptions | undefined): number; }","description":"Determines whether two strings are equivalent in the current locale.\\nDetermines whether two strings are equivalent in the current or specified locale.","required":true,"membersRef":"f9f8b34cda4b"},{"name":"match","type":"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }","description":"Matches a string with a regular expression, and returns an array containing the results of that search.\\nMatches a string or an object that supports being matched against, and returns an array\\ncontaining the results of that search, or null if no matches are found.","required":true,"membersRef":"ada11bcbb74f"},{"name":"replace","type":"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }","description":"Replaces text in a string, using a regular expression or search string.\\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\\nReplaces text in a string, using an object that supports replacement within a string.","required":true,"membersRef":"4be40676f323"},{"name":"search","type":"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }","description":"Finds the first substring match in a regular expression search.","required":true,"membersRef":"acf933af128b"},{"name":"slice","type":"(start?: number | undefined, end?: number | undefined) => string","description":"Returns a section of a string.","required":true,"membersRef":"c5ad11b6d4e3"},{"name":"split","type":"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }","description":"Split a string into substrings using the specified separator and return them as an array.","required":true,"membersRef":"7991011384b2"},{"name":"substring","type":"(start: number, end?: number | undefined) => string","description":"Returns the substring at the specified location within a String object.","required":true,"membersRef":"7777f6fe3a61"},{"name":"toLowerCase","type":"() => string","description":"Converts all the alphabetic characters in a string to lowercase.","required":true},{"name":"toLocaleLowerCase","type":"{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }","description":"Converts all alphabetic characters to lowercase, taking into account the host environment\'s current locale.","required":true,"membersRef":"01d77d4df9d7"},{"name":"toUpperCase","type":"() => string","description":"Converts all the alphabetic characters in a string to uppercase.","required":true},{"name":"toLocaleUpperCase","type":"{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }","description":"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment\'s current locale.","required":true,"membersRef":"01d77d4df9d7"},{"name":"trim","type":"() => string","description":"Removes the leading and trailing white space and line terminator characters from a string.","required":true},{"name":"length","type":"number","description":"Returns the length of a String object.","required":true},{"name":"substr","type":"(from: number, length?: number | undefined) => string","description":"Gets a substring beginning at the specified location and having the specified length.","required":true,"membersRef":"fbc5ffeb0a40"},{"name":"valueOf","type":"() => string","description":"Returns the primitive value of the specified object.","required":true},{"name":"codePointAt","type":"(pos: number) => number | undefined","description":"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\\nthe String resulting from converting this object to a String.\\nIf there is no element at that position, the result is undefined.\\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.","required":true,"membersRef":"2a360c425eaf"},{"name":"includes","type":"(searchString: string, position?: number | undefined) => boolean","description":"Returns true if searchString appears as a substring of the result of converting this\\nobject to a String, at one or more positions that are\\ngreater than or equal to position; otherwise, returns false.","required":true,"membersRef":"acd009e83d9c"},{"name":"endsWith","type":"(searchString: string, endPosition?: number | undefined) => boolean","description":"Returns true if the sequence of elements of searchString converted to a String is the\\nsame as the corresponding elements of this object (converted to a String) starting at\\nendPosition – length(this). Otherwise returns false.","required":true,"membersRef":"1462b4fa6c1e"},{"name":"normalize","type":"{ (form: \\"NFC\\" | \\"NFD\\" | \\"NFKC\\" | \\"NFKD\\"): string; (form?: string | undefined): string; }","description":"Returns the String value result of normalizing the string into the normalization form\\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.","required":true,"membersRef":"0893409af856"},{"name":"repeat","type":"(count: number) => string","description":"Returns a String value that is made from count copies appended together. If count is 0,\\nthe empty string is returned.","required":true,"membersRef":"a2cd9f067bdf"},{"name":"startsWith","type":"(searchString: string, position?: number | undefined) => boolean","description":"Returns true if the sequence of elements of searchString converted to a String is the\\nsame as the corresponding elements of this object (converted to a String) starting at\\nposition. Otherwise returns false.","required":true,"membersRef":"377260011cd5"},{"name":"anchor","type":"(name: string) => string","description":"Returns an `<a>` HTML anchor element and sets the name attribute to the text value","required":true,"membersRef":"e0f587ffe245"},{"name":"big","type":"() => string","description":"Returns a `<big>` HTML element","required":true},{"name":"blink","type":"() => string","description":"Returns a `<blink>` HTML element","required":true},{"name":"bold","type":"() => string","description":"Returns a `<b>` HTML element","required":true},{"name":"fixed","type":"() => string","description":"Returns a `<tt>` HTML element","required":true},{"name":"fontcolor","type":"(color: string) => string","description":"Returns a `<font>` HTML element and sets the color attribute value","required":true,"membersRef":"6310e67d4fe7"},{"name":"fontsize","type":"{ (size: number): string; (size: string): string; }","description":"Returns a `<font>` HTML element and sets the size attribute value","required":true,"membersRef":"4bb35b6c951e"},{"name":"italics","type":"() => string","description":"Returns an `<i>` HTML element","required":true},{"name":"link","type":"(url: string) => string","description":"Returns an `<a>` HTML element and sets the href attribute value","required":true,"membersRef":"dff8e7eb9471"},{"name":"small","type":"() => string","description":"Returns a `<small>` HTML element","required":true},{"name":"strike","type":"() => string","description":"Returns a `<strike>` HTML element","required":true},{"name":"sub","type":"() => string","description":"Returns a `<sub>` HTML element","required":true},{"name":"sup","type":"() => string","description":"Returns a `<sup>` HTML element","required":true},{"name":"padStart","type":"(maxLength: number, fillString?: string | undefined) => string","description":"Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\\nThe padding is applied from the start (left) of the current string.","required":true,"membersRef":"35e9426b05b6"},{"name":"padEnd","type":"(maxLength: number, fillString?: string | undefined) => string","description":"Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\\nThe padding is applied from the end (right) of the current string.","required":true,"membersRef":"35e9426b05b6"},{"name":"trimEnd","type":"() => string","description":"Removes the trailing white space and line terminator characters from a string.","required":true},{"name":"trimStart","type":"() => string","description":"Removes the leading white space and line terminator characters from a string.","required":true},{"name":"trimLeft","type":"() => string","description":"Removes the leading white space and line terminator characters from a string.","required":true},{"name":"trimRight","type":"() => string","description":"Removes the trailing white space and line terminator characters from a string.","required":true},{"name":"matchAll","type":"(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>","description":"Matches a string with a regular expression, and returns an iterable of matches\\ncontaining the results of that search.","required":true,"membersRef":"9b1117d5b6e9"}],"accc6b80d33f":[{"name":"locales","type":"LocalesArgument","description":"","required":true},{"name":"options","type":"BigIntToLocaleStringOptions | undefined","description":"","required":true}],"acd009e83d9c":[{"name":"searchString","type":"string","description":"search string","required":true},{"name":"position","type":"number | undefined","description":"If position is undefined, 0 is assumed, so as to search all of the String.","required":true}],"acf933af128b":[{"name":"regexp","type":"RegExp | string","description":"The regular expression pattern and applicable flags.","required":true}],"ada11bcbb74f":[{"name":"regexp","type":"RegExp | string","description":"A variable name or string literal containing the regular expression pattern and flags.","required":true}],"ba38c2576cee":[{"name":"searchString","type":"string","description":"The substring to search for in the string","required":true},{"name":"position","type":"number | undefined","description":"The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.","required":true}],"bbffa5aff06f":[{"name":"fractionDigits","type":"number | undefined","description":"Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.","required":true}],"bc30f28a4db2":[{"name":"then","type":"<TResult1 = AwaitedReactNode, TResult2 = never>(onfulfilled?: ((value: AwaitedReactNode) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<...>) | ... 1 more ... | undefined) => Promise<...>","description":"Attaches callbacks for the resolution and/or rejection of the Promise.","required":true,"membersRef":"5f5ec91a71ae"},{"name":"catch","type":"<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<AwaitedReactNode | TResult>","description":"Attaches a callback for only the rejection of the Promise.","required":true,"membersRef":"c7409f4f3191"},{"name":"finally","type":"(onfinally?: (() => void) | null | undefined) => Promise<AwaitedReactNode>","description":"Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The\\nresolved value cannot be modified from the callback.","required":true,"membersRef":"c09410ba7c13"}],"bc94faea80bc":[{"name":"regexp","type":"RegExp","description":"A regular expression","required":true,"membersRef":"9c697c4622f2"}],"c00770acccc4":[{"name":"regexp","type":"RegExp | string","description":"The regular expression pattern and applicable flags.","required":true,"membersRef":"eae38bb2b61a"}],"c09410ba7c13":[{"name":"onfinally","type":"(() => void) | null | undefined","description":"The callback to execute when the Promise is settled (fulfilled or rejected).","required":true}],"c3aa62ce4c4f":[{"name":"radix","type":"number | undefined","description":"Specifies a radix for converting numeric values to strings.","required":true}],"c3e867e53f9d":[{"name":"searchValue","type":"RegExp | string","description":"A string or regular expression to search for.","required":true,"membersRef":"eae38bb2b61a"},{"name":"replaceValue","type":"string","description":"A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.","required":true}],"c5ad11b6d4e3":[{"name":"start","type":"number | undefined","description":"The index to the beginning of the specified portion of stringObj.","required":true},{"name":"end","type":"number | undefined","description":"The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\\nIf this value is not specified, the substring continues to the end of stringObj.","required":true}],"c7409f4f3191":[{"name":"onrejected","type":"((reason: any) => TResult | PromiseLike<TResult>) | null | undefined","description":"The callback to execute when the Promise is rejected.","required":true}],"ca0c0224558f":[{"name":"index","type":"number","description":"The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.","required":true}],"cc7181a546b9":[{"name":"precision","type":"number | undefined","description":"Number of significant digits. Must be in the range 1 - 21, inclusive.","required":true}],"d5b2a246006d":[{"name":"pos","type":"number","description":"The zero-based index of the desired character.","required":true}],"dff8e7eb9471":[{"name":"url","type":"string","description":"","required":true}],"e0f587ffe245":[{"name":"name","type":"string","description":"","required":true}],"eae38bb2b61a":[{"name":"toString","type":"(() => string) | (() => string)","description":"Returns a string representation of a string.\\nReturns a string representation of an object.","required":true},{"name":"valueOf","type":"(() => Object) | (() => string)","description":"Returns the primitive value of the specified object.","required":true}],"f2cc3e3d5a99":[{"name":"radix","type":"number | undefined","description":"Specifies a radix for converting numeric values to strings. This value is only used for numbers.","required":true}],"f9f8b34cda4b":[{"name":"that","type":"string","description":"String to compare to target string","required":true}],"fbc5ffeb0a40":[{"name":"from","type":"number","description":"The starting position of the desired substring. The index of the first character in the string is zero.","required":true},{"name":"length","type":"number | undefined","description":"The number of characters to include in the returned substring.","required":true}],"fd6011e8ade1":[{"name":"toString","type":"(radix?: number | undefined) => string","description":"Returns a string representation of an object.","required":true,"membersRef":"f2cc3e3d5a99"},{"name":"toFixed","type":"(fractionDigits?: number | undefined) => string","description":"Returns a string representing a number in fixed-point notation.","required":true,"membersRef":"bbffa5aff06f"},{"name":"toExponential","type":"(fractionDigits?: number | undefined) => string","description":"Returns a string containing a number represented in exponential notation.","required":true,"membersRef":"bbffa5aff06f"},{"name":"toPrecision","type":"(precision?: number | undefined) => string","description":"Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.","required":true,"membersRef":"cc7181a546b9"},{"name":"valueOf","type":"() => number","description":"Returns the primitive value of the specified object.","required":true},{"name":"toLocaleString","type":"{ (locales?: string | string[] | undefined, options?: NumberFormatOptions | undefined): string; (locales?: LocalesArgument, options?: NumberFormatOptions | undefined): string; }","description":"Converts a number to a string by using the current or specified locale.","required":true,"membersRef":"086f86bbeb0d"}]}}')
;// CONCATENATED MODULE: ../../dist/api/components/ButtonGroup.json
var ButtonGroup_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"ButtonGroup","description":"Group several buttons together.","sourceFile":"packages/components/src/button/ButtonGroup.tsx","props":{},"types":{}}')
// EXTERNAL MODULE: ../../packages/components/src/button/ButtonGroup.tsx + 1 modules
var ButtonGroup = __webpack_require__(99633);
// EXTERNAL MODULE: ../../packages/components/src/button/Button.tsx
var Button = __webpack_require__(26282);
// EXTERNAL MODULE: ./src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(59282);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/plus.mjs
var plus = __webpack_require__(41898);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Button.mjs
var private_Button = __webpack_require__(57873);
;// CONCATENATED MODULE: ./docs/components/button.mdx


const frontMatter = {
	title: 'Button',
	description: 'Knappar används när användaren vill utföra en handling t.ex. spara ifylld information eller öppna ett formulär.'
};
const contentTitle = undefined;

const assets = {

};










const toc = [{
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Primär",
  "id": "primär",
  "level": 3
}, {
  "value": "Sekundär",
  "id": "sekundär",
  "level": 3
}, {
  "value": "Tertiär",
  "id": "tertiär",
  "level": 3
}, {
  "value": "Tillstånd",
  "id": "tillstånd",
  "level": 2
}, {
  "value": "isDisabled",
  "id": "isdisabled",
  "level": 3
}, {
  "value": "isPending",
  "id": "ispending",
  "level": 3
}, {
  "value": "Implementation",
  "id": "implementation",
  "level": 2
}, {
  "value": "Grupp av knappar",
  "id": "grupp-av-knappar",
  "level": 3
}, {
  "value": "Kontrollera flertalet knappar",
  "id": "kontrollera-flertalet-knappar",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Button",
  "id": "button",
  "level": 3
}, {
  "value": "ButtonGroup",
  "id": "buttongroup",
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
  if (!private_Button/* .ButtonContext */.k) _missingMdxReference("ButtonContext", false);
  if (!private_Button/* .ButtonContext.Provider */.k.Provider) _missingMdxReference("ButtonContext.Provider", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* .ComponentHeader */.B, {
      name: "Button",
      friendlyName: "Knapp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent som används för att låta användaren utföra en handling t.ex. spara ifylld information eller öppna ett formulär. När användaren interagerar med en knapp händer något på sidan."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Button, ButtonGroup } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ButtonGroup aria-label='Välj knapp'>\n  <Button>Primary</Button>\n  <Button variant='secondary'>Secondary</Button>\n  <Button variant='tertiary'>Tertiary</Button>\n</ButtonGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(ButtonGroup/* .ButtonGroup */.e, {
        "aria-label": "Välj knapp",
        children: [(0,jsx_runtime.jsx)(Button/* .Button */.$, {
          children: "Primary"
        }), (0,jsx_runtime.jsx)(Button/* .Button */.$, {
          variant: "secondary",
          children: "Secondary"
        }), (0,jsx_runtime.jsx)(Button/* .Button */.$, {
          variant: "tertiary",
          children: "Tertiary"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knappar placeras i regel i nedre vänstra hörnet av en sida, sektion eller tydligt avgränsad yta. Vi sätter alltid den primära knappen längst till vänster om det finns flera knappar (OK-Cancel)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ButtonGroup aria-label='Skicka formulär'>\n  <Button>Skicka</Button>\n  <Button variant='secondary'>Avbryt</Button>\n</ButtonGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(ButtonGroup/* .ButtonGroup */.e, {
        "aria-label": "Skicka formulär",
        children: [(0,jsx_runtime.jsx)(Button/* .Button */.$, {
          children: "Skicka"
        }), (0,jsx_runtime.jsx)(Button/* .Button */.$, {
          variant: "secondary",
          children: "Avbryt"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primär",
      children: "Primär"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Primärknappen används för den mest prioriterade handlingen (t.ex. Skicka eller Slutför) eller den positiva handlingen i ett flöde (t.ex. OK eller Nästa) och är därför utformad för att dra användarens uppmärksamhet till sig. För att ge användaren tydlig vägledning i gränssnittet bör antalet primärknappar i en och samma vy begränsas. Button har som standard ", (0,jsx_runtime.jsx)(_components.code, {
        children: "variant='primary'"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Button>Slutför</Button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(Button/* .Button */.$, {
        children: "Slutför"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sekundär",
      children: "Sekundär"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sekundärknappen används för vanliga handlingar som inte är lika viktiga som primära handlingar eller för den negativa handlingen i ett flöde (t.ex. Avbryt eller Tillbaka)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ButtonGroup aria-label='Välj knapp'>\n  <Button>Slutför</Button>\n  <Button variant='secondary'>Tillbaka</Button>\n</ButtonGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(ButtonGroup/* .ButtonGroup */.e, {
        "aria-label": "Välj knapp",
        children: [(0,jsx_runtime.jsx)(Button/* .Button */.$, {
          children: "Slutför"
        }), (0,jsx_runtime.jsx)(Button/* .Button */.$, {
          variant: "secondary",
          children: "Tillbaka"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tertiär",
      children: "Tertiär"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Den tertiära knappen används för de minst prioriterade handlingarna, t.ex. Ta bort eller Redigera."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ButtonGroup aria-label='Hantera anmälan'>\n  <Button>Slutför</Button>\n  <Button variant='secondary'>Tillbaka</Button>\n  <Button variant='tertiary'>Ta bort anmälan</Button>\n</ButtonGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(ButtonGroup/* .ButtonGroup */.e, {
        "aria-label": "Hantera anmälan",
        children: [(0,jsx_runtime.jsx)(Button/* .Button */.$, {
          children: "Slutför"
        }), (0,jsx_runtime.jsx)(Button/* .Button */.$, {
          variant: "secondary",
          children: "Tillbaka"
        }), (0,jsx_runtime.jsx)(Button/* .Button */.$, {
          variant: "tertiary",
          children: "Ta bort anmälan"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om den tertiära knappen används fristående från andra knappar ska den ha en ikon. Ikonen läggs till via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "icon"
      }), ". Vilken sida om texten som ikonen ska vara på styrs av ", (0,jsx_runtime.jsx)(_components.code, {
        children: "iconPlacement"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Button\n  variant='tertiary'\n  // highlight-start\n  icon={Plus}\n  iconPlacement='left'\n  // highlight-end\n>\n  Lägg till rad\n</Button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(Button/* .Button */.$, {
        icon: plus/* ["default"] */.A,
        variant: "tertiary",
        iconPlacement: "left",
        children: 'Lägg till rad'
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tillstånd",
      children: "Tillstånd"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isdisabled",
      children: "isDisabled"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att indikera att en handling inte är möjlig att utföra i aktuell kontext kan ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isDisabled"
      }), " användas. Av tillgänglighetsskäl är dock det bäst att undvika att använda ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isDisabled"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ispending",
      children: "isPending"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att visa att systemet laddas kan ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isPending"
      }), " användas, läs mer under ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/design-patterns/page-loading/#spinner-i-button",
        children: "mönster för laddningsindikatorer"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Button isPending>Laddar...</Button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(Button/* .Button */.$, {
        isPending: true,
        children: "Laddar..."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "grupp-av-knappar",
      children: "Grupp av knappar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att få korrekt layout på flertalet knappar kan komponenten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ButtonGroup"
      }), " användas. Kom ihåg att sätta en aria-label på ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ButtonGroup"
      }), " för att beskriva vad knapparna gör."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ButtonGroup } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ButtonGroup aria-label='Välj en frukt'>\n  <Button>Pineapple</Button>\n  <Button variant='secondary'>Apple</Button>\n</ButtonGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(ButtonGroup/* .ButtonGroup */.e, {
        "aria-label": "Välj en frukt",
        children: [(0,jsx_runtime.jsx)(Button/* .Button */.$, {
          children: "Pineapple"
        }), (0,jsx_runtime.jsx)(Button/* .Button */.$, {
          variant: "secondary",
          children: "Apple"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kontrollera-flertalet-knappar",
      children: "Kontrollera flertalet knappar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att kontrollera flertalet knappar kan ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ButtonContext"
      }), " användas runtom flertalet knappar för att kontrollera attribut på samtliga knappar på ett ställe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ButtonContext } from 'react-aria-components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// highlight-start\n<ButtonContext.Provider value={{ isPending: true }}>\n  // highlight-end\n  <ButtonGroup>\n    <Button>Grape</Button>\n    <Button variant='secondary'>Pear</Button>\n  </ButtonGroup>\n  // highlight-start\n</ButtonContext.Provider>\n// highlight-end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(private_Button/* .ButtonContext.Provider */.k.Provider, {
        value: {
          isPending: true
        },
        children: (0,jsx_runtime.jsxs)(ButtonGroup/* .ButtonGroup */.e, {
          children: [(0,jsx_runtime.jsx)(Button/* .Button */.$, {
            children: "Grape"
          }), (0,jsx_runtime.jsx)(Button/* .Button */.$, {
            variant: "secondary",
            children: "Pear"
          })]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "button",
      children: "Button"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: Button_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buttongroup",
      children: "ButtonGroup"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: ButtonGroup_namespaceObject,
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



},
27158(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"container":"container__96w","removeMargins":"removeMargins_pyqd","contained":"contained_vpHR","flex":"flex_QvQ5","fluid":"fluid_DXor","col":"col_y_9f","col-1":"col-1_XXxn","col-2":"col-2_moGr","col-3":"col-3_F2cd","col-quarter":"col-quarter_mUa9","col-4":"col-4__Ww3","col-third":"col-third_X71J","col-5":"col-5_ND3q","col-6":"col-6_H5Vp","col-half":"col-half_H56r","col-7":"col-7_RH3X","col-8":"col-8_hMp3","col-9":"col-9_OLoe","col-10":"col-10_cQ6C","col-11":"col-11_yjbP","col-12":"col-12_effh","col-full":"col-full_h70L","col-auto":"col-auto_gE4S","col-grow":"col-grow_acso","col-xs-1":"col-xs-1_Hh8U","col-xs-2":"col-xs-2_ZMrQ","col-xs-3":"col-xs-3_LOso","col-xs-quarter":"col-xs-quarter_l4rV","col-xs-4":"col-xs-4_kwz5","col-xs-third":"col-xs-third_yuln","col-xs-5":"col-xs-5_BLF1","col-xs-6":"col-xs-6_NaqK","col-xs-half":"col-xs-half_HC78","col-xs-7":"col-xs-7_h30J","col-xs-8":"col-xs-8_Fg_C","col-xs-9":"col-xs-9_wEbq","col-xs-10":"col-xs-10_NLbj","col-xs-11":"col-xs-11_kH0N","col-xs-12":"col-xs-12_Ydr2","col-xs-full":"col-xs-full_uWok","col-xs-auto":"col-xs-auto_lQ7o","col-xs-grow":"col-xs-grow_GUrq","col-sm-1":"col-sm-1_DYrQ","col-sm-2":"col-sm-2_R_jy","col-sm-3":"col-sm-3_f8lb","col-sm-quarter":"col-sm-quarter_Ur0q","col-sm-4":"col-sm-4_fxSP","col-sm-third":"col-sm-third_bFKM","col-sm-5":"col-sm-5_ZOWL","col-sm-6":"col-sm-6_SNZr","col-sm-half":"col-sm-half_j2M4","col-sm-7":"col-sm-7_ZL2b","col-sm-8":"col-sm-8_eOm5","col-sm-9":"col-sm-9_VPRS","col-sm-10":"col-sm-10_pj8F","col-sm-11":"col-sm-11_pO1i","col-sm-12":"col-sm-12_VlOc","col-sm-full":"col-sm-full_tlkf","col-sm-auto":"col-sm-auto_h3rQ","col-sm-grow":"col-sm-grow_r8Ij","col-md-1":"col-md-1_d_HG","col-md-2":"col-md-2_wh0s","col-md-3":"col-md-3_HNiY","col-md-quarter":"col-md-quarter_KGqv","col-md-4":"col-md-4_pP9O","col-md-third":"col-md-third_dpVt","col-md-5":"col-md-5_GQ4a","col-md-6":"col-md-6_R2MU","col-md-half":"col-md-half_dbor","col-md-7":"col-md-7_MwXS","col-md-8":"col-md-8_SEAf","col-md-9":"col-md-9_fDDy","col-md-10":"col-md-10_XcQu","col-md-11":"col-md-11_fwSK","col-md-12":"col-md-12_EjPC","col-md-full":"col-md-full_fqGQ","col-md-auto":"col-md-auto_IPi7","col-md-grow":"col-md-grow_sN1d","col-lg-1":"col-lg-1_XKAR","col-lg-2":"col-lg-2_CGg5","col-lg-3":"col-lg-3_IG8i","col-lg-quarter":"col-lg-quarter_ZP49","col-lg-4":"col-lg-4_lB2o","col-lg-third":"col-lg-third_l5Ik","col-lg-5":"col-lg-5_kwIR","col-lg-6":"col-lg-6_jFE6","col-lg-half":"col-lg-half_mHG6","col-lg-7":"col-lg-7_VKpt","col-lg-8":"col-lg-8_ppE2","col-lg-9":"col-lg-9_SPGU","col-lg-10":"col-lg-10_v6yO","col-lg-11":"col-lg-11_JCEp","col-lg-12":"col-lg-12_Qeri","col-lg-full":"col-lg-full_sIzl","col-lg-auto":"col-lg-auto_fQzB","col-lg-grow":"col-lg-grow_sFC4","col-xl-1":"col-xl-1_syh4","col-xl-2":"col-xl-2_R5eL","col-xl-3":"col-xl-3_tCGI","col-xl-quarter":"col-xl-quarter_Y5jm","col-xl-4":"col-xl-4_gZXZ","col-xl-third":"col-xl-third_p0LY","col-xl-5":"col-xl-5_sQxk","col-xl-6":"col-xl-6_C0Uv","col-xl-half":"col-xl-half_BD1M","col-xl-7":"col-xl-7_zRjA","col-xl-8":"col-xl-8_PAua","col-xl-9":"col-xl-9_vseQ","col-xl-10":"col-xl-10_ogWN","col-xl-11":"col-xl-11_SCcL","col-xl-12":"col-xl-12_iZFt","col-xl-full":"col-xl-full_akF9","col-xl-auto":"col-xl-auto_CKEz","col-xl-grow":"col-xl-grow_f8Vo","offset-1":"offset-1_cB0o","offset-2":"offset-2_YMBL","offset-3":"offset-3_UAyK","offset-quarter":"offset-quarter_MsqC","offset-4":"offset-4_MJ13","offset-third":"offset-third_LUur","offset-5":"offset-5_Joje","offset-6":"offset-6_JO1q","offset-half":"offset-half_Cxdq","offset-7":"offset-7_CLg_","offset-8":"offset-8_Lwfd","offset-9":"offset-9_X8qo","offset-10":"offset-10_n5Gz","offset-11":"offset-11_BGVy","offset-auto":"offset-auto_icoL","offset-xs-1":"offset-xs-1_Bqie","offset-xs-2":"offset-xs-2_sUUC","offset-xs-3":"offset-xs-3_QJ3N","offset-xs-quarter":"offset-xs-quarter_iQ8U","offset-xs-4":"offset-xs-4_KieU","offset-xs-third":"offset-xs-third_BvfR","offset-xs-5":"offset-xs-5_bU4d","offset-xs-6":"offset-xs-6_GQ4X","offset-xs-half":"offset-xs-half_cwbz","offset-xs-7":"offset-xs-7_SqQ2","offset-xs-8":"offset-xs-8_EAHs","offset-xs-9":"offset-xs-9_nY0z","offset-xs-10":"offset-xs-10_tOzF","offset-xs-11":"offset-xs-11_oYjr","offset-xs-auto":"offset-xs-auto_C1mp","offset-sm-1":"offset-sm-1_tX74","offset-sm-2":"offset-sm-2_aLgk","offset-sm-3":"offset-sm-3_H3UX","offset-sm-quarter":"offset-sm-quarter_JVaE","offset-sm-4":"offset-sm-4_aOLo","offset-sm-third":"offset-sm-third__7rb","offset-sm-5":"offset-sm-5_mTag","offset-sm-6":"offset-sm-6_EiCN","offset-sm-half":"offset-sm-half_NCRf","offset-sm-7":"offset-sm-7_AW4i","offset-sm-8":"offset-sm-8_LoVr","offset-sm-9":"offset-sm-9_m2yF","offset-sm-10":"offset-sm-10_KXZn","offset-sm-11":"offset-sm-11_o8EN","offset-sm-auto":"offset-sm-auto_OFdP","offset-md-1":"offset-md-1_xNnA","offset-md-2":"offset-md-2_M2wp","offset-md-3":"offset-md-3_hbhk","offset-md-quarter":"offset-md-quarter_nF_3","offset-md-4":"offset-md-4_TUDA","offset-md-third":"offset-md-third_tS3o","offset-md-5":"offset-md-5_ZsoI","offset-md-6":"offset-md-6_Fstc","offset-md-half":"offset-md-half_HEG0","offset-md-7":"offset-md-7_MYkw","offset-md-8":"offset-md-8_z0b9","offset-md-9":"offset-md-9_X_wB","offset-md-10":"offset-md-10_w6XG","offset-md-11":"offset-md-11_FEFD","offset-md-auto":"offset-md-auto_Umu5","offset-lg-1":"offset-lg-1_rUx8","offset-lg-2":"offset-lg-2_AX6n","offset-lg-3":"offset-lg-3_y_M0","offset-lg-quarter":"offset-lg-quarter_gUzC","offset-lg-4":"offset-lg-4_qcT5","offset-lg-third":"offset-lg-third_ifVe","offset-lg-5":"offset-lg-5_Hw2b","offset-lg-6":"offset-lg-6_Ckf9","offset-lg-half":"offset-lg-half_aHqJ","offset-lg-7":"offset-lg-7_C9bd","offset-lg-8":"offset-lg-8_z1iD","offset-lg-9":"offset-lg-9_jIoq","offset-lg-10":"offset-lg-10_NJJM","offset-lg-11":"offset-lg-11_rj3G","offset-lg-auto":"offset-lg-auto_t6yE","offset-xl-1":"offset-xl-1_NBlq","offset-xl-2":"offset-xl-2_xnbw","offset-xl-3":"offset-xl-3_x1fR","offset-xl-quarter":"offset-xl-quarter_rKWW","offset-xl-4":"offset-xl-4_E3Pl","offset-xl-third":"offset-xl-third_ZHMr","offset-xl-5":"offset-xl-5_KR3o","offset-xl-6":"offset-xl-6_hR9Z","offset-xl-half":"offset-xl-half_hDaK","offset-xl-7":"offset-xl-7_k6Zu","offset-xl-8":"offset-xl-8_JEm7","offset-xl-9":"offset-xl-9_z9xR","offset-xl-10":"offset-xl-10_HT4q","offset-xl-11":"offset-xl-11_Cd9z","offset-xl-auto":"offset-xl-auto_XRsv"});

},
67793(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// UNUSED EXPORTS: DisplayCompositeTypes

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(72026);
// EXTERNAL MODULE: ../../packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(81536);
// EXTERNAL MODULE: ../../packages/components/src/accordion/Accordion.tsx + 1 modules
var Accordion = __webpack_require__(19381);
// EXTERNAL MODULE: ../../packages/components/src/accordion/AccordionItem.tsx + 1 modules
var AccordionItem = __webpack_require__(28442);
;// CONCATENATED MODULE: ./src/css/propstable.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const propstable_module = ({"accordion":"accordion_tS3o","propsGridTable":"propsGridTable_Mtyx","membersTable":"membersTable_WMKU","popover":"popover_sIab","arrow":"arrow_Ij9y"});
// EXTERNAL MODULE: ../../node_modules/react-markdown/lib/index.js + 137 modules
var lib = __webpack_require__(83059);
// EXTERNAL MODULE: ../../node_modules/react-lowlight/src/Lowlight.js + 2 modules
var Lowlight = __webpack_require__(17329);
// EXTERNAL MODULE: ../../node_modules/react-lowlight/src/common.js + 38 modules
var common = __webpack_require__(46900);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/interactions/Pressable.mjs
var Pressable = __webpack_require__(13919);
;// CONCATENATED MODULE: ./src/utils/jsdocLinkToMarkdown.ts
const jsdocLinkToMarkdown = (comment)=>// {@link URL|Text} or {@link URL Text} format (JSDoc style)
    comment.replace(/\{@link\s+([^|\s}]+)\s*\|?\s*([^}]+)\}/g, (match, url, text)=>`[${text.trim()}](${url})`)// Replace @see with "See " at the beginning of lines
    .replace(/^\s*@see\s+/gm, 'See ')// Remove @link tags from the beginning of lines (but keep the markdown link)
    .replace(/^\s*@link\s+/gm, '')// Remove any extra @link tags that might be inline
    .replace(/\s*@link\s+/g, ' ');

;// CONCATENATED MODULE: ./src/components/PropsTable.tsx









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
                contentBackground: "inherit",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: rest,
                    props: props
                })
            }),
            Object.getOwnPropertyNames(events).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "events",
                title: "Events",
                className: propstable_module.accordionItem,
                contentBackground: "inherit",
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
                contentBackground: "inherit",
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
59282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  B: () => (ComponentHeader)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(31085);
/* import */ var _midas_ds_components__rspack_import_3 = __webpack_require__(30230);
/* import */ var _midas_ds_components__rspack_import_4 = __webpack_require__(23527);
/* import */ var _midas_ds_components__rspack_import_5 = __webpack_require__(36360);
/* import */ var lucide_react__rspack_import_6 = __webpack_require__(12303);
/* import */ var _site_src_components_icons__rspack_import_1 = __webpack_require__(9333);
/* import */ var _docusaurus_useBaseUrl__rspack_import_2 = __webpack_require__(914);



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
9333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ EmptyIcon),
  q: () => (/* reexport */ StorybookIcon)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
;// CONCATENATED MODULE: ./src/components/icons/Storybook.tsx


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

;// CONCATENATED MODULE: ./src/components/icons/Empty.tsx

const EmptyIcon = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        height: 0,
        width: 0
    });

;// CONCATENATED MODULE: ./src/components/icons/index.ts




},
19381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ Accordion)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
;// CONCATENATED MODULE: ../../packages/components/src/accordion/Accordion.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Accordion_module = ({"root":"root_w42l","contained":"contained_rP30","triggerButton":"triggerButton_jEcc"});
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(51669);
// EXTERNAL MODULE: ../../packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(79881);
;// CONCATENATED MODULE: ../../packages/components/src/accordion/Accordion.tsx
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
79881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  C: () => (AccordionContext)
});
/* import */ var react__rspack_import_0 = __webpack_require__(14041);

const AccordionContext = (0,react__rspack_import_0.createContext)(undefined);


},
28442(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionItem)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(51669);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95288);
// EXTERNAL MODULE: ../../packages/components/src/button/Button.tsx
var Button = __webpack_require__(26282);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var chevron_down = __webpack_require__(86788);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
;// CONCATENATED MODULE: ../../packages/components/src/accordion/AccordionItem.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const AccordionItem_module = ({"item":"item_wSqW","contained":"contained_Z_7A","medium":"medium_pS6e","success":"success_rUpQ","warning":"warning_I0dL","info":"info_gCGu","important":"important_fwgw","triggerButton":"triggerButton_Cluj","triggerText":"triggerText_uo81","trigger":"trigger_unEz","triggerMainContent":"triggerMainContent_LG_r","\t":"\t_aeGH","chevronIcon":"chevronIcon_EVtc","statusIcon":"statusIcon_Pq7i","panel":"panel_zkEb","content":"content_CTMZ","neutralBackground":"neutralBackground_X1kb","header":"header_BbQI"});
// EXTERNAL MODULE: ../../packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(15668);
// EXTERNAL MODULE: ../../packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(79881);
// EXTERNAL MODULE: ../../packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(35349);
;// CONCATENATED MODULE: ../../packages/components/src/accordion/AccordionItem.tsx











const AccordionItem = (param)=>{
    let { title, children, className, headingLevel = 'h2', type, contentBackground: contentBackgroundFromProp, hasBackground, size = 'large', isContained: isContainedFromProp, iconAriaLabel, ...props } = param;
    const context = (0,react.useContext)(AccordionContext/* .AccordionContext */.C);
    const isContained = isContainedFromProp ?? context?.isContained ?? false;
    const titleIsReactNode = typeof title === 'object';
    const contentBackground = contentBackgroundFromProp ?? (hasBackground === false ? 'inherit' : 'neutral');
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
                            className: (0,clsx/* ["default"] */.A)(AccordionItem_module.content, contentBackground === 'neutral' && AccordionItem_module.neutralBackground),
                            children: children
                        })
                    })
                ]
            }))
    });
};


},
99633(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ ButtonGroup)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
;// CONCATENATED MODULE: ../../packages/components/src/button/ButtonGroup.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const ButtonGroup_module = ({"buttonGroup":"buttonGroup_q_xv"});
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
;// CONCATENATED MODULE: ../../packages/components/src/button/ButtonGroup.tsx




/**
 * Group several buttons together.
 *
 * @interface React.HTMLAttributes<HTMLDivElement>
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */ const ButtonGroup = (param)=>{
    let { children, className, 'aria-label': ariaLabel, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "group",
        "aria-label": ariaLabel,
        className: (0,clsx/* ["default"] */.A)(ButtonGroup_module.buttonGroup, className),
        ...rest,
        children: children
    });
};


},
35349(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ FeedbackStatusIcon)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(25298);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/info.mjs
var info = __webpack_require__(47782);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/flag.mjs
var flag = __webpack_require__(81876);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs
var triangle_alert = __webpack_require__(43919);
// EXTERNAL MODULE: ../../packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(18232);
;// CONCATENATED MODULE: ../../packages/components/src/common/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"ok":"okay","information":"information","importantInformation":"important information","warning":"warning"},"sv":{"ok":"okej","information":"information","importantInformation":"viktig information","warning":"varning"}}')
;// CONCATENATED MODULE: ../../packages/components/src/common/FeedbackStatusIcon.tsx




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
30230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  x: () => (Grid)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(31085);
/* import */ var react__rspack_import_1 = __webpack_require__(14041);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(27158);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(74677);




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
23527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  E: () => (GridItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(31085);
/* import */ var react__rspack_import_1 = __webpack_require__(14041);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(27158);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(74677);




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
15668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ Heading_Heading)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Heading.mjs
var Heading = __webpack_require__(72925);
;// CONCATENATED MODULE: ../../packages/components/src/heading/Heading.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Heading_module = ({"h1":"h1_fjh3","h2":"h2_UaKO","h3":"h3_elJB","h4":"h4_stZd","h5":"h5_TRor","h6":"h6_sX_H"});
;// CONCATENATED MODULE: ../../packages/components/src/heading/Heading.tsx





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
36360(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(77153);
// EXTERNAL MODULE: ../../node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(32120);
;// CONCATENATED MODULE: ../../packages/components/src/link-button/LinkButton.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const LinkButton_module = ({"linkButton":"linkButton_gecX","secondary":"secondary_JNpq","icon":"icon_fF7b","tertiary":"tertiary_TMiw","danger":"danger_KaU1","iconBtn":"iconBtn_yoJx","medium":"medium_w63W","iconLeft":"iconLeft_mf1N","fullwidth":"fullwidth_KC7Q","button":"button_XFSc"});
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.mjs
var square_arrow_out_up_right = __webpack_require__(51951);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/arrow-left.mjs
var arrow_left = __webpack_require__(29853);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/arrow-right.mjs
var arrow_right = __webpack_require__(70840);
// EXTERNAL MODULE: ../../packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(18232);
;// CONCATENATED MODULE: ../../packages/components/src/link-button/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"opensInNewTab":"Opens in new tab"},"sv":{"opensInNewTab":"Öppnas i ny flik"}}')
;// CONCATENATED MODULE: ../../packages/components/src/link-button/LinkButton.tsx
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
81536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(31085);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95288);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(44616);
// EXTERNAL MODULE: ../../node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(19706);
// EXTERNAL MODULE: ../../packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(74677);
;// CONCATENATED MODULE: ../../packages/components/src/popover/Popover.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Popover_module = ({"popover":"popover_VTsQ","arrow":"arrow_Hrch"});
;// CONCATENATED MODULE: ../../packages/components/src/popover/Popover.tsx





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
41898(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (Plus)
});
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(94202);
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
__iconData.node;
const Plus = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)(__iconData);


//# sourceMappingURL=plus.mjs.map


},

}]);