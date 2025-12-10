import{S as s}from"./SearchField-ivcypfQk.js";import"./iframe-rZSXM0eC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cj9hNixb.js";import"./utils-CoXmV-kq.js";import"./useLocalizedStringFormatter-BguK_3zR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Def1w6YL.js";import"./useFocusRing-DLR1K1QN.js";import"./index-BYjFf690.js";import"./index-BIlXx4dX.js";import"./useFormValidation-CVb2K6js.js";import"./useField-UIh3bbQ2.js";import"./Button-BI9OLJBe.js";import"./Hidden-CkS_PPul.js";import"./useLabels-CSFhnw6H.js";import"./useButton-BLxitDUj.js";import"./search-g2KlkeT-.js";import"./createLucideIcon-D5ASq0Cm.js";import"./Button-fbKI_IfZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ddfk2Acf.js";import"./VisuallyHidden-9EaIoABp.js";import"./x-B8mBVLmL.js";import"./FieldError-C2QK88J2.js";import"./Text-emOnGTp7.js";import"./Text-BOwlJhSq.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
