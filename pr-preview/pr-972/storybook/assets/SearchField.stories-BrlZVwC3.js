import{S as s}from"./SearchField-evOoUEdJ.js";import"./iframe-NQwQ8Ipc.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C5kK2k2z.js";import"./utils-CagmBR4h.js";import"./useLocalizedStringFormatter-Cw0M4ILW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CIuWwWbd.js";import"./useFocusRing-ChWSchxP.js";import"./index-D5MLpHUU.js";import"./index-Cvu387iz.js";import"./useFormValidation-C3YSdpOu.js";import"./useField-Dfen7gtH.js";import"./Button-BD9SwyBt.js";import"./Hidden-CMhcaOTC.js";import"./useLabels-B0KRHn3k.js";import"./useButton-CEbDpz1S.js";import"./search-DHoW9VvQ.js";import"./createLucideIcon-pmY9-a6l.js";import"./Button-CDPGYKZu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B5C2l5IJ.js";import"./VisuallyHidden-DcGuHUr7.js";import"./x-BAa2SIzJ.js";import"./FieldError-aq8gcakB.js";import"./Text-C_uAOKRC.js";import"./Text-YxgCEkkP.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
