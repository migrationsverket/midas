import{S as s}from"./SearchField-BZvbzC67.js";import"./iframe-CXofTh8m.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C-iEYIDx.js";import"./utils-CcPRcp3b.js";import"./useLocalizedStringFormatter-B_DAMmIe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CMebTn5t.js";import"./useFocusRing-pwOFYrMc.js";import"./index-DgWjWihD.js";import"./index-DTbcmjmi.js";import"./useFormValidation-BkJ0C1px.js";import"./useField-CnOA2Ga6.js";import"./Button-Bg0rgDPQ.js";import"./Hidden-lT_vOSHT.js";import"./useLabels-Cee1PGsE.js";import"./useButton-Cf-orZyu.js";import"./search-BdPq3i7C.js";import"./createLucideIcon-BzjseAjj.js";import"./ClearButton-lCKYWw_W.js";import"./Button-CYd-XZXb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Do3rSOLA.js";import"./VisuallyHidden-Dc5QJa4d.js";import"./x-Brxl_cXa.js";import"./FieldError-gHbQTmmY.js";import"./Text-Dfh94ZCo.js";import"./Text-js5dDMWg.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
