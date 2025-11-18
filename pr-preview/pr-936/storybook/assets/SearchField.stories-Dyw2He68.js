import{S as s}from"./SearchField-C1fQZ2J8.js";import"./iframe-Zncv4Z_q.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CdK6s_X4.js";import"./utils-Devluy5R.js";import"./useLocalizedStringFormatter-CEb7hF4c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-8h7y-nzF.js";import"./useFocusRing-Ca5sQuoz.js";import"./index-DOrRd1fP.js";import"./index--5vlIxZw.js";import"./useFormValidation-DX92wwG8.js";import"./useField-B9d_fflg.js";import"./Button-C1wQYifO.js";import"./Hidden-mvxWno9C.js";import"./useLabels-CK9bUtvN.js";import"./useButton-0w55E1yr.js";import"./search-xk3HR-Lg.js";import"./createLucideIcon-DfBRHJjR.js";import"./Button-uct9GVFZ.js";import"./Button.module-CtQ1deO8.js";import"./x-CaE17IeY.js";import"./useLocalizedStringFormatter-Bozl0n8x.js";import"./FieldError-CP0ao9hi.js";import"./Text-DYVl_AjA.js";import"./Text-B8DR8Mpf.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
