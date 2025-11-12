import{S as s}from"./SearchField-C0Ps-4ao.js";import"./iframe-Cjrlzh3H.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D7BOsOAW.js";import"./utils-CuTptj1-.js";import"./useLocalizedStringFormatter-BG0SYhYk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BzNd5BGm.js";import"./useFocusRing-1xU_Qusa.js";import"./index-DXVX_pBX.js";import"./index-DF80V0P0.js";import"./useFormValidation-ECz5jMJZ.js";import"./useField-DCRzP6ar.js";import"./Button-DMFEHXPJ.js";import"./Hidden-C0Y7LQUz.js";import"./useLabels-VB_Q-W40.js";import"./useButton-BTUGUDje.js";import"./search-CVbUTM_P.js";import"./createLucideIcon-BkgNquZM.js";import"./Button-Cenw66Ks.js";import"./Button.module-CtQ1deO8.js";import"./x-B2cnKvIo.js";import"./useLocalizedStringFormatter-jDeIXcGB.js";import"./FieldError-CX25NBUn.js";import"./Text-BIGnKIDS.js";import"./Text-CEpVYdQN.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
