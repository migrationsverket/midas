import{S as s}from"./SearchField-DB9xphVv.js";import"./iframe-1vIqjnby.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Gd009-3T.js";import"./utils-DP4tvbox.js";import"./useLocalizedStringFormatter-CJVMb10g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DE97ZTSh.js";import"./useFocusRing-qKukOunu.js";import"./index-fb0U5xET.js";import"./index-CQziH2IA.js";import"./useFormValidation-CY-fO6eB.js";import"./useField-DHtH5iYa.js";import"./Button-I0OIDbhB.js";import"./Hidden-C6xvz5Aa.js";import"./useLabels-Cb18_xpb.js";import"./useButton-yhDvMx9o.js";import"./search-CeMyejFF.js";import"./createLucideIcon-BEyZRkKF.js";import"./Button-lao2U65D.js";import"./Button.module-CtQ1deO8.js";import"./x-D0NlZ6zO.js";import"./useLocalizedStringFormatter-CW75oDtM.js";import"./FieldError-cJah9zTn.js";import"./Text-D5j6OND1.js";import"./Text-xTP-Xoo1.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,j as __namedExportsOrder,T as default};
