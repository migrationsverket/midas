import{S as i}from"./SearchField-XvryWI7U.js";import"./iframe-_Hk9HBhX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Tr1wzETD.js";import"./clsx-B-dksMZM.js";import"./Form-CJTM5oJs.js";import"./useFocusRing-CUpBT6GV.js";import"./index-fEZrWfc8.js";import"./index-Cjzv3PRo.js";import"./Input-BnOd_loK.js";import"./Hidden-vPthIoGd.js";import"./Button-BcVwX6wB.js";import"./useLabel-CG8Xm4bD.js";import"./useLabels-XRHHudnr.js";import"./useButton-CZkGYXOZ.js";import"./FieldError-BnqaSw3Q.js";import"./Text-CFXOaGuN.js";import"./clsx-Ciqy0D92.js";import"./Text-4AExYRWh.js";import"./RSPContexts-BkY4NJgN.js";import"./Group-DhBe_ig_.js";import"./useControlledState-CXVEjKuF.js";import"./useLocalizedStringFormatter-xIKmWIeo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D8pq1Yhc.js";import"./useField-JEZIk8ke.js";import"./TextField.module-DdivwlC8.js";import"./search-Dzivk3PC.js";import"./createLucideIcon-qIP4byR5.js";import"./x-3memj5xE.js";import"./useLocalizedStringFormatter-DUwGsNzO.js";import"./Button-BPI35lWH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CE55BuvM.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
