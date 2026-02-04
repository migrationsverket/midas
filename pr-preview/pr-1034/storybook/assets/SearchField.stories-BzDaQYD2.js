import{S as s}from"./SearchField-wBKKt7WZ.js";import"./iframe-KIBzDUfV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-gvhGp19W.js";import"./utils-B3s11CxX.js";import"./useLocalizedStringFormatter-BDrDCZSr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Zlf3Ks9e.js";import"./useFocusRing-DIi5rye2.js";import"./index-B7quJzXG.js";import"./index-CZhNCbuO.js";import"./useFormValidation-2ZDFF5_3.js";import"./useField-ttnFMQCX.js";import"./Button-B74IQIIY.js";import"./Hidden-_s5Kzwns.js";import"./useLabels-CsvdAiYC.js";import"./useButton-CQ4Hdmts.js";import"./search-CuOWBEZc.js";import"./createLucideIcon-DYfbqy8w.js";import"./ClearButton-DMoSgLD2.js";import"./Button-D_6pE22y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DpqnENkr.js";import"./VisuallyHidden-BM7AOnhj.js";import"./x-CdrWRsxx.js";import"./FieldError-CQia8U4U.js";import"./Text-BcfqcDG4.js";import"./Text-D2dj_Y_G.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
