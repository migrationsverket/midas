import{S as s}from"./SearchField-DlDtMbUm.js";import"./iframe-UW8vLm1f.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DrPYTGHy.js";import"./utils-CLOZA6Qr.js";import"./useLocalizedStringFormatter-ILC68sUH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BxaRiYVo.js";import"./useFocusRing-CMx22NqV.js";import"./index-Cq0AMSqT.js";import"./index-TM4f8tXD.js";import"./useFormValidation-CCF-9150.js";import"./useField-C9XmYr2d.js";import"./Button-7au76wYW.js";import"./Hidden-BxY2u9UP.js";import"./useLabels-DT0_oM0p.js";import"./useButton-DHMLeTON.js";import"./search-Dtuv1ZAX.js";import"./createLucideIcon-D1-wdHpr.js";import"./ClearButton-Bu_-Lru8.js";import"./Button-Bq-BzB1-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B2qxmHUY.js";import"./VisuallyHidden-D55BsDJa.js";import"./x-tk0MJ5Od.js";import"./FieldError-2Or80766.js";import"./Text-Dog5UxXw.js";import"./Text-B07qXiJx.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
