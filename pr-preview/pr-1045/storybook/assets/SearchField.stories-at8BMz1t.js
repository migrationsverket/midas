import{S as s}from"./SearchField-CcIlbCX7.js";import"./iframe-DAmvnAWM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BjmKk3Qz.js";import"./utils-DYzArhpk.js";import"./useLocalizedStringFormatter-B4UBrv2w.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DEbz6k8C.js";import"./useFocusRing-QsJJnFOd.js";import"./index-smKRG6Ei.js";import"./index-iQgIb4dd.js";import"./useFormValidation-BCE_H7GP.js";import"./useField-3CFuHcV3.js";import"./Button-DrLU6fB6.js";import"./Hidden-BYI0l7bh.js";import"./useLabels-xfye1LU6.js";import"./useButton-DE9dKRCV.js";import"./search-CBkhFwZo.js";import"./createLucideIcon-BXDZxBO_.js";import"./ClearButton-C4l6DFZ-.js";import"./Button-CI9p286k.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BtExqc3U.js";import"./VisuallyHidden-BneHcT7D.js";import"./x-BtpaJG07.js";import"./FieldError-CC3CownB.js";import"./Text-BHD5lpJL.js";import"./Text-CSZqV0cb.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
