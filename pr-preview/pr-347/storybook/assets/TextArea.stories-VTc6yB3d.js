import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{$ as le,a as ue}from"./TextField-CdQBPvvv.js";import{s as de}from"./TextField.module-DBomeRQe.js";import{r as ce}from"./index-BbAIUH2N.js";import{c as V}from"./clsx-B-dksMZM.js";import{I as pe}from"./TextField-cKZRIQVg.js";import{e as l,u as n}from"./index-DtSMq7G1.js";import"./utils-BhWkjeqE.js";import"./Form-DKViyh0O.js";import"./Text-BpXRIGMg.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-DTUkoRt0.js";import"./useFocusRing-BFo6eXxS.js";import"./Input-D9FO-LNc.js";import"./Hidden-DrRnqvCY.js";import"./index-cpIEhwLo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Label-BBCc9K7K.js";import"./useTextField-yvZfA2lE.js";import"./useControlledState-DGyHFLi9.js";import"./useField-Vu58C-dH.js";import"./useLabel-CH4xJhfw.js";import"./useFocusable-CsLSqN_1.js";import"./Button-Bdn5WKBM.js";import"./Button-Db7Kwb_W.js";import"./ProgressBar-KG041EEs.js";import"./context-DKkYq9qZ.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";const me='"../theme/tokens.css"',he='"Inter", sans-serif',fe="#ffdfdf",ge="(max-width: 767px)",ye="#f2f2f2",be="#e6e6e6",ve="#bfbfbf",we="#000000",xe="#e62323",Ee="#2e7ca5",Te="500",Se="400",Ve="#1f1f1f",qe="0 0 0 2px #ffffff, 0 0 0 4px #000000",Ie="_textArea_r27ql_4",Me="_count_r27ql_45",He="_countExceeded_r27ql_53",u={tokens:me,display:he,signalRed10:fe,smBreakpoint:ge,gray10:ye,gray20:be,gray50:ve,black:we,signalRed100:xe,blue100:Ee,mediumWeight:Te,regularWeight:Se,inputText:Ve,focus:qe,textArea:Ie,count:Me,countExceeded:He},d=({label:e,description:a,rows:t,maxLength:s,minLength:c,errorMessage:ee,showCounter:te,validate:T,className:ae,...w})=>{const[x,ne]=ce.useState(w.defaultValue??w.value??""),S=i=>{const E=i.target.value;ne(E)},re=()=>s?r.jsxs("span",{className:V(u.count,x.length>s&&u.countExceeded),children:[x.length," / ",s]}):te?r.jsx("span",{className:u.count,children:x.length}):null,se=i=>{const E=s&&i.length>s?`Du har angett ${i.length-s} tecken för mycket. Fältet är begränsat till ${s} tecken.`:null,oe=c&&i.length<c?`Du har angett ${Math.abs(i.length-c)} tecken för lite. Fältet kräver åtminstone ${c} tecken.`:null,ie=T?T(i):null;return E||oe||ie||!0};return r.jsx(le,{className:V(de.inputField,ae),validate:se,...w,children:r.jsxs(pe,{label:e,description:a,errorMessage:ee,children:[r.jsx(re,{}),r.jsx(ue,{className:u.textArea,rows:t,onFocus:S,onChange:S})]})})};try{d.displayName="TextArea",d.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"Specify label displayed above the TextArea",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Specify description displayed below the label",name:"description",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"Set number of rows for the TextArea",name:"rows",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"Set minimum number of characters that are allowed before the TextArea is put in an invalid state",name:"minLength",required:!1,type:{name:"number"}},showCounter:{defaultValue:{value:"false"},description:"Whether to show the character counter or not",name:"showCounter",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},isInvalid:{defaultValue:null,description:"Whether the value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: string) => true | ValidationError"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<HTMLInputElement, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<HTMLInputElement, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"(value: string) => void"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},"aria-controls":{defaultValue:null,description:"Identifies the element (or elements) whose contents or presence are controlled by the current element.",name:"aria-controls",required:!1,type:{name:"string"}},excludeFromTabOrder:{defaultValue:null,description:`Whether to exclude the element from the sequential tab order. If true,
the element will not be focusable via the keyboard by tabbing. This should
be avoided except in rare scenarios where an alternative means of accessing
the element or its functionality via the keyboard is available.`,name:"excludeFromTabOrder",required:!1,type:{name:"boolean"}},"aria-errormessage":{defaultValue:null,description:"Identifies the element that provides an error message for the object.",name:"aria-errormessage",required:!1,type:{name:"string"}},spellCheck:{defaultValue:null,description:"An enumerated attribute that defines whether the element may be checked for spelling errors. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck).",name:"spellCheck",required:!1,type:{name:"string"}},autoCorrect:{defaultValue:null,description:"An attribute that takes as its value a space-separated string that describes what, if any, type of autocomplete functionality the input should provide. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocomplete).",name:"autoCorrect",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"Hints at the type of data that might be entered by the user while editing the element or its contents. See [MDN](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute).",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},"aria-activedescendant":{defaultValue:null,description:"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-autocomplete":{defaultValue:null,description:`Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`,name:"aria-autocomplete",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"none"'},{value:'"inline"'},{value:'"both"'}]}},"aria-haspopup":{defaultValue:null,description:"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",name:"aria-haspopup",required:!1,type:{name:'boolean | "true" | "false" | "dialog" | "grid" | "listbox" | "menu" | "tree"'}},onCopy:{defaultValue:null,description:"Handler that is called when the user copies text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy).",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<HTMLInputElement>"}},onCut:{defaultValue:null,description:"Handler that is called when the user cuts text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut).",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<HTMLInputElement>"}},onPaste:{defaultValue:null,description:"Handler that is called when the user pastes text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste).",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<HTMLInputElement>"}},onCompositionEnd:{defaultValue:null,description:"Handler that is called when a text composition system completes or cancels the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event).",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<HTMLInputElement>"}},onCompositionStart:{defaultValue:null,description:"Handler that is called when a text composition system starts a new text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event).",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<HTMLInputElement>"}},onCompositionUpdate:{defaultValue:null,description:"Handler that is called when a new character is received in the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event).",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<HTMLInputElement>"}},onBeforeInput:{defaultValue:null,description:"Handler that is called when the input value is about to be modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event).",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},onInput:{defaultValue:null,description:"Handler that is called when the input value is modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).",name:"onInput",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},onSelect:{defaultValue:null,description:"Handler that is called when text in the input is selected. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event).",name:"onSelect",required:!1,type:{name:"ReactEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).",name:"type",required:!1,type:{name:'"text" | (string & {}) | "search" | "tel" | "url" | "email" | "password"'}},pattern:{defaultValue:null,description:"Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).",name:"pattern",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).",name:"autoComplete",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"The maximum number of characters supported by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"maxLength",required:!1,type:{name:"number"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: TextFieldRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: TextFieldRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: TextFieldRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}}}}}catch{}const Z=e=>new Array(e+1).join("x"),st={component:d,title:"Components/TextArea",tags:["autodocs"],argTypes:{label:{type:"string",description:"Etikett"},description:{type:"string"}}},o={args:{label:"Label",description:"Description",className:"test-class","data-testid":"test"},play:async({canvas:e,step:a,args:t})=>{await a("it should preserve its classNames when being passed new ones",async()=>{l(e.getByTestId(t["data-testid"])).toHaveClass(u.inputField,t.className)})}},p={args:{...o.args,isInvalid:!0,errorMessage:"Error"}},m={tags:["!dev"],args:{isRequired:!0,label:"Label",description:"Description",errorMessage:"Var god ange en text"},render:e=>r.jsxs("form",{children:[r.jsx(d,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a,args:{errorMessage:t}})=>{await a("it should give a validation error if the user entered no text",async()=>{await n.tab(),await n.tab(),await n.keyboard("[Enter]"),l(e.getByText(t)).toBeInTheDocument()})}},h={tags:["!dev"],args:{label:"Label",validate:e=>/^\d+$/.test(e)?!0:"Only numbers are allowed"},render:e=>r.jsxs("form",{children:[r.jsx(d,{...e}),r.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:a})=>{await a("it should give a validation error if the user entered an unpermitted text",async()=>{await n.tab(),await n.keyboard("abc"),await n.tab(),await n.keyboard("[Enter]"),l(e.getByText("Only numbers are allowed")).toBeInTheDocument()})}},f={args:{...o.args,maxLength:50},play:async({canvas:e,step:a,args:t})=>{await a("it should give a validation error if the given text is too long",async()=>{const s=Z(t.maxLength+1);await n.tab(),await n.keyboard(s),await n.tab(),await n.keyboard("[Enter]"),l(e.getByText(/Du har angett 1 tecken för mycket/)).toBeInTheDocument()})}},g={args:{...o.args,minLength:2},play:async({canvas:e,step:a,args:t})=>{await a("it should give a validation error if the given text is too short",async()=>{const s=Z(t.minLength-1);await n.tab(),await n.keyboard(s),await n.tab(),await n.keyboard("[Enter]"),l(e.getByText(/Du har angett 1 tecken för lite/)).toBeInTheDocument()})}},y={args:{...o.args,showCounter:!0,value:"HEJ"},play:async({canvas:e,step:a,args:{value:t}})=>{await a("it should show the correct count for its initial value",async()=>{l(e.getByText(t==null?void 0:t.length)).toBeInTheDocument()})}},b={tags:["!dev"],args:{...o.args,showCounter:!0,defaultValue:"HEJ"},play:async({canvas:e,step:a,args:{defaultValue:t}})=>{await a("it should show the correct count for its initial value",async()=>{l(e.getByText(t==null?void 0:t.length)).toBeInTheDocument()})}},v={args:{...o.args,isDisabled:!0},parameters:{a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}};var q,I,M;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description',
    className: 'test-class',
    // @ts-expect-error dont recognize this property
    'data-testid': 'test'
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      // @ts-expect-error dont recognize this property
      expect(canvas.getByTestId(args['data-testid'])).toHaveClass(styles.inputField, args.className as string);
    });
  }
}`,...(M=(I=o.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var H,D,C;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error'
  }
}`,...(C=(D=p.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var k,L,N;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    isRequired: true,
    label: 'Label',
    description: 'Description',
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
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var A,B,W;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
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
}`,...(W=(B=h.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var P,_,R;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    maxLength: 50
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should give a validation error if the given text is too long', async () => {
      const randomString = stringOfLength((args.maxLength as number) + 1);
      await userEvent.tab();
      await userEvent.keyboard(randomString);
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText(/Du har angett 1 tecken för mycket/)).toBeInTheDocument();
    });
  }
}`,...(R=(_=f.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var F,U,z;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    minLength: 2
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should give a validation error if the given text is too short', async () => {
      const randomString = stringOfLength((args.minLength as number) - 1);
      await userEvent.tab();
      await userEvent.keyboard(randomString);
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText(/Du har angett 1 tecken för lite/)).toBeInTheDocument();
    });
  }
}`,...(z=(U=g.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var j,O,$;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    showCounter: true,
    value: 'HEJ'
  },
  play: async ({
    canvas,
    step,
    args: {
      value
    }
  }) => {
    await step('it should show the correct count for its initial value', async () => {
      expect(canvas.getByText(value?.length as number)).toBeInTheDocument();
    });
  }
}`,...($=(O=y.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var K,J,G;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...Primary.args,
    showCounter: true,
    defaultValue: 'HEJ'
  },
  play: async ({
    canvas,
    step,
    args: {
      defaultValue
    }
  }) => {
    await step('it should show the correct count for its initial value', async () => {
      expect(canvas.getByText(defaultValue?.length as number)).toBeInTheDocument();
    });
  }
}`,...(G=(J=b.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var Q,X,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ot=["Primary","Invalid","Required","CustomValidation","MaxLength","MinLength","ShowCounter","ShowCounterWithDefaultValue","Disabled"];export{h as CustomValidation,v as Disabled,p as Invalid,f as MaxLength,g as MinLength,o as Primary,m as Required,y as ShowCounter,b as ShowCounterWithDefaultValue,ot as __namedExportsOrder,st as default};
