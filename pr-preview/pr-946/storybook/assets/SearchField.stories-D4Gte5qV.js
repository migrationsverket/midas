import{S as s}from"./SearchField-Lp_Kyf-2.js";import"./iframe-Dt8qGcj0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BVoQcIBV.js";import"./utils-DzGpUwDk.js";import"./useLocalizedStringFormatter-MwenM1Zt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DaeeG-_s.js";import"./useFocusRing-B8EF88pa.js";import"./index-D45MIj80.js";import"./index-yXKLMRgP.js";import"./useFormValidation-PwxkFn_k.js";import"./useField-B0YzA3FQ.js";import"./Button-CjJiJTes.js";import"./Hidden-BXZBrSDT.js";import"./useLabels-DoBVCtRz.js";import"./useButton-CXsFy5nf.js";import"./search-DQ8zKqJJ.js";import"./createLucideIcon-CzMrI8-b.js";import"./Button-CoCyWkmo.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DHyFRBkx.js";import"./VisuallyHidden-DqAUfebe.js";import"./x-BKRVh5LC.js";import"./FieldError-Boq0AlWn.js";import"./Text-BFMlzHdv.js";import"./Text-DXvquVL7.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
