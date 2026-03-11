import{S as s}from"./SearchField-D7_HNMKI.js";import"./iframe-BULWFXB5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BW5BQp7c.js";import"./utils-BypaegC2.js";import"./useLocalizedStringFormatter-Eb1GNK_U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CpWqU1eE.js";import"./useFocusRing-BQjr63hK.js";import"./index-Bq_n1hpv.js";import"./index-CB-9tr3l.js";import"./useFormValidation-BnhRbTsd.js";import"./useField-Da10gebg.js";import"./Button-DlgELQyz.js";import"./Hidden-iwjRZV6c.js";import"./useLabels-CYw97kiM.js";import"./useButton-CjhJKsMh.js";import"./search-k4zNrj8o.js";import"./createLucideIcon-Ch4Yrygv.js";import"./ClearButton-DA00wPdL.js";import"./Button-DuCjaiZE.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B5QzfwUv.js";import"./VisuallyHidden-D8sOhpgS.js";import"./x-oHK0ncrQ.js";import"./FieldError-C4OBGurV.js";import"./Text--sxnixpG.js";import"./Text-DuTR7tq0.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
