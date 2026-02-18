import{S as s}from"./SearchField-BVfPoY2D.js";import"./iframe-D9H9xcS2.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Db-wpj-x.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CAi_EPd5.js";import"./utils-fDye7Hn-.js";import"./useLocalizedStringFormatter-CC37Fr-A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BCyNkiM7.js";import"./useFocusRing-Ceh5Z1MC.js";import"./index-BnIUjihK.js";import"./index-BmeqR-Yx.js";import"./useFormValidation-B3qtubIU.js";import"./useField-CqvzVwOJ.js";import"./Button-Dy6Jv4XA.js";import"./Hidden-DbKUAskx.js";import"./useLabels-B07HLygv.js";import"./useButton-DlcBDUmj.js";import"./search-DuVoGDxl.js";import"./createLucideIcon-mT-ajzIy.js";import"./ClearButton-DsGUv7LJ.js";import"./Button-DGBu_aXN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DJEgiUI-.js";import"./VisuallyHidden-C7ARzOYG.js";import"./x-DeuWguVB.js";import"./FieldError-CVRuJPZY.js";import"./Text-CVrEtWWi.js";import"./Text-Dg1l2GcJ.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
