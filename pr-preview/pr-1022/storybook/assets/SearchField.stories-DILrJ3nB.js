import{S as s}from"./SearchField-Cuh9TYq9.js";import"./iframe-CCE7bbwH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DRIq_96A.js";import"./utils-BVaE8NLk.js";import"./useLocalizedStringFormatter-r_KtojUx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-P-502Bm1.js";import"./useFocusRing-COIr_sUJ.js";import"./index-Dp5GmYi7.js";import"./index-aGo1ZsQs.js";import"./useFormValidation-Cqln8SK2.js";import"./useField-DXX-h2WN.js";import"./Button-lT9_7AJU.js";import"./Hidden-D5Jk713G.js";import"./useLabels-Dd7McQGF.js";import"./useButton-CI7aYhes.js";import"./search-CZfg19Y-.js";import"./createLucideIcon-Dc7mzXcy.js";import"./ClearButton-fKZ1SwZ7.js";import"./Button-Dw3HUc-4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CRJLM8ja.js";import"./VisuallyHidden-BPHyXCRO.js";import"./x-5WBMPsQp.js";import"./FieldError-CyHhaVe9.js";import"./Text-DdG9vEac.js";import"./Text-CRHS6IkK.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
