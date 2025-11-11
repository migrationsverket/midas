import{S as s}from"./SearchField-C3iaO5l_.js";import"./iframe-BeJPD2Jp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CZvvuTz-.js";import"./utils-BpIJhypm.js";import"./useLocalizedStringFormatter-DuRn0SfR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B85pSnNy.js";import"./useFocusRing-CLGhCKjv.js";import"./index-JqGGRrpw.js";import"./index-CXJhLQb9.js";import"./useFormValidation-B2xTmI-k.js";import"./useField-N9IMh1qZ.js";import"./Button-CGyLqL0c.js";import"./Hidden-CGcuCzCB.js";import"./useLabels-CNJMsTyt.js";import"./useButton-DDAnbrF0.js";import"./search-EUD5FYJ2.js";import"./createLucideIcon-Dmy1Sgq2.js";import"./Button-D-cnYlNa.js";import"./Button.module-CtQ1deO8.js";import"./x-ZGlTQmlt.js";import"./useLocalizedStringFormatter-mZt4FMih.js";import"./FieldError-YrbO0l8y.js";import"./Text-BYzE9U21.js";import"./Text-CzOdhV2l.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,j as __namedExportsOrder,T as default};
