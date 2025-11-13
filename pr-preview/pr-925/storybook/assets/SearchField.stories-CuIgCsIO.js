import{S as s}from"./SearchField-024HWJr-.js";import"./iframe-CyMjtGPK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CTMqSIS3.js";import"./utils-DVuKvfbU.js";import"./useLocalizedStringFormatter-CLPnsWem.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DLblCXJX.js";import"./useFocusRing-ChpYD699.js";import"./index-D_9YXFXE.js";import"./index-CEYNSK8w.js";import"./useFormValidation-DoI_l0NE.js";import"./useField-Bz927p2u.js";import"./Button-BXSdsNHC.js";import"./Hidden-IMfBhQ0L.js";import"./useLabels-DNtrS2Qm.js";import"./useButton-KGQDEH2-.js";import"./search-LMZQhm8N.js";import"./createLucideIcon-D70ZsCEu.js";import"./Button-B8uAn95p.js";import"./Button.module-CtQ1deO8.js";import"./x-E3pVvVHL.js";import"./useLocalizedStringFormatter-C4pjlO5j.js";import"./FieldError-Bva2mD5K.js";import"./Text-DzIkDf4e.js";import"./Text-Ugwvt_bi.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
