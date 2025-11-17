import{S as s}from"./SearchField-5UnOERdC.js";import"./iframe-DAe8TR3I.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C7zn0ZYV.js";import"./utils-BjJkJaoq.js";import"./useLocalizedStringFormatter-B3jEwN9p.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-b5n4bgXL.js";import"./useFocusRing-COEuw-4k.js";import"./index-DERiSa9g.js";import"./index-CZrxflW1.js";import"./useFormValidation-DKizzSmj.js";import"./useField-CUL872KJ.js";import"./Button-Bap4iZb1.js";import"./Hidden-CuVt48UU.js";import"./useLabels-BQ0JFana.js";import"./useButton-Ds14CM6t.js";import"./search-BiB-FU1h.js";import"./createLucideIcon-BbUVc_oI.js";import"./Button-WqYefckK.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DpMm3nXz.js";import"./VisuallyHidden-Cxmbdpe5.js";import"./x-U00XHhO5.js";import"./FieldError-FomvQXyZ.js";import"./Text-C4Ukkj8G.js";import"./Text-lURboruh.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
