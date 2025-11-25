import{S as s}from"./SearchField-B707uKJD.js";import"./iframe-B_KOJ0G0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CTR0ps1O.js";import"./utils-BTtkoL8i.js";import"./useLocalizedStringFormatter-DGPkZ-8S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CzctXWtj.js";import"./useFocusRing-5nURZfN9.js";import"./index-CXgWkQzh.js";import"./index-CF3jB36m.js";import"./useFormValidation-CTGgOiwX.js";import"./useField-BD0VU8YG.js";import"./Button-CnpoiceM.js";import"./Hidden-B9DtuNar.js";import"./useLabels-FMAmdZ1G.js";import"./useButton-DkRmfz4B.js";import"./search-DJzNRTfQ.js";import"./createLucideIcon-C0reiAmG.js";import"./Button-Drf_ZmSl.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-v4d1yczo.js";import"./VisuallyHidden-C9mO_RkX.js";import"./x-t-f0L9zQ.js";import"./FieldError-DUwoG9cu.js";import"./Text-D3GHA6gq.js";import"./Text-ZOMm-Alb.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
