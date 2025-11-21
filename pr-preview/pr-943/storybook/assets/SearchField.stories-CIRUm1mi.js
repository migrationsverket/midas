import{S as s}from"./SearchField-BwUDJccw.js";import"./iframe-BqDkGuh1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D87rnCnG.js";import"./utils-W193K7jS.js";import"./useLocalizedStringFormatter-B8mdMXCK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DEEyYg0G.js";import"./useFocusRing-B0vg45rI.js";import"./index-B8hlXOwE.js";import"./index-Dzcfq3Tc.js";import"./useFormValidation-BUuh_lTo.js";import"./useField-Dapj1Pgq.js";import"./Button-BxGujilG.js";import"./Hidden-0zoVmhVR.js";import"./useLabels-Bl_SgAjf.js";import"./useButton-xcFgy60K.js";import"./search-DyBKXjej.js";import"./createLucideIcon-DTrJOepx.js";import"./Button-DsUfXBsa.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-v7TRxJsd.js";import"./VisuallyHidden-CQi-zQEF.js";import"./x-B-WsG3hV.js";import"./FieldError-yw2UMk6d.js";import"./Text-P0Uog9HF.js";import"./Text-CGQubPUz.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
