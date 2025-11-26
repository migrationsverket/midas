import{S as s}from"./SearchField-B-mbuNtv.js";import"./iframe-DJhNi_-f.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C8VisnXZ.js";import"./utils-Do643h1j.js";import"./useLocalizedStringFormatter-DUAmzbz5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CGEfXXrj.js";import"./useFocusRing-CIQbBMgf.js";import"./index-DW_CeOSp.js";import"./index-BnbnG8Mx.js";import"./useFormValidation-DbRJxy_Q.js";import"./useField-BfEFq4ZS.js";import"./Button-Ca0cwykn.js";import"./Hidden-qjutHgwq.js";import"./useLabels-BKEV4xVA.js";import"./useButton-Cy4auwEY.js";import"./search-DtbSMfTX.js";import"./createLucideIcon--d2H5b3A.js";import"./Button-BJ539bZj.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Bk0a2hhK.js";import"./VisuallyHidden-DymIWSTG.js";import"./x-BB4FDb35.js";import"./FieldError-QYZw2O7I.js";import"./Text-B4M7ccT6.js";import"./Text-CU6r8O-i.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
