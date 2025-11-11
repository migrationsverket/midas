import{S as s}from"./SearchField-CtcxkFpN.js";import"./iframe-C1S3UI0q.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BU5hH7Ch.js";import"./utils-DDXHsTpT.js";import"./useLocalizedStringFormatter-CL1671By.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Brj-Uyqu.js";import"./useFocusRing-CyRIiSHy.js";import"./index-DtMwqg1W.js";import"./index-9q-9abAX.js";import"./useFormValidation-0n95bcz8.js";import"./useField-BDCXh-qT.js";import"./Button-iogE4gXn.js";import"./Hidden-BJe1Vr5O.js";import"./useLabels-zIJcgfCF.js";import"./useButton-Ca4j2v7e.js";import"./search-cgeN7FbW.js";import"./createLucideIcon-B-9b73Xu.js";import"./Button-BJgkfWbj.js";import"./Button.module-CtQ1deO8.js";import"./x-392Zn0gg.js";import"./useLocalizedStringFormatter-DAqU679A.js";import"./FieldError-B79tkzHr.js";import"./Text-DHpcpzXZ.js";import"./Text-BWJL7Gm8.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
