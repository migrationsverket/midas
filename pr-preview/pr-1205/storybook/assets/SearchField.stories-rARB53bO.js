import{S as i}from"./SearchField-Bl-jQWV5.js";import"./iframe-DJnBo8qx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-gWiD0ns3.js";import"./clsx-B-dksMZM.js";import"./Form-Bm_BfevM.js";import"./useFocusRing-Bp7BshOu.js";import"./index-DrJKcisO.js";import"./index-BBWpXqfQ.js";import"./Input-CJ2SSYHL.js";import"./Hidden-DalgADPi.js";import"./Button-DeGMYH9f.js";import"./useLabel-CQ_H6yZ6.js";import"./useLabels-CCJcnJYo.js";import"./useButton-CF9JOIlT.js";import"./FieldError-C3hrQaHN.js";import"./Text-C5-sBZVY.js";import"./clsx-Ciqy0D92.js";import"./Text-CwlODUSS.js";import"./RSPContexts-QhaJtN54.js";import"./Group-BQbxhg7e.js";import"./useControlledState-DGw5Me1h.js";import"./useLocalizedStringFormatter-CZN4d7Nk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-COYMWqIJ.js";import"./useField-Qw0L00q1.js";import"./TextField.module-DdivwlC8.js";import"./search-D38ZICNP.js";import"./createLucideIcon-mT6cpvLo.js";import"./x-DoHdhEkA.js";import"./useLocalizedStringFormatter-DDDranTe.js";import"./Button-DxRtiFp7.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-XMqtKg57.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
