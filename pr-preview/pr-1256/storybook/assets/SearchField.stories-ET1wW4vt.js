import{S as i}from"./SearchField-BBEy5Bep.js";import"./iframe-CG21FvLg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dfpd-lDd.js";import"./clsx-B-dksMZM.js";import"./Form-DCvqDcwU.js";import"./useFocusRing-UKlSaOwL.js";import"./index-DJQDMjGE.js";import"./index-DIUOAeZ0.js";import"./Input-BoL5jQWE.js";import"./Hidden-DHiBRU7w.js";import"./Button-eYd2LYW1.js";import"./useLabel-CK6_zand.js";import"./useLabels-DbIZAWFx.js";import"./useButton-EC9QZCu0.js";import"./FieldError-D1k-tzt9.js";import"./Text-D17DsBlZ.js";import"./clsx-Ciqy0D92.js";import"./Text-DYV6Mtqz.js";import"./RSPContexts-bVWhtwKV.js";import"./Group-DUq970bw.js";import"./useControlledState-py48MqsP.js";import"./useLocalizedStringFormatter-CZfKgiZn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B4s5pB-U.js";import"./useField-pxlW-odg.js";import"./TextField.module-DdivwlC8.js";import"./search-CTz3wGj4.js";import"./createLucideIcon-DIP5Ktet.js";import"./x-DrfF8WsI.js";import"./useLocalizedStringFormatter-5oZjcWP5.js";import"./Button-DTO_Qu1U.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B-Rie-TX.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
