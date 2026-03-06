import{S as s}from"./SearchField-C08bk0Nq.js";import"./iframe-BQhS1Nl-.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DF0fFfyv.js";import"./utils-DX-1lbRH.js";import"./useLocalizedStringFormatter-B1JkIDRF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BRi9-jgA.js";import"./useFocusRing-C7eLc3ua.js";import"./index-BaCUsZ-2.js";import"./index-DPBbUFQF.js";import"./useFormValidation-Yft9brF2.js";import"./useField-CGoqZBDN.js";import"./Button-Dr48bfBY.js";import"./Hidden-XO9eD8nd.js";import"./useLabels-DSkvQYsZ.js";import"./useButton-28B5gFXv.js";import"./search-BKN1u9cv.js";import"./createLucideIcon-DJtzdfmE.js";import"./ClearButton-DklIQQpD.js";import"./Button-DJ5OBxjs.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BsVfwROU.js";import"./VisuallyHidden-DxSkEFyH.js";import"./x-CxrMIGYH.js";import"./FieldError-CJdO8pv6.js";import"./Text-tc6oiTHM.js";import"./Text-C6md5qJ5.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
