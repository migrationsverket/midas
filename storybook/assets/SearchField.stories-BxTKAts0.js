import{S as s}from"./SearchField-CWuvILPV.js";import"./iframe-D0Ebfh30.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DnMbAmQG.js";import"./utils-HMZMjbfe.js";import"./useLocalizedStringFormatter-D3idiCWs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D52sJq39.js";import"./useFocusRing-B7feqinX.js";import"./index-DEZ4pZ8U.js";import"./index-hoemp_fb.js";import"./useFormValidation-DfON3Cpr.js";import"./useField-mjK8xeaJ.js";import"./Button-C5q_bVXl.js";import"./Hidden-CZL81F2Z.js";import"./useLabels-Dw4NTpgb.js";import"./useButton-RhvsfLc2.js";import"./search-CIk7r-rX.js";import"./createLucideIcon-CdE5-Po6.js";import"./ClearButton-CXXir44S.js";import"./Button-DpyS-bWo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CtniQXCD.js";import"./VisuallyHidden-O6H9xmHX.js";import"./x-BvLcmEC0.js";import"./FieldError-CVFSCD0p.js";import"./Text-QgdY8FFj.js";import"./Text-BdJ9wmlp.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
