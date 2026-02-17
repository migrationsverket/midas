import{S as s}from"./SearchField-CfxXtfiV.js";import"./iframe-CJaokZwQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BapUYJTX.js";import"./utils-CtEzJMyp.js";import"./useLocalizedStringFormatter-Br5nqNbf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CrCHnRsO.js";import"./useFocusRing-Cs3fdfob.js";import"./index-D_wF1tYg.js";import"./index-Do-aKMQQ.js";import"./useFormValidation-4xdkgZhP.js";import"./useField-rWEXGZMG.js";import"./Button-CWvwIKjb.js";import"./Hidden-dqqTUJoh.js";import"./useLabels-CU-zAJI-.js";import"./useButton-CHkz07fZ.js";import"./search-CxDt3pVC.js";import"./createLucideIcon-CyHnGhZ5.js";import"./ClearButton-Cu9YtM68.js";import"./Button-Tydpx-JE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DQMMP8yJ.js";import"./VisuallyHidden-BY13fAwc.js";import"./x-FvjZsqr0.js";import"./FieldError-Jy1N-IKu.js";import"./Text-Cl09Gfu2.js";import"./Text-DfXjE_jj.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
