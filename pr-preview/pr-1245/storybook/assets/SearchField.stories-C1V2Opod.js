import{S as i}from"./SearchField-DhQB6cvm.js";import"./iframe-B3CWHhIN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Jns7c9tB.js";import"./clsx-B-dksMZM.js";import"./Form-DZNqsYbE.js";import"./useFocusRing-Dqy31Yu8.js";import"./index-BnJ3Y3M7.js";import"./index-CJ7rKWZW.js";import"./Input-DaIvaMm_.js";import"./Hidden-CgV_CbEL.js";import"./Button-BI1n4R5H.js";import"./useLabel-CC7uv02C.js";import"./useLabels-DG2yLXCg.js";import"./useButton-qyJkLJr0.js";import"./FieldError-DaCLZlSC.js";import"./Text-CjXkmRxL.js";import"./clsx-Ciqy0D92.js";import"./Text-BEt0Rg_V.js";import"./RSPContexts-D5wE8Zis.js";import"./Group-DdYmsXJ0.js";import"./useControlledState-DO7MzpyM.js";import"./useLocalizedStringFormatter-CcWFJj2d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BN_lArB3.js";import"./useField-Dhf-tbRQ.js";import"./TextField.module-DdivwlC8.js";import"./search-DmBCQuHY.js";import"./createLucideIcon-B55uVL59.js";import"./x-BAAJthI0.js";import"./useLocalizedStringFormatter-FGEoJAjv.js";import"./Button-CFIqCifj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DPG3Zp-i.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
