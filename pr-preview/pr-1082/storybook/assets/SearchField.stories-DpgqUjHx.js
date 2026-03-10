import{S as s}from"./SearchField-D-cFjekx.js";import"./iframe-D4qwi5aS.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BpYdNZzj.js";import"./utils-B-Nz338F.js";import"./useLocalizedStringFormatter-BblBLaNa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CGSVZqvT.js";import"./useFocusRing-6dU2HUqL.js";import"./index-BCxIJmj3.js";import"./index-CRmVn8Hv.js";import"./useFormValidation-VS44UaCw.js";import"./useField-CemwzZhq.js";import"./Button-Da-DtFCd.js";import"./Hidden-CM9pZ1fW.js";import"./useLabels-Cj7LPX5i.js";import"./useButton-7Tej6Dr7.js";import"./search-DQFYotEs.js";import"./createLucideIcon-hD68kNPm.js";import"./ClearButton-B7tvEAga.js";import"./Button-BtMm2W3M.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-9LC131sM.js";import"./VisuallyHidden-bcnkwpD1.js";import"./x-CiO824Qj.js";import"./FieldError-COTYRssi.js";import"./Text-0C5O0r7x.js";import"./Text-C5mfap0J.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
