import{S as i}from"./SearchField-MKMjUc7O.js";import"./iframe-CUSvXe23.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CkRXDuX-.js";import"./clsx-B-dksMZM.js";import"./Form-CKmcwWsP.js";import"./useFocusRing-BuJn1tRD.js";import"./index-BjoHnV1_.js";import"./index-CdztG2Xx.js";import"./Input-Bh5XjTjP.js";import"./Hidden-Dhsax2Cn.js";import"./Button-C1-Re332.js";import"./useLabel-ulwKDPvJ.js";import"./useLabels-BPCgaUFa.js";import"./useButton-BO5Zhbxe.js";import"./FieldError-t8sTtSNx.js";import"./Text-DLWDclOW.js";import"./clsx-Ciqy0D92.js";import"./Text-NxTN73uc.js";import"./RSPContexts-BfFZIYKm.js";import"./Group-CLc-S5J5.js";import"./useControlledState-BDwJH1MB.js";import"./useLocalizedStringFormatter-CQWvwsyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BO4SPiFd.js";import"./useField-Bd0xb1Jz.js";import"./TextField.module-DdivwlC8.js";import"./search-BlkAEBgT.js";import"./createLucideIcon-Ce9oZthD.js";import"./x-W7_jPxcF.js";import"./useLocalizedStringFormatter-DOZj6KI_.js";import"./Button-ricz7KuE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-YrO2RMP0.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
