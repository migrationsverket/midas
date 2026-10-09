"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["7325"], {
84463(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_components_textarea_mdx_846_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-textarea-mdx-846.json
var site_docs_components_textarea_mdx_846_namespaceObject = JSON.parse('{"id":"components/textarea","title":"TextArea","description":"När användaren ska fylla i längre information","source":"@site/docs/components/textarea.mdx","sourceDirName":"components","slug":"/components/textarea","permalink":"/pr-preview/pr-1407/components/textarea","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TextArea","description":"När användaren ska fylla i längre information"},"sidebar":"sideBar","previous":{"title":"Text","permalink":"/pr-preview/pr-1407/components/text"},"next":{"title":"TextField","permalink":"/pr-preview/pr-1407/components/textfield"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(28247);
;// CONCATENATED MODULE: ./dist/api/components/TextArea.json
var TextArea_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"TextArea","description":"","sourceFile":"packages/components/src/textfield/TextArea.tsx","props":{"children":{"defaultValue":null,"description":"The children of the component. A function may be provided to alter the children based on\\ncomponent state.","name":"children","required":false,"parent":{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"},"declarations":[{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"}],"type":{"name":"enum","raw":"ReactNode","value":[{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"isDisabled":{"defaultValue":null,"description":"Whether the input is disabled.","name":"isDisabled","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"InputBase"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"InputBase"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"size":{"defaultValue":{"value":"\'large\'"},"description":"Component size (large: height 48px, medium: height 40px)","name":"size","required":false,"parent":{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"},"declarations":[{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"}],"type":{"name":"enum","raw":"Size","value":[{"value":"\\"large\\""},{"value":"\\"medium\\""}]}},"slot":{"defaultValue":null,"description":"A slot name for the component. Slots allow the component to receive props from a parent\\ncomponent. An explicit `null` value indicates that the local props completely override all\\nprops received from a parent.","name":"slot","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"}],"type":{"name":"enum","raw":"string | null","value":[{"value":"null"},{"value":"string"}]}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<TextFieldRenderProps>","value":[{"value":"(values: TextFieldRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"aria-activedescendant":{"defaultValue":null,"description":"Identifies the currently active element when DOM focus is on a composite widget, textbox,\\ngroup, or application.","name":"aria-activedescendant","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/textfield/useTextField.d.ts","name":"AriaTextFieldProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/textfield/useTextField.d.ts","name":"AriaTextFieldProps"}],"type":{"name":"string","raw":"string"}},"aria-autocomplete":{"defaultValue":null,"description":"Indicates whether inputting text could trigger display of one or more predictions of the user\'s\\nintended value for an input and specifies how predictions would be presented if they are made.","name":"aria-autocomplete","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/textfield/useTextField.d.ts","name":"AriaTextFieldProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/textfield/useTextField.d.ts","name":"AriaTextFieldProps"}],"type":{"name":"enum","raw":"\\"both\\" | \\"inline\\" | \\"list\\" | \\"none\\"","value":[{"value":"\\"both\\""},{"value":"\\"inline\\""},{"value":"\\"list\\""},{"value":"\\"none\\""}]}},"aria-controls":{"defaultValue":null,"description":"Identifies the element (or elements) whose contents or presence are controlled by the current\\nelement.","name":"aria-controls","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/textfield/useTextField.d.ts","name":"AriaTextFieldProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/textfield/useTextField.d.ts","name":"AriaTextFieldProps"}],"type":{"name":"string","raw":"string"}},"aria-haspopup":{"defaultValue":null,"description":"Indicates the availability and type of interactive popup element, such as menu or dialog, that\\ncan be triggered by an element.","name":"aria-haspopup","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/textfield/useTextField.d.ts","name":"AriaTextFieldProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/textfield/useTextField.d.ts","name":"AriaTextFieldProps"}],"type":{"name":"enum","raw":"\\"dialog\\" | \\"false\\" | \\"grid\\" | \\"listbox\\" | \\"menu\\" | \\"tree\\" | \\"true\\" | boolean","value":[{"value":"\\"dialog\\""},{"value":"\\"false\\""},{"value":"\\"grid\\""},{"value":"\\"listbox\\""},{"value":"\\"menu\\""},{"value":"\\"tree\\""},{"value":"\\"true\\""},{"value":"false"},{"value":"true"}]}},"onFocus":{"defaultValue":null,"description":"Handler that is called when the element receives focus.","name":"onFocus","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"}],"type":{"name":"enum","raw":"((e: FocusEvent<HTMLInputElement, Element>) => void)","value":[{"value":"(e: FocusEvent<HTMLInputElement, Element>) => void","description":"","fullComment":"","tags":{}}]}},"onBlur":{"defaultValue":null,"description":"Handler that is called when the element loses focus.","name":"onBlur","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"}],"type":{"name":"enum","raw":"((e: FocusEvent<HTMLInputElement, Element>) => void)","value":[{"value":"(e: FocusEvent<HTMLInputElement, Element>) => void","description":"","fullComment":"","tags":{}}]}},"onChange":{"defaultValue":null,"description":"Handler that is called when the value changes.","name":"onChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"ValueBase"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"ValueBase"}],"type":{"name":"enum","raw":"((value: string) => void)","value":[{"value":"(value: string) => void","description":"","fullComment":"","tags":{}}]}},"onKeyDown":{"defaultValue":null,"description":"Handler that is called when a key is pressed.","name":"onKeyDown","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"KeyboardEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"KeyboardEvents"}],"type":{"name":"enum","raw":"((e: KeyboardEvent) => void)","value":[{"value":"(e: KeyboardEvent) => void","description":"","fullComment":"","tags":{}}]}},"onKeyUp":{"defaultValue":null,"description":"Handler that is called when a key is released.","name":"onKeyUp","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"KeyboardEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"KeyboardEvents"}],"type":{"name":"enum","raw":"((e: KeyboardEvent) => void)","value":[{"value":"(e: KeyboardEvent) => void","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\", TextFieldRenderProps>","raw":"DOMRenderFunction<\\"div\\", TextFieldRenderProps>"}},"autoFocus":{"defaultValue":null,"description":"Whether the element should receive focus on render.","name":"autoFocus","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusableProps"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusableProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"onFocusChange":{"defaultValue":null,"description":"Handler that is called when the element\'s focus status changes.","name":"onFocusChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"FocusEvents"}],"type":{"name":"enum","raw":"((isFocused: boolean) => void)","value":[{"value":"(isFocused: boolean) => void","description":"","fullComment":"","tags":{}}]}},"value":{"defaultValue":null,"description":"The current value (controlled).","name":"value","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"ValueBase"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"ValueBase"}],"type":{"name":"string","raw":"string"}},"errorMessage":{"defaultValue":null,"description":"Custom error messages","name":"errorMessage","required":false,"parent":{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"},"declarations":[{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"}],"type":{"name":"enum","raw":"((validation: ValidationResult) => string) | string","value":[{"value":"(validation: ValidationResult) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"isReadOnly":{"defaultValue":null,"description":"Whether the input can be selected but not changed by the user.","name":"isReadOnly","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"InputBase"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"InputBase"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isInvalid":{"defaultValue":null,"description":"Whether the value is invalid.","name":"isInvalid","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TextField.d.ts","name":"TextFieldProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TextField.d.ts","name":"TextFieldProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"defaultValue":{"defaultValue":null,"description":"The default value (uncontrolled).","name":"defaultValue","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"ValueBase"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"ValueBase"}],"type":{"name":"string","raw":"string"}},"label":{"defaultValue":null,"description":"Specify label displayed above the TextField","name":"label","required":false,"parent":{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"},"declarations":[{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"}],"type":{"name":"string","raw":"string"}},"description":{"defaultValue":null,"description":"Specify description displayed below the label","name":"description","required":false,"parent":{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"},"declarations":[{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"}],"type":{"name":"string","raw":"string"}},"validationBehavior":{"defaultValue":{"value":"\'native\'"},"description":"Whether to use native HTML form validation to prevent form submission\\nwhen the value is missing or invalid, or mark the field as required\\nor invalid via ARIA.","name":"validationBehavior","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RACValidation"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RACValidation"}],"type":{"name":"enum","raw":"\\"aria\\" | \\"native\\"","value":[{"value":"\\"aria\\""},{"value":"\\"native\\""}]}},"isRequired":{"defaultValue":null,"description":"Whether user input is required on the input before form submission.","name":"isRequired","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"Validation"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"Validation"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"validate":{"defaultValue":null,"description":"A function that returns an error message if a given value is invalid.\\nValidation errors are displayed to the user when the form is submitted\\nif `validationBehavior=\\"native\\"`. For realtime validation, use the `isInvalid`\\nprop instead.","name":"validate","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"Validation"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/inputs.d.ts","name":"Validation"}],"type":{"name":"enum","raw":"((value: string) => true | ValidationError | null)","value":[{"value":"(value: string) => true | ValidationError | null | undefined","description":"","fullComment":"","tags":{}}]}},"enterKeyHint":{"defaultValue":null,"description":"An enumerated attribute that defines what action label or icon to preset for the enter key on\\nvirtual keyboards. See\\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint).","name":"enterKeyHint","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/textfield/useTextField.d.ts","name":"AriaTextFieldProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/textfield/useTextField.d.ts","name":"AriaTextFieldProps"}],"type":{"name":"enum","raw":"\\"done\\" | \\"enter\\" | \\"go\\" | \\"next\\" | \\"previous\\" | \\"search\\" | \\"send\\"","value":[{"value":"\\"done\\""},{"value":"\\"enter\\""},{"value":"\\"go\\""},{"value":"\\"next\\""},{"value":"\\"previous\\""},{"value":"\\"search\\""},{"value":"\\"send\\""}]}},"popover":{"defaultValue":null,"description":"","name":"popover","required":false,"parent":{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"},"declarations":[{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"}],"type":{"name":"InfoPopoverProps","raw":"InfoPopoverProps","membersRef":"e8b614cfb149"}},"errorPosition":{"defaultValue":null,"description":"","name":"errorPosition","required":false,"parent":{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"},"declarations":[{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"}],"type":{"name":"enum","raw":"\\"bottom\\" | \\"top\\"","value":[{"value":"\\"bottom\\""},{"value":"\\"top\\""}]}},"showCounter":{"defaultValue":{"value":"false"},"description":"Whether to show the character counter or not","name":"showCounter","required":false,"parent":{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"},"declarations":[{"fileName":"midas/packages/components/src/textfield/TextFieldBase.tsx","name":"TextFieldBaseProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"className":{"defaultValue":{"value":"\'react-aria-TextArea\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TextArea.d.ts","name":"TextAreaProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/TextArea.d.ts","name":"TextAreaProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<InputRenderProps>","value":[{"value":"(values: InputRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"onHoverStart":{"defaultValue":null,"description":"Handler that is called when a hover interaction starts.","name":"onHoverStart","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((e: HoverEvent) => void)","value":[{"value":"(e: HoverEvent) => void","description":"","fullComment":"","tags":{}}]}},"onHoverEnd":{"defaultValue":null,"description":"Handler that is called when a hover interaction ends.","name":"onHoverEnd","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((e: HoverEvent) => void)","value":[{"value":"(e: HoverEvent) => void","description":"","fullComment":"","tags":{}}]}},"onHoverChange":{"defaultValue":null,"description":"Handler that is called when the hover state changes.","name":"onHoverChange","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/events.d.ts","name":"HoverEvents"}],"type":{"name":"enum","raw":"((isHovering: boolean) => void)","value":[{"value":"(isHovering: boolean) => void","description":"","fullComment":"","tags":{}}]}}},"types":{"e8b614cfb149":[{"name":"children","type":"ReactNode","description":"An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button.","required":true},{"name":"aria-label","type":"string | undefined","description":"An aria-label for the info icon button trigger","required":false}]}}')
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(82737);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextArea.tsx
var TextArea = __webpack_require__(3090);
;// CONCATENATED MODULE: ./apps/docs/docs/components/textarea.mdx


const frontMatter = {
	title: 'TextArea',
	description: 'När användaren ska fylla i längre information'
};
const contentTitle = undefined;

const assets = {

};







const toc = [{
  "value": "Beskrivning",
  "id": "beskrivning",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* .ComponentHeader */.B, {
      name: "Textarea",
      friendlyName: "Textfält, fritext",
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/TextField.html#textarea-1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inmatningsfält som används när användaren behöver fylla i längre information t.ex. en beskrivning, kommentar eller fritext. För kortare, striktare inmatning används ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/textfield",
        children: "TextField"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { TextArea } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TextArea\n  label='Kommentar'\n  description='Skriv en kommentar'\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(TextArea/* .TextArea */.f, {
        label: "Kommentar",
        description: "Skriv en kommentar"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "beskrivning",
      children: "Beskrivning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TextArea är en komposition av ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<TextField>"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<TextArea>"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Label>"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<FieldError>"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Text>"
      }), " som alla är React Aria-komponenter."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Med undantag för ", (0,jsx_runtime.jsx)(_components.code, {
        children: "type"
      }), "-attributet erbjuder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TextArea"
      }), " samma API som ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TextField"
      }), ", vänligen använd ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../textfield",
        children: "dokumentationen för TextField"
      }), " för mer information."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: TextArea_namespaceObject
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
52658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"textField":"textField_IarX","bottomError":"bottomError_XU77","textArea":"textArea_M6yF","input":"input_g6A6","wrap":"wrap_ljmz","medium":"medium_jalb","passwordText":"passwordText_gBIs","passwordButton":"passwordButton_kacG"});

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
79440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label_Label)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Label.mjs
var Label = __webpack_require__(37820);
;// CONCATENATED MODULE: ./packages/components/src/label/Label.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Label_module = ({"labelBase":"labelBase_BRgo"});
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(81582);
;// CONCATENATED MODULE: ./packages/components/src/label/Label.tsx






