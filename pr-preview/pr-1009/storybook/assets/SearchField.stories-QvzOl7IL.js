import{S as s}from"./SearchField-DqY1XSRO.js";import"./iframe-DCfJfaw9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CUvbN5NM.js";import"./utils-CqvO6KXE.js";import"./useLocalizedStringFormatter-D4155cJ9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CJaawfmA.js";import"./useFocusRing-7l2a3qeL.js";import"./index-DpFfOAB-.js";import"./index-CXk62c72.js";import"./useFormValidation-BaNJ2jR_.js";import"./useField-CiSkahL8.js";import"./Button-Dkr17r5b.js";import"./Hidden-BCNvKZUC.js";import"./useLabels-DoN94B0X.js";import"./useButton-CwqsyX1R.js";import"./search-Bv5pyFHM.js";import"./createLucideIcon-Bs2c2aOV.js";import"./Button-V9Ueln0f.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9mdIa23.js";import"./VisuallyHidden-Bc10YnsJ.js";import"./x-BohAPrtb.js";import"./FieldError-nGE6oTAK.js";import"./Text-VXJMN6tP.js";import"./Text-Bpd7w9CS.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
