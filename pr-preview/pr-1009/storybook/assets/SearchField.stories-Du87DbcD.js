import{S as s}from"./SearchField-qAD2u6vg.js";import"./iframe-B2hXki5s.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-77pcsCop.js";import"./utils-D-cZNYk5.js";import"./useLocalizedStringFormatter-CgQtT4cY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BgtOFUOF.js";import"./useFocusRing-HF0eSiIK.js";import"./index-DvCY6ndx.js";import"./index-nI6qS4bb.js";import"./useFormValidation-CtQu6qK-.js";import"./useField-Ckjgyi8D.js";import"./Button-CCrDbf-3.js";import"./Hidden-CxUrxLhM.js";import"./useLabels-DD9ZOY8B.js";import"./useButton-DA4tSPb8.js";import"./search-CJ3ydmC_.js";import"./createLucideIcon-CoTtBMM7.js";import"./ClearButton-B9hqXKpA.js";import"./Button-lNOPEuzW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DCY5sa9P.js";import"./VisuallyHidden-91aD8JD1.js";import"./x-B_8C5-wm.js";import"./FieldError-tZ4Rxwzl.js";import"./Text-CkCJ-ZN3.js";import"./Text-zXbuoED7.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
