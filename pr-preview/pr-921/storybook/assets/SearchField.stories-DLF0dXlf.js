import{S as s}from"./SearchField-DHccsiOp.js";import"./iframe-DDwyaC3F.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BdO3bj3v.js";import"./utils-CG7wrpEM.js";import"./useLocalizedStringFormatter-DwgqBF71.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B9Ad8GuK.js";import"./useFocusRing-Bm3xvvdx.js";import"./index-C4cW3woH.js";import"./index-D60FYBt-.js";import"./useFormValidation-BSswJdzs.js";import"./useField-RDQsR3S1.js";import"./Button-BtXqPxzk.js";import"./Hidden-CaIlUqSr.js";import"./useLabels-CmG6mFoO.js";import"./useButton-BKHlIL54.js";import"./search-0ruNO-5E.js";import"./createLucideIcon-BSGS7U9b.js";import"./Button-CWPbBUMn.js";import"./Button.module-CtQ1deO8.js";import"./x-9Qbg9sxY.js";import"./useLocalizedStringFormatter-F1oVopQa.js";import"./FieldError-k6Nd64zn.js";import"./Text-CYUYSho0.js";import"./Text-NydOqzpP.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,j as __namedExportsOrder,T as default};
