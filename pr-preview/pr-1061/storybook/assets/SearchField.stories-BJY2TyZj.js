import{S as s}from"./SearchField-3CB6z02S.js";import"./iframe-DTfJSErE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BaQo_f5T.js";import"./utils-B73muxhO.js";import"./useLocalizedStringFormatter-uC-u8m9n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ClhpYlTr.js";import"./useFocusRing-B1zsHiit.js";import"./index-BUT5P9H-.js";import"./index-CgWBRnNX.js";import"./useFormValidation-dfBlIUiS.js";import"./useField-lTpGylRL.js";import"./Button-DSjX8i_m.js";import"./Hidden-D7A9_Rse.js";import"./useLabels-BqfQS0uq.js";import"./useButton-oYO7zjMC.js";import"./search-BeqUjNF5.js";import"./createLucideIcon-DuvGCIEA.js";import"./ClearButton-CWbcsbLr.js";import"./Button-Bw1mXw0X.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BApN70s6.js";import"./VisuallyHidden-CKITv4VW.js";import"./x-D3PqQT5R.js";import"./FieldError-Bkpg5gnq.js";import"./Text-D5Dq4q45.js";import"./Text-DDwjjFnB.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
