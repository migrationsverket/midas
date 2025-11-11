import{S as s}from"./SearchField-CJR5naeY.js";import"./iframe-CyQuNDa_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Ck_EK0EF.js";import"./utils-De8VIsoO.js";import"./useLocalizedStringFormatter-ZuVYcFkz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BD5dpSk2.js";import"./useFocusRing-93IF2U5F.js";import"./index-DRL4XcYu.js";import"./index-C8uVDAXw.js";import"./useFormValidation-OzFDShPm.js";import"./useField-Cy6intjQ.js";import"./Button-D1KGFQek.js";import"./Hidden-BoG65Xnl.js";import"./useLabels-BHGFLz3i.js";import"./useButton-Cx8w0lie.js";import"./search-ghzJnYJT.js";import"./createLucideIcon-CHYxtA9m.js";import"./Button-DJzGs5Og.js";import"./Button.module-CtQ1deO8.js";import"./x-CghFsWJf.js";import"./useLocalizedStringFormatter-BNnUJ3nN.js";import"./FieldError-Dtv9Wp9N.js";import"./Text-Drr12cDy.js";import"./Text-CG8yCix2.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
