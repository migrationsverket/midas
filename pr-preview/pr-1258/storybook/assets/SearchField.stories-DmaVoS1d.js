import{S as i}from"./SearchField-Dep2O3Is.js";import"./iframe-UJ3BwdI6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BYceCV3C.js";import"./clsx-B-dksMZM.js";import"./Form-BoynS74H.js";import"./useFocusRing-CLeeQzke.js";import"./index-DAZT_GQr.js";import"./index-Bx8foN3C.js";import"./Input-TdTFBGXk.js";import"./Hidden-Dl3PKEKv.js";import"./Button-C3rI1i5q.js";import"./useLabel-B0g5vJvf.js";import"./useLabels-C5RnXiv5.js";import"./useButton-Cn8mW4Ll.js";import"./FieldError-CS9phB3k.js";import"./Text-BU9YFTb1.js";import"./clsx-Ciqy0D92.js";import"./Text-C99-Gc34.js";import"./RSPContexts-JudtSyi0.js";import"./Group-Cj4qpDe1.js";import"./useControlledState-SS_iM14g.js";import"./useLocalizedStringFormatter-C9onPQuM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-VNOp8-r0.js";import"./useField-XAlNn7CP.js";import"./TextField.module-DdivwlC8.js";import"./search-DvWDg8rF.js";import"./createLucideIcon-C1FynrDV.js";import"./x-BHjLPSUz.js";import"./useLocalizedStringFormatter-BPE-JPT8.js";import"./Button-C7x5CU1C.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-KE5d7FBc.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
