import{S as s}from"./SearchField-zyauAhu6.js";import"./iframe-xAfmlG07.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-B0rcsDrm.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B8262pyO.js";import"./utils-9cghZAOb.js";import"./useLocalizedStringFormatter-C4Ie4IXR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cmkxs48S.js";import"./useFocusRing-DuURs6wG.js";import"./index-Cr2BzmUh.js";import"./index-DtXyM2b7.js";import"./useFormValidation-Dc5CfAEv.js";import"./useField-D592B_sa.js";import"./Button-_CPn_6qY.js";import"./Hidden-CaQ6AcOr.js";import"./useLabels-CuSdSuM5.js";import"./useButton-CnRE8ofO.js";import"./search-B79RHlHC.js";import"./createLucideIcon-xLqTy_XU.js";import"./ClearButton-FekCFKVh.js";import"./Button-DlzyzK84.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dvc3cf-i.js";import"./VisuallyHidden-BPCvzmAs.js";import"./x-DLZX4-ID.js";import"./FieldError-D0XPClu_.js";import"./Text-DTHVKRvi.js";import"./Text-Dg2zxxbH.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const w=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,w as __namedExportsOrder,q as default};
