import{S as s}from"./SearchField-BkRlBOjX.js";import"./iframe-DnuCDSUx.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BTGs3Wlx.js";import"./utils-BCJeDJBm.js";import"./useLocalizedStringFormatter-hTpHsBhz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-H-8t7opC.js";import"./useFocusRing-CBqhz9c5.js";import"./index-BbskeeQH.js";import"./index-B7Z8Eyxh.js";import"./useFormValidation-DHcJOJz_.js";import"./useField-txGP6Hv2.js";import"./Button-DlLq5SIo.js";import"./Hidden-WrzVtlNW.js";import"./useLabels-vpNmVZYd.js";import"./useButton-rZTjLr54.js";import"./search-BFFpdYOE.js";import"./createLucideIcon-DLtu9yR0.js";import"./ClearButton-3wbXgWn_.js";import"./Button-dYVCYVgo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D6ETHzho.js";import"./VisuallyHidden-mqlBAgrk.js";import"./x-CumWaLE8.js";import"./FieldError-BbMD8n1O.js";import"./Text-C7HsrZUC.js";import"./Text-B2abyLCt.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
