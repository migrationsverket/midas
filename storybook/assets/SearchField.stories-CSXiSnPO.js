import{S as i}from"./SearchField-B7EwTVkX.js";import"./iframe-y_ZEGYiJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-8dWn79IV.js";import"./clsx-B-dksMZM.js";import"./Form-jkhfJmW6.js";import"./useFocusRing-CZ7WfYYW.js";import"./index-DK6J5I5t.js";import"./index-C3AD5J6I.js";import"./Input-Bm-PfLto.js";import"./Hidden-Cu8enaQS.js";import"./Button-Ch-G3kN7.js";import"./useLabel-CNEaWGvD.js";import"./useLabels-JqoH3_Oa.js";import"./useButton-gC0Ivgyp.js";import"./FieldError-DVm8G2oT.js";import"./Text-D9z2hAIA.js";import"./clsx-Ciqy0D92.js";import"./Text-B7AL5jZC.js";import"./RSPContexts-DqgeagmW.js";import"./Group-DSFwtZNb.js";import"./useControlledState-DHT9vmuC.js";import"./useLocalizedStringFormatter-lMWk04dJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BPApV7cm.js";import"./useField-hpR3LKjK.js";import"./TextField.module-DdivwlC8.js";import"./search-C7NIp0Xv.js";import"./createLucideIcon-BSy6nR5q.js";import"./x-DyC_Bfvk.js";import"./useLocalizedStringFormatter-DZmDvz9-.js";import"./Button-DfIwZ4Yr.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CIMmvdq0.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
