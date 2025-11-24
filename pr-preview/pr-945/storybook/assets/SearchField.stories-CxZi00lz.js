import{S as s}from"./SearchField-D505ar48.js";import"./iframe-qwwZM-tE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B1hjZKLN.js";import"./utils-CE0AWIm4.js";import"./useLocalizedStringFormatter-C0HEB4Rj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BSqkbYPh.js";import"./useFocusRing-DVEbG0UH.js";import"./index-CUgyb0mk.js";import"./index-B0QkTLut.js";import"./useFormValidation-Z7RuVEfw.js";import"./useField-CrXgM-h6.js";import"./Button-LMtqtR6P.js";import"./Hidden-nIEH3jLZ.js";import"./useLabels-ygVPKbju.js";import"./useButton-BG0hBHNu.js";import"./search-BgCkdw6m.js";import"./createLucideIcon-DdrXPP-v.js";import"./Button-D_l512WF.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BG4Ct8V8.js";import"./VisuallyHidden-DuWmqszT.js";import"./x-dLBUgrRX.js";import"./FieldError-C6s0Sgvs.js";import"./Text-CjDFFRcJ.js";import"./Text-C5yJLujA.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
