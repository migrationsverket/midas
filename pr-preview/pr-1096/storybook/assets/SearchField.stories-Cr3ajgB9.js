import{S as s}from"./SearchField-DBNqSo3J.js";import"./iframe-CVrVLVvE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CFHykN0p.js";import"./utils-BQ4eCaf5.js";import"./useLocalizedStringFormatter-tPqq8kYp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C4H8ISw3.js";import"./useFocusRing-CcC1WvlX.js";import"./index-BwMrQiTV.js";import"./index-Cf_el0h6.js";import"./useFormValidation-BP40jjcD.js";import"./useField-CLV8HXdk.js";import"./Button-DKh6gE9A.js";import"./Hidden-Dy9iPVZJ.js";import"./useLabels-DIC4GUAu.js";import"./useButton-gbPJhBj_.js";import"./search-BIBCBAIz.js";import"./createLucideIcon-vz5WAnkp.js";import"./ClearButton-CXG0lWds.js";import"./Button-CzwXcWRm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CZN-mYff.js";import"./VisuallyHidden-3CXgcY_E.js";import"./x-Bjcmx8lF.js";import"./FieldError-QAxLbE52.js";import"./Text-HjnVJGnN.js";import"./Text-Btrte15F.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
