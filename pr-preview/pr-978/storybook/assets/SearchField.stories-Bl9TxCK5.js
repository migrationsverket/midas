import{S as s}from"./SearchField-kN-jKLrg.js";import"./iframe-CGCgjv9i.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-A_vx62at.js";import"./utils-Bt4ULn4D.js";import"./useLocalizedStringFormatter-Bxh_j9iW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BF9KU1Je.js";import"./useFocusRing-D80GeW3r.js";import"./index-C0YjKPb6.js";import"./index-Dk2Lms7e.js";import"./useFormValidation-DOK9HYJ-.js";import"./useField-CDL7KZ6F.js";import"./Button-DDw9f5Fw.js";import"./Hidden-FwR3hI3q.js";import"./useLabels-C5YCHpdk.js";import"./useButton-CcaDOEc-.js";import"./search-BK9GeOPG.js";import"./createLucideIcon-BDDJ7gBf.js";import"./Button-Bq4ZJtTu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9GGJqnK.js";import"./VisuallyHidden-DbgfyS61.js";import"./x-D7cLG3R_.js";import"./FieldError-CYmT_Yg6.js";import"./Text-B5CcvPLj.js";import"./Text-D5VsxdHk.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
