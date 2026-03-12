import{S as s}from"./SearchField-Cu6siGY2.js";import"./iframe-DZFoTsAP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DdgMtiiZ.js";import"./utils-BgDH_W4s.js";import"./useLocalizedStringFormatter-DXt9zP7M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Wf556nwc.js";import"./useFocusRing-BOfY4fHs.js";import"./index-C0QzEn7-.js";import"./index-qTuN-RN1.js";import"./useFormValidation--RUuo-EK.js";import"./useField-Dc6XDZOx.js";import"./Button-DXuM91n-.js";import"./Hidden-CfeWKfQs.js";import"./useLabels-5V9A1z8O.js";import"./useButton-DlimN8Sl.js";import"./search-DSMnq5sZ.js";import"./createLucideIcon-D8OPAh1o.js";import"./ClearButton-0cMA_SoF.js";import"./x-CLiDVpMP.js";import"./Button-DrMZqG88.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BFv7ZkAg.js";import"./VisuallyHidden-CsEimcih.js";import"./FieldError-CDqVsYjk.js";import"./Text-CDyd3dUQ.js";import"./Text-BTLpICHy.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
