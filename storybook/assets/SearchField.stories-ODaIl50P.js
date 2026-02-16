import{S as s}from"./SearchField-BgwD-aML.js";import"./iframe-Baz7hp-H.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CDtJkyNP.js";import"./utils-CjtbLxkM.js";import"./useLocalizedStringFormatter-DqxbRUdN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BZxttkmI.js";import"./useFocusRing-CA4lGYE7.js";import"./index-DJvdvGZ9.js";import"./index-EDewD6TU.js";import"./useFormValidation-BCcQtvtJ.js";import"./useField-DLevtW16.js";import"./Button-Dapo8NrY.js";import"./Hidden-oFIYqFcy.js";import"./useLabels-Cukz6TQK.js";import"./useButton-TjLWHBNo.js";import"./search-DUJbQxlR.js";import"./createLucideIcon-GOimKmMN.js";import"./ClearButton-SiH99zjs.js";import"./Button-DqFJrKR_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-wC_xJP29.js";import"./VisuallyHidden-B91vWDbG.js";import"./x-D_880TpH.js";import"./FieldError-quMvKVD1.js";import"./Text-BOruLmzb.js";import"./Text-Cyj2bmOo.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
