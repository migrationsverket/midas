import{S as s}from"./SearchField-C_31Cjoz.js";import"./iframe-Cs23SNnM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BY7I6-dG.js";import"./utils-C2_5pI3u.js";import"./useLocalizedStringFormatter-CzEFj0TX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ChuvFLJ6.js";import"./useFocusRing-DZKbXbQf.js";import"./index-B6ChyHFT.js";import"./index-lqer093p.js";import"./useFormValidation-jHVQBzvy.js";import"./useField-QHKuD7kq.js";import"./Button-CXOOs0ZW.js";import"./Hidden-lOkM-Rk2.js";import"./useLabels-RZtTtySY.js";import"./useButton-CSZehrgP.js";import"./search-Kvm4fgvm.js";import"./createLucideIcon-Cm58SIEr.js";import"./ClearButton-BemUPkw7.js";import"./Button-BCDZMRqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BjD1Xbww.js";import"./VisuallyHidden-BbktJI4p.js";import"./x-DXozcBPC.js";import"./FieldError-B4JZATSQ.js";import"./Text-BDa847Zj.js";import"./Text-CyM4GXds.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...o.parameters?.docs?.source}}};const w=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,w as __namedExportsOrder,q as default};
