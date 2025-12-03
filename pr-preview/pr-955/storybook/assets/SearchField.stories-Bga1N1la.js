import{S as s}from"./SearchField-BnODQpOQ.js";import"./iframe-DKD8Hhkt.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CoGFVVHL.js";import"./utils-MI8bpwWe.js";import"./useLocalizedStringFormatter-tIc5njIq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BzAO9kcf.js";import"./useFocusRing-DaRRNwj-.js";import"./index-BBc3oC3v.js";import"./index-CbSysqEM.js";import"./useFormValidation-Btmt3NPi.js";import"./useField-C9ctWP7M.js";import"./Button-BwBVmhGW.js";import"./Hidden-DPLxNawq.js";import"./useLabels-C8mFIlFg.js";import"./useButton-sutBB3el.js";import"./search-LgFLq8qA.js";import"./createLucideIcon-BawZSGby.js";import"./Button-CPOu634C.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DNj3ahoN.js";import"./VisuallyHidden-9B-wHDrP.js";import"./x-BpPOBZFj.js";import"./FieldError-bIrBWj8O.js";import"./Text-CAhqk-DI.js";import"./Text-CEobg6V0.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
