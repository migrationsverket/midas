import{S as s}from"./SearchField-fX5UIpIk.js";import"./iframe-CDrSurWy.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CUTCkVdb.js";import"./utils-Dy1P41Mq.js";import"./useLocalizedStringFormatter-DuF-ONi0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BCymhfrx.js";import"./useFocusRing-8Ibh4hbP.js";import"./index-CpmYj3fJ.js";import"./index-BMiT6AWh.js";import"./useFormValidation-B_INn_a1.js";import"./useField-B-0diuV7.js";import"./Button-CT7017SL.js";import"./Hidden-BWcF6djw.js";import"./useLabels-DEqi4d33.js";import"./useButton-uFHPbEdv.js";import"./search-BSQ7x48V.js";import"./createLucideIcon-DtA62ZGX.js";import"./Button-D1Cx7yto.js";import"./Button.module-CtQ1deO8.js";import"./x-AoPWifd7.js";import"./useLocalizedStringFormatter-BU9LyYpX.js";import"./FieldError-C3Cs2Qyk.js";import"./Text-BsD5HA04.js";import"./Text-Dk-c4AnW.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
