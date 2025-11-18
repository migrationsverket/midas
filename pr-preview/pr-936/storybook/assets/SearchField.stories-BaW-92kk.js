import{S as s}from"./SearchField-BeefWO1q.js";import"./iframe-3Z2-UshW.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BqwBnLxL.js";import"./utils-DEJEJRgi.js";import"./useLocalizedStringFormatter-DdpoOagV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BbdPnTUs.js";import"./useFocusRing-MmHLX3s6.js";import"./index-CQUvP9Mk.js";import"./index-DuVB00BP.js";import"./useFormValidation-CbbZBDTD.js";import"./useField-CB47h_B1.js";import"./Button-C8_JRtOx.js";import"./Hidden-B6h_oo_l.js";import"./useLabels-CV70o-W_.js";import"./useButton-DNg2H_lv.js";import"./search-mymIPPpd.js";import"./createLucideIcon-CuTJpoE2.js";import"./Button-C4wHIXhX.js";import"./Button.module-CtQ1deO8.js";import"./x-CMZuM501.js";import"./useLocalizedStringFormatter-DBDYzHUi.js";import"./FieldError-DmQsB8WI.js";import"./Text-ByU-HJWg.js";import"./Text-Df63k-we.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
