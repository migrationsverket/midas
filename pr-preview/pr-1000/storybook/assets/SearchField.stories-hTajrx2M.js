import{S as s}from"./SearchField-B4sQRebc.js";import"./iframe-BQrtIPmh.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BehPunq_.js";import"./utils-BS6sXZRH.js";import"./useLocalizedStringFormatter-aBffhIh6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CldOBuyi.js";import"./useFocusRing-y2IKkZpt.js";import"./index-YT1oLI7a.js";import"./index-4QHcSQc6.js";import"./useFormValidation-VEshaC1X.js";import"./useField-DnmfTmmv.js";import"./Button-CwSqfpei.js";import"./Hidden-ChFGCUwp.js";import"./useLabels-B8OZel6J.js";import"./useButton-Bq3twKx0.js";import"./search-DwsYz8Vf.js";import"./createLucideIcon-j47tDFs8.js";import"./Button-of3UeUzt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DkVOPURc.js";import"./VisuallyHidden-KB2QFTLi.js";import"./x-CzVH8xnQ.js";import"./FieldError-DxXo_lqN.js";import"./Text-COf1Fc6Q.js";import"./Text-Ar7CbXL2.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
