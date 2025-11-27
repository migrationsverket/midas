import{S as s}from"./SearchField-CISX1YlX.js";import"./iframe-CwLkjgpT.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-aJ_MxFDE.js";import"./utils-DSWzARDZ.js";import"./useLocalizedStringFormatter-4a_u7Il3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BI3tjPnv.js";import"./useFocusRing-DAwt605V.js";import"./index-DksoI_g-.js";import"./index-B5Ydvek1.js";import"./useFormValidation-DYTV0QoP.js";import"./useField-Bu-u-nKx.js";import"./Button-CQyRRKMW.js";import"./Hidden-DdX0U8LA.js";import"./useLabels-C8OlSCO5.js";import"./useButton-BS52WYPg.js";import"./search-CgAPCZK1.js";import"./createLucideIcon-DeGNxWTw.js";import"./Button-DtGuvUjf.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BIv7akwD.js";import"./VisuallyHidden-DcUNvP8l.js";import"./x-717PqAvY.js";import"./FieldError-DGr3c4Fy.js";import"./FieldError-D0HGPYoR.js";import"./Text-BZsBZWaE.js";import"./Text-BQIFYXN4.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
