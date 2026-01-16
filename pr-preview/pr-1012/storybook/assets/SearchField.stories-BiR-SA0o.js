import{S as s}from"./SearchField-czS2Aouc.js";import"./iframe-CJgCBOSn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ChV93gD3.js";import"./utils-g4p4NUI-.js";import"./useLocalizedStringFormatter-CP4b5mEF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CTGAYV6K.js";import"./useFocusRing-Yl6f3H1r.js";import"./index-D7z4XUKW.js";import"./index-JexUwc7G.js";import"./useFormValidation-BhcJhbtd.js";import"./useField-BIMlSPPT.js";import"./Button-CBtGc9Ub.js";import"./Hidden-ImloFknN.js";import"./useLabels-Dg-uXO6o.js";import"./useButton-Wu2FI5Vk.js";import"./search-uMgUQAvz.js";import"./createLucideIcon-Dnv4tKqV.js";import"./ClearButton-BeSJqckf.js";import"./Button-Cymdj4BH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BC67XuMA.js";import"./VisuallyHidden-lpY5sFDd.js";import"./x-C3uYOi1E.js";import"./FieldError-BvHL-L14.js";import"./Text-DWxQCZze.js";import"./Text-Dgha63Ct.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
