import{S as s}from"./SearchField-yKW3kP2O.js";import"./iframe-Bwfgw8pk.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-iPtiFsr4.js";import"./utils-BYZTfypc.js";import"./useLocalizedStringFormatter-CQ1hUGUd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DzJC1fGe.js";import"./useFocusRing-cRFXK4sJ.js";import"./index-D1I53Bzg.js";import"./index-VSa-88v0.js";import"./useFormValidation-Szp1BRKK.js";import"./useField-DeuwejZf.js";import"./Button-BsV8k1dg.js";import"./Hidden-C55orz_R.js";import"./useLabels-BW9zsbr2.js";import"./useButton-CETvSTMc.js";import"./search-DMZItRWB.js";import"./createLucideIcon-BSOfHJOH.js";import"./ClearButton-RAPd_-vH.js";import"./x-CMFzoPcG.js";import"./Button-Cc79re0B.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Du3bV9_E.js";import"./VisuallyHidden-B9CGtyyD.js";import"./FieldError-rZWlknNl.js";import"./Text-CHrquvV0.js";import"./Text-COMr0RdB.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
