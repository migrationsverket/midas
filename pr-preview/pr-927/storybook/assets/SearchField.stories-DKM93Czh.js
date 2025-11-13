import{S as s}from"./SearchField-DrwF9deT.js";import"./iframe-CBYo7kOx.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DUwb5fNf.js";import"./utils-CQQdeSwH.js";import"./useLocalizedStringFormatter-CkQti2eL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D5Nk-OG4.js";import"./useFocusRing-pPubhNZo.js";import"./index-xwlOjluI.js";import"./index-DFpmMCSI.js";import"./useFormValidation-CEiuPnYr.js";import"./useField-BhhzVzfO.js";import"./Button-Y7Y0wc_X.js";import"./Hidden-Di33FxQR.js";import"./useLabels-B9_I_hZt.js";import"./useButton--YtF3u4m.js";import"./search-DhbaQ5wH.js";import"./createLucideIcon-dtR5yiUS.js";import"./Button-CUH9DE-U.js";import"./Button.module-CtQ1deO8.js";import"./x-Dd47j_Qm.js";import"./useLocalizedStringFormatter-DzN8djJl.js";import"./FieldError-C58NRRtK.js";import"./Text-BG1lNmg-.js";import"./Text-6Hj94soN.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
