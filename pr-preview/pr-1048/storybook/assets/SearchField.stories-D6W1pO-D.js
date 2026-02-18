import{S as s}from"./SearchField-bX6xKmVD.js";import"./iframe-BB7xjXo9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cfde8CUP.js";import"./utils-Dvy0y2aN.js";import"./useLocalizedStringFormatter-CVUyHfN-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D9jJj16b.js";import"./useFocusRing-CktrVIaE.js";import"./index-C09hS3mR.js";import"./index-B8nO0JsZ.js";import"./useFormValidation-DQxousKG.js";import"./useField-BdVdo0-E.js";import"./Button-BkFJO1eK.js";import"./Hidden-7SCFpwar.js";import"./number-DfkVkf0F.js";import"./useLabels-B4AtxOYQ.js";import"./useButton-Bm946jai.js";import"./search-DrmX6kGm.js";import"./createLucideIcon-3X7COU7u.js";import"./ClearButton-j_KJzjpI.js";import"./Button-C22OOxtQ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-8KGrO3.js";import"./VisuallyHidden-CR7zfsA4.js";import"./x-Dc3uFHWe.js";import"./FieldError-DiGNmRuv.js";import"./Text-CLZT0tYL.js";import"./Text-CpUAtCa1.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
