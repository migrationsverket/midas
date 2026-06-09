import{r as y,j as a}from"./iframe-6VRTlOeH.js";import{T as b,$ as x}from"./TextFieldBase-rY7jnSYm.js";import{c as w}from"./clsx-Ciqy0D92.js";import{T as V}from"./TextField.module-DdivwlC8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-0kxM0y8Y.js";import"./clsx-B-dksMZM.js";import"./FieldError-BjyVB-H9.js";import"./Text-CpKvHOvq.js";import"./useFocusRing-DGxSfNEF.js";import"./index-DuM1IAo7.js";import"./index-BfAN20ZA.js";import"./Text-BxBOqGEA.js";import"./RSPContexts-DRe_RyK6.js";import"./Form-3fhL1Dx2.js";import"./Group-BXWl5BNG.js";import"./Input-t6CEBuf7.js";import"./Hidden-DlTpFa-B.js";import"./Button-DLPX01E3.js";import"./useLabel-BFBWLCR-.js";import"./useLabels-DISBRw-R.js";import"./useButton-Bjmveq-R.js";import"./useTextField-CxYO2c75.js";import"./useControlledState-pI_U9-IG.js";import"./useField-2NJCbeT2.js";import"./Label-yhzhs_sD.js";import"./Dialog-Dgx0n_Ye.js";import"./OverlayArrow-DBlOlBI_.js";import"./useResizeObserver-rtx7MB9x.js";import"./Collection-TF1_6_sW.js";import"./index-M8MoRKxx.js";import"./Separator-Drv2w8La.js";import"./SelectionManager-CrHNXkN6.js";import"./useEvent-CA01mw1x.js";import"./scrollIntoView-BdAgwM8B.js";import"./SelectionIndicator-CCEQFu0T.js";import"./useDescription-VsZXCutT.js";import"./ListKeyboardDelegate-ZFjtCWQm.js";import"./PressResponder-NzJgLDPG.js";import"./useLocalizedStringFormatter-Tc4ujGE7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-8ekBFdXr.js";import"./getScrollParent-HQ76BiU1.js";import"./VisuallyHidden-BKsZ0nD0.js";import"./ModalOverlay-CXH0sLQA.js";import"./x-CG_c6zFF.js";import"./createLucideIcon-LiZfCQUd.js";import"./useLocalizedStringFormatter-BuRCkwwi.js";import"./Heading-OsMCcv5f.js";import"./Button-CQiZspsF.js";import"./Button.module-BB7N-cLd.js";import"./info-DRnlA33R.js";import"./Popover-DMTLs5MJ.js";const t=y.forwardRef(({className:e,cols:m,form:c,rows:h,wrap:f,...v},g)=>a.jsx(b,{...v,children:a.jsx(x,{className:w(V.textArea,e),cols:m,form:c,ref:g,rows:h,wrap:f})}));t.displayName="TextArea";try{t.displayName="TextArea",t.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"Specify label displayed above the TextField",name:"label",required:!1,type:{name:"string"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<TextFieldRenderProps>"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},render:{defaultValue:null,description:`Overrides the default DOM element with a custom render function.
This allows rendering existing components with built-in styles and behaviors
such as router links, animation libraries, and pre-styled components.

Requirements:

* You must render the expected element type (e.g. if \`<button>\` is expected, you cannot render an \`<a>\`).
* Only a single root DOM element can be rendered (no fragments).
* You must pass through props and ref to the underlying DOM element, merging with your own prop as appropriate.`,name:"render",required:!1,type:{name:'DOMRenderFunction<"div", TextFieldRenderProps>'}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"'large'"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},"aria-activedescendant":{defaultValue:null,description:"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:`Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`,name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"list"'},{value:'"inline"'},{value:'"both"'}]}},"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},"aria-haspopup":{defaultValue:null,description:"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",name:"aria-haspopup",required:!1,type:{name:'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"'}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Specify description displayed below the label",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"Custom error messages",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: string) => true | ValidationError | null)"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string"}},errorPosition:{defaultValue:null,description:"",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},popover:{defaultValue:null,description:"",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},enterKeyHint:{defaultValue:null,description:"An enumerated attribute that defines what action label or icon to preset for the enter key on virtual keyboards. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint).",name:"enterKeyHint",required:!1,type:{name:"enum",value:[{value:'"enter"'},{value:'"done"'},{value:'"go"'},{value:'"next"'},{value:'"previous"'},{value:'"search"'},{value:'"send"'}]}},showCounter:{defaultValue:{value:"false"},description:"Whether to show the character counter or not",name:"showCounter",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:"'react-aria-TextArea'"},description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<InputRenderProps>"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"((isHovering: boolean) => void)"}},tw:{defaultValue:null,description:"Specify styles using Tailwind CSS classes. This feature is currently experimental.\nIf `style` prop is also specified, styles generated with `tw` prop will be overridden.\n\nExample:\n- `tw='w-full h-full bg-blue-200'`\n- `tw='text-9xl'`\n- `tw='text-[80px]'`",name:"tw",required:!1,type:{name:"{string}"}}}}}catch{}const Ve={title:"Components/TextArea",component:t,args:{label:"Label",description:"Description",errorPosition:"top"},argTypes:{size:{table:{disable:!0}}}},r={args:{defaultValue:"Text value"}},n={args:{isInvalid:!0,errorMessage:"Något gick fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0,errorMessage:"Var god ange en text"},render:e=>a.jsxs("form",{children:[a.jsx(t,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]})},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>a.jsxs("form",{children:[a.jsx(t,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]})},i={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{maxLength:50}},l={args:{...r.args,isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},u={args:{isReadOnly:!0,showCounter:!0,value:"User input",maxLength:100}},d={args:{value:"I love apples",showCounter:!0}},p={args:{showCounter:!0,maxLength:50}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Text value'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    isRequired: true,
    errorMessage: 'Var god ange en text'
  },
  render: args => <form>
      <TextArea {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Label',
    validate: (value: string) => !/^\\d+$/.test(value) ? 'Only numbers are allowed' : true
  },
  render: args => <form>
      <TextArea {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    maxLength: 50
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showCounter: true,
    value: 'User input',
    maxLength: 100
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'I love apples',
    showCounter: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...p.parameters?.docs?.source}}};const qe=["Primary","Invalid","Required","CustomValidation","MaxLength","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter"];export{s as CustomValidation,l as Disabled,n as Invalid,i as MaxLength,p as MaxLengthAndShowCounter,r as Primary,u as ReadOnly,o as Required,d as ShowCounter,qe as __namedExportsOrder,Ve as default};
