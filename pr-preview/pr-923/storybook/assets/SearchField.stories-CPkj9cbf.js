import{S as s}from"./SearchField-BSlcFSQq.js";import"./iframe-CuNlhVbe.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-5ENUpcQW.js";import"./utils-B8NVfSfe.js";import"./useLocalizedStringFormatter-DYbPbioc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BBbhz2V_.js";import"./useFocusRing-wXiAEqmT.js";import"./index-DV8HCzUV.js";import"./index-CXWed7tA.js";import"./useFormValidation-DVvRwfTA.js";import"./useField-D6kOKrFi.js";import"./Button-DiUERCEo.js";import"./Hidden-l86ZZb_o.js";import"./useLabels-vXYiQgPh.js";import"./useButton-MVrmgZI_.js";import"./search-BxrVfEFz.js";import"./createLucideIcon-TK9FCAYu.js";import"./Button-g0PWpBa7.js";import"./Button.module-CtQ1deO8.js";import"./x-CccK87QT.js";import"./useLocalizedStringFormatter-DWEhKcFp.js";import"./FieldError-CTY2IPpm.js";import"./Text-D8GREq1L.js";import"./Text-BvIukjwj.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
