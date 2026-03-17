import{S as s}from"./SearchField-DYySuNF_.js";import"./iframe--IbK7uvL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-xHQ8O9W1.js";import"./utils-CA7lVtot.js";import"./useLocalizedStringFormatter-Dg5HXGYt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CjddA_Zz.js";import"./useFocusRing-D2xoM2VM.js";import"./index-BZz7yXlj.js";import"./index-CXKCK8P0.js";import"./useFormValidation-CKM46q2q.js";import"./useField-CsTm_RNd.js";import"./Button-Re0Yy6Pp.js";import"./Hidden-BExZVod8.js";import"./useLabels-rslA135_.js";import"./useButton-Cojk1q0i.js";import"./search-D5S8-feP.js";import"./createLucideIcon-CZI6jzSG.js";import"./ClearButton-KZ3k3KFN.js";import"./x-CRmhj2OD.js";import"./Button-BYHfDOH9.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dr2L-_6O.js";import"./VisuallyHidden-CYG4Jpuo.js";import"./FieldError-C7TTOr5D.js";import"./Text-fLskqfUb.js";import"./Text-qvWOJ16d.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
