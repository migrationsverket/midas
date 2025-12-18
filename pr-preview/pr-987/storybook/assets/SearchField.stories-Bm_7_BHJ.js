import{S as s}from"./SearchField-CZeqbGjv.js";import"./iframe-BXluW0qw.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DQw7CMNY.js";import"./utils-qhqCas48.js";import"./useLocalizedStringFormatter-D2jEh7gz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C3NjQCuZ.js";import"./useFocusRing-hYKFtLyc.js";import"./index-Cz-tQ20r.js";import"./index-Czak5Xsp.js";import"./useFormValidation-DbID4Z4G.js";import"./useField-DWbyryzg.js";import"./Button-D751rG_Q.js";import"./Hidden-Dj90_01P.js";import"./useLabels-D-uykTL3.js";import"./useButton-sK7GQKK3.js";import"./search-D8wG3Zb5.js";import"./createLucideIcon-CuvupPzO.js";import"./Button-BBVzxyIb.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-C8r3sehO.js";import"./VisuallyHidden-BRFl4D4u.js";import"./x-CRtOwHXc.js";import"./FieldError-DkGWPtYI.js";import"./Text-D4saPv-u.js";import"./Text-jsh445C9.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
