import{S as s}from"./SearchField-D9avk9KJ.js";import"./iframe-CORtWEK2.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CODWqK6W.js";import"./utils-CbLqdw8D.js";import"./useLocalizedStringFormatter-D5B9Cm5e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C9xxxFyO.js";import"./useFocusRing-DAHXm3rF.js";import"./index-_3IIZhOl.js";import"./index-ghFCsy_t.js";import"./useFormValidation-Al7UTscT.js";import"./useField-CdCDgYvT.js";import"./Button-BOa3LVx9.js";import"./Hidden-DFmh2KXq.js";import"./useLabels-CrPPDWzT.js";import"./useButton-C8e2jiOG.js";import"./search-DdcW5-Ht.js";import"./createLucideIcon-BjA-WVv0.js";import"./Button-By3RYRvn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-1dyltKPK.js";import"./VisuallyHidden-Bgzwemdr.js";import"./x-DYcLBvwH.js";import"./FieldError-CbdqWLzS.js";import"./Text-D9pn1aDa.js";import"./Text-qtQkisRI.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
