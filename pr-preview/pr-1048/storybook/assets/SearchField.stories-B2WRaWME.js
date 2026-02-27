import{S as s}from"./SearchField-C6JyMmA8.js";import"./iframe-6hgGCLw8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-yzEE9xtq.js";import"./utils-CX_zB5aR.js";import"./useLocalizedStringFormatter-DMNGX3Z_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BZxv6GTb.js";import"./useFocusRing-Cuwdf14T.js";import"./index-0RlmGZ9W.js";import"./index-I7rnJuI0.js";import"./useFormValidation-D27bsKed.js";import"./useField-DGwoxVi1.js";import"./Button-Brt9OyKK.js";import"./Hidden-z4IjskhB.js";import"./useLabels-CgnqeCaq.js";import"./useButton-DGyELYzD.js";import"./search-jU_sbQJ8.js";import"./createLucideIcon-CMqrOtBY.js";import"./ClearButton-CPFsvy0z.js";import"./Button-C-MJs-8h.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-mYRlTdsp.js";import"./VisuallyHidden-CWb-I5WH.js";import"./x-DgeoVxQW.js";import"./FieldError-i2DV-PmA.js";import"./Text-iSCx5bjD.js";import"./Text-CFTnJ3zF.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
