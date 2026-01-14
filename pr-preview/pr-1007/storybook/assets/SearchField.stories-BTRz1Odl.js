import{S as s}from"./SearchField-CAMK3TGd.js";import"./iframe-JacAhoxH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-p5pbSUwu.js";import"./utils-CzU_JO7s.js";import"./useLocalizedStringFormatter-CwYPGFUg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D8hJgexU.js";import"./useFocusRing-spbXnPSy.js";import"./index-GcjV-LxB.js";import"./index-YZL0u5uz.js";import"./useFormValidation-BoVDv6Cp.js";import"./useField-DEF7di_w.js";import"./Button-8pJehvb2.js";import"./Hidden-TGIGvYu7.js";import"./useLabels-7kgjtqhP.js";import"./useButton-BIrYoUZu.js";import"./search-GWeN-SGS.js";import"./createLucideIcon-DGoL-s5C.js";import"./Button-BzRYHKPq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BG_WIZXv.js";import"./VisuallyHidden-TrlJd0AM.js";import"./x-nQG_nTms.js";import"./FieldError-B7rWxW-L.js";import"./Text-Edn7JPzd.js";import"./Text-MKVpmyfV.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
