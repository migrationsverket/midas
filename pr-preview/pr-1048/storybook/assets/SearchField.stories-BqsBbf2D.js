import{S as s}from"./SearchField-b_Qj4RZp.js";import"./iframe-C0YgPd_X.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CoSP0aK4.js";import"./utils-Ci8FU_mO.js";import"./useLocalizedStringFormatter-DXSG4DWf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-yfWoYPMd.js";import"./useFocusRing-d4xeVmwI.js";import"./index-DR6-hAa4.js";import"./index-B1yuzVKX.js";import"./useFormValidation-DngJ6Ojw.js";import"./useField-CSv43KA5.js";import"./Button-XxkWRrW-.js";import"./Hidden-B7mLw12T.js";import"./useLabels-CDHVT8zI.js";import"./useButton-1PkuGq_I.js";import"./search-BnCF_NL6.js";import"./createLucideIcon-Btasiudw.js";import"./ClearButton-DnBu9QSF.js";import"./Button-CRNHL0rZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-eCcOY5R3.js";import"./VisuallyHidden-DgXH2cKS.js";import"./x-Ckyv5PDt.js";import"./FieldError-DPY80cAa.js";import"./Text-DmZIPz6e.js";import"./Text-CQgzeM0c.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
