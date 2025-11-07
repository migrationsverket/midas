import{S as s}from"./SearchField-DLyN0bqK.js";import"./iframe-U3ALJe9s.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DVxKfx7J.js";import"./utils-CJw4qjg1.js";import"./useLocalizedStringFormatter-DL2T9cnF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BjJsvacU.js";import"./useFocusRing-CwWXZ52H.js";import"./index-C3ZjivRj.js";import"./index-BQQMRsqV.js";import"./useFormValidation-nxdvz6qm.js";import"./useField-DLQVsNGj.js";import"./Button-BdzKwSP5.js";import"./Hidden-Dvxfn_Wb.js";import"./useLabels-D5IcVc4d.js";import"./useButton-Bjaukeml.js";import"./search-Bs2HSx1T.js";import"./createLucideIcon-DxUNEvxx.js";import"./Button-Dn6-0_jW.js";import"./Button.module-CtQ1deO8.js";import"./x-CcEEcg_3.js";import"./useLocalizedStringFormatter-CSdKtxVG.js";import"./FieldError-Ch2SQ0dS.js";import"./Text-czu22r0O.js";import"./Text-CtDdYdYe.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
