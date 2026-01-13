import{S as s}from"./SearchField-in0YjvxA.js";import"./iframe-CVYuRL2L.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bfw16jnf.js";import"./utils-FalFx0_C.js";import"./useLocalizedStringFormatter-Caq8B-uR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BIlWM_lx.js";import"./useFocusRing-B7UqG5wX.js";import"./index-CIN53LEN.js";import"./index-DW6Gp5-3.js";import"./useFormValidation-C5eaxW-H.js";import"./useField-SLOTdrpb.js";import"./Button-fgPwWI64.js";import"./Hidden-7G--kRMd.js";import"./useLabels-C6aP1roI.js";import"./useButton-BemEUMtu.js";import"./search-cHIMym0b.js";import"./createLucideIcon-DJNnvE8I.js";import"./Button-B6nzWHQR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-De7XCe4t.js";import"./VisuallyHidden-BJW8H9GE.js";import"./x-7z9CXtj-.js";import"./FieldError-BIaXIYDe.js";import"./Text-fqYhQFX9.js";import"./Text-Cc7Ev4p7.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
