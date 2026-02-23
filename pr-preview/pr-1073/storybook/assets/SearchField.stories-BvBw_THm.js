import{S as s}from"./SearchField-CyQbPvTJ.js";import"./iframe-BvaNkZ6j.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-B0rcsDrm.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-jnjho331.js";import"./utils-CNgJIKxW.js";import"./useLocalizedStringFormatter-DRG9aNFD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DTfItN5G.js";import"./useFocusRing-qCtyWvqN.js";import"./index-1t0eXXk7.js";import"./index-CU93jXVK.js";import"./useFormValidation-CFBRBLfT.js";import"./useField-DOL_aQHp.js";import"./Button-DSPwUnGO.js";import"./Hidden-D5Pu3QcA.js";import"./useLabels-COvNNRTy.js";import"./useButton-DkC5W3Ti.js";import"./search-BC9uW93Q.js";import"./createLucideIcon-C_AWNDAW.js";import"./ClearButton-DxCwQf5r.js";import"./Button-BwfGni6y.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B1tb5Rk6.js";import"./VisuallyHidden-QqUieSTF.js";import"./x-DiPLC0FF.js";import"./FieldError-CXm6_yyH.js";import"./Text-YlHeMW3d.js";import"./Text-Bnqxz3nE.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
