import{S as s}from"./SearchField-DYxP7xuC.js";import"./iframe-WZjYUZug.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dmj__v8P.js";import"./utils-41IgFTt3.js";import"./useLocalizedStringFormatter-BzhYOgrj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BZ6s1Euv.js";import"./useFocusRing-BhLet_pE.js";import"./index-DE2S3xCs.js";import"./index-bZw2_QEe.js";import"./useFormValidation-DSN2a0x4.js";import"./useField-ChkA15T1.js";import"./Button-ELQey9_7.js";import"./Hidden-DM5r5VXO.js";import"./useLabels-Db4OJvCS.js";import"./useButton-DnSOK5iD.js";import"./search-7K1l_TUH.js";import"./createLucideIcon-7p7juL6_.js";import"./Button-CADr4mbo.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BxtrdjQp.js";import"./VisuallyHidden-y2k8W_sW.js";import"./x-Cv2ylPsy.js";import"./FieldError-8QYALo9Q.js";import"./Text-CD5L3NGu.js";import"./Text-CbC6PGTn.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
