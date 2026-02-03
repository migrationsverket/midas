import{S as s}from"./SearchField-BM2h5q0s.js";import"./iframe-DLQn-qTm.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BZ3KbGsu.js";import"./utils-BseBzJWz.js";import"./useLocalizedStringFormatter-BJIt3lYB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CFtEHhuy.js";import"./useFocusRing-Do74QKH1.js";import"./index-BkZE1OTB.js";import"./index-C8Zl_Tv7.js";import"./useFormValidation--qOyb23-.js";import"./useField-BOmmNrOA.js";import"./Button-DYd3H_n-.js";import"./Hidden-CNhpunQg.js";import"./useLabels-DyMy7daN.js";import"./useButton-C2eCHCKv.js";import"./search-C7ze-4M1.js";import"./createLucideIcon-Dlil2oPf.js";import"./ClearButton-Ch9984kl.js";import"./Button-ChhODU99.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CJPUWmDD.js";import"./VisuallyHidden--4vyVQ1_.js";import"./x-BhU4g9X0.js";import"./FieldError-DhgEtkJ4.js";import"./Text-CuFotw1d.js";import"./Text-CjwNLSIP.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
