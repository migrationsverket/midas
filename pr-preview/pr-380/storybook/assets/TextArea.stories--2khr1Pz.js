import{j as n}from"./jsx-runtime-DtgEGaVE.js";import{T as K}from"./TextFieldBase-CLYbEMME.js";import{$}from"./TextField-dpiMNlKd.js";import{c as G}from"./clsx-B-dksMZM.js";import{s as j}from"./TextField.module-BncTmYQm.js";import{e as s,u as a}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-fGMpyvF6.js";import"./Text-BTJZlpVr.js";import"./Text-CLHHKsvT.js";import"./Input-C7Zh-d3_.js";import"./Hidden-lswqw32w.js";import"./useFocusRing-CklmaPa3.js";import"./FieldError-Ds0Dd64h.js";import"./Form-BWK6xyH1.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-tLTeCxiF.js";import"./Label-7KzwGxuL.js";import"./Label-DuUY1oNM.js";import"./useTextField-CRWtxm2p.js";import"./useControlledState-DGyHFLi9.js";import"./useField-Dtc4qbuX.js";import"./useLabel-D9x7ijjo.js";import"./useFocusable-Cn0G9B-O.js";const o=({className:e,...t})=>n.jsx(K,{...t,children:n.jsx($,{className:G(j.textArea,e)})});try{o.displayName="TextArea",o.__docgenInfo={description:"",displayName:"TextArea",props:{children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Specify label displayed above the TextField",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Specify description displayed below the label",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"Custom error messages",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},showCounter:{defaultValue:{value:"false"},description:"Whether to show the character counter or not",name:"showCounter",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},spellCheck:{defaultValue:null,description:"An enumerated attribute that defines whether the element may be checked for spelling errors. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck).",name:"spellCheck",required:!1,type:{name:"string"}},autoCorrect:{defaultValue:null,description:"An attribute that takes as its value a space-separated string that describes what, if any, type of autocomplete functionality the input should provide. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocomplete).",name:"autoCorrect",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"Hints at the type of data that might be entered by the user while editing the element or its contents. See [MDN](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute).",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},"aria-activedescendant":{defaultValue:null,description:"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:`Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`,name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"none"'},{value:'"inline"'},{value:'"both"'}]}},"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-errormessage":{defaultValue:null,description:"Identifies the element that provides an error message for the object.",name:"aria-errormessage",required:!1,type:{name:"string"}},"aria-haspopup":{defaultValue:null,description:"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",name:"aria-haspopup",required:!1,type:{name:'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"'}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},onCopy:{defaultValue:null,description:"Handler that is called when the user copies text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy).",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<HTMLInputElement>"}},onCut:{defaultValue:null,description:"Handler that is called when the user cuts text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut).",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<HTMLInputElement>"}},onPaste:{defaultValue:null,description:"Handler that is called when the user pastes text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste).",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<HTMLInputElement>"}},onCompositionEnd:{defaultValue:null,description:"Handler that is called when a text composition system completes or cancels the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event).",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<HTMLInputElement>"}},onCompositionStart:{defaultValue:null,description:"Handler that is called when a text composition system starts a new text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event).",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<HTMLInputElement>"}},onCompositionUpdate:{defaultValue:null,description:"Handler that is called when a new character is received in the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event).",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<HTMLInputElement, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<HTMLInputElement, Element>) => void"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"(value: string) => void"}},onBeforeInput:{defaultValue:null,description:"Handler that is called when the input value is about to be modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event).",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},onInput:{defaultValue:null,description:"Handler that is called when the input value is modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).",name:"onInput",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onSelect:{defaultValue:null,description:"Handler that is called when text in the input is selected. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event).",name:"onSelect",required:!1,type:{name:"ReactEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).",name:"type",required:!1,type:{name:'"search" | (string & {}) | "text" | "tel" | "url" | "email" | "password"'}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: string) => true | ValidationError"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},enterKeyHint:{defaultValue:null,description:"An enumerated attribute that defines what action label or icon to preset for the enter key on virtual keyboards. See [https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint].",name:"enterKeyHint",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"enter"'},{value:'"done"'},{value:'"go"'},{value:'"next"'},{value:'"previous"'},{value:'"send"'}]}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"The maximum number of characters supported by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"The minimum number of characters required by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength).",name:"minLength",required:!1,type:{name:"number"}},pattern:{defaultValue:null,description:"Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).",name:"pattern",required:!1,type:{name:"string"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: TextFieldRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: TextFieldRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}}}}}catch{}const J=e=>new Array(e+1).join("x"),we={title:"Components/TextArea",component:o,args:{label:"Label",description:"Description"}},l={args:{className:"test-class"},play:async({canvas:e,step:t})=>{await t("it should preserve its classNames when being passed new ones",async()=>{s(e.getByRole("textbox")).toHaveClass(j.textArea,"test-class")})}},i={args:{isInvalid:!0,errorMessage:"Något gick fel"}},u={tags:["!dev","!autodocs"],args:{isRequired:!0,errorMessage:"Var god ange en text"},render:e=>n.jsxs("form",{children:[n.jsx(o,{...e}),n.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:{errorMessage:r}})=>{await t("it should give a validation error if the user entered no text",async()=>{await a.tab(),await a.tab(),await a.keyboard("[Enter]"),s(e.getByText(r)).toBeInTheDocument()})}},d={tags:["!dev","!autodocs"],args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>n.jsxs("form",{children:[n.jsx(o,{...e}),n.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should give a validation error if the user entered an unpermitted text",async()=>{await a.tab(),await a.keyboard("abc"),await a.tab(),await a.keyboard("[Enter]"),s(e.getByText("Only numbers are allowed")).toBeInTheDocument()})}},p={tags:["!dev","!autodocs"],args:{maxLength:50},play:async({canvas:e,step:t,args:r})=>{const g=r.maxLength;await t("it should not be possible to exceed the maxLength property",async()=>{const O=J(g+1);await a.tab(),await a.keyboard(O),s(e.getByRole("textbox").value.length).toBe(g)})}},m={args:{...l.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},c={args:{value:"I love apples",showCounter:!0},play:async({canvas:e,step:t,args:{value:r}})=>{await t("it should show the correct count for its initial value",async()=>{s(e.getByText(r.length)).toBeInTheDocument()})}},h={args:{showCounter:!0,maxLength:50}},f={args:{defaultValue:"HEJ",showCounter:!0},play:async({canvas:e,step:t,args:{defaultValue:r}})=>{await t("it should show the correct count for its initial defaultValue",async()=>{s(e.getByText(r.length)).toBeInTheDocument()})}};var v,y,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,w,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,V,E;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(E=(V=u.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var q,M,H;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(H=(M=d.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var L,I,C;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
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
}`,...(C=(I=p.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var D,A,N;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(A=m.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var W,B,U;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(U=(B=c.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var k,z,P;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...(P=(z=h.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var R,_,F;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  // tags: ['!dev', '!autodocs'],
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
}`,...(F=(_=f.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const Se=["Primary","Invalid","Required","CustomValidation","MaxLength","Disabled","ShowCounter","MaxLengthAndShowCounter","ShowCounterWithDefaultValue"];export{d as CustomValidation,m as Disabled,i as Invalid,p as MaxLength,h as MaxLengthAndShowCounter,l as Primary,u as Required,c as ShowCounter,f as ShowCounterWithDefaultValue,Se as __namedExportsOrder,we as default};
