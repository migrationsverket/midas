import{S as s}from"./SearchField-DsTDIK2s.js";import"./iframe-T-9iVXG3.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BoI1WaNw.js";import"./utils-B3genDNz.js";import"./useLocalizedStringFormatter-xdS-2W0d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-MoqdZUk0.js";import"./useFocusRing-BDfuXA1K.js";import"./index-B-KcomW3.js";import"./index-DLcbmtBd.js";import"./useFormValidation-Dv3Ujp-e.js";import"./useField-CtRZfu8w.js";import"./Button-C-dW1ric.js";import"./Hidden-gSpfVWl-.js";import"./useLabels-CRqI88gG.js";import"./useButton-D49MhIWL.js";import"./search-DVchn_o-.js";import"./createLucideIcon-qLu_u4fs.js";import"./ClearButton-DnKB6xkO.js";import"./x-Cs-J8gEx.js";import"./Button-LHNpYI0v.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-WowMA0AY.js";import"./VisuallyHidden-CO4c4_3Y.js";import"./FieldError-B3mWOyJN.js";import"./Text-B_uJS0BB.js";import"./Text-DqB5EYwf.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
