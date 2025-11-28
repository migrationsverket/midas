import{S as s}from"./SearchField-CyRRzeW7.js";import"./iframe-DTmGM0Lv.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BAsSmE__.js";import"./utils-C-Csm_HJ.js";import"./useLocalizedStringFormatter-D9SQN2sw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-3faV3wYV.js";import"./useFocusRing-_YauK2g0.js";import"./index-9zDrbBb1.js";import"./index-DKIj2TXJ.js";import"./useFormValidation-DlnAOivs.js";import"./useField-BBA-zNTz.js";import"./Button-DN-n-_G7.js";import"./Hidden-CaRTDRny.js";import"./useLabels-C5zC1qPP.js";import"./useButton-brZar4lw.js";import"./search-CjH8cPUE.js";import"./createLucideIcon-IkfxPgvv.js";import"./Button-DVo1A0DB.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-D7G7Bxto.js";import"./VisuallyHidden-BlCXdrZt.js";import"./x-vYF2MqhL.js";import"./FieldError-D7K2RoId.js";import"./Text-Crv0LT4D.js";import"./Text-Tc8CVOKC.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
