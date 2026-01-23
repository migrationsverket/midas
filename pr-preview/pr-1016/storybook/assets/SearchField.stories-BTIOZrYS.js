import{S as s}from"./SearchField-D1RRMiUd.js";import"./iframe-BAYQ7wPm.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BcBrR0N6.js";import"./utils-B8pynThE.js";import"./useLocalizedStringFormatter-Bcu9SfMx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-IrN9QBJc.js";import"./useFocusRing-CL1JgRkg.js";import"./index-BzHN4zRj.js";import"./index-DgHNcNqv.js";import"./useFormValidation-CBGAQwe2.js";import"./useField-C6VONpWL.js";import"./Button-DaxR4XlV.js";import"./Hidden-HP5fIGu5.js";import"./useLabels-DjtSinuU.js";import"./useButton-butUTOni.js";import"./search-57Nvymgh.js";import"./createLucideIcon-BCpEwjBi.js";import"./ClearButton-B6UGZq8H.js";import"./Button-nEHC_YIx.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BkiQvC4b.js";import"./VisuallyHidden-Bku1biRk.js";import"./x-Cnwr1QDl.js";import"./FieldError-CfAJu8nC.js";import"./Text-C4XWfuMR.js";import"./Text-CVc5K2oN.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
