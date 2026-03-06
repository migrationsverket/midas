import{S as s}from"./SearchField-DvnGSNhn.js";import"./iframe-DyBiNx2q.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Q0-sVA1t.js";import"./utils-B5dKaEwK.js";import"./useLocalizedStringFormatter-CjE048XI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Boay7tH5.js";import"./useFocusRing-wn7y19LG.js";import"./index-Buskhl-p.js";import"./index-4ysC-kQu.js";import"./useFormValidation-CBFd9wPD.js";import"./useField-DmnvQ3tf.js";import"./Button-BJJCCEqe.js";import"./Hidden-Cb-0RftD.js";import"./useLabels-CLX48ijd.js";import"./useButton-CHwzBhtJ.js";import"./search-DbZZWos9.js";import"./createLucideIcon-C_ZTugQV.js";import"./ClearButton-DLgZyuz7.js";import"./Button-DowFNeCQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-bUUJR2W9.js";import"./VisuallyHidden-rSrQGzQd.js";import"./x-DRhGVBqX.js";import"./FieldError-SXTa4faB.js";import"./Text-CvUxrlBC.js";import"./Text-ByDcSGxm.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
