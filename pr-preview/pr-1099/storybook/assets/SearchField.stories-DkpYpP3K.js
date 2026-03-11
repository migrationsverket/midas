import{S as s}from"./SearchField-Csj94IEa.js";import"./iframe-DnruN8Hi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BjH9byFR.js";import"./utils-BX8UrSvi.js";import"./useLocalizedStringFormatter-CClWoe23.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-GVtC83pY.js";import"./useFocusRing-CIcdEl5_.js";import"./index-pkhbjMNc.js";import"./index-D9PIboWj.js";import"./useFormValidation-CDj0Szad.js";import"./useField-pLHgFybq.js";import"./Button-DqyDElzI.js";import"./Hidden-BPKBd4kU.js";import"./useLabels-CTW32vH1.js";import"./useButton-vQ4A074D.js";import"./search-D-aBzbk5.js";import"./createLucideIcon-Bmpp_QRu.js";import"./ClearButton-DXTvjjy3.js";import"./Button-DqZTSrsn.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-y9TFNf60.js";import"./VisuallyHidden-G4dK4wUP.js";import"./x-DJw_asIB.js";import"./FieldError-CR8f1e8f.js";import"./Text-DCNJHhrE.js";import"./Text-CtjP_E78.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
