import{S as i}from"./SearchField-CVMUS-oM.js";import"./iframe-b0nZhEJS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Czy4cRiY.js";import"./clsx-B-dksMZM.js";import"./Form-BYDskUyn.js";import"./useFocusRing-CFZ-IXl8.js";import"./index-DA1-9aBn.js";import"./index-DV7yp0R8.js";import"./Input-Cdwbflk7.js";import"./Hidden-CZ6waCzP.js";import"./Button-W8LmO0wX.js";import"./useLabel-DnRB1mu0.js";import"./useLabels-D0XwDCFR.js";import"./useButton-CdJ6_dC8.js";import"./FieldError-CFDpOADY.js";import"./Text-CKTyuYl3.js";import"./clsx-Ciqy0D92.js";import"./Text-PpOivcva.js";import"./RSPContexts-BwF7V3QB.js";import"./Group-DtLMGfSw.js";import"./useControlledState-s-wNeubv.js";import"./useLocalizedStringFormatter-C8ETTJnR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BenCDeqQ.js";import"./useField-Bee8Za-k.js";import"./TextField.module-DdivwlC8.js";import"./search-4gyiFNCD.js";import"./createLucideIcon-t4UVlQbW.js";import"./x-BKNFSSsH.js";import"./useLocalizedStringFormatter-B84UWKXC.js";import"./Button-BHZxE8mE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BU0juR5g.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
