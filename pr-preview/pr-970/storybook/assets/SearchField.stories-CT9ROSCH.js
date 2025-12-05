import{S as s}from"./SearchField-BEFyJHKO.js";import"./iframe-DeX6EpxL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DAFdnZtt.js";import"./utils-B8qVFtuz.js";import"./useLocalizedStringFormatter-EhR0ZRPf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C58ibq5n.js";import"./useFocusRing-DH9ib-kf.js";import"./index-D5ZgaJWR.js";import"./index-C6QFGyuX.js";import"./useFormValidation-Cx4G6YEU.js";import"./useField-CC1Eh5CN.js";import"./Button-BNKSAgP5.js";import"./Hidden-aeqbWkpz.js";import"./useLabels-A2tn5MES.js";import"./useButton-DTuJAJ_o.js";import"./search-DRx5Gu0S.js";import"./createLucideIcon-CxcECL83.js";import"./Button-r9WGhIT_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Db_YVwzW.js";import"./VisuallyHidden-B9DbwpXk.js";import"./x-C2jezQOt.js";import"./FieldError-B8KPN--E.js";import"./Text-Cetjf3U1.js";import"./Text-C5yfOZoW.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
