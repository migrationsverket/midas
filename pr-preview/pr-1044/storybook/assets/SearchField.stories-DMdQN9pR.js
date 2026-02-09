import{S as s}from"./SearchField-C_nDjqPB.js";import"./iframe-c0lnwIw4.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BiOg0pOd.js";import"./utils-CKxPVGJv.js";import"./useLocalizedStringFormatter-BFGWbxP6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CC8vVeT1.js";import"./useFocusRing-DJjkQoU4.js";import"./index-B1hzWEWI.js";import"./index-DjCW-TlU.js";import"./useFormValidation-BTtRPMAF.js";import"./useField-rzQ8CQUh.js";import"./Button-DJS_LvWc.js";import"./Hidden-BDS_rwuq.js";import"./useLabels-Bl4EQLSq.js";import"./useButton-CVyNe4Wj.js";import"./search-C9VaoIe6.js";import"./createLucideIcon-X-I_ue95.js";import"./ClearButton-BwCUr328.js";import"./Button-C8YLXKEl.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DQGhBMx9.js";import"./VisuallyHidden-B6dXGLX8.js";import"./x-C52Idzcm.js";import"./FieldError-BbrhXxES.js";import"./Text-VyJc00c9.js";import"./Text-BgxEb-sb.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
