import{S as s}from"./SearchField-JAHg6S4J.js";import"./iframe-DLM7OJJC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B4ZGdE6T.js";import"./utils-Cg8VeQnF.js";import"./useLocalizedStringFormatter-De_gwEZD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CM634RkI.js";import"./useFocusRing-BfFb_8Xs.js";import"./index-C6cGHGyr.js";import"./index-VUDeKwzR.js";import"./useFormValidation-A4eZ-XSk.js";import"./useField-BqYJVQFT.js";import"./Button-CBWZM7hn.js";import"./Hidden-sRnIF3aJ.js";import"./useLabels-vojnNhU5.js";import"./useButton-CFLlN0xE.js";import"./search-BxOaUjSu.js";import"./createLucideIcon-5PLI4glS.js";import"./Button-D3MIvMYJ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZBSwjU5.js";import"./VisuallyHidden-CvL4kn3L.js";import"./x-BrX8Cp6W.js";import"./FieldError-CwZhaUl8.js";import"./Text-Dr_1HWjJ.js";import"./Text-DWcHOJVH.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
