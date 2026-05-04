import{S as i}from"./SearchField-iz93VvVz.js";import"./iframe-CHfAArqL.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9qYaPsL.js";import"./clsx-B-dksMZM.js";import"./Form-CBT2Kr6Z.js";import"./useFocusRing-BLqX-8xD.js";import"./index-DD_A6Sdz.js";import"./index-BO2C6bAK.js";import"./Input-B_9-fJ2Q.js";import"./Hidden-BOX53JQz.js";import"./Button-Kjhz10Fb.js";import"./useLabel-BoRZ5h0h.js";import"./useLabels-8brOlTZV.js";import"./useButton-CXuQG5Fo.js";import"./FieldError-DThBEncI.js";import"./Text-9hAgyQPX.js";import"./clsx-Ciqy0D92.js";import"./Text-C_6I0x6_.js";import"./RSPContexts-CdZqI30k.js";import"./Group-CPEXitlT.js";import"./useControlledState-By7B3ojn.js";import"./useLocalizedStringFormatter-aQ9hIT3Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BhUdXcAj.js";import"./useField-CG5Odj4p.js";import"./TextField.module-DdivwlC8.js";import"./search-CFlkCUuz.js";import"./createLucideIcon-Cv2FgIad.js";import"./x-DIO0llkK.js";import"./useLocalizedStringFormatter-B-k-1dED.js";import"./Button-Cmx0GvV9.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-QI36eTUn.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source},description:{story:`Default behavior in v17 — the built-in submit button is shown.
The button is not in the tab order; use Enter to submit or click the button.`,...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Without button (v18 default)',
  args: {
    placeholder: 'Sök efter en person',
    showButton: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const G=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,G as __namedExportsOrder,A as default};
