import{S as s}from"./SearchField-veOxsC2n.js";import"./iframe-CfzEJfTl.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CiYq6-kc.js";import"./utils-DMT3jteK.js";import"./useLocalizedStringFormatter-8C8un9Z1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dd5rKgIV.js";import"./useFocusRing-5mlRQFlf.js";import"./index-CMLkFNUk.js";import"./index-DlHBYD_b.js";import"./useFormValidation-arzJgOWK.js";import"./useField-gFr9eP0s.js";import"./Button-_yEl9m9t.js";import"./Hidden-CO_ry7Y6.js";import"./useLabels-DnN5Bi55.js";import"./useButton-DxBAtA7-.js";import"./search-BLLudp3x.js";import"./createLucideIcon-D2wUs9_7.js";import"./Button-qxfYGoKg.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CBKlJ1yT.js";import"./VisuallyHidden-DH1p0Y9r.js";import"./x-CIFy6nfS.js";import"./FieldError-CNWb36NS.js";import"./Text-C2N2S6jp.js";import"./Text-DMZehI1u.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
