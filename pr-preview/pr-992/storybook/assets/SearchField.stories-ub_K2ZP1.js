import{S as s}from"./SearchField-DuDogwTR.js";import"./iframe-G3ZMXUbN.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B9ob4JlY.js";import"./utils-DFB_SXUX.js";import"./useLocalizedStringFormatter-B6J4wIaa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CmPZyNPX.js";import"./useFocusRing-BUAgLOHD.js";import"./index-kfXkLWYF.js";import"./index-DrPSsjqf.js";import"./useFormValidation-C6tr5084.js";import"./useField-CetEkJiZ.js";import"./Button-Ct_0JeFf.js";import"./Hidden-D7jA6uYz.js";import"./useLabels-hHOhF52P.js";import"./useButton-AYkaTZcr.js";import"./search-BHVX7Fey.js";import"./createLucideIcon-CsEYjiU2.js";import"./Button-COqnMPPE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bbymx7uq.js";import"./VisuallyHidden-DWt0hBMZ.js";import"./x-fjpAhXI4.js";import"./FieldError-K0XJdCDc.js";import"./Text-Bvk57S6I.js";import"./Text-qybX5iVt.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
