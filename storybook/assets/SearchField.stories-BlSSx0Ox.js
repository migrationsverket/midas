import{S as s}from"./SearchField-D_jGD35m.js";import"./iframe-CHgot2X7.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CTq5bkOP.js";import"./utils-DQgfFqY2.js";import"./useLocalizedStringFormatter-BwcUD0xm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0Ajqqzx.js";import"./useFocusRing-DV-BAEmR.js";import"./index-CmxdV0gr.js";import"./index-BY5gyNOq.js";import"./useFormValidation-v3AvI7jc.js";import"./useField-BZRMc2W1.js";import"./Button-0zMY2rUc.js";import"./Hidden-CqaFLcD3.js";import"./useLabels-XlyeLMQd.js";import"./useButton-DTMPsQ98.js";import"./search-BzlAuhUD.js";import"./createLucideIcon-Bs877ZR1.js";import"./ClearButton-DExZ4tR4.js";import"./Button-CgoLRGMY.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DCHR-uXl.js";import"./VisuallyHidden-D0onDKtY.js";import"./x-C_oBXl7X.js";import"./FieldError-BKJs5LOX.js";import"./Text-DCyFtYSi.js";import"./Text-CLrr9WjV.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
