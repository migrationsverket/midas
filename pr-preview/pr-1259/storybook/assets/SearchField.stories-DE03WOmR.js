import{S as i}from"./SearchField-Bn-O-Bmj.js";import"./iframe-BtoRqfbN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D3T2l2Oh.js";import"./clsx-B-dksMZM.js";import"./Form-TovplDMB.js";import"./useFocusRing-CPJmXdz2.js";import"./index-CLPTlYyH.js";import"./index-Wh2LXb7r.js";import"./Input-D3aAlazw.js";import"./Hidden-DmNqBwSB.js";import"./Button-D0NLyYor.js";import"./useLabel-BusboG5C.js";import"./useLabels-DkCdbV7o.js";import"./useButton-CAXNDaeV.js";import"./FieldError-B4waYEQL.js";import"./Text-x1siHFmD.js";import"./clsx-Ciqy0D92.js";import"./Text-UZHsyA5K.js";import"./RSPContexts-DkTToRLK.js";import"./Group-DGWr_ank.js";import"./useControlledState-acke6wY8.js";import"./useLocalizedStringFormatter-CoozzIhe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Opkbo0Gs.js";import"./useField-BmyqTXhe.js";import"./TextField.module-DdivwlC8.js";import"./search-BqX9KrwL.js";import"./createLucideIcon-BGwZIy7f.js";import"./x-DBRu_Ryo.js";import"./useLocalizedStringFormatter-BRT64aav.js";import"./Button-Dz0YcLF0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DH8wexDg.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
