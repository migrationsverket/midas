import{S as s}from"./SearchField-pGMaXZCf.js";import"./iframe-DfEAdNVs.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BAEcE39B.js";import"./utils--wYGBqGD.js";import"./useLocalizedStringFormatter-8MmEPB2N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D72ClbFt.js";import"./useFocusRing-Bzp-C8p6.js";import"./index-CtqVMxj3.js";import"./index-SEkB6HYi.js";import"./useFormValidation-BUhsxUna.js";import"./useField-BRFh-PYl.js";import"./Button-BdvjUnuo.js";import"./Hidden-BEs-n291.js";import"./useLabels-Cu5mk1YJ.js";import"./useButton-DrZxE4--.js";import"./search-BP9Agv24.js";import"./createLucideIcon-Caura_NC.js";import"./Button-He3J7woG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BCX7Zdi0.js";import"./VisuallyHidden-alWOUvdL.js";import"./x-Cc5QfUhK.js";import"./FieldError-CAId1xXE.js";import"./Text-DuPzytE6.js";import"./Text-DpvNcKrC.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
