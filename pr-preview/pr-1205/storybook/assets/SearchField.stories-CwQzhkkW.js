import{S as i}from"./SearchField-Bu8PDzWp.js";import"./iframe-BS-EqM9B.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B0k4XHwf.js";import"./clsx-B-dksMZM.js";import"./Form-WnuVLIo9.js";import"./useFocusRing-f4Gv2bLP.js";import"./index-Ba_eFeFP.js";import"./index-CSZYNzON.js";import"./Input-DwF03e_4.js";import"./Hidden-pMKT4yIR.js";import"./Button-Fd5Hg-6t.js";import"./useLabel-CFg80amx.js";import"./useLabels-CtbB0U7H.js";import"./useButton-nlJA0m2t.js";import"./FieldError-1ihXnr04.js";import"./Text-WfzPelJM.js";import"./clsx-Ciqy0D92.js";import"./Text-BmYuY3ql.js";import"./RSPContexts-BvHJA1-S.js";import"./Group-CYImqZ5q.js";import"./useControlledState-B-FXHrTP.js";import"./useLocalizedStringFormatter-stCrBMQ7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CCWrd40f.js";import"./useField-BO5BP60C.js";import"./TextField.module-DdivwlC8.js";import"./search-cTbG_MpN.js";import"./createLucideIcon-tz6Ei2qt.js";import"./x-9X9TwUAj.js";import"./useLocalizedStringFormatter-NiRgEpkW.js";import"./Button-C36Rbpm6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BPzz7Fut.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
