import{S as s}from"./SearchField-Dqc6mALh.js";import"./iframe-DTmnx-OS.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B80F7Llz.js";import"./utils-BLrbyb-5.js";import"./useLocalizedStringFormatter-CZmcKBND.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Df2qcw2I.js";import"./useFocusRing-D7pmxvpH.js";import"./index-Dh5clyrJ.js";import"./index-ZMXHPIeh.js";import"./useFormValidation-CS2KaDSt.js";import"./useField-C6pIHBN6.js";import"./Button-D84lT1wU.js";import"./Hidden-BtM1I5LI.js";import"./useLabels-BU6BY9ES.js";import"./useButton-BfYlvgAS.js";import"./search-DO2mZoFj.js";import"./createLucideIcon-Q1IuAoPr.js";import"./Button-BR1AZgyV.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DJL53Hew.js";import"./VisuallyHidden-DTo6UeCi.js";import"./x-BHyqnA-p.js";import"./FieldError-BW0t1--z.js";import"./Text-CAzG3hrs.js";import"./Text-Rd2kwoRq.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
