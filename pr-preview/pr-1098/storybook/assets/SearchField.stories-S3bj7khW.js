import{S as s}from"./SearchField-DXCrcDjH.js";import"./iframe-C2Yyxb_o.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cdg6EvLr.js";import"./utils-WFtffLiW.js";import"./useLocalizedStringFormatter-BR3z1GcU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-dCbEBezK.js";import"./useFocusRing-nMTXWlTy.js";import"./index-DNvvTP-Y.js";import"./index-DURILlkI.js";import"./useFormValidation-C7BWwups.js";import"./useField-_oAE-yI6.js";import"./Button-BIrUuJFL.js";import"./Hidden-DgX5eHvD.js";import"./useLabels-BZQhvLB1.js";import"./useButton-COo6uvE9.js";import"./search-yRcRnnJw.js";import"./createLucideIcon-CfyIEXzg.js";import"./ClearButton-BhszuIxa.js";import"./x-DfcaNs2P.js";import"./Button-BQqfifzb.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cbipm8_N.js";import"./VisuallyHidden-B7F_lxL0.js";import"./FieldError-C6hW-3rq.js";import"./Text-Dt7S0YjD.js";import"./Text-CeM-jeK1.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
