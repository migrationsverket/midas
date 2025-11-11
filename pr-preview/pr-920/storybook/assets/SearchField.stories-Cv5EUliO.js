import{S as s}from"./SearchField-BdHnXuAb.js";import"./iframe-C8ZRuzT6.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CET-geoU.js";import"./utils-C84SkkdT.js";import"./useLocalizedStringFormatter-a2xA8nMP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-oQYjtdLX.js";import"./useFocusRing-CFhXuih-.js";import"./index-uCHJlnyo.js";import"./index-B6Y3uvN4.js";import"./useFormValidation-B17lbehY.js";import"./useField-DsT-5LHV.js";import"./Button-DCD_n0HI.js";import"./Hidden-DgSXhjQ3.js";import"./useLabels-JokUTrF_.js";import"./useButton-cLFZH3Vu.js";import"./search-BJWvQfyV.js";import"./createLucideIcon-BgwGjT-s.js";import"./Button-Cn5XNJYk.js";import"./Button.module-CtQ1deO8.js";import"./x-CW7tLaop.js";import"./useLocalizedStringFormatter-BFisaavP.js";import"./FieldError-B5DpnWry.js";import"./Text-BXfBqZ1f.js";import"./Text-Dg-GiAXO.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,j as __namedExportsOrder,T as default};
