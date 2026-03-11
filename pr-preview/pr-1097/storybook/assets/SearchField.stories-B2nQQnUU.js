import{S as s}from"./SearchField-Byqy-cqc.js";import"./iframe-D381uj8d.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dxnyxp1Q.js";import"./utils-BSviX3Ff.js";import"./useLocalizedStringFormatter-DU6NoriM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-svZv-tlQ.js";import"./useFocusRing-XLKEWfrJ.js";import"./index-BKX3b3m1.js";import"./index-C8AAmpqg.js";import"./useFormValidation-CPd1nK5K.js";import"./useField-C5hK99RZ.js";import"./Button-Blu5st7x.js";import"./Hidden-DtUrHuzu.js";import"./useLabels-D6WYJJ-R.js";import"./useButton-BNKAP6aC.js";import"./search-CiIgWtQK.js";import"./createLucideIcon-vVf7zZDS.js";import"./ClearButton-RRmjFfVl.js";import"./Button-BPKQXIdy.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DHOXMFVV.js";import"./VisuallyHidden-CbbcMkM6.js";import"./x-v6DOAZ4H.js";import"./FieldError-DuxnDAnQ.js";import"./Text-D3f-LNKt.js";import"./Text-DGswq3xo.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
