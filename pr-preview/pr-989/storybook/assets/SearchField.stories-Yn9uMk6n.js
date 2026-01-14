import{S as s}from"./SearchField-Dpho9CVd.js";import"./iframe-pRNC08Mv.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BGR8S5qz.js";import"./utils-DRYUmso-.js";import"./useLocalizedStringFormatter-D4_cU62N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CbZm2bj8.js";import"./useFocusRing-Bjmrddhc.js";import"./index-BlGFDQle.js";import"./index-D5Pm5N6C.js";import"./useFormValidation-DDkwvMKg.js";import"./useField-s9cI_556.js";import"./Button-CNTckaGC.js";import"./Hidden-BKem9kXH.js";import"./useLabels-BEx_Ux0v.js";import"./useButton-CNCxBdco.js";import"./search-BmIkXVvS.js";import"./createLucideIcon-ALsTbPK_.js";import"./Button-G7WsQ-Sd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CzWjGcyN.js";import"./VisuallyHidden-DQpyket6.js";import"./x-BJEGTxBd.js";import"./FieldError-RDINXYGh.js";import"./Text-BEH_DbAf.js";import"./Text-Bm0bWJiD.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
