import{r as ne,j as r}from"./iframe-y3zUiO1J.js";import{T as re}from"./TextFieldBase-DuWvFvGJ.js";import{$ as se}from"./TextField-CxmLlyLj.js";import{c as oe}from"./clsx-B-dksMZM.js";import{s as y}from"./TextField.module-D5Mcm-cg.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DgfIEZ2l.js";import"./Text-D3c_H73L.js";import"./Text-B2aZuF7F.js";import"./Label-D50A2xp0.js";import"./Button-CzVrwDkD.js";import"./Hidden-LIVvUHEl.js";import"./useFocusRing-CCdMQ_TW.js";import"./index-CT42ImiZ.js";import"./index-Dli5INss.js";import"./useLabels-BPMr3Cme.js";import"./useButton-WDu1xsqv.js";import"./Dialog-jykJmB8a.js";import"./RSPContexts-CN-cgumh.js";import"./OverlayArrow-DfG-W09j.js";import"./useResizeObserver-CcvnX-FU.js";import"./useControlledState-BMSmXNYe.js";import"./Collection-DhfTE3E9.js";import"./index-oR09zEQD.js";import"./Separator-DPfAiPIW.js";import"./SelectionManager-D6gO8XHw.js";import"./useEvent-CpudPYOj.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Ybh16f8F.js";import"./useDescription-BnySdmCV.js";import"./ListKeyboardDelegate-DVZN-xzJ.js";import"./PressResponder-DIkBwjt6.js";import"./useLocalizedStringFormatter-ok5SO70Y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CbO0bNHC.js";import"./Dialog-CCXtrWxX.js";import"./useLocalizedStringFormatter-BAtcx0ZI.js";import"./Button-BDrqJzdG.js";import"./Button.module-CF2bVDCq.js";import"./x-BJvE-ZNY.js";import"./createLucideIcon-DqdaTGZ4.js";import"./Heading-4TV7P-nQ.js";import"./info-B0u-oiiz.js";import"./Input-CTNB8dNx.js";import"./FieldError-2gwiE8FS.js";import"./Form-C9OW_fOx.js";import"./useFormValidation-PO_CdwIB.js";import"./useTextField-BhfZJi76.js";import"./useField-BbATYL60.js";const l=ne.forwardRef(({className:e,form:t,rows:n,wrap:i,isResizable:w=!0,...te},ae)=>r.jsx(re,{...te,children:r.jsx(se,{className:oe(y.textArea,e,w?y.resizable:y.noResize),form:t,ref:ae,rows:n,wrap:i})}));try{l.displayName="TextArea",l.__docgenInfo={description:"",displayName:"TextArea",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ((values: InputRenderProps & { defaultClassName: string; }) => string)"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"string"}},isResizable:{defaultValue:{value:"true"},description:"",name:"isResizable",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: TextFieldRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},spellCheck:{defaultValue:null,description:"An enumerated attribute that defines whether the element may be checked for spelling errors. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck).",name:"spellCheck",required:!1,type:{name:"string"}},autoCorrect:{defaultValue:null,description:"An attribute that takes as its value a space-separated string that describes what, if any, type of autocomplete functionality the input should provide. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocomplete).",name:"autoCorrect",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"Hints at the type of data that might be entered by the user while editing the element or its contents. See [MDN](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute).",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},"aria-activedescendant":{defaultValue:null,description:"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:`Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`,name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"none"'},{value:'"inline"'},{value:'"both"'}]}},"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},"aria-errormessage":{defaultValue:null,description:"Identifies the element that provides an error message for the object.",name:"aria-errormessage",required:!1,type:{name:"string"}},"aria-haspopup":{defaultValue:null,description:"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",name:"aria-haspopup",required:!1,type:{name:'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"'}},onCopy:{defaultValue:null,description:"Handler that is called when the user copies text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy).",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<HTMLInputElement>"}},onCut:{defaultValue:null,description:"Handler that is called when the user cuts text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut).",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<HTMLInputElement>"}},onPaste:{defaultValue:null,description:"Handler that is called when the user pastes text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste).",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<HTMLInputElement>"}},onCompositionEnd:{defaultValue:null,description:"Handler that is called when a text composition system completes or cancels the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event).",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<HTMLInputElement>"}},onCompositionStart:{defaultValue:null,description:"Handler that is called when a text composition system starts a new text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event).",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<HTMLInputElement>"}},onCompositionUpdate:{defaultValue:null,description:"Handler that is called when a new character is received in the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event).",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onBeforeInput:{defaultValue:null,description:"Handler that is called when the input value is about to be modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event).",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},onInput:{defaultValue:null,description:"Handler that is called when the input value is modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).",name:"onInput",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},onSelect:{defaultValue:null,description:"Handler that is called when text in the input is selected. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event).",name:"onSelect",required:!1,type:{name:"ReactEventHandler<HTMLInputElement>"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"aria"'},{value:'"native"'}]}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"((value: string) => true | ValidationError | null)"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"Custom error messages",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},size:{defaultValue:{value:"'large'"},description:"Component size (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},label:{defaultValue:null,description:"Specify label displayed above the TextField",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Specify description displayed below the label",name:"description",required:!1,type:{name:"string"}},errorPosition:{defaultValue:null,description:"",name:"errorPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},popover:{defaultValue:null,description:"",name:"popover",required:!1,type:{name:"InfoPopoverProps"}},enterKeyHint:{defaultValue:null,description:"An enumerated attribute that defines what action label or icon to preset for the enter key on virtual keyboards. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint).",name:"enterKeyHint",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"enter"'},{value:'"done"'},{value:'"go"'},{value:'"next"'},{value:'"previous"'},{value:'"send"'}]}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"The maximum number of characters supported by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"The minimum number of characters required by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength).",name:"minLength",required:!1,type:{name:"number"}},showCounter:{defaultValue:{value:"false"},description:"Whether to show the character counter or not",name:"showCounter",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:s,fn:x,userEvent:a}=__STORYBOOK_MODULE_TEST__,le=e=>new Array(e+1).join("x"),rt={title:"Components/TextArea",component:l,args:{label:"Label",description:"Description",errorPosition:"top"},argTypes:{size:{table:{disable:!0}}}},o={args:{className:"test-class"},play:async({canvas:e,step:t})=>{await t("it should preserve its classNames when being passed new ones",async()=>{s(e.getByRole("textbox")).toHaveClass(y.textArea,"test-class")})}},u={args:{isResizable:!1},parameters:{docs:{source:{code:`<TextArea 
                  label="Label" 
                  description="Description" 
                  isResizable={false} 
                />`}}}},d={args:{isInvalid:!0,errorMessage:"Något gick fel"}},p={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0,errorMessage:"Var god ange en text"},render:e=>r.jsxs("form",{children:[r.jsx(l,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:{errorMessage:n}})=>{await t("it should give a validation error if the user entered no text",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),s(e.getByText(n)).toBeInTheDocument()})}},c={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(l,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should give a validation error if the user entered an unpermitted text",async()=>{await a.tab(),await a.keyboard("abc"),await a.tab(),await a.keyboard("[Enter]"),s(e.getByText("Only numbers are allowed")).toBeInTheDocument()})}},m={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{maxLength:50},play:async({canvas:e,step:t,args:n})=>{const i=n.maxLength;await t("it should not be possible to exceed the maxLength property",async()=>{const w=le(i+1);await a.tab(),await a.keyboard(w),s(e.getByRole("textbox").value.length).toBe(i)})}},h={args:{...o.args,isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},f={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:t,args:{value:n}})=>{await t("it should show the correct count for its initial value",async()=>{s(e.getByText(n.length)).toBeInTheDocument()})}},g={args:{showCounter:!0,maxLength:50}},v={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:t,args:{defaultValue:n}})=>{await t("it should show the correct count for its initial defaultValue",async()=>{s(e.getByText(n.length)).toBeInTheDocument()})}},b={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{onBlur:x(),onFocus:x()},play:async({args:e,step:t})=>{await t("focus textarea",async()=>{await a.tab()}),await t("it should call onFocus once",async()=>{await s(e.onFocus).toHaveBeenCalledOnce()}),await t("blur textarea",async()=>{await a.tab()}),await t("it should call onBlur once",async()=>{await s(e.onBlur).toHaveBeenCalledOnce()})}};var S,V,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(V=o.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var q,E,H;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    isResizable: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<TextArea 
                  label="Label" 
                  description="Description" 
                  isResizable={false} 
                />\`
      }
    }
  }
}`,...(H=(E=u.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var M,I,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...(L=(I=d.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var C,D,B;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(D=p.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var A,z,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(z=c.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var R,W,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var P,k,F;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(k=h.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var U,O,j;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(j=(O=f.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var K,$,G;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(G=($=g.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,Y,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var X,Z,ee;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    onBlur: fn(),
    onFocus: fn()
  },
  play: async ({
    args,
    step
  }) => {
    await step('focus textarea', async () => {
      await userEvent.tab();
    });
    await step('it should call onFocus once', async () => {
      await expect(args.onFocus).toHaveBeenCalledOnce();
    });
    await step('blur textarea', async () => {
      await userEvent.tab();
    });
    await step('it should call onBlur once', async () => {
      await expect(args.onBlur).toHaveBeenCalledOnce();
    });
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const st=["Primary","IsNotResizable","Invalid","Required","CustomValidation","MaxLength","Disabled","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue","DS1326"];export{c as CustomValidation,b as DS1326,h as Disabled,d as Invalid,u as IsNotResizable,m as MaxLength,g as MaxLengthAndShowCounter,o as Primary,p as Required,f as ShowCounter,v as ShowCounterWithDefaultValue,st as __namedExportsOrder,rt as default};
