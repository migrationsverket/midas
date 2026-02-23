import{S as s}from"./SearchField-YlI2HTIz.js";import"./iframe-NgsVAIE_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C2hVvUOR.js";import"./utils-BMRDwiWU.js";import"./useLocalizedStringFormatter-CJOjjMB1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-EB-x8h0m.js";import"./useFocusRing-B3_Fq29Y.js";import"./index-DYQAdzyg.js";import"./index-DXaepPOW.js";import"./useFormValidation-C3jZc8Ny.js";import"./useField-C4md05ju.js";import"./Button-DTzo6E9X.js";import"./Hidden-CQtKkbQ1.js";import"./useLabels-DCVajOwk.js";import"./useButton-Br4NZV8a.js";import"./search-5UIBLuLo.js";import"./createLucideIcon-DNjUyKXr.js";import"./ClearButton-CU3f6PYO.js";import"./Button-CsUdCrvJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_7PwgqK.js";import"./VisuallyHidden-CrY5FCAN.js";import"./x-DXvbv7Kd.js";import"./FieldError-BYJgixQA.js";import"./Text-nv-IhAMW.js";import"./Text-CLMs0khC.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
