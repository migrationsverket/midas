import{S as s}from"./SearchField-CuVDUTMy.js";import"./iframe-DYBbcOUc.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-mdKIrMMP.js";import"./utils-R4gvIU3G.js";import"./useLocalizedStringFormatter-BWoXb-Lg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-uazggKBi.js";import"./useFocusRing-DyRUz5vb.js";import"./index-thGjz9u9.js";import"./index-D7z64vMT.js";import"./useFormValidation-CyMOk9K1.js";import"./useField-DnAWikfx.js";import"./Button-Cad-DxUv.js";import"./Hidden-XaTnVVir.js";import"./useLabels-Da2D9TrT.js";import"./useButton-COPW9UvJ.js";import"./search-DZzMmL3-.js";import"./createLucideIcon-DhblIh0r.js";import"./Button-BOqn9nOO.js";import"./Button.module-CtQ1deO8.js";import"./x-Cbhc3GUc.js";import"./useLocalizedStringFormatter-CB7EX41j.js";import"./FieldError-B2TJex7v.js";import"./Text-Tj7cHc4y.js";import"./Text-Bqq52gB3.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
