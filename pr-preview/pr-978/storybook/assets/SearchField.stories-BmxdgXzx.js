import{S as s}from"./SearchField-mRQuaoBX.js";import"./iframe-Bu5WN3Ef.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-1KPKbDQX.js";import"./utils-BiJWA_3V.js";import"./useLocalizedStringFormatter-XgHPCMNy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CgTyDUfI.js";import"./useFocusRing-MCCMWjEG.js";import"./index-DaK77TxT.js";import"./index-pKua8EdO.js";import"./useFormValidation-Bml2n-Y0.js";import"./useField-Ceb9wNF7.js";import"./Button-CHgLdR4q.js";import"./Hidden-D12ThQaa.js";import"./useLabels-B6cgoF5h.js";import"./useButton-CWrQWViA.js";import"./search-CL_aoI2K.js";import"./createLucideIcon-CT9OvTIw.js";import"./Button-CsD82h12.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DyFvLZVg.js";import"./VisuallyHidden-B0tGfuXD.js";import"./x-CpFc5-1x.js";import"./FieldError-DLBMclUE.js";import"./Text-D6NDkbQ-.js";import"./Text-CSy2wCTo.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
