import{S as s}from"./SearchField-CocsJRlG.js";import"./iframe-9863yx6x.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dbpms77R.js";import"./utils-BhQ3vlj8.js";import"./useLocalizedStringFormatter-B_pYp1kt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-tbhdJosq.js";import"./useFocusRing-Ce48MUY0.js";import"./index-DLd0rQU9.js";import"./index-hIuVGS0q.js";import"./useFormValidation-eTAg9DIf.js";import"./useField-BIJ2mXP4.js";import"./Button-teT3EZQp.js";import"./Hidden-Cu3qX2yN.js";import"./useLabels-CYasyUGC.js";import"./useButton-CsKKQAqC.js";import"./search-Ba31oF_M.js";import"./createLucideIcon-DoFpQJ8A.js";import"./Button-CX3flpTi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DKcIukCd.js";import"./VisuallyHidden-wlBhk09R.js";import"./x-DcJaNkiM.js";import"./FieldError-BVSywb3B.js";import"./Text-DtjOYwSN.js";import"./Text-xbHrSl7O.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,q as __namedExportsOrder,j as default};
