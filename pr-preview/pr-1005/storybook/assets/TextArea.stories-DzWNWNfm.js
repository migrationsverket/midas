import{r as y,j as a}from"./iframe-KzFLTGr0.js";import{T as b}from"./TextFieldBase-Bc1uXMbg.js";import{$ as x}from"./TextField-vwODPiAo.js";import{c as V}from"./clsx-Ciqy0D92.js";import{s as q}from"./TextField.module-CgqiUiYQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CO2yYsr6.js";import"./clsx-B-dksMZM.js";import"./Text-BH1PFH25.js";import"./Text-Cmn4JyoG.js";import"./Label-BZyjLgDi.js";import"./Button-BBRIbgdT.js";import"./Hidden-DzrKcQON.js";import"./useFocusRing-C4wRgiR-.js";import"./index-hPDntuQZ.js";import"./index-BiyGu_5v.js";import"./useLabels-8Z9kmpB8.js";import"./useButton-BxP8bzWM.js";import"./Dialog-jqE6dH9h.js";import"./RSPContexts-sIRx7DsI.js";import"./OverlayArrow-CofwM2Qh.js";import"./useResizeObserver-C-PipfoT.js";import"./useControlledState-C-UjGiCO.js";import"./Collection-DVOI67sL.js";import"./index-CKRnJMQr.js";import"./Separator-As3w6HQx.js";import"./SelectionManager-DVLI_Hyy.js";import"./useEvent-BFDZwV-z.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BtQryPzY.js";import"./useDescription-BVYDnjYQ.js";import"./ListKeyboardDelegate-CksOf0SS.js";import"./PressResponder-CaBihIus.js";import"./useLocalizedStringFormatter-cXa5F6yq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D04kpmJ_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-kcpL8sOO.js";import"./Button-BLxQJ6AW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cvui8YbN.js";import"./createLucideIcon-QW7mSHEY.js";import"./x-QPO1I7pH.js";import"./Heading-NeDBoCJT.js";import"./info-CMR4dw2l.js";import"./Popover-BFbr7TL5.js";import"./Input-DnVHbUsY.js";import"./FieldError-B1daGC65.js";import"./Form-CBvpL72C.js";import"./useFormValidation-DOWv8OTt.js";import"./Group-Dc48kuVs.js";import"./useTextField-Cie2w3CG.js";import"./useField-YY8zXIMp.js";const t=y.forwardRef(({className:e,cols:m,form:c,rows:h,wrap:f,...v},g)=>a.jsx(b,{...v,children:a.jsx(x,{className:V(q.textArea,e),cols:m,form:c,ref:g,rows:h,wrap:f})}));t.displayName="TextArea";try{t.displayName="TextArea",t.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"Specify label displayed above the TextField",name:"label",required:!1,type:{name:"string"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<TextFieldRenderProps>"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode"}},"aria-haspopup":{defaultValue:null,description:"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",name:"aria-haspopup",required:!1,type:{name:'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"'}},"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'large'"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string"}},enterKeyHint:{defaultValue:null,description:"An enumerated attribute that defines what action label or icon to preset for the enter key on virtual keyboards. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint).",name:"enterKeyHint",required:!1,type:{name:"enum",value:[{value:'"enter"'},{value:'"done"'},{value:'"go"'},{value:'"next"'},{value:'"previous"'},{value:'"search"'},{value:'"send"'}]}},popover:{defaultValue:null,description:"",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},"aria-activedescendant":{defaultValue:null,description:"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:`Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`,name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"list"'},{value:'"inline"'},{value:'"both"'}]}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"aria"'},{value:'"native"'}]}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: string) => true | ValidationError | null)"}},description:{defaultValue:null,description:"Specify description displayed below the label",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"Custom error messages",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},errorPosition:{defaultValue:null,description:"",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},showCounter:{defaultValue:{value:"false"},description:"Whether to show the character counter or not",name:"showCounter",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:"'react-aria-TextArea'"},description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<InputRenderProps>"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"((isHovering: boolean) => void)"}}}}}catch{}const qe={title:"Components/TextArea",component:t,args:{label:"Label",description:"Description",errorPosition:"top"},argTypes:{size:{table:{disable:!0}}}},r={args:{defaultValue:"Text value"}},n={args:{isInvalid:!0,errorMessage:"Något gick fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0,errorMessage:"Var god ange en text"},render:e=>a.jsxs("form",{children:[a.jsx(t,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]})},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>a.jsxs("form",{children:[a.jsx(t,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]})},i={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{maxLength:50}},l={args:{...r.args,isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},u={args:{isReadOnly:!0,showCounter:!0,value:"User input",maxLength:100}},d={args:{value:"I love apples",showCounter:!0}},p={args:{showCounter:!0,maxLength:50}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const we=["Primary","Invalid","Required","CustomValidation","MaxLength","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter"];export{s as CustomValidation,l as Disabled,n as Invalid,i as MaxLength,p as MaxLengthAndShowCounter,r as Primary,u as ReadOnly,o as Required,d as ShowCounter,we as __namedExportsOrder,qe as default};
