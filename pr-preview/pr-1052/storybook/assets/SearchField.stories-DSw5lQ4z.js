import{S as s}from"./SearchField-BYXd47Yi.js";import"./iframe-CVh3nSma.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cgai1Xo4.js";import"./utils-DAl4r7ZI.js";import"./useLocalizedStringFormatter-CIu9Ev8Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C7Da0rb3.js";import"./useFocusRing-DevKcWYf.js";import"./index-DZnEqQgx.js";import"./index-Cw_mWNji.js";import"./useFormValidation-B1wWlh02.js";import"./useField-2EgC1qtj.js";import"./Button-CjHZLp4M.js";import"./Hidden-CKFlO9gT.js";import"./useLabels-BlYxGBYn.js";import"./useButton-Cv89nSdu.js";import"./search-DpPi9CxX.js";import"./createLucideIcon-DiDsoOCy.js";import"./ClearButton-DFGKcfvi.js";import"./Button-CBEr-IVd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DsUDPIO8.js";import"./VisuallyHidden-8g-Kxj9j.js";import"./x-B6y8n7rP.js";import"./FieldError-DrvXZ_4S.js";import"./Text-BmDZHzTH.js";import"./Text-D6VK4Tm3.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
