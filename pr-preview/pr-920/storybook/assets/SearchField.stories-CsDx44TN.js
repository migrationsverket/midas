import{S as s}from"./SearchField-DOohuXeR.js";import"./iframe-DmzrtX3u.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C4k0njb5.js";import"./utils-Oc8X9Dut.js";import"./useLocalizedStringFormatter-CNEzkPvm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-lbt2Meqw.js";import"./useFocusRing-DiXFM6IK.js";import"./index-DK6gMfte.js";import"./index-DRO8jrzk.js";import"./useFormValidation-BUBxaK0p.js";import"./useField-CDS7IwME.js";import"./Button-D1_GOLvy.js";import"./Hidden-DYOxjREs.js";import"./useLabels-LOtlQFBi.js";import"./useButton-DTNBbrec.js";import"./search-aNxVeDis.js";import"./createLucideIcon-d42gtct_.js";import"./Button-DBXHyq-A.js";import"./Button.module-CtQ1deO8.js";import"./x-h_g8GD-U.js";import"./useLocalizedStringFormatter-C4X_axr3.js";import"./FieldError-8YrpNVDd.js";import"./Text-CUUMtVou.js";import"./Text-4zuef1by.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
