import{S as s}from"./SearchField-KiXXEjOn.js";import"./iframe-no9CntvV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DxYknQDv.js";import"./utils-B6AasQkX.js";import"./useLocalizedStringFormatter-BdwuPI9T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dd6YmX9K.js";import"./useFocusRing-pveG4jA-.js";import"./index-DvXDbTU2.js";import"./index-DEYREeZj.js";import"./useFormValidation-CFAIF2Ue.js";import"./useField-Cd0Sc82B.js";import"./Button-Deq-w1A_.js";import"./Hidden-CFcjd9Ye.js";import"./useLabels-BIymkZE6.js";import"./useButton-C4GsfKwP.js";import"./search-Boogb9dT.js";import"./createLucideIcon-DGuN_Rm2.js";import"./Button-LFMtXpU7.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dz0tCMy5.js";import"./VisuallyHidden-BIFAjTF4.js";import"./x-BdQk_ya-.js";import"./FieldError-sDyen7ng.js";import"./Text-BpKcKBtM.js";import"./Text-BGa0l0Rh.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
