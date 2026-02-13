import{S as s}from"./SearchField-CD6LSez4.js";import"./iframe-CmPG4FoB.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DykEM3ap.js";import"./utils-BAAQ8UkA.js";import"./useLocalizedStringFormatter-BgmHW-Xx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DSNR_uxW.js";import"./useFocusRing-Cb7-V4u2.js";import"./index-B72qOhyX.js";import"./index-CWU1EcPI.js";import"./useFormValidation-D90F9Ft3.js";import"./useField-0rPxrk8p.js";import"./Button-BopS93OI.js";import"./Hidden-BRolh-uL.js";import"./useLabels-8sZBmGn_.js";import"./useButton-MazVA7qC.js";import"./search-CI8MaTGd.js";import"./createLucideIcon-BxIqJcJw.js";import"./ClearButton-MifWGxo7.js";import"./Button-ryGeYMAs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C9Gk6SCX.js";import"./VisuallyHidden-Du1fTxZa.js";import"./x-FrzhBZNc.js";import"./FieldError-BBtlti2J.js";import"./Text-Cy2IEGkF.js";import"./Text-C8u6JSGZ.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
