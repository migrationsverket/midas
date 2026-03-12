import{S as s}from"./SearchField-DoqmAhVG.js";import"./iframe-cYpxZzUZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BAEBGgdv.js";import"./utils-Da5YKx2_.js";import"./useLocalizedStringFormatter-BSJ4rvpt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C4i3To1d.js";import"./useFocusRing-Ro1kVhTk.js";import"./index-DWJi6tle.js";import"./index-nlAR4CdQ.js";import"./useFormValidation-cnpDgIF1.js";import"./useField-KHoqv6p7.js";import"./Button-I19PkSL9.js";import"./Hidden-CEh4KexJ.js";import"./useLabels-yIxCyUCA.js";import"./useButton-BTaVYt9k.js";import"./search-DCOb_JbZ.js";import"./createLucideIcon-CeCkLO_B.js";import"./ClearButton-C702IQa5.js";import"./x-BpfnAhHg.js";import"./Button-CJf-JCMB.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cgn8B_F7.js";import"./VisuallyHidden-DaBYovm5.js";import"./FieldError-B5Zp84t6.js";import"./Text-BEBHFL1U.js";import"./Text-BWvCs6nS.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
