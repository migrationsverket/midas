import{S as s}from"./SearchField-BLxRoS4w.js";import"./iframe-CRoNsbQO.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dj6nb6WC.js";import"./utils-D0ifQBPW.js";import"./useLocalizedStringFormatter-DvLKTy1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CLTb00Yl.js";import"./useFocusRing-DQkUJ1am.js";import"./index-DMJTdnmZ.js";import"./index-D3s2XdJN.js";import"./useFormValidation-Bf5gX9Wk.js";import"./useField-kdvN3WE1.js";import"./Button-km7jXYEC.js";import"./Hidden-B-LzNKej.js";import"./useLabels-BhNZU1Aw.js";import"./useButton-QNz5bkbl.js";import"./search-Cvcr0hwr.js";import"./createLucideIcon-DIDS4uVQ.js";import"./Button-DGaMX184.js";import"./Button.module-CtQ1deO8.js";import"./x-BOdTfTaA.js";import"./useLocalizedStringFormatter-CXNQgKhO.js";import"./FieldError-Dj5cdKz5.js";import"./Text-CAsCU6A1.js";import"./Text-CrBpTqh-.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
