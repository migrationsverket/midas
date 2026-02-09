import{S as s}from"./SearchField-BZklRBAd.js";import"./iframe-DVQ0lchi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CVbkXYHz.js";import"./utils-D9gSMjNq.js";import"./useLocalizedStringFormatter-BgI6hB3-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DdEYnQrI.js";import"./useFocusRing-BK_0R4Cd.js";import"./index-Cj7CZlN3.js";import"./index-BwU4zFag.js";import"./useFormValidation-DsVKrsU7.js";import"./useField-CAm7Tj1f.js";import"./Button-wRPSXeW1.js";import"./Hidden-CFa_YiSP.js";import"./useLabels-DHWU2EjP.js";import"./useButton-7QHFLhkI.js";import"./search-B4BtZPeE.js";import"./createLucideIcon-C72qyWqC.js";import"./ClearButton-BSWUTsAw.js";import"./Button-UCEzLs7l.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DL9CCeFC.js";import"./VisuallyHidden-D9m3MBoK.js";import"./x-BawT75ci.js";import"./FieldError-BZ5WZxgy.js";import"./Text-BT_jL1TS.js";import"./Text-CG8-q4rG.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
