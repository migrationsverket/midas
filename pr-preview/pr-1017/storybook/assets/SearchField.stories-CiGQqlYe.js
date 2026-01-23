import{S as s}from"./SearchField-en__kcH8.js";import"./iframe-CtUIZbYn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BQ5cbGs8.js";import"./utils-Cf9IpOmc.js";import"./useLocalizedStringFormatter-BowEyYzH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C1CAXUyf.js";import"./useFocusRing-6a21M1IJ.js";import"./index-Dm2Kv3ch.js";import"./index-KufTmFNN.js";import"./useFormValidation-BMvR5o2g.js";import"./useField-BYTu8s8W.js";import"./Button-CgO5Dbzf.js";import"./Hidden-BI0VMXn5.js";import"./useLabels-CjFYjORR.js";import"./useButton-zj2RIXSA.js";import"./search-BfrpztUe.js";import"./createLucideIcon-BRaxuuf5.js";import"./ClearButton-C8knOTWh.js";import"./Button-DQw6C-et.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BZJ3lJE8.js";import"./VisuallyHidden-D6i0gXjo.js";import"./x-CTAACZ5M.js";import"./FieldError-CbQk5RgW.js";import"./Text-yTCGhOU_.js";import"./Text-XrKnwqSN.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
