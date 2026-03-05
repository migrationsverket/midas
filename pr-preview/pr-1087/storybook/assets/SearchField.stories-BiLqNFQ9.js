import{S as s}from"./SearchField-CHrmmqtb.js";import"./iframe-DZcdf5IT.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-vKZEA0Q3.js";import"./utils-CiNm3Qeg.js";import"./useLocalizedStringFormatter-BvvnikhE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BntTv2Qi.js";import"./useFocusRing-D7vWP6Oc.js";import"./index-D2C9G4F0.js";import"./index-CZ7e-jOg.js";import"./useFormValidation-nGNEbK2Q.js";import"./useField-DhXwoamE.js";import"./Button-CLvrgtgS.js";import"./Hidden-iA_GYfuG.js";import"./useLabels-CS1CNfia.js";import"./useButton-CzqG6NzO.js";import"./search-DbzQX0_D.js";import"./createLucideIcon-DZnqfe9t.js";import"./ClearButton-CGhBcBwi.js";import"./Button-BczSxBEC.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BcqTdo_g.js";import"./VisuallyHidden-BXj8zTTi.js";import"./x-kt49nsQj.js";import"./FieldError-DM82MGqL.js";import"./Text-Cr9EbC1Z.js";import"./Text-C3ytoZ0p.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
