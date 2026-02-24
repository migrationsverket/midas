import{S as s}from"./SearchField-DF59vKoo.js";import"./iframe-DNgg1FE8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ExeGoWkK.js";import"./utils-lRZrmkjH.js";import"./useLocalizedStringFormatter-EtebeTvl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CjofCIp7.js";import"./useFocusRing-CtOEjHAH.js";import"./index-Cg_stJjE.js";import"./index-cpnsubof.js";import"./useFormValidation-cbENDbea.js";import"./useField-BxBjhEaP.js";import"./Button-Bmthtb1S.js";import"./Hidden-Or6zpinA.js";import"./useLabels-CUObwPbj.js";import"./useButton-CnjVfFKX.js";import"./search-Cbnf6y9E.js";import"./createLucideIcon-DUJhs-7-.js";import"./ClearButton-BYYWpD4-.js";import"./Button-CbrDss5c.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Tx6NcEdu.js";import"./VisuallyHidden-a7cFrZVC.js";import"./x-Hdk-5QGi.js";import"./FieldError-DQujyZQl.js";import"./Text-DyjqY5so.js";import"./Text-CIh1-RrY.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
