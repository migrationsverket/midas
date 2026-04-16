import{S as i}from"./SearchField-GwXiqa2K.js";import"./iframe-JYgA1KQi.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ChLKnNJg.js";import"./clsx-B-dksMZM.js";import"./Form-r6wIXJmO.js";import"./useFocusRing-C06MErgQ.js";import"./index--lNTANJm.js";import"./index-L3mAy6mP.js";import"./Input-B1FGNxTx.js";import"./Hidden-0YDp5zxo.js";import"./Button-w7gIenY9.js";import"./useLabel-DxtLEE3Y.js";import"./useLabels-DSacGDBd.js";import"./useButton-Beja3uNl.js";import"./FieldError-BlsJhfcN.js";import"./Text-D9TOgsmN.js";import"./clsx-Ciqy0D92.js";import"./Text-D50EAg-o.js";import"./RSPContexts-gejQyHLH.js";import"./Group-B675t2Fv.js";import"./useControlledState-CXI3Yibh.js";import"./useLocalizedStringFormatter-CVst0Jjc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DbI1Iik8.js";import"./useField-QQnG48hk.js";import"./TextField.module-DdivwlC8.js";import"./search-COmqGEhN.js";import"./createLucideIcon-UApEV6S6.js";import"./x-C1kwUoON.js";import"./useLocalizedStringFormatter-j9dnYAXL.js";import"./Button-MMPxX2Zb.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cov8ReYV.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
