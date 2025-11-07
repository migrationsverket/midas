import{S as s}from"./SearchField-CU4kQsin.js";import"./iframe-DzJ58csS.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BddBMCaY.js";import"./utils-kFG7V26A.js";import"./useLocalizedStringFormatter-LbY2s3T4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D8UGdEv0.js";import"./useFocusRing-s8d5RV5A.js";import"./index-CXUZjOMB.js";import"./index-8g-wmO3w.js";import"./useFormValidation-B29-zsDb.js";import"./useField-BE4CK7tW.js";import"./Button-XpnQOI7L.js";import"./Hidden-DixvikVn.js";import"./useLabels-CqViVGd8.js";import"./useButton-Bq7QVwIk.js";import"./search-DOZ08u-C.js";import"./createLucideIcon-DY2CvNkn.js";import"./Button-DBLrduIN.js";import"./Button.module-CtQ1deO8.js";import"./x-DG_jh2y7.js";import"./useLocalizedStringFormatter-B8TFtJTY.js";import"./FieldError-F5XRq1hW.js";import"./Text-CcO9WK_c.js";import"./Text-CF12HrJc.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
