import{S as s}from"./SearchField-BugKn6Qp.js";import"./iframe-BpM72smZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-uArUOdKs.js";import"./utils-CSddBXAp.js";import"./useLocalizedStringFormatter-BjnJAUau.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D5BmevWh.js";import"./useFocusRing-B6IWB5Bj.js";import"./index-B1wLjkVC.js";import"./index-D8NVrDNK.js";import"./useFormValidation-CSg5xMEa.js";import"./useField-BGaaNjBC.js";import"./Button-7Fdf0MuP.js";import"./Hidden-CTCJ1xpV.js";import"./useLabels-Ea9VM8la.js";import"./useButton--NSdMDnV.js";import"./search-CpWmTa9y.js";import"./createLucideIcon-CC1B6wl6.js";import"./ClearButton-GaXCoWI-.js";import"./Button-DN_yypM1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-tgvWDsgd.js";import"./VisuallyHidden-DUZEOl0B.js";import"./x-Dk78go1P.js";import"./FieldError-B0e9S7Wf.js";import"./Text-DmFT7SRM.js";import"./Text-CSnhZWSM.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
