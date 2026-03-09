import{S as s}from"./SearchField-C7ELoGlL.js";import"./iframe-izS6BN6y.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ComdA_qm.js";import"./utils-Bas1Ofad.js";import"./useLocalizedStringFormatter-DFQ1l-q1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bye0e0Vn.js";import"./useFocusRing-B6uM1GPB.js";import"./index-Clqx6h6T.js";import"./index-2wZtggJW.js";import"./useFormValidation-DUyqthVL.js";import"./useField-BtyYT5I6.js";import"./Button-DjOmw-p7.js";import"./Hidden-DxoOFtw1.js";import"./useLabels-CepOd2Z4.js";import"./useButton-nZ9At_c5.js";import"./search-BgDmgXvX.js";import"./createLucideIcon-lSEbjSVl.js";import"./ClearButton-C40URNAV.js";import"./Button-BJYTdbg5.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CiJzgYQ0.js";import"./VisuallyHidden-C7bQWUTs.js";import"./x-CSJ_lR3e.js";import"./FieldError-CJZEulkW.js";import"./Text-B6_RlQWu.js";import"./Text-CJepktCx.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
