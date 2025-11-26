import{S as s}from"./SearchField-BRzZynTy.js";import"./iframe-7ZExgDLE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CDwK7HKb.js";import"./utils-BoXSSKyR.js";import"./useLocalizedStringFormatter-CPNOebpp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CYqlmFPu.js";import"./useFocusRing-CX-L5Kpl.js";import"./index-DwsAXc7Z.js";import"./index-eZbuALby.js";import"./useFormValidation-DgUvMbiF.js";import"./useField-BTmanUoT.js";import"./Button-DYO8g5_-.js";import"./Hidden-Ce_euZaI.js";import"./useLabels-CsqYfXZE.js";import"./useButton-DdjH6yH6.js";import"./search-C_KfiYR7.js";import"./createLucideIcon-ECDaDi6j.js";import"./Button-CxDis2kk.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BgxsfTck.js";import"./VisuallyHidden-DU8j1gfc.js";import"./x-cLdMTT66.js";import"./FieldError-DiCKIn2u.js";import"./Text-BVSLsEHx.js";import"./Text-BWmmQCxQ.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
