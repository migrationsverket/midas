import{S as s}from"./SearchField-C5cFZpF-.js";import"./iframe-QWuQ_a_L.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DmhZDXqG.js";import"./utils-CxNcyM92.js";import"./useLocalizedStringFormatter-CHjb52Du.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BuiAJGd-.js";import"./useFocusRing-NgK8_rV0.js";import"./index-DnDJQrpf.js";import"./index-DhvOpsCp.js";import"./useFormValidation-NfSUaEh2.js";import"./useField-CNo83OKT.js";import"./Button-KogFliLu.js";import"./Hidden-BjMXI3fA.js";import"./useLabels-BR_PNTmP.js";import"./useButton-D-kJSK4W.js";import"./search-Bgp75phS.js";import"./createLucideIcon-DjVjSJaI.js";import"./ClearButton-CmkcnCmv.js";import"./Button-CAN03lh_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhGc7qMk.js";import"./VisuallyHidden-_bN2WTJ0.js";import"./x-B6Hbhj97.js";import"./FieldError-DrWE9U3t.js";import"./Text-EITSTnbM.js";import"./Text-Dyca_2PO.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
