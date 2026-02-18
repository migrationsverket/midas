import{S as s}from"./SearchField-f7FiKHcV.js";import"./iframe-CjheOyM5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BFDK1kJU.js";import"./utils-GJab0JjV.js";import"./useLocalizedStringFormatter-Bb6KJ9HR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DFpwerb-.js";import"./useFocusRing-BQBU-xxB.js";import"./index-BdSERe24.js";import"./index-CQFCXopn.js";import"./useFormValidation-DkzOoVjE.js";import"./useField-Bj94Kh8V.js";import"./Button-BEfApAj7.js";import"./Hidden-fPTMSZG1.js";import"./useLabels-CB9GaZKC.js";import"./useButton-BK6j3-_O.js";import"./search-duf1AwAh.js";import"./createLucideIcon-D7R3LjHD.js";import"./ClearButton-cZd4oERW.js";import"./Button-D6LrA16i.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-o8VSdvfs.js";import"./VisuallyHidden-BkQsNkQj.js";import"./x-DXoGLFAv.js";import"./FieldError-CtzgHxZv.js";import"./Text-CyPeEhZq.js";import"./Text-DfjK2rvS.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
