import{S as s}from"./SearchField-DxeLj6f2.js";import"./iframe-BqxXwJvW.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGI1N2va.js";import"./utils-B-LUwfNM.js";import"./useLocalizedStringFormatter-CfrYnOvZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BV3Nt8ev.js";import"./useFocusRing-DRB9GHUu.js";import"./index-DaPmNw3z.js";import"./index-DnASvcrD.js";import"./useFormValidation-B5-yItUz.js";import"./useField-DwRopjyw.js";import"./Button-C0pllIm8.js";import"./Hidden-Bzkr_wjp.js";import"./useLabels-DQzS7WhL.js";import"./useButton-Cj_RDJUs.js";import"./search-EgW4CKy6.js";import"./createLucideIcon-DAQszgUd.js";import"./ClearButton-v0HDUt3b.js";import"./Button-CY_lcceX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C4Z7JSsl.js";import"./VisuallyHidden-DQls1uVt.js";import"./x-BelE39Lb.js";import"./FieldError-BJ23uTJc.js";import"./Text-POKFtH9S.js";import"./Text-CN0Rba2k.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
