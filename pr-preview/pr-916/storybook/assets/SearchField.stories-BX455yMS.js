import{S as s}from"./SearchField-C3m1Xsjl.js";import"./iframe-BjoitsA_.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-mjBa_ctK.js";import"./utils-CqffejwQ.js";import"./useLocalizedStringFormatter-VaXQjYCf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BHHHEsl6.js";import"./useFocusRing-CcZ79Pjo.js";import"./index-DIj_Fm1N.js";import"./index-IOKqJsz7.js";import"./useFormValidation-DO-tUN-i.js";import"./useField-6Y1j__MT.js";import"./Button-dCjcK3xZ.js";import"./Hidden-Dlma28aT.js";import"./useLabels-BvRWHbBu.js";import"./useButton-BHN-E1Nk.js";import"./search-CnIS85PG.js";import"./createLucideIcon-CNrUrsyr.js";import"./Button-CcGX5Wmo.js";import"./Button.module-CtQ1deO8.js";import"./x-CMNarlDj.js";import"./useLocalizedStringFormatter-CADBOpY1.js";import"./FieldError-CQa2IgQG.js";import"./Text-D2_Dqxb_.js";import"./Text-C1C2cp8Y.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
