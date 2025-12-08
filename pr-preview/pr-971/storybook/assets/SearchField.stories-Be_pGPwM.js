import{S as s}from"./SearchField-C4ERvZrc.js";import"./iframe--mmKoKlF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CQsF2XT8.js";import"./utils-Co0PR--s.js";import"./useLocalizedStringFormatter-CvAW3YIB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D3YbBk2X.js";import"./useFocusRing-ElKf8bcK.js";import"./index-DlIPfWxH.js";import"./index-xyOEGRTy.js";import"./useFormValidation-onPnYTY4.js";import"./useField-cCn2FxJC.js";import"./Button-K9IUFIHc.js";import"./Hidden-DQTVfJps.js";import"./useLabels-C4a0JBZG.js";import"./useButton-DQXgnmsH.js";import"./search-DHJ4vMqe.js";import"./createLucideIcon-LTD4_Te-.js";import"./Button-DFSRLbW3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C1Y7m_4-.js";import"./VisuallyHidden-7b4qEDFn.js";import"./x-BUgJA5vH.js";import"./FieldError-DWqeJHep.js";import"./Text-CHGY53Du.js";import"./Text-CcHRZ_Ad.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
