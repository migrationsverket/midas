import{S as s}from"./SearchField-BRJGNnnj.js";import"./iframe-DzpGAGRs.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cd4ZWdr1.js";import"./utils-DhQZEy20.js";import"./useLocalizedStringFormatter-Chv8IKjN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B2llEpVF.js";import"./useFocusRing-CBMZ-ulq.js";import"./index-RZDpPbNi.js";import"./index-COvdJqzc.js";import"./useFormValidation-CoLbxmFl.js";import"./useField-CDhzWcTA.js";import"./Button-DhsqVPF-.js";import"./Hidden-BamiLY6w.js";import"./useLabels-CnU9ekD0.js";import"./useButton-DgcuQT2f.js";import"./search-C63Bq4EB.js";import"./createLucideIcon-BvhlWCmI.js";import"./Button-zwkBBH84.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DclIrRz1.js";import"./VisuallyHidden-Bu_FxHbl.js";import"./x-oOrzlPsL.js";import"./FieldError-BJ6H7Ap3.js";import"./Text-DzINHNBQ.js";import"./Text-BciY5Tjq.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
