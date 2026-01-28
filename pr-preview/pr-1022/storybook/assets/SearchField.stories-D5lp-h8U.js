import{S as s}from"./SearchField-PZpo2tw3.js";import"./iframe-B4Bxc31-.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cg9KEN5b.js";import"./utils-CeZcgYm6.js";import"./useLocalizedStringFormatter-D5WpXGBK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D1gI0ZEN.js";import"./useFocusRing-BfKHzdgs.js";import"./index-C4J05Lc5.js";import"./index-DgJUXc_n.js";import"./useFormValidation-BQSgNpFd.js";import"./useField-CUKRhRws.js";import"./Button-CDG3o-tS.js";import"./Hidden-C62-4jmO.js";import"./useLabels-wF9e--1W.js";import"./useButton-CcZzD6iW.js";import"./search-CbHgkRs7.js";import"./createLucideIcon-DGUSaHO7.js";import"./ClearButton-BSeWXGyv.js";import"./Button-CN8pseCj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFzkaQ8-.js";import"./VisuallyHidden-DlEhGwXr.js";import"./x-CCZLGaNC.js";import"./FieldError-CihcasJE.js";import"./Text-r5dJNPiY.js";import"./Text-JHx8n9q1.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
