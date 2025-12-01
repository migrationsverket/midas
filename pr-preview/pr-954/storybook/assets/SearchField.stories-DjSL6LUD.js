import{S as s}from"./SearchField-HaOzUK3b.js";import"./iframe-D3BUIA8t.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BvkD_Bv4.js";import"./utils-BRlrr6bM.js";import"./useLocalizedStringFormatter-BBFFW8CZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dvicwip1.js";import"./useFocusRing-Dmx1Rf0M.js";import"./index-BNf-lxYJ.js";import"./index-CUuStiOA.js";import"./useFormValidation-CBZTCHh6.js";import"./useField-B4KHEMc0.js";import"./Button-DFQM0Ftj.js";import"./Hidden-CYJ4paUC.js";import"./useLabels-BWXlsqMn.js";import"./useButton-BbUvFvwo.js";import"./search-CnBe9HQZ.js";import"./createLucideIcon-hvTt_6n0.js";import"./Button-B4PrgER1.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dt6krr6e.js";import"./VisuallyHidden-ib62HETz.js";import"./x-CXeE-P16.js";import"./FieldError-SCOyZSTv.js";import"./Text-C-eelpHs.js";import"./Text-Dp3wKR2d.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
