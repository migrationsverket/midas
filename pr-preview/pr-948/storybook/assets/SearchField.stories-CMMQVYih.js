import{S as s}from"./SearchField-y678esAz.js";import"./iframe-CJ5mLT_4.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D_djqcyI.js";import"./utils-B-yNA_dJ.js";import"./useLocalizedStringFormatter-CmqbnUCj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CJOPM7Ta.js";import"./useFocusRing-BeTk7EYI.js";import"./index-B1paFtI4.js";import"./index-jV957jJU.js";import"./useFormValidation-BHVEwjh3.js";import"./useField-B6zdWbJf.js";import"./Button-BISKQvSM.js";import"./Hidden-BJ3c_w-7.js";import"./useLabels-BYugiRh3.js";import"./useButton-B1fXf975.js";import"./search-Cxbwt5n8.js";import"./createLucideIcon-BmH-SYUv.js";import"./Button-B916xGn-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DPJWVto_.js";import"./VisuallyHidden-BdNOaLNL.js";import"./x-CAtwVwPx.js";import"./FieldError-Pur5IESW.js";import"./Text-DC_rgrUQ.js";import"./Text-BcqPXIpA.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,q as __namedExportsOrder,j as default};
