import{S as s}from"./SearchField-vKDQUMwC.js";import"./iframe-DHh65h_D.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DdJfUtoQ.js";import"./utils-CRlJIqN4.js";import"./useLocalizedStringFormatter-Bh-F6CwF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BW7cdks7.js";import"./useFocusRing-DqzDzWve.js";import"./index-D9l5_NrD.js";import"./index-BqXLjEuD.js";import"./useFormValidation-BJjf4415.js";import"./useField-XK7JKHI0.js";import"./Button-6YV4W2NZ.js";import"./Hidden-CS2nm6ao.js";import"./useLabels-q87dcIcB.js";import"./useButton-BBt2Ci9q.js";import"./search-D_En3RdA.js";import"./createLucideIcon-jDUATHN8.js";import"./Button-zcv_I1lF.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BX3F0Xrm.js";import"./VisuallyHidden-B2VGaWGX.js";import"./x-C4sM-r3i.js";import"./FieldError-CZOLFkPk.js";import"./Text-B6OtYudP.js";import"./Text-2-9fHpSD.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
