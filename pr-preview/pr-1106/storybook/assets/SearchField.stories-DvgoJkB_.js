import{S as s}from"./SearchField-CQEZE-SM.js";import"./iframe-DNJYs6qz.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CtAp0QIN.js";import"./utils-aX0iHzRl.js";import"./useLocalizedStringFormatter-CFHnDqzL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B8P53YXq.js";import"./useFocusRing-CX_Euf5u.js";import"./index-DAO1nJ__.js";import"./index--Rga-YK_.js";import"./useFormValidation-0nAA1zAL.js";import"./useField-CxoJpysk.js";import"./Button-CZyV5Mpk.js";import"./Hidden-CpGOqaLl.js";import"./useLabels-3Hv0LYEO.js";import"./useButton-W-teLibw.js";import"./search-Bu3j4iqV.js";import"./createLucideIcon-BSLbnE3k.js";import"./ClearButton-CLiksIjR.js";import"./x-4zOHDniK.js";import"./Button-DOGWCVYm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CUnRcS0k.js";import"./VisuallyHidden-BjCBN869.js";import"./FieldError-BrrWeg-t.js";import"./Text-DnOEsXYA.js";import"./Text-DlzD_a6_.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
