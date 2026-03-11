import{S as s}from"./SearchField-SwYdAhm4.js";import"./iframe-BxhzVfg2.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CD2bBDu6.js";import"./utils-DZ6ahdJp.js";import"./useLocalizedStringFormatter-DBjxKF2m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DzoR-Tga.js";import"./useFocusRing-bIPgWBhX.js";import"./index-BdD9_fMh.js";import"./index-BQnXjsO_.js";import"./useFormValidation-CovvDpdr.js";import"./useField-D0R3_hHU.js";import"./Button-BWZAZeiF.js";import"./Hidden-DbfZ_4s1.js";import"./useLabels-D-t3MvLa.js";import"./useButton-BdPz5CFW.js";import"./search-BZEV0Cm0.js";import"./createLucideIcon-B9VWei3c.js";import"./ClearButton-Dhs77Cdd.js";import"./Button-DVCkWjV4.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C--O9Jox.js";import"./VisuallyHidden-CI9pT65P.js";import"./x-DcnHgmtQ.js";import"./FieldError-0WAd1Y6E.js";import"./Text-DJy4h6GN.js";import"./Text-0UCV12dD.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
