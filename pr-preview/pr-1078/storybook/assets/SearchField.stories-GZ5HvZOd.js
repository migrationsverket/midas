import{S as s}from"./SearchField-Cw6npQMm.js";import"./iframe-Y9Fx-e1B.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dt63NuRp.js";import"./utils-tjsFOw4T.js";import"./useLocalizedStringFormatter-Cz-yREfr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cb1_A-1n.js";import"./useFocusRing-DMFWV4N3.js";import"./index-rl_t3oro.js";import"./index-CoUwmbWb.js";import"./useFormValidation-BeD7naen.js";import"./useField-T8mwG7bw.js";import"./Button-C7bYDuo2.js";import"./Hidden-C5yYJ2g8.js";import"./useLabels-D5SCo0gw.js";import"./useButton-BIY4kkQ2.js";import"./search-BHFfGKAg.js";import"./createLucideIcon-CkeYV7Jq.js";import"./ClearButton-DyZF6Vfo.js";import"./Button-k0gPOjAM.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CKHZ7v8y.js";import"./VisuallyHidden-uQrH2dzx.js";import"./x-CxSKMliu.js";import"./FieldError-BP9Y13vD.js";import"./Text-Rwl3gWWv.js";import"./Text-By_wui5t.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
