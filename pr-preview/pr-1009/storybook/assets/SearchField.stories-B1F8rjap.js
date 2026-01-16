import{S as s}from"./SearchField-DI_jbTf0.js";import"./iframe-BfX_07x0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BDBdaFnj.js";import"./utils-otEk9Sjq.js";import"./useLocalizedStringFormatter-DfmLe7Uo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DD0O9ryS.js";import"./useFocusRing-B8HbIXNd.js";import"./index-Fv7k2kbU.js";import"./index-Tc84QQew.js";import"./useFormValidation-TqVcjqfe.js";import"./useField-D18NE3Od.js";import"./Button-BjsM-sZt.js";import"./Hidden-BW_Q879K.js";import"./useLabels-BDfZfP3D.js";import"./useButton-Bnqm25mU.js";import"./search-CGYjTPlC.js";import"./createLucideIcon-NdhLV474.js";import"./ClearButton-DJeDOs1E.js";import"./Button-S0b0VHM6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BtSMgK2r.js";import"./VisuallyHidden-Mgvz9RsA.js";import"./x-BXf0dImH.js";import"./FieldError-CRBWYL-W.js";import"./Text-BlHVCXfu.js";import"./Text-B2HNGjiH.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
