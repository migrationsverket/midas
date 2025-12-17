import{S as s}from"./SearchField-DdCEpKie.js";import"./iframe-Dm1httYB.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-XoQnkC5P.js";import"./utils-DAcLM52Y.js";import"./useLocalizedStringFormatter-B-lsgELR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DIyGK06-.js";import"./useFocusRing-C0iZIFPr.js";import"./index-Cq_lPOA_.js";import"./index-2aXvH78J.js";import"./useFormValidation-Ykv_NSJS.js";import"./useField-DBfobrXT.js";import"./Button-D4Ys_IRP.js";import"./Hidden-BUN5HDam.js";import"./useLabels-Dn030z5M.js";import"./useButton-DaUM1Uk2.js";import"./search-JgDkX0et.js";import"./createLucideIcon-Cua-ZzbR.js";import"./Button-DcFMStX5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BA3OZleP.js";import"./VisuallyHidden-CHSyJVG_.js";import"./x-DwDd4qDw.js";import"./FieldError-DPFfxwf1.js";import"./Text-C4WcM4sb.js";import"./Text-BeOvwamM.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
