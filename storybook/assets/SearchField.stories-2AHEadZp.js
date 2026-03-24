import{S as i}from"./SearchField-bWsKG3U3.js";import"./iframe-ClA4Jp0w.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D0z16UKm.js";import"./clsx-B-dksMZM.js";import"./Form-p39JobxH.js";import"./useFocusRing-CH7YMdaA.js";import"./index-bNRMcRC-.js";import"./index-B9CA3Byf.js";import"./Input-BxL51vTT.js";import"./Hidden-BjxHpkJU.js";import"./Button-lxcybUX-.js";import"./useLabels-l7dZfeia.js";import"./useButton-Dq5YitBv.js";import"./FieldError-CCOnpqUO.js";import"./Text-BOHdvQkr.js";import"./clsx-Ciqy0D92.js";import"./Text-BtZnFY82.js";import"./RSPContexts-iTkphylR.js";import"./Group-DyokFXca.js";import"./useControlledState-BVmLEOQ4.js";import"./useLocalizedStringFormatter-LKr8XwmM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-yXbrOEp9.js";import"./useField-AXva_Uzh.js";import"./TextField.module-DdivwlC8.js";import"./search-CtZ5GUCh.js";import"./createLucideIcon-nVFpiFPl.js";import"./x-DBneEqd2.js";import"./useLocalizedStringFormatter-f9qOXevm.js";import"./Button-D3i3Yqak.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dka0OyWW.js";const q={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const A=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,A as __namedExportsOrder,q as default};
