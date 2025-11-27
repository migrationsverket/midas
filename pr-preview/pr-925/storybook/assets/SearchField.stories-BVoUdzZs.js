import{S as s}from"./SearchField-BBjVZXAY.js";import"./iframe-CcFj61hi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CS68R5UU.js";import"./utils-CsHqKOjh.js";import"./useLocalizedStringFormatter-Ciz81QXa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BWHHw0wx.js";import"./useFocusRing-tven7JmU.js";import"./index-DGWwOE3x.js";import"./index-BNjYms5q.js";import"./useFormValidation-BUtm3X4O.js";import"./useField-oSSv-SCK.js";import"./Button-B1O3Yrk6.js";import"./Hidden-meMQGPd4.js";import"./useLabels-BR7Zi-G6.js";import"./useButton-6rhH5hF9.js";import"./search-BNPIrv2n.js";import"./createLucideIcon-pE-zvx_b.js";import"./Button-DCIYWzuo.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-MF-hbWH5.js";import"./VisuallyHidden-5KJu7kOB.js";import"./x-Pt19ZRNN.js";import"./FieldError-BbKWR-P3.js";import"./Text-CVt-e_rr.js";import"./Text-BqVsEr9P.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,q as __namedExportsOrder,j as default};
