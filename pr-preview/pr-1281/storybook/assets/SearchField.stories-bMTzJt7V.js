import{S as i}from"./SearchField-ClbncNRG.js";import"./iframe-CMUT-aY9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-x-Fz6ypf.js";import"./clsx-B-dksMZM.js";import"./Form-DgYdTUS7.js";import"./useFocusRing-D378a6oQ.js";import"./index-j8YavyCt.js";import"./index-CqplKhbN.js";import"./Input-DFrsvt9d.js";import"./Hidden-BmEcMQf3.js";import"./Button-CgVVJh0n.js";import"./useLabel-D7aQ5vjs.js";import"./useLabels-DlsJNfJR.js";import"./useButton-PZHXztAT.js";import"./FieldError-BcWgF-Sz.js";import"./Text-BjIPArye.js";import"./clsx-Ciqy0D92.js";import"./Text-CdDgL-we.js";import"./RSPContexts-CAfUuHUZ.js";import"./Group-BWScwyqa.js";import"./useControlledState-BVAe2WbZ.js";import"./useLocalizedStringFormatter-CTG8JuvI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BPvBp5iZ.js";import"./useField-C0qHtOlI.js";import"./TextField.module-DdivwlC8.js";import"./search-DciBlqO0.js";import"./createLucideIcon-B4JXtaTl.js";import"./x-DhHcyfDV.js";import"./useLocalizedStringFormatter-BhfoWyv5.js";import"./Button-BLzEeOtL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CLkRcp8r.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
