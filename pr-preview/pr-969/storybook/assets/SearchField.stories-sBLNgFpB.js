import{S as s}from"./SearchField-B_N4D73i.js";import"./iframe-cjgaQTbV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-fnpb4ApR.js";import"./utils-B7obR6Um.js";import"./useLocalizedStringFormatter-Bja4yra-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DoqngYPp.js";import"./useFocusRing-tZdXTMa6.js";import"./index-CMBZFI91.js";import"./index-BuJptDJm.js";import"./useFormValidation-B16qkoBX.js";import"./useField-BZOCOk0a.js";import"./Button-Bc8n5vPI.js";import"./Hidden-BNDGTdgg.js";import"./useLabels-_lpRaq5N.js";import"./useButton-CJbE9EUu.js";import"./search-Dn26Du_Y.js";import"./createLucideIcon-B-E7-HZJ.js";import"./Button-CJqsJHUi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhHkNnmO.js";import"./VisuallyHidden-DFAX4X2F.js";import"./x-DPDdbP7_.js";import"./FieldError-DSvxWesv.js";import"./Text-DzSej0my.js";import"./Text-BAi7lGpW.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
