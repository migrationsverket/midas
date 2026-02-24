import{S as s}from"./SearchField-DUELhm7p.js";import"./iframe-Cz8HHCXP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CGafyotv.js";import"./utils-CHHvFpL5.js";import"./useLocalizedStringFormatter-uYoPNXl-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C_mtJk_s.js";import"./useFocusRing-CifWSbR7.js";import"./index-ByLFS2_k.js";import"./index-DySfiLBO.js";import"./useFormValidation-BmxCMhME.js";import"./useField-DMkuuKjj.js";import"./Button-CyhSWA6k.js";import"./Hidden-DjfT0FF_.js";import"./useLabels-C0CZzmBW.js";import"./useButton-knBJS-If.js";import"./search-CoEwW4ws.js";import"./createLucideIcon-D0LCllt7.js";import"./ClearButton-B0A7KDUV.js";import"./Button-_rHSG3fZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BF9hqiyk.js";import"./VisuallyHidden-Bnafg7jN.js";import"./x-BGPJdTwu.js";import"./FieldError-CP8pZpTQ.js";import"./Text-C2eLHPBt.js";import"./Text-Ds9GT8qW.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
