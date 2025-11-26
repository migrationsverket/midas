import{S as s}from"./SearchField-Bm5kRE2E.js";import"./iframe-D_RLRaO3.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BFob-p1I.js";import"./utils-BlqKQH7t.js";import"./useLocalizedStringFormatter-DNatSRRY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CNM1YrHg.js";import"./useFocusRing-DLvend6y.js";import"./index-BdZm9yDI.js";import"./index-CLauSptU.js";import"./useFormValidation-DdWaKx-M.js";import"./useField-BcNwyeKj.js";import"./Button-u0QZa7Fn.js";import"./Hidden-DFjx3PZR.js";import"./useLabels-D_fUya2Q.js";import"./useButton-D0Ww05Nb.js";import"./search-DKobjpMt.js";import"./createLucideIcon-tmDJTb0C.js";import"./Button-CmlIBVdc.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B7X7aezu.js";import"./VisuallyHidden-Bv5E6YOy.js";import"./x-D4f4_rt6.js";import"./FieldError-CLCPHxAE.js";import"./Text-BuBdqt_E.js";import"./Text-B2nU6iIt.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
