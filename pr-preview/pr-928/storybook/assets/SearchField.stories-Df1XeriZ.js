import{S as s}from"./SearchField-Bf3NKkG9.js";import"./iframe-5OPxOFOo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C3eWgmLl.js";import"./utils-y7VQpXmV.js";import"./useLocalizedStringFormatter-CJrXU8gl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D3hRTkk3.js";import"./useFocusRing-YAhHe-vS.js";import"./index-Bl-U2zRt.js";import"./index--CP_AI-C.js";import"./useFormValidation-Bc1me9n6.js";import"./useField-B5Gn1WPy.js";import"./Button-DwYUQnyK.js";import"./Hidden-B8S2zPTS.js";import"./useLabels-DFrgstvf.js";import"./useButton-DEtSmmrP.js";import"./search-Bz32xB5U.js";import"./createLucideIcon-DTp8xoi7.js";import"./Button-CZG4l204.js";import"./Button.module-CtQ1deO8.js";import"./x-Dh9h_nLx.js";import"./useLocalizedStringFormatter-Butfipwt.js";import"./FieldError-DsFnT5cH.js";import"./Text-LE0QZyiT.js";import"./Text-DJ8ddDqj.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
