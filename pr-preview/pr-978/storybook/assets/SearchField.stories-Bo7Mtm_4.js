import{S as s}from"./SearchField-BcZs5AIJ.js";import"./iframe-1f3rxXdd.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D9gyYFcQ.js";import"./utils-DTlh9C3r.js";import"./useLocalizedStringFormatter-BAZ5Qp5C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bc1Ua2E5.js";import"./useFocusRing-DN9l4SO_.js";import"./index-DeUdjjir.js";import"./index-B6Uo-J4R.js";import"./useFormValidation-DX1vEigH.js";import"./useField-uMYBRc_O.js";import"./Button-_mxlpwte.js";import"./Hidden-BXaTRR1s.js";import"./useLabels-DCQuJ-gm.js";import"./useButton-Dy6D2y1s.js";import"./search-a5P4FTNX.js";import"./createLucideIcon-R1tXtWjx.js";import"./Button-C8uwiZ4T.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dkjvqcq6.js";import"./VisuallyHidden-DMADwpeo.js";import"./x-J23rZ0Hf.js";import"./FieldError-D6PqbjM6.js";import"./Text-Bh_25_l1.js";import"./Text-_zCkEVaW.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
