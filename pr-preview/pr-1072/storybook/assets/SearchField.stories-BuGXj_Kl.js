import{S as s}from"./SearchField-D9w_Isl5.js";import"./iframe-BbEdCWTo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DT2KBo_t.js";import"./utils-0gBzt-f2.js";import"./useLocalizedStringFormatter-Cfy9D9E4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C-tT76rN.js";import"./useFocusRing-B954SIvz.js";import"./index-th6eAN9q.js";import"./index-ObLB26ub.js";import"./useFormValidation-BlLsmx8B.js";import"./useField-3HP9Ota5.js";import"./Button-D-EmDY8c.js";import"./Hidden-dhoH6OsW.js";import"./useLabels-CB9mJaEq.js";import"./useButton-Brl3oMd-.js";import"./search-OQc8Jn1g.js";import"./createLucideIcon-DVbOGhvF.js";import"./ClearButton-CDllESzu.js";import"./Button-FljdEIyw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CHJJdt5x.js";import"./VisuallyHidden-Ci4G53k_.js";import"./x-uEbSzWQI.js";import"./FieldError-ClDhUf0E.js";import"./Text-UryQGSay.js";import"./Text-w6pc7bdl.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
