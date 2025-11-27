import{S as s}from"./SearchField-DxjBvoxe.js";import"./iframe-8NxkOHC0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-xUvVHfPd.js";import"./utils-BjJTDc6K.js";import"./useLocalizedStringFormatter-Clupnulk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Hgp4FTY4.js";import"./useFocusRing-Ai_dklgC.js";import"./index-Dp_nq2C7.js";import"./index-C0eAkoQ8.js";import"./useFormValidation-DuZ8Mn8e.js";import"./useField-CH8AEZxT.js";import"./Button-CBX6q1X7.js";import"./Hidden-ARem1YbJ.js";import"./useLabels-BwvuP5Nn.js";import"./useButton-gPG0D9SS.js";import"./search-CLMjYOrf.js";import"./createLucideIcon-Zab4VPSU.js";import"./Button-be8rRcw-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-SobQoFpC.js";import"./VisuallyHidden-nH3VdIbm.js";import"./x-CizWcIUD.js";import"./FieldError-CzI3oRhH.js";import"./Text-CAM644I6.js";import"./Text-CFZh4J2g.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