const DEFAULT_ELEMENT = 'label';
const Label_Label = (param)=>{
    let { children, className, elementType = DEFAULT_ELEMENT, ...rest } = param;
    const labelProps = {
        className: (0,clsx/* ["default"] */.A)(Label_module.labelBase, className),
        elementType: elementType || DEFAULT_ELEMENT,
        ...rest
    };
    const ctx = react.useContext(LabelWrapper/* .LabelWrapperContext */.d$);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Label/* .Label */.J, {
        ...labelProps,
        "aria-describedby": ctx?.popoverId,
        children: children
    });
};


},
81582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d$: () => (/* binding */ LabelWrapperContext),
  cR: () => (/* binding */ LabelWrapper)
});

// UNUSED EXPORTS: useLabelWrapperContext

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./packages/components/src/label/LabelWrapper.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const LabelWrapper_module = ({"labelPopover":"labelPopover_QNhJ","labelPopoverTrigger":"labelPopoverTrigger_iTpE"});
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(11728);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.mjs
var info = __webpack_require__(50643);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(5245);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/label/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"moreInfo":"More info"},"sv":{"moreInfo":"Mer information"}}')
;// CONCATENATED MODULE: ./packages/components/src/label/InfoPopover.tsx










const InfoPopover = (param)=>{
    let { children, 'aria-label': ariaLabel } = param;
    const ctx = (0,react.useContext)(LabelWrapperContext);
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .DialogTrigger */.zM, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                "aria-label": ariaLabel || strings.format('moreInfo'),
                className: LabelWrapper_module.labelPopoverTrigger,
                id: ctx?.popoverId,
                size: "medium",
                slot: null,
                variant: "icon",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(info/* ["default"] */.A, {
                    size: 20
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
                children: children
            })
        ]
    });
};

