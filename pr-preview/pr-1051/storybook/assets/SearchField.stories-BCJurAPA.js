import{S as s}from"./SearchField-BRPoJXXO.js";import"./iframe-xM6GPlxZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C_N3S3lP.js";import"./utils-BWmJmXij.js";import"./useLocalizedStringFormatter-CX9bacHe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-JUSGFZfG.js";import"./useFocusRing-QfzGUTUK.js";import"./index-Cg05t2G5.js";import"./index-DC2xKSlP.js";import"./useFormValidation-6nG_QMyJ.js";import"./useField-DhjOGZIF.js";import"./Button-D0EwoScf.js";import"./Hidden-CNNVQzIs.js";import"./useLabels-C6Mi33Cz.js";import"./useButton-CI69bHTl.js";import"./search-CX_WidYH.js";import"./createLucideIcon-D-PEwym-.js";import"./ClearButton-CpeijWgy.js";import"./Button-CKxI1r1_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfPLxaXy.js";import"./VisuallyHidden-Ck-DDgGV.js";import"./x-Bs38igXL.js";import"./FieldError-CI525PUG.js";import"./Text-eaDz3eV1.js";import"./Text-CHMvJdTr.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
