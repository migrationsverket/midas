import{S as s}from"./SearchField-CnSnwZnb.js";import"./iframe-BLfzYH9C.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BRpuf71A.js";import"./utils-D0dfH4vr.js";import"./useLocalizedStringFormatter-Cc04N7q5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CE_JM4y7.js";import"./useFocusRing-F01J-ZUp.js";import"./index-BEL0ZsXZ.js";import"./index-DhCXTl7z.js";import"./useFormValidation-YSQ6LHA7.js";import"./useField-DKtJjQd8.js";import"./Button-CMX4o17j.js";import"./Hidden-N269CFB0.js";import"./useLabels-Wx4YnUYv.js";import"./useButton-Bx_5EIaY.js";import"./search-DnVi2RWq.js";import"./createLucideIcon-CD_jUR-R.js";import"./ClearButton-CZ5y_Yw5.js";import"./x-C-j_grLj.js";import"./Button-sSCuqLNu.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-mYyUkQYg.js";import"./VisuallyHidden-_5qjtK7j.js";import"./FieldError-BSEuC_KV.js";import"./Text-Cc2e18q6.js";import"./Text-56NGX4CE.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
