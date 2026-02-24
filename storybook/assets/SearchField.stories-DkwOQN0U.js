import{S as s}from"./SearchField-BaBqvyfV.js";import"./iframe-DJxIXxf2.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C1p1aY8E.js";import"./utils-B_KlqI5i.js";import"./useLocalizedStringFormatter-BJvVBtx8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CqOvbwYV.js";import"./useFocusRing-COgDf2QV.js";import"./index-B08RvMtD.js";import"./index-QDuJYXlY.js";import"./useFormValidation-IBNADZfB.js";import"./useField-BXl4tVWh.js";import"./Button-CIL_abe4.js";import"./Hidden-DoMNzo3F.js";import"./useLabels-B8ZHiySF.js";import"./useButton-CDOgKioF.js";import"./search-Cd-25d48.js";import"./createLucideIcon-82x2wRy4.js";import"./ClearButton-YSTS1T_q.js";import"./Button-YUjToJ3r.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CBcMRp9p.js";import"./VisuallyHidden-fBTKN9Mv.js";import"./x-Bp5hmktp.js";import"./FieldError-DYGSUEKV.js";import"./Text--wP8bLIY.js";import"./Text-fN96k5_K.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
