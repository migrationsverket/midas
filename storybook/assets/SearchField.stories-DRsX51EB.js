import{S as i}from"./SearchField-C3H3HnFx.js";import"./iframe-D-sLCnpD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D3U7E8TR.js";import"./clsx-B-dksMZM.js";import"./Form-CErwLJsl.js";import"./useFocusRing-BddZYFRw.js";import"./index-CLCyT0Oh.js";import"./index-D5x8KNVK.js";import"./Input-rMBbivEa.js";import"./Hidden-y_sC-lpt.js";import"./Button-DnF54DF8.js";import"./useLabel-Cu8kCPJx.js";import"./useLabels-r9V9wZ09.js";import"./useButton-QMunS1hB.js";import"./FieldError-CFlBecVg.js";import"./Text-BKNBB32x.js";import"./clsx-Ciqy0D92.js";import"./Text-CHAFZQ5b.js";import"./RSPContexts-BDn2DSX_.js";import"./Group-7Y9XR-zS.js";import"./useControlledState-BjvLL9Qd.js";import"./useLocalizedStringFormatter-BcWSncvR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CuKgcO-_.js";import"./useField-ndYRkqXj.js";import"./TextField.module-DdivwlC8.js";import"./search-CPHn_RYI.js";import"./createLucideIcon-DYN3agFs.js";import"./x-2-riXgs7.js";import"./useLocalizedStringFormatter-CdR-Kcyq.js";import"./Button-DXPPcOjH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-qGd6TSu6.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
