import{S as s}from"./SearchField-C8lkzkXP.js";import"./iframe-DVDWeSF5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Ctil2qVb.js";import"./utils-CefdWjxN.js";import"./useLocalizedStringFormatter-oiapZ5Do.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C19xw80f.js";import"./useFocusRing-C2ebvpGA.js";import"./index-H87RFqBd.js";import"./index-C4utJ2sZ.js";import"./useFormValidation-BlAwaj5F.js";import"./useField-6lRi45ZF.js";import"./Button-DfCh0cjZ.js";import"./Hidden-DjqEg1Uq.js";import"./number-DfkVkf0F.js";import"./useLabels-DToHZ87d.js";import"./useButton-BrZD_KUO.js";import"./search-CdXwVmPw.js";import"./createLucideIcon-R2m_jWpB.js";import"./ClearButton-n-1DZpu6.js";import"./Button-BQ5lVkgn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B9HTUBS2.js";import"./VisuallyHidden-CKmYPJ5r.js";import"./x-Bggqb9qW.js";import"./FieldError-DwVX8OAB.js";import"./Text-DZ1HT8EB.js";import"./Text-CLyXbdox.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
