import{S as s}from"./SearchField-QOW8GdCW.js";import"./iframe-DkQ7cM23.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-nr5IMB9l.js";import"./utils-DP89l6Mv.js";import"./useLocalizedStringFormatter-BMIv7Yjf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BJBXdHfK.js";import"./useFocusRing-J1vPyQty.js";import"./index-7VbimUOa.js";import"./index-Cm61l895.js";import"./useFormValidation-Dq7frMih.js";import"./useField-m7hj4lqE.js";import"./Button-Bq2iEg50.js";import"./Hidden-CcF5EX2e.js";import"./useLabels-DSl379fi.js";import"./useButton-BmC4cDXT.js";import"./search-DWx5KoR-.js";import"./createLucideIcon-DkseUJ3l.js";import"./ClearButton-Cb0swx7L.js";import"./x-CkWkpKml.js";import"./Button-rAjKvaV6.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C95F42C0.js";import"./VisuallyHidden-DiP98uOJ.js";import"./FieldError-BqQ6odJM.js";import"./Text-mqMgoxWe.js";import"./Text-DsOkgq9m.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
