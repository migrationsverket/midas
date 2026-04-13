import{S as i}from"./SearchField-gXNJQg6a.js";import"./iframe-XBMlEgFB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cc5G8ViG.js";import"./clsx-B-dksMZM.js";import"./Form-BpH7O1vT.js";import"./useFocusRing-DuQiYGUN.js";import"./index-fc9UsKt1.js";import"./index-DcS3vXtE.js";import"./Input-CkG3ed09.js";import"./Hidden-DmPMVnI9.js";import"./Button-BzKQzIb5.js";import"./useLabel-CDvp7ZEq.js";import"./useLabels-BRX5yLgs.js";import"./useButton-Cl00IDBI.js";import"./FieldError-qc1sXTm5.js";import"./Text-86sbONsT.js";import"./clsx-Ciqy0D92.js";import"./Text-BZ6aPD5a.js";import"./RSPContexts-CjMPhbqA.js";import"./Group-DqshiR4N.js";import"./useControlledState-DEjZXUVu.js";import"./useLocalizedStringFormatter-Bu_qbSQ2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C6M6X_qU.js";import"./useField-BMLfgxz1.js";import"./TextField.module-DdivwlC8.js";import"./search-D7f4Zctc.js";import"./createLucideIcon-CPar-zam.js";import"./x-BNnKlOhJ.js";import"./useLocalizedStringFormatter-B3T1U-R5.js";import"./Button-CkmlK4go.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C4noZ6lE.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
