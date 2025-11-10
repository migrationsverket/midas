import{S as s}from"./SearchField-CC-OJgsG.js";import"./iframe-z4Kn7Dod.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BKRdwuD9.js";import"./utils-B0ZlOqSZ.js";import"./useLocalizedStringFormatter-Ccm0cyRu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CBC35EKM.js";import"./useFocusRing-D7-U344R.js";import"./index-NwkKJrPN.js";import"./index-BkwicnWz.js";import"./useFormValidation-BGvhWzWO.js";import"./useField-DPZ3oZeV.js";import"./Button-DOGbQp-l.js";import"./Hidden-dMbFCmcO.js";import"./useLabels-DPTd5ivJ.js";import"./useButton-BloXFTco.js";import"./search-CayR62rE.js";import"./createLucideIcon-CnDnstCY.js";import"./Button-BtgFqZmb.js";import"./Button.module-CtQ1deO8.js";import"./x-zOKjtXmD.js";import"./useLocalizedStringFormatter-D2_yQbgI.js";import"./FieldError-BUE0nCtQ.js";import"./Text-Co53YKw_.js";import"./Text-xMfMqXAz.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
