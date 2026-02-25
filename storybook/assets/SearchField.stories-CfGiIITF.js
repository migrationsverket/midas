import{S as s}from"./SearchField-DDLc5ung.js";import"./iframe-BMRKkr6e.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CtWZRpAk.js";import"./utils-B-Wd4T21.js";import"./useLocalizedStringFormatter-DHdUL6pM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-9U_j3L1E.js";import"./useFocusRing-CUJDhn4b.js";import"./index-DC2q9WHS.js";import"./index-DM5nM3xE.js";import"./useFormValidation-D3ipRiab.js";import"./useField-BYylXV7g.js";import"./Button-Dhgmb7a4.js";import"./Hidden-l6G7bJI-.js";import"./useLabels-LcBHp2R_.js";import"./useButton-Dx2DQTbk.js";import"./search-DucZNtRG.js";import"./createLucideIcon-DZqSyMAm.js";import"./ClearButton-EdHhzL9w.js";import"./Button-8LMnIdeM.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DwRrqd4W.js";import"./VisuallyHidden-ul3GEQ14.js";import"./x-D17aNKNC.js";import"./FieldError-CYoJn7Ex.js";import"./Text-Dwlww6gP.js";import"./Text-yRvyJMt7.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
