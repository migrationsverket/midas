import{S as s}from"./SearchField-D4k-tuEY.js";import"./iframe-Dw6ThTAb.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CUSHFPNB.js";import"./utils-Cc21G09W.js";import"./useLocalizedStringFormatter-BY0kdCm4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BsccNDKb.js";import"./useFocusRing-xc1II4Ss.js";import"./index-CYKqCDi7.js";import"./index-MEMx4wU2.js";import"./useFormValidation-CRMkN8GB.js";import"./useField-VxKjSK4Y.js";import"./Button-0Xunpr60.js";import"./Hidden-SnJFNY5a.js";import"./useLabels-DkWQHrpu.js";import"./useButton-Au9jFQG2.js";import"./search-aQDuiQBz.js";import"./createLucideIcon-B3ctXaYi.js";import"./ClearButton-Dxknv4Gc.js";import"./Button-B1ILUDpZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-n073QgDi.js";import"./VisuallyHidden-CdWjTb8h.js";import"./x-B_wX4fA-.js";import"./FieldError-DXxOP3rc.js";import"./Text-CUe8uG9W.js";import"./Text-COf0hmuO.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
