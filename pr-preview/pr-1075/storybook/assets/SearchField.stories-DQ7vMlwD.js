import{S as s}from"./SearchField-B1DqgLL7.js";import"./iframe-DJytE9jg.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-_v_byBHa.js";import"./utils-VHUq0skz.js";import"./useLocalizedStringFormatter-CxnQTRGL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CUl71Zcl.js";import"./useFocusRing-Vnrwenoe.js";import"./index-B-f9OSEP.js";import"./index-PioAU-tD.js";import"./useFormValidation-DfqdalkR.js";import"./useField-B0waFkY3.js";import"./Button-CVNkhFVY.js";import"./Hidden-DKrVS7N8.js";import"./useLabels-CkATJGoJ.js";import"./useButton-CQ5agqnn.js";import"./search-DaszBRVL.js";import"./createLucideIcon-BQp7PZIZ.js";import"./ClearButton-BUynl046.js";import"./Button-C9t41CsC.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DspRbcc6.js";import"./VisuallyHidden-CffJ4x8N.js";import"./x-ClmUGKux.js";import"./FieldError-B3osPoIK.js";import"./Text-Bdh14pRr.js";import"./Text-DlvIzI2Z.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
