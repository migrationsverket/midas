import{r as g,j as a}from"./iframe-CKFV4t_1.js";import{T as y}from"./TextFieldBase-xpQqY1Cf.js";import{$ as b}from"./TextField-DctKp6CV.js";import{c as x}from"./clsx-Ciqy0D92.js";import{s as V}from"./TextField.module-CgqiUiYQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DI9iWWNt.js";import"./clsx-B-dksMZM.js";import"./Text-Dv3jZ_aV.js";import"./Text-DzSDPQzh.js";import"./Label-XKoSEVsC.js";import"./Button-DI-ffzDX.js";import"./Hidden-DihczV1P.js";import"./useFocusRing-BZ_PqxVl.js";import"./index-BW6JxsHj.js";import"./index-BqBdriJQ.js";import"./useLabels-C6LUrwjA.js";import"./useButton-CShiPmlY.js";import"./Dialog-BQ_mqNXy.js";import"./RSPContexts-BzweYrWZ.js";import"./OverlayArrow-gZMjfUNs.js";import"./useResizeObserver-HMX32PgH.js";import"./useControlledState-BDpF19zF.js";import"./Collection-DZeW03SE.js";import"./index-vTCi_tu9.js";import"./Separator-hYZTGZos.js";import"./SelectionManager-Dv3dFLkJ.js";import"./useEvent-CAPMhfOK.js";import"./scrollIntoView-s5FNUvm8.js";import"./SelectionIndicator-CblqZDMx.js";import"./useDescription-XRc2AN6L.js";import"./ListKeyboardDelegate-tcadBjjn.js";import"./PressResponder-CuU5Vb0J.js";import"./useLocalizedStringFormatter-CKBqLoBy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DClmF7Sb.js";import"./VisuallyHidden-POfTLuvh.js";import"./Button-CX41FOI9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DIR_98tQ.js";import"./createLucideIcon-sgDlsuts.js";import"./x-tZVRH0aO.js";import"./Heading-B6vunHA3.js";import"./info-67DKVwtn.js";import"./Popover-i2s2TNUi.js";import"./Input-CRg4xvg6.js";import"./FieldError-CfIn2uhl.js";import"./Form-D0HW_j4G.js";import"./useFormValidation-B6Fe8WXE.js";import"./Group-zHd8lyXU.js";import"./useTextField-Dv4ibsMe.js";import"./useField-BS1r04HM.js";const r=g.forwardRef(({className:e,cols:m,rows:c,wrap:h,...f},v)=>a.jsx(y,{...f,children:a.jsx(b,{className:x(V.textArea,e),cols:m,ref:v,rows:c,wrap:h})}));try{r.displayName="TextArea",r.__docgenInfo={description:"",displayName:"TextArea",props:{children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'large'"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<TextFieldRenderProps>"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},"aria-activedescendant":{defaultValue:null,description:"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:`Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`,name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"none"'},{value:'"inline"'},{value:'"both"'}]}},"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},"aria-haspopup":{defaultValue:null,description:"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",name:"aria-haspopup",required:!1,type:{name:'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"'}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},enterKeyHint:{defaultValue:null,description:"An enumerated attribute that defines what action label or icon to preset for the enter key on virtual keyboards. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint).",name:"enterKeyHint",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"enter"'},{value:'"done"'},{value:'"go"'},{value:'"next"'},{value:'"previous"'},{value:'"send"'}]}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Specify label displayed above the TextField",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Specify description displayed below the label",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"Custom error messages",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: string) => true | ValidationError | null)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},errorPosition:{defaultValue:null,description:"",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},showCounter:{defaultValue:{value:"false"},description:"Whether to show the character counter or not",name:"showCounter",required:!1,type:{name:"boolean"}},popover:{defaultValue:null,description:"",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<InputRenderProps>"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"((isHovering: boolean) => void)"}}}}}catch{}const xe={title:"Components/TextArea",component:r,args:{label:"Label",description:"Description",errorPosition:"top"},argTypes:{size:{table:{disable:!0}}}},t={args:{defaultValue:"Text value"}},n={args:{isInvalid:!0,errorMessage:"Något gick fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0,errorMessage:"Var god ange en text"},render:e=>a.jsxs("form",{children:[a.jsx(r,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]})},s={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>a.jsxs("form",{children:[a.jsx(r,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]})},i={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{maxLength:50}},l={args:{...t.args,isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},u={args:{isReadOnly:!0,showCounter:!0,value:"User input",maxLength:100}},d={args:{value:"I love apples",showCounter:!0}},p={args:{showCounter:!0,maxLength:50}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Text value'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ve=["Primary","Invalid","Required","CustomValidation","MaxLength","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter"];export{s as CustomValidation,l as Disabled,n as Invalid,i as MaxLength,p as MaxLengthAndShowCounter,t as Primary,u as ReadOnly,o as Required,d as ShowCounter,Ve as __namedExportsOrder,xe as default};
