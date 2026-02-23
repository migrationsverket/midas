import{S as s}from"./SearchField-HeB9CfbS.js";import"./iframe-cMEgXkU9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BX5yaqFT.js";import"./utils-B3lOSj3F.js";import"./useLocalizedStringFormatter-DBj2jYWp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DkL4L2a3.js";import"./useFocusRing-CxXiz-Gm.js";import"./index-BmRYBJCP.js";import"./index-BMkS1cfA.js";import"./useFormValidation-BwIiM2rU.js";import"./useField-CD7C6WXD.js";import"./Button-yd3xuf6R.js";import"./Hidden-C5y8YolZ.js";import"./useLabels-CkaQlQl_.js";import"./useButton-BPJwIAj2.js";import"./search-j0cPPQiO.js";import"./createLucideIcon-DtfcjQlU.js";import"./ClearButton-C8FN5nk4.js";import"./Button-B1lVQr-S.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bd2ZBdeQ.js";import"./VisuallyHidden-ClFhsG2n.js";import"./x-CNFpAdsD.js";import"./FieldError-Cg9_4rDN.js";import"./Text-ltK-qi4B.js";import"./Text-oSal6G8w.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
