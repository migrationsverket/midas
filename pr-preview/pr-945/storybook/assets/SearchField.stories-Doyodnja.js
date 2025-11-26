import{S as s}from"./SearchField-DRKsPO97.js";import"./iframe-IjzrHHNv.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CNtbpmwP.js";import"./utils-CODsTHLU.js";import"./useLocalizedStringFormatter-CXKVQPJR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-xb8JptP9.js";import"./useFocusRing-BZeMGEJ-.js";import"./index-D4Wmkx7i.js";import"./index-Bx7zkVbj.js";import"./useFormValidation-Dcu2uaUl.js";import"./useField-Dlw4FN-O.js";import"./Button-C3uIaOSh.js";import"./Hidden-3HVx6IyU.js";import"./useLabels-BF_CgXn-.js";import"./useButton-BpNajOCa.js";import"./search-Dk7W_nLs.js";import"./createLucideIcon-ILFWgvoA.js";import"./Button-sMqW8jOV.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Zy7JvKDD.js";import"./VisuallyHidden-QGHASBvs.js";import"./x-eAOmc7wb.js";import"./FieldError-cOUBxcF_.js";import"./Text-Du-4Iq6e.js";import"./Text-CYvKHqQ5.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
