import{S as s}from"./SearchField-DpGeWtcY.js";import"./iframe-BUzSQYPC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DRPCclAj.js";import"./utils-Btzcj3N0.js";import"./useLocalizedStringFormatter-Df3fxnIS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CLCRB6R6.js";import"./useFocusRing-YU2uIjvV.js";import"./index-GFhdUWhY.js";import"./index-Co6p1tFH.js";import"./useFormValidation-De4Eb6_6.js";import"./useField-DI1Z0UEr.js";import"./Button-OR1vhKiL.js";import"./Hidden-BnEE9Gsk.js";import"./useLabels-cBc_DTaL.js";import"./useButton-DY9W__1v.js";import"./search-CavYy3-o.js";import"./createLucideIcon-DHyF6-IS.js";import"./Button-BNm8f_W9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DGyxLrTg.js";import"./VisuallyHidden-DxzlT-nw.js";import"./x-m8OdfwS0.js";import"./FieldError-Bhel02KK.js";import"./Text-Bd7HxiMM.js";import"./Text-Bj5T73Aj.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
