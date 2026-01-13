import{S as s}from"./SearchField-wQZeymTp.js";import"./iframe-B91-x9Zu.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BrOLRbiU.js";import"./utils-BDq5TyEB.js";import"./useLocalizedStringFormatter-tMYY7oTH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-F9r4DyAD.js";import"./useFocusRing-CVRmAsyH.js";import"./index-BXX4d8bD.js";import"./index-DN9ppUS7.js";import"./useFormValidation-B6kHCZJ0.js";import"./useField-DuGzXB7t.js";import"./Button-DX88RyMP.js";import"./Hidden-BYWp7QJL.js";import"./useLabels-Dwk7hNIX.js";import"./useButton-DST6NVbU.js";import"./search-myS9a-JT.js";import"./createLucideIcon-BFyGBevv.js";import"./Button-BHZ4Xr_y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C0-nSA3b.js";import"./VisuallyHidden-rbN5cvZ7.js";import"./x-CKESvSm0.js";import"./FieldError-CWETj3Vl.js";import"./Text-BfJqqx0j.js";import"./Text-Dax5tWzo.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
