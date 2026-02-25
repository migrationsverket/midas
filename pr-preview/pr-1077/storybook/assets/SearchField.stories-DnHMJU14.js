import{S as s}from"./SearchField-DwGT_-5e.js";import"./iframe-B8csx-lQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DXIS0caZ.js";import"./utils-CaD1t0h3.js";import"./useLocalizedStringFormatter-D4J2Tzs0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-WkTKoR1k.js";import"./useFocusRing-CtLa9eaD.js";import"./index-CFvG_i59.js";import"./index-DswvhGAm.js";import"./useFormValidation-CRpLLkPo.js";import"./useField-DQ83cjwx.js";import"./Button-BMaw0M-e.js";import"./Hidden-rw470soy.js";import"./useLabels-BKsEn5mf.js";import"./useButton-BXjDl97D.js";import"./search-Cmy2y3wB.js";import"./createLucideIcon-HRlJw9Ov.js";import"./ClearButton-C9BFxdbF.js";import"./Button-CCTCnZfY.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CJcJ86Ob.js";import"./VisuallyHidden-DLhvU9s0.js";import"./x-CSxMNTqR.js";import"./FieldError-qCPIdUr6.js";import"./Text-Nk_W5AjM.js";import"./Text-BdB7kbkm.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
