import{S as i}from"./SearchField-C6DfXCRE.js";import"./iframe-Bn-EzP7D.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CQaUuJEL.js";import"./clsx-B-dksMZM.js";import"./Form-D8rPFjhB.js";import"./useFocusRing-vAuqzLMr.js";import"./index-C-alUKfN.js";import"./index-B6pc0358.js";import"./Input-BYmxFTo0.js";import"./Hidden-CqBpBgFh.js";import"./Button-Cc7PB3J4.js";import"./useLabel-Bl9zNTe3.js";import"./useLabels-DUs2w_Mz.js";import"./useButton-9sNlXb4L.js";import"./FieldError-Bmf4SDk8.js";import"./Text-Bqg57V95.js";import"./clsx-Ciqy0D92.js";import"./Text-6vmkm8mz.js";import"./RSPContexts-_DVvg2ct.js";import"./Group-DU8JgHqm.js";import"./useControlledState-DvYkz0eX.js";import"./useLocalizedStringFormatter-C_da5e_o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D7Fko5bx.js";import"./useField-Ccah-lq_.js";import"./TextField.module-DdivwlC8.js";import"./search-CsGmyeS6.js";import"./createLucideIcon-DeptTAqN.js";import"./x-CdpnhCRh.js";import"./useLocalizedStringFormatter-Cu0XKz1n.js";import"./Button-CQePxhIL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CKLV3oRP.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
