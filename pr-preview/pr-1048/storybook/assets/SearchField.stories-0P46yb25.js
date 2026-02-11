import{S as s}from"./SearchField-Bjx9vq6u.js";import"./iframe-f5MFKuki.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DpRXGdPw.js";import"./utils-CkYTzifC.js";import"./useLocalizedStringFormatter-DvLnM0F6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DFa5MfZ1.js";import"./useFocusRing-D3kj-ql7.js";import"./index-K7RQRMNz.js";import"./index-CBu1rMHP.js";import"./useFormValidation-BvliZLgp.js";import"./useField-Oo0u04Fu.js";import"./Button-DuvywlRj.js";import"./Hidden-DBQGh8ME.js";import"./number-DfkVkf0F.js";import"./useLabels-7SDlHi18.js";import"./useButton-DT2Xmgs5.js";import"./search-CAySPF3R.js";import"./createLucideIcon-BR5g7LJ9.js";import"./ClearButton-CXRbZOXH.js";import"./Button-BxqYbrPc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BPMFMRiW.js";import"./VisuallyHidden-TWnsdG0a.js";import"./x-n2W0P4og.js";import"./FieldError-C3VFwJG_.js";import"./Text-DdMXnW5-.js";import"./Text-BnjALTAb.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
