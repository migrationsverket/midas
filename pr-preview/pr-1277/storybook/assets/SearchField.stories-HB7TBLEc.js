import{S as i}from"./SearchField-C4piocAj.js";import"./iframe-P3qrm_tw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cu9HNXzK.js";import"./clsx-B-dksMZM.js";import"./Form-YJB6MmV5.js";import"./useFocusRing-BLJ-Rv5B.js";import"./index-sMyOSi6p.js";import"./index-DWrpe-jF.js";import"./Input-DPEGkuqx.js";import"./Hidden-BdxXq6fe.js";import"./Button-DhFyMRUa.js";import"./useLabel-CyrOFGd3.js";import"./useLabels-C-xox_2r.js";import"./useButton-Co-DeDts.js";import"./FieldError-BiTTAlmO.js";import"./Text-GLSAKrWj.js";import"./clsx-Ciqy0D92.js";import"./Text-3plXOlwA.js";import"./RSPContexts-BPVGWq9w.js";import"./Group-CrusDawx.js";import"./useControlledState-UTFpRQoc.js";import"./useLocalizedStringFormatter-CJciJbzM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bb3OTzeD.js";import"./useField-Cj8lvb17.js";import"./TextField.module-DdivwlC8.js";import"./search-BJ1EKhi8.js";import"./createLucideIcon-dl19Mkak.js";import"./x-CgDpVAro.js";import"./useLocalizedStringFormatter-CDAilngZ.js";import"./Button-CvMUPzzi.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BQNLfJdW.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
