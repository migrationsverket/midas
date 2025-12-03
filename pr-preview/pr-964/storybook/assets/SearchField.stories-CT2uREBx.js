import{S as s}from"./SearchField-CJCo9D1u.js";import"./iframe-DAWhaW2t.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-y8wjQEhG.js";import"./utils-BR5sLtXt.js";import"./useLocalizedStringFormatter-Bud54IOx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DLzrNh7c.js";import"./useFocusRing-BovWNloU.js";import"./index-D684xh88.js";import"./index-domxwQpS.js";import"./useFormValidation-DvW8pyhT.js";import"./useField-DSvnQz-g.js";import"./Button-B8FC0WHw.js";import"./Hidden-B7a6sUEi.js";import"./useLabels-CwJrZ3kb.js";import"./useButton-Df4qwn4n.js";import"./search-B-fLR3Hj.js";import"./createLucideIcon-DPsPtM0A.js";import"./Button-B_JidUJl.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DGsrEw_W.js";import"./VisuallyHidden-z0IVTDH3.js";import"./x-GRNLuSgY.js";import"./FieldError-Ba9bdy0b.js";import"./Text-D2IArQsC.js";import"./Text-CgRVAj4B.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
