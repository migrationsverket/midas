import{S as s}from"./SearchField-BzzW5v6E.js";import"./iframe-ClhcDk6-.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DRXmCCw_.js";import"./useObjectRef-LpWD1ACK.js";import"./useLocalizedStringFormatter-B2NYe0Eu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DOuVabl5.js";import"./useFocusRing-DgsQxXQS.js";import"./useFocusable-15vinN74.js";import"./index-BlJ-rMVG.js";import"./index-CRZ7OKWo.js";import"./useFormValidation-B19vM6x-.js";import"./useField-CkQZEAr3.js";import"./Button-BSlJ97mj.js";import"./utils-DkVwfCPY.js";import"./Hidden-B4bEnCsb.js";import"./useLabels-OGE8ZqLn.js";import"./useButton-BRHcPL6M.js";import"./search-CJ4KAdQ4.js";import"./createLucideIcon-DOkxF0Fr.js";import"./ClearButton-CqVY3OsP.js";import"./Button-Cmr495Vm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cd9bTuDt.js";import"./VisuallyHidden-1ppoZ9c6.js";import"./x-B2X0pLHA.js";import"./FieldError-tXlATWOG.js";import"./Text-CCnFhlAG.js";import"./Text-EzA_ilFd.js";const A={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const B=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,B as __namedExportsOrder,A as default};
