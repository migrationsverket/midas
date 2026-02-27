import{S as s}from"./SearchField-0e6HZGN-.js";import"./iframe-D7a0roTE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DDhJysn8.js";import"./utils-CCwC5od5.js";import"./useLocalizedStringFormatter-e3ysiM8J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DUDB8gXM.js";import"./useFocusRing-CFRP2Jek.js";import"./index-CFLLbIUX.js";import"./index-Bcz-F3t-.js";import"./useFormValidation-CFJsNuhs.js";import"./useField-sPhfvWpo.js";import"./Button-202_c7Iv.js";import"./Hidden-Dy39TreI.js";import"./useLabels-BtRp1y_K.js";import"./useButton-DiS7UUja.js";import"./search-qyUlbmwO.js";import"./createLucideIcon-CpMQKadj.js";import"./ClearButton-C6PCq6yC.js";import"./Button-BmkKd0hD.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CzDArdEs.js";import"./VisuallyHidden-C3QcPrAB.js";import"./x-DA_mepw-.js";import"./FieldError-CcwNjMdG.js";import"./Text-BeZ98S-S.js";import"./Text-BQJnC-MG.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
