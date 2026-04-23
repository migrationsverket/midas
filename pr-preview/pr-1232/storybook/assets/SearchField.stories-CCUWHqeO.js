import{S as i}from"./SearchField-B9lZzZHK.js";import"./iframe-CUW_txz6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BrfeFFy9.js";import"./clsx-B-dksMZM.js";import"./Form-DNzUj6ms.js";import"./useFocusRing-Ow8z5BMJ.js";import"./index-CEIRzGFi.js";import"./index-DPGPOgn_.js";import"./Input-DpnB_kNM.js";import"./Hidden-C6dZGZNF.js";import"./Button-DJT34vsz.js";import"./useLabel-Cw6MJ1IZ.js";import"./useLabels-DZAjP1T4.js";import"./useButton-Bg8Qj9rG.js";import"./FieldError-BBiP0jfO.js";import"./Text-Bi2kB5GC.js";import"./clsx-Ciqy0D92.js";import"./Text-DvPi9pFM.js";import"./RSPContexts-DYx0iF5j.js";import"./Group-C3Ht6QcB.js";import"./useControlledState-BuDrosJG.js";import"./useLocalizedStringFormatter-CGK0h3fP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DOX9ofpd.js";import"./useField-CLP_zsZ0.js";import"./TextField.module-DdivwlC8.js";import"./search-B3IGxyAp.js";import"./createLucideIcon-Cc0DwuLE.js";import"./x-pwSsQ8xV.js";import"./useLocalizedStringFormatter-wgvHSt-l.js";import"./Button-yberURbp.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C2eTcyAK.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
