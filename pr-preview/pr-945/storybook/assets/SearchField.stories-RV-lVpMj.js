import{S as s}from"./SearchField-BcXnFnvp.js";import"./iframe-B0TsSvpN.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-JdOJEBqA.js";import"./utils-Cr9q3b11.js";import"./useLocalizedStringFormatter-DU6t-nF5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bq_Suotv.js";import"./useFocusRing-BgEJNMxL.js";import"./index-4peZajMB.js";import"./index-BlEvzA_t.js";import"./useFormValidation-8-0qwwnz.js";import"./useField-DMkwO024.js";import"./Button-BNNDKrj3.js";import"./Hidden-DFn3CYqd.js";import"./useLabels-CcQRsMgV.js";import"./useButton-4YKnYTOK.js";import"./search-CM6Nv4Do.js";import"./createLucideIcon-CW9WyvOy.js";import"./Button-CaiHz5_X.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-tisuuO7l.js";import"./VisuallyHidden-CzqEzZBD.js";import"./x-BCupfa-l.js";import"./FieldError-B-MRedd_.js";import"./Text-BsgSxeOt.js";import"./Text-NZFj7bgs.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
