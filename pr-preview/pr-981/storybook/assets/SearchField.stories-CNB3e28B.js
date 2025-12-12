import{S as s}from"./SearchField-pC-NV4iV.js";import"./iframe-DBywrjRl.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CHDzfq-U.js";import"./utils-C-8jxnFS.js";import"./useLocalizedStringFormatter-CSTI3d-a.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B8pznWe6.js";import"./useFocusRing-CGlcWS9k.js";import"./index-Cpu-cEhv.js";import"./index-P3BrwvSu.js";import"./useFormValidation-DPDjlvP6.js";import"./useField-gVPT3IMc.js";import"./Button-D_E0QrGY.js";import"./Hidden-79NJLlf0.js";import"./useLabels-DRimalMh.js";import"./useButton-B7cADDRU.js";import"./search-Bbyle0jN.js";import"./createLucideIcon-DLAcgX9Y.js";import"./Button-CSQaj_XW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-x3VZR5IH.js";import"./VisuallyHidden-jGgGT3kZ.js";import"./x-CMTwpFUB.js";import"./FieldError-BNQQruOL.js";import"./Text-D38z605_.js";import"./Text-C5neFPa3.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
