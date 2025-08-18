import{j as r}from"./jsx-runtime-BYYWji4R.js";import{r as $}from"./index-ClcD9ViR.js";import{T as G}from"./TextFieldBase-CTaMU79e.js";import{$ as J}from"./TextField-CzLYtQys.js";import{c as Q}from"./clsx-B-dksMZM.js";import{s as O}from"./TextField.module-C33Y04O9.js";import{e as o,u as n}from"./index-Q7OVwvWC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./Text-BgvnLaBz.js";import"./Text-CZ6zcozL.js";import"./Label-3tcVp5KR.js";import"./Button-v_l_ujRb.js";import"./Hidden-BC9qER92.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useLabels-FEgier_d.js";import"./context-zNjZoWML.js";import"./useButton-DQcVpLGQ.js";import"./Dialog-CuQQAGUE.js";import"./RSPContexts-HQcWPJyv.js";import"./OverlayArrow-CEJfcY2d.js";import"./useResizeObserver-D8gvjDpO.js";import"./useControlledState-H1tiOFpU.js";import"./Collection-h-VYV8ts.js";import"./index-NDK0uC61.js";import"./Separator-x0qfR_Vk.js";import"./SelectionManager-BkX4LkPr.js";import"./useEvent-D_ha2BWP.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-p3_VE_8x.js";import"./useDescription-BqzP9r9Z.js";import"./ListKeyboardDelegate-Dz8cyiML.js";import"./PressResponder-DWi2SZR7.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BekSNXsj.js";import"./Dialog-DDf4qIvU.js";import"./useLocalizedStringFormatter-9M_dEwOo.js";import"./Button-B-2HlFcO.js";import"./Button.module-Bmb634uG.js";import"./x-Dz2R9y6b.js";import"./createLucideIcon-uZw3gxGR.js";import"./Heading-CV1Pcj_U.js";import"./info-CSjK64PU.js";import"./Input-BMo7u0M7.js";import"./FieldError-BjFojtrn.js";import"./Form-Lr15ufU6.js";import"./useFormValidation-DmuZGU-W.js";import"./useTextField-BtgNBGWN.js";import"./useField-C9GdkJOV.js";const l=$.forwardRef(({className:e,form:t,rows:a,wrap:i,...v},K)=>r.jsx(G,{...v,children:r.jsx(J,{className:Q(O.textArea,e),form:t,ref:K,rows:a,wrap:i})}));try{l.displayName="TextArea",l.__docgenInfo={description:"",displayName:"TextArea",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ((values: InputRenderProps & { defaultClassName: string; }) => string)"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"Custom error messages",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},isInvalid:{defaultValue:null,description:"Whether the value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"(value: string) => void"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: TextFieldRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<HTMLInputElement, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<HTMLInputElement, Element>) => void"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},"aria-haspopup":{defaultValue:null,description:"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",name:"aria-haspopup",required:!1,type:{name:'boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog"'}},"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'large'"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"Handler that is called when text in the input is selected. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event).",name:"onSelect",required:!1,type:{name:"ReactEventHandler<HTMLInputElement>"}},spellCheck:{defaultValue:null,description:"An enumerated attribute that defines whether the element may be checked for spelling errors. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck).",name:"spellCheck",required:!1,type:{name:"string"}},autoCorrect:{defaultValue:null,description:"An attribute that takes as its value a space-separated string that describes what, if any, type of autocomplete functionality the input should provide. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocomplete).",name:"autoCorrect",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"Hints at the type of data that might be entered by the user while editing the element or its contents. See [MDN](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute).",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},"aria-activedescendant":{defaultValue:null,description:"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:`Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`,name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"none"'},{value:'"inline"'},{value:'"both"'}]}},"aria-errormessage":{defaultValue:null,description:"Identifies the element that provides an error message for the object.",name:"aria-errormessage",required:!1,type:{name:"string"}},onCopy:{defaultValue:null,description:"Handler that is called when the user copies text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy).",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<HTMLInputElement>"}},onCut:{defaultValue:null,description:"Handler that is called when the user cuts text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut).",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<HTMLInputElement>"}},onPaste:{defaultValue:null,description:"Handler that is called when the user pastes text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste).",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<HTMLInputElement>"}},onCompositionEnd:{defaultValue:null,description:"Handler that is called when a text composition system completes or cancels the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event).",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<HTMLInputElement>"}},onCompositionStart:{defaultValue:null,description:"Handler that is called when a text composition system starts a new text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event).",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<HTMLInputElement>"}},onCompositionUpdate:{defaultValue:null,description:"Handler that is called when a new character is received in the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event).",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<HTMLInputElement>"}},onBeforeInput:{defaultValue:null,description:"Handler that is called when the input value is about to be modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event).",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},onInput:{defaultValue:null,description:"Handler that is called when the input value is modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).",name:"onInput",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"Specify label displayed above the TextField",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Specify description displayed below the label",name:"description",required:!1,type:{name:"string"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: string) => true | ValidationError"}},errorPosition:{defaultValue:null,description:"",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},popover:{defaultValue:null,description:"",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},enterKeyHint:{defaultValue:null,description:"An enumerated attribute that defines what action label or icon to preset for the enter key on virtual keyboards. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint).",name:"enterKeyHint",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"enter"'},{value:'"done"'},{value:'"go"'},{value:'"next"'},{value:'"previous"'},{value:'"send"'}]}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"The maximum number of characters supported by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"The minimum number of characters required by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength).",name:"minLength",required:!1,type:{name:"number"}},showCounter:{defaultValue:{value:"false"},description:"Whether to show the character counter or not",name:"showCounter",required:!1,type:{name:"boolean"}}}}}catch{}const X=e=>new Array(e+1).join("x"),Ye={title:"Components/TextArea",component:l,args:{label:"Label",description:"Description",errorPosition:"top"}},s={args:{className:"test-class"},play:async({canvas:e,step:t})=>{await t("it should preserve its classNames when being passed new ones",async()=>{o(e.getByRole("textbox")).toHaveClass(O.textArea,"test-class")})}},u={args:{isInvalid:!0,errorMessage:"Något gick fel"}},d={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0,errorMessage:"Var god ange en text"},render:e=>r.jsxs("form",{children:[r.jsx(l,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:{errorMessage:a}})=>{await t("it should give a validation error if the user entered no text",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),o(e.getByText(a)).toBeInTheDocument()})}},p={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(l,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should give a validation error if the user entered an unpermitted text",async()=>{await n.tab(),await n.keyboard("abc"),await n.tab(),await n.keyboard("[Enter]"),o(e.getByText("Only numbers are allowed")).toBeInTheDocument()})}},m={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{maxLength:50},play:async({canvas:e,step:t,args:a})=>{const i=a.maxLength;await t("it should not be possible to exceed the maxLength property",async()=>{const v=X(i+1);await n.tab(),await n.keyboard(v),o(e.getByRole("textbox").value.length).toBe(i)})}},c={args:{...s.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},h={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:t,args:{value:a}})=>{await t("it should show the correct count for its initial value",async()=>{o(e.getByText(a.length)).toBeInTheDocument()})}},f={args:{showCounter:!0,maxLength:50}},g={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:t,args:{defaultValue:a}})=>{await t("it should show the correct count for its initial defaultValue",async()=>{o(e.getByText(a.length)).toBeInTheDocument()})}};var y,b,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    className: 'test-class'
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByRole('textbox')).toHaveClass(styles.textArea, 'test-class');
    });
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,S,V;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...(V=(S=u.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var q,T,E;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
    </form>,
  play: async ({
    canvas,
    step,
    args: {
      errorMessage
    }
  }) => {
    await step('it should give a validation error if the user entered no text', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText(errorMessage as string)).toBeInTheDocument();
    });
  }
}`,...(E=(T=d.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var M,H,I;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
    </form>,
  play: async ({
    canvas,
    step
  }) => {
    await step('it should give a validation error if the user entered an unpermitted text', async () => {
      await userEvent.tab();
      await userEvent.keyboard('abc');
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText('Only numbers are allowed')).toBeInTheDocument();
    });
  }
}`,...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var L,C,D;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    maxLength: 50
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    const maxLength = args.maxLength as number;
    await step('it should not be possible to exceed the maxLength property', async () => {
      const randomString = stringOfLength(maxLength + 1);
      await userEvent.tab();
      await userEvent.keyboard(randomString);
      expect(canvas.getByRole<HTMLTextAreaElement>('textbox').value.length).toBe(maxLength);
    });
  }
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var A,B,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isDisabled: true
  },
  parameters: {
    a11y: {
      element: 'body',
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
}`,...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var W,P,k;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 'I love apples',
    showCounter: true
  },
  play: async ({
    canvas,
    step,
    args: {
      value
    }
  }) => {
    await step('it should show the correct count for its initial value', async () => {
      expect(canvas.getByText((value as string).length)).toBeInTheDocument();
    });
  }
}`,...(k=(P=h.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var U,z,R;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(R=(z=f.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var _,F,j;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    defaultValue: 'HEJ',
    showCounter: true
  },
  play: async ({
    canvas,
    step,
    args: {
      defaultValue
    }
  }) => {
    await step('it should show the correct count for its initial defaultValue', async () => {
      expect(canvas.getByText((defaultValue as string).length)).toBeInTheDocument();
    });
  }
}`,...(j=(F=g.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const Ze=["Primary","Invalid","Required","CustomValidation","MaxLength","Disabled","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue"];export{p as CustomValidation,c as Disabled,u as Invalid,m as MaxLength,f as MaxLengthAndShowCounter,s as Primary,d as Required,h as ShowCounter,g as ShowCounterWithDefaultValue,Ze as __namedExportsOrder,Ye as default};
