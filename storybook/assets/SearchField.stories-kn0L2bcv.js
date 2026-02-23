import{S as s}from"./SearchField-Knskfsei.js";import"./iframe-Cbh3F7pN.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-uXXYD64-.js";import"./utils-B6nDWoar.js";import"./useLocalizedStringFormatter-BVvUHgZV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B5b4c9ob.js";import"./useFocusRing-B0tiiTm0.js";import"./index-DKv0hklz.js";import"./index-PVDloiUR.js";import"./useFormValidation-ywxX9cB6.js";import"./useField-Y78HnPPL.js";import"./Button-DEZpBGis.js";import"./Hidden-TWGzSEdN.js";import"./useLabels-CQRwDIC4.js";import"./useButton-XVEb300a.js";import"./search-BUSb9S0a.js";import"./createLucideIcon-CTZlH8w0.js";import"./ClearButton-BN_kqERe.js";import"./Button-C16sAu0x.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CZ4FMEFa.js";import"./VisuallyHidden-BEwci_em.js";import"./x-8XS1xjRr.js";import"./FieldError-CYIfSeeW.js";import"./Text-CjLYei0G.js";import"./Text-CQjCgd7X.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
