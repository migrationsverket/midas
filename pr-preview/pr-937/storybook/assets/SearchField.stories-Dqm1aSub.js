import{S as s}from"./SearchField-D3Xv10Pc.js";import"./iframe-DUeAI7tp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DBJr3GmL.js";import"./utils-CvLaDxIV.js";import"./useLocalizedStringFormatter-AYWN_0qc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BilulsL9.js";import"./useFocusRing-DorgMgHM.js";import"./index-yRPl9svU.js";import"./index-Dz_PiMJv.js";import"./useFormValidation-CpoUnyRZ.js";import"./useField-_gYDHUtu.js";import"./Button-CJuM9N5t.js";import"./Hidden-COQ8gpNg.js";import"./useLabels-CvUTJeh5.js";import"./useButton-yeWcga3Z.js";import"./search-DzPnsYPr.js";import"./createLucideIcon-CDd_qO2R.js";import"./Button-8U8D-1-N.js";import"./Button.module-CtQ1deO8.js";import"./x-BB0vYnMs.js";import"./useLocalizedStringFormatter-GLM_LUc3.js";import"./FieldError-DUhQF5jP.js";import"./Text-DQm2ChpK.js";import"./Text-J32TKqmz.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
