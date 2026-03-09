import{S as s}from"./SearchField-DSnBv9D1.js";import"./iframe-CWutqfKR.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BVGmSD4F.js";import"./utils-qZdmNmO1.js";import"./useLocalizedStringFormatter-TUhhiYru.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CUWSY0RD.js";import"./useFocusRing-BuUfrlQY.js";import"./index-B_sF5hyi.js";import"./index-CvMFxXqB.js";import"./useFormValidation-Db_RhjoB.js";import"./useField-BwhXtUtI.js";import"./Button-BnWrQLFg.js";import"./Hidden-MRIgxKO_.js";import"./useLabels-CV5H4iTO.js";import"./useButton-_SFucHjZ.js";import"./search-DKhnDP8B.js";import"./createLucideIcon-CEH_8uo-.js";import"./ClearButton-DKhsMHm8.js";import"./Button-CRDZmgjm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-7pnUr10b.js";import"./VisuallyHidden-D9EFy6-j.js";import"./x-DIkHBrE3.js";import"./FieldError-ClytNfPk.js";import"./Text-CJlC6srz.js";import"./Text-BwTFzJBU.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
