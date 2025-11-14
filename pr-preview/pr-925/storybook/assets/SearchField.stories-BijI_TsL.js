import{S as s}from"./SearchField-ySEJKL1T.js";import"./iframe-vngjZ-4P.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-TuR8R_1y.js";import"./utils-DHeliekZ.js";import"./useLocalizedStringFormatter-CZE4fUbg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ce0jxjTv.js";import"./useFocusRing-DUbxX868.js";import"./index-CvXFvuDV.js";import"./index-ukHcnXjJ.js";import"./useFormValidation-CWTit8yj.js";import"./useField-IYEadwcm.js";import"./Button-BC9sg2r9.js";import"./Hidden-Bz5znElO.js";import"./useLabels-se4Xxikx.js";import"./useButton-Dc_1rKgZ.js";import"./search-Bt2B_gpB.js";import"./createLucideIcon-CJOpBfq1.js";import"./Button-fRzOyLJW.js";import"./Button.module-CtQ1deO8.js";import"./x-dukuuXlu.js";import"./useLocalizedStringFormatter-CsTZX4GC.js";import"./FieldError-DztSinTd.js";import"./Text-BbKxmc2D.js";import"./Text-By4ps0no.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
