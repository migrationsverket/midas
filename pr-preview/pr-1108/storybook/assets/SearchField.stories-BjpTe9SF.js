import{S as s}from"./SearchField-Dv3pTISB.js";import"./iframe-DJvMsPK5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C3uqw8vh.js";import"./utils-esTkTgMr.js";import"./useLocalizedStringFormatter-yOW7xoG5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dp4GhZTt.js";import"./useFocusRing-D6tEw859.js";import"./index-Ipi0mz-M.js";import"./index-B3xZpXqe.js";import"./useFormValidation-C29k_zHA.js";import"./useField-Dg6SxeU5.js";import"./Button-DaEctwPE.js";import"./Hidden-C5_NTDOk.js";import"./useLabels-C9xCPnuW.js";import"./useButton-D9q_HuIm.js";import"./search-DFjnPend.js";import"./createLucideIcon-Cs-gIZHj.js";import"./ClearButton-Ddy5zb8W.js";import"./x-DBtm1AH7.js";import"./Button-BLuDdZMx.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C4ywwRp4.js";import"./VisuallyHidden-DGcwd28E.js";import"./FieldError-CQm3X7MS.js";import"./Text-DIS3P1po.js";import"./Text-CLEP5l2l.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
