import{S as s}from"./SearchField-D5tVFRjf.js";import"./iframe-CNsxVRri.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CUxSahqU.js";import"./utils-Co8chztC.js";import"./useLocalizedStringFormatter-BPCDmmQm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DX-6Lf27.js";import"./useFocusRing-DsaNSwIK.js";import"./index-iQGs7ivC.js";import"./index-xzFc3yKu.js";import"./useFormValidation-BWezWJjJ.js";import"./useField-B6T0pS4P.js";import"./Button-Do7i_7km.js";import"./Hidden-DMs7iDYH.js";import"./useLabels-DqA2utri.js";import"./useButton-DcobyQYb.js";import"./search-JmUDHF3X.js";import"./createLucideIcon-RNATAqG3.js";import"./Button-BVskKP47.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C5Du77Az.js";import"./VisuallyHidden-8GTBfxVg.js";import"./x-BTpUX4-J.js";import"./FieldError-CQWVGndw.js";import"./Text-BcPHhIoD.js";import"./Text-B0puKBqo.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
