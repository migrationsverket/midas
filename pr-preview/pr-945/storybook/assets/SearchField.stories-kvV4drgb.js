import{S as s}from"./SearchField-BfxEP84E.js";import"./iframe-CTbPuyiZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dm0v7F1R.js";import"./utils-C6hfgLvT.js";import"./useLocalizedStringFormatter-Dq6DvKsR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cd_ogaIw.js";import"./useFocusRing-n3eJMlTT.js";import"./index-Bgxm6v1H.js";import"./index-Cu3zMLv9.js";import"./useFormValidation-B9-OiVJw.js";import"./useField-B_Z_BFtL.js";import"./Button-CNOgGNQG.js";import"./Hidden-DaJx6vxq.js";import"./useLabels-gUEAKYDn.js";import"./useButton-IIBwAU4K.js";import"./search-CZiSnIAj.js";import"./createLucideIcon-DcaVUwzg.js";import"./Button-CYxRok4a.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B364Tmw0.js";import"./VisuallyHidden-sLTk1Jd1.js";import"./x-C-6TIg3t.js";import"./FieldError-K-Xe6uTG.js";import"./Text-mSNC73zz.js";import"./Text-vMxsj9yI.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
