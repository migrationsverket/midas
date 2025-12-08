import{S as s}from"./SearchField-Barot8rj.js";import"./iframe-BY2_3lFS.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D242PxvH.js";import"./utils-DnCax-D0.js";import"./useLocalizedStringFormatter-DXd1hwbc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ef8YBt8L.js";import"./useFocusRing-DaJYhCLu.js";import"./index-Cd6P2FPg.js";import"./index-DsAQLNj2.js";import"./useFormValidation-CjxHFLWd.js";import"./useField-pVqBo1SF.js";import"./Button-_0WHvwFf.js";import"./Hidden-V6emqDRH.js";import"./useLabels-teOrTThM.js";import"./useButton-M1sf-acB.js";import"./search-DQvpuI_G.js";import"./createLucideIcon-CKXpjIL3.js";import"./Button-B_p_1c42.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DzVUglTs.js";import"./VisuallyHidden-Dt3RoQzb.js";import"./x-CWEDxy9Z.js";import"./FieldError-D-UB8LkT.js";import"./Text-C1EVzu2w.js";import"./Text-BuRtAqu6.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