;// CONCATENATED MODULE: ./packages/components/src/label/LabelWrapper.tsx




const LabelWrapperContext = /*#__PURE__*/ react.createContext(undefined);
const useLabelWrapperContext = ()=>React.useContext(LabelWrapperContext);
const LabelWrapper = (param)=>{
    let { children, popover } = param;
    const popoverId = react.useId();
    if (popover) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LabelWrapperContext.Provider, {
        value: {
            popoverId
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: LabelWrapper_module.labelPopover,
            children: [
                children,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoPopover, {
                    ...popover
                })
            ]
        })
    });
    return children;
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
3090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  f: () => (TextArea)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _TextFieldBase__rspack_import_3 = __webpack_require__(11287);
/* import */ var react_aria_components__rspack_import_4 = __webpack_require__(28896);
/* import */ var _utils_clsx__rspack_import_5 = __webpack_require__(18496);
/* import */ var _TextField_module_css__rspack_import_2 = __webpack_require__(52658);
'use client';






const TextArea = /*#__PURE__*/ (0,react__rspack_import_1.forwardRef)((param, ref)=>{
    let { className, cols, form, rows, wrap, ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_TextFieldBase__rspack_import_3/* .TextFieldBase */.J, {
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_4/* .TextArea */.f, {
            className: (0,_utils_clsx__rspack_import_5/* ["default"] */.A)(_TextField_module_css__rspack_import_2/* ["default"].textArea */.A.textArea, className),
            cols: cols,
            form: form,
            ref: ref,
            rows: rows,
            wrap: wrap
        })
    });
});
TextArea.displayName = 'TextArea';


},
11287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ TextFieldBase)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/TextField.mjs
var TextField = __webpack_require__(41493);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(52658);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(47135);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Input.mjs
var Input = __webpack_require__(36594);
;// CONCATENATED MODULE: ./packages/components/src/character-counter/CharacterCounter.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const CharacterCounter_module = ({"characterCounter":"characterCounter_Rd9H"});
;// CONCATENATED MODULE: ./packages/components/src/character-counter/CharacterCounter.tsx




