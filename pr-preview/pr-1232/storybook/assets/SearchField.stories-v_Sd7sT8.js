import{S as i}from"./SearchField-BGV_6OJX.js";import"./iframe-BWYHj7v3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D2pxdcvN.js";import"./clsx-B-dksMZM.js";import"./Form-8H488Lu1.js";import"./useFocusRing-Dyg95bXZ.js";import"./index-7oEDLDPj.js";import"./index-9pfm-tft.js";import"./Input-ClZASIEz.js";import"./Hidden-B4Hoeqhu.js";import"./Button-wGSaEaEO.js";import"./useLabel-CMMx43mY.js";import"./useLabels-DZpMO0Qr.js";import"./useButton-xg-vHwOd.js";import"./FieldError-BSBdPgF-.js";import"./Text-C4Gl7LUF.js";import"./clsx-Ciqy0D92.js";import"./Text-7TDSW4-z.js";import"./RSPContexts-Cti5diL6.js";import"./Group-CNUH6ghx.js";import"./useControlledState-DsTneGsr.js";import"./useLocalizedStringFormatter-C_LLFDGY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CEdyPAro.js";import"./useField-DGT7cjYh.js";import"./TextField.module-DdivwlC8.js";import"./search--KSjybyE.js";import"./createLucideIcon-Dbzq6jGp.js";import"./x-BuNpvuba.js";import"./useLocalizedStringFormatter-BfKsi0NO.js";import"./Button-DEdirHEy.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CBrM5tre.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
