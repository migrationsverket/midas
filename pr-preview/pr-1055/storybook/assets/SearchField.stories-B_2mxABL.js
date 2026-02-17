import{S as s}from"./SearchField-B1PJUTp5.js";import"./iframe-BUqHy7GG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BKp7Diu5.js";import"./utils-DrdsiK-L.js";import"./useLocalizedStringFormatter-CvEuXf2b.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C7H44w70.js";import"./useFocusRing-CebfJ1br.js";import"./index-DEv5Wt7N.js";import"./index-DZDSHzQO.js";import"./useFormValidation-CbKAev3H.js";import"./useField-Bt7YmqoZ.js";import"./Button-CodW0JYq.js";import"./Hidden-N4_Hw_bF.js";import"./useLabels-Dw6biMU5.js";import"./useButton-CwpzBG5G.js";import"./search-BsqS88vp.js";import"./createLucideIcon-DBH6mYos.js";import"./ClearButton-3EctDzH0.js";import"./Button-C0V6-7WF.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8scW4RRu.js";import"./VisuallyHidden-DMnJ-77G.js";import"./x-Cxd8KX91.js";import"./FieldError-CDxUPwIp.js";import"./Text-B9jmhAwE.js";import"./Text-6n5u0fKg.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
