import{S as s}from"./SearchField-2pYqtt4k.js";import"./iframe-QDSUgBpo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-0ntZUwbV.js";import"./utils-DvLern-H.js";import"./useLocalizedStringFormatter-BuFmuI1y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DiPOIOEe.js";import"./useFocusRing-DJFUjDnL.js";import"./index-BF2Mp0-C.js";import"./index-DczpGf_O.js";import"./useFormValidation-D9lbBzHN.js";import"./useField-H3aLMADt.js";import"./Button-C3ndRLHV.js";import"./Hidden-BN-CZ8Az.js";import"./useLabels-EtKw0NwM.js";import"./useButton-Ca39907a.js";import"./search-CVgaiBsl.js";import"./createLucideIcon-awWdQq2I.js";import"./ClearButton-Blpe83rv.js";import"./x-DQSWlImf.js";import"./Button-B_32-CvO.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CpELJUen.js";import"./VisuallyHidden-RUty4LXR.js";import"./FieldError-BkvFLAiM.js";import"./Text-CvZZMQm8.js";import"./Text-DR2iN84k.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
