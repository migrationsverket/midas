import{S as i}from"./SearchField-Cw2Rr-p_.js";import"./iframe-CuFHe2Vf.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-VBjVty-c.js";import"./clsx-B-dksMZM.js";import"./Form-ChRtTK9l.js";import"./useFocusRing-B1hdhdHY.js";import"./index-XnHTh2k6.js";import"./index-6uxo6Atk.js";import"./Input-B0HfqjCP.js";import"./Hidden-Bu9Ft7CN.js";import"./Button-VKTXL-zI.js";import"./useLabel-BWPwXwHm.js";import"./useLabels-DvXUCZzH.js";import"./useButton-CH05P1-e.js";import"./FieldError-BD8ZbGLc.js";import"./Text-BF1VogWM.js";import"./clsx-Ciqy0D92.js";import"./Text-C4mdW1tH.js";import"./RSPContexts-S1NEbTgr.js";import"./Group-BZfJMEwC.js";import"./useControlledState-JP9W3MVB.js";import"./useLocalizedStringFormatter-DOfPa_xp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-jEbRxP4U.js";import"./useField-Lr6V8Ghf.js";import"./TextField.module-DdivwlC8.js";import"./search-D4dC0wtq.js";import"./createLucideIcon-C4YuFSR4.js";import"./x-Dr_a8wCQ.js";import"./useLocalizedStringFormatter-CZd5T7mu.js";import"./Button-CksL_-0o.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CygALObj.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