const CharacterCounter = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    ;
    [props] = (0,utils/* .useContextProps */.JT)(props, ref, Input/* .InputContext */.E);
    const { maxLength, value, isLonely } = props;
    const { length } = value?.toString() ?? '';
    const isMaxLengthDefined = maxLength !== undefined;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: CharacterCounter_module.characterCounter,
        "data-exceeded": isMaxLengthDefined && length > maxLength || undefined,
        "data-lonely": isLonely || undefined,
        children: isMaxLengthDefined ? `${length} / ${maxLength}` : length
    });
});
CharacterCounter.displayName = 'CharacterCounter';

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(79440);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(81582);
;// CONCATENATED MODULE: ./packages/components/src/textfield/TextFieldBase.tsx










const TextFieldBase = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    ;
    [props] = (0,utils/* .useContextProps */.JT)(props, ref, TextField/* .TextFieldContext */.H);
    const { label, description, errorMessage, showCounter, errorPosition = 'top', size = 'large', popover, children } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TextField/* .TextField */.A, {
        ...props,
        className: (0,clsx/* .clsx */.$)(TextField_module/* ["default"].textField */.A.textField, {
            [TextField_module/* ["default"].medium */.A.medium]: size === 'medium'
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LabelWrapper/* .LabelWrapper */.cR, {
                popover: popover,
                children: label && /*#__PURE__*/ (0,jsx_runtime.jsx)(Label/* .Label */.J, {
                    children: label
                })
            }),
            description && /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                slot: "description",
                children: description
            }),
            showCounter && /*#__PURE__*/ (0,jsx_runtime.jsx)(CharacterCounter, {
                isLonely: !description
            }),
            errorPosition === 'top' && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                "data-testid": "fieldError",
                children: errorMessage
            }),
            children,
            errorPosition === 'bottom' && /*#__PURE__*/ (0,jsx_runtime.jsx)(FieldError/* .FieldError */.b, {
                "data-testid": "fieldError",
                className: TextField_module/* ["default"].bottomError */.A.bottomError,
                children: errorMessage
            })
        ]
    });
});
TextFieldBase.displayName = 'TextFieldBase';


},

}]);